import { createHmac, timingSafeEqual } from "node:crypto";
import express, { Router } from "express";
import type { ResultSetHeader } from "mysql2";
import mysql from "mysql2/promise";
import { z } from "zod";

export const LIVING_IN_FREQUENCY_SLUG = "living-in-frequency";
export const RESOURCE_LIST_CONSENT_STATEMENT =
  "Yes, I would like to receive future WellBeingFem resources and occasional updates by email. I can unsubscribe at any time.";

const resourceRequestSchema = z.object({
  resourceSlug: z.literal(LIVING_IN_FREQUENCY_SLUG),
  firstName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(320).transform(value => value.toLowerCase()),
});

const resourceConsentSchema = z.object({
  requestToken: z.string().min(1).max(256),
  consent: z.literal(true),
});

export type ResourceRequestInput = z.infer<typeof resourceRequestSchema>;

export interface ResourceRepository {
  createRequest(input: ResourceRequestInput): Promise<number>;
  createConsent(input: {
    requestId: number;
    resourceSlug: typeof LIVING_IN_FREQUENCY_SLUG;
    consentStatement: typeof RESOURCE_LIST_CONSENT_STATEMENT;
  }): Promise<boolean>;
}

let pool: mysql.Pool | null = null;

function getPool() {
  if (pool) return pool;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("Database connection is unavailable");
  }

  pool = mysql.createPool({
    uri: databaseUrl,
    connectionLimit: 4,
    enableKeepAlive: true,
  });
  return pool;
}

export function createMysqlResourceRepository(): ResourceRepository {
  return {
    async createRequest(input) {
      const [result] = await getPool().execute<ResultSetHeader>(
        "INSERT INTO resource_requests (resource_slug, first_name, email) VALUES (?, ?, ?)",
        [input.resourceSlug, input.firstName, input.email],
      );
      return result.insertId;
    },

    async createConsent(input) {
      const [result] = await getPool().execute<ResultSetHeader>(
        `INSERT INTO resource_email_consents (request_id, first_name, email, consent_statement)
         SELECT id, first_name, email, ?
         FROM resource_requests
         WHERE id = ? AND resource_slug = ?`,
        [input.consentStatement, input.requestId, input.resourceSlug],
      );
      return result.affectedRows === 1;
    },
  };
}

function signRequestId(requestId: number, secret: string) {
  const signature = createHmac("sha256", secret).update(String(requestId)).digest("base64url");
  return `${requestId}.${signature}`;
}

function verifyRequestToken(token: string, secret: string) {
  const [requestIdText, suppliedSignature] = token.split(".");
  const requestId = Number(requestIdText);
  if (!Number.isSafeInteger(requestId) || requestId <= 0 || !suppliedSignature) return null;

  const expectedSignature = createHmac("sha256", secret)
    .update(String(requestId))
    .digest("base64url");
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;
  return requestId;
}

export function createResourceApiRouter(options?: {
  repository?: ResourceRepository;
  signingSecret?: string;
}) {
  const router = Router();
  const repository = options?.repository ?? createMysqlResourceRepository();
  const signingSecret = options?.signingSecret ?? process.env.JWT_SECRET ?? "";

  router.use(express.json({ limit: "12kb" }));

  router.post("/request", async (req, res) => {
    const parsed = resourceRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Please enter a valid first name and email address." });
    }
    if (!signingSecret) {
      return res.status(503).json({ error: "The resource request service is temporarily unavailable." });
    }

    try {
      const requestId = await repository.createRequest(parsed.data);
      return res.status(201).json({ requestToken: signRequestId(requestId, signingSecret) });
    } catch (error) {
      console.error("[resource-request] Unable to store request", error);
      return res.status(500).json({ error: "We could not prepare the guide. Please try again." });
    }
  });

  router.post("/consent", async (req, res) => {
    const parsed = resourceConsentSchema.safeParse(req.body);
    if (!parsed.success || !signingSecret) {
      return res.status(400).json({ error: "Please actively select the consent checkbox first." });
    }

    const requestId = verifyRequestToken(parsed.data.requestToken, signingSecret);
    if (!requestId) {
      return res.status(400).json({ error: "This resource request could not be verified." });
    }

    try {
      const stored = await repository.createConsent({
        requestId,
        resourceSlug: LIVING_IN_FREQUENCY_SLUG,
        consentStatement: RESOURCE_LIST_CONSENT_STATEMENT,
      });
      if (!stored) {
        return res.status(404).json({ error: "The original resource request was not found." });
      }
      return res.status(201).json({ joined: true });
    } catch (error) {
      const duplicate =
        typeof error === "object" && error !== null && "code" in error && error.code === "ER_DUP_ENTRY";
      if (duplicate) return res.status(200).json({ joined: true });

      console.error("[resource-consent] Unable to store consent", error);
      return res.status(500).json({ error: "We could not save your preference. Please try again." });
    }
  });

  return router;
}
