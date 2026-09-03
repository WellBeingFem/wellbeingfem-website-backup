import express from "express";
import { createServer, type Server } from "node:http";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  createResourceApiRouter,
  LIVING_IN_FREQUENCY_SLUG,
  RESOURCE_LIST_CONSENT_STATEMENT,
  type ResourceRepository,
} from "../../server/resourceApi";

describe("first-party resource request API", () => {
  let server: Server;
  let baseUrl: string;
  const requests: Array<{ id: number; resourceSlug: string; firstName: string; email: string }> = [];
  const consents: Array<{ requestId: number; consentStatement: string }> = [];

  const repository: ResourceRepository = {
    async createRequest(input) {
      const id = requests.length + 1;
      requests.push({ id, ...input });
      return id;
    },
    async createConsent(input) {
      if (!requests.some(request => request.id === input.requestId)) return false;
      consents.push({ requestId: input.requestId, consentStatement: input.consentStatement });
      return true;
    },
  };

  beforeEach(async () => {
    requests.length = 0;
    consents.length = 0;
    const app = express();
    app.use(
      "/api/resources",
      createResourceApiRouter({ repository, signingSecret: "resource-test-signing-secret" }),
    );
    server = createServer(app);
    await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("Test server did not start");
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  afterEach(async () => {
    await new Promise<void>((resolve, reject) =>
      server.close(error => (error ? reject(error) : resolve())),
    );
  });

  const post = (path: string, body: unknown) =>
    fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

  it("stores the original request before any optional email consent", async () => {
    const response = await post("/api/resources/request", {
      resourceSlug: LIVING_IN_FREQUENCY_SLUG,
      firstName: "Aisling",
      email: "AISLING@example.com",
    });
    const result = (await response.json()) as { requestToken: string };

    expect(response.status).toBe(201);
    expect(result.requestToken).toMatch(/^1\./);
    expect(requests).toEqual([
      { id: 1, resourceSlug: LIVING_IN_FREQUENCY_SLUG, firstName: "Aisling", email: "aisling@example.com" },
    ]);
    expect(consents).toHaveLength(0);
  });

  it("rejects invalid requests without storing data", async () => {
    const response = await post("/api/resources/request", {
      resourceSlug: LIVING_IN_FREQUENCY_SLUG,
      firstName: "",
      email: "not-an-email",
    });

    expect(response.status).toBe(400);
    expect(requests).toHaveLength(0);
    expect(consents).toHaveLength(0);
  });

  it("stores separate consent only after explicit true consent using the verified request", async () => {
    const requestResponse = await post("/api/resources/request", {
      resourceSlug: LIVING_IN_FREQUENCY_SLUG,
      firstName: "Niamh",
      email: "niamh@example.com",
    });
    const { requestToken } = (await requestResponse.json()) as { requestToken: string };

    const rejected = await post("/api/resources/consent", { requestToken, consent: false });
    expect(rejected.status).toBe(400);
    expect(consents).toHaveLength(0);

    const accepted = await post("/api/resources/consent", { requestToken, consent: true });
    expect(accepted.status).toBe(201);
    expect(consents).toEqual([
      { requestId: 1, consentStatement: RESOURCE_LIST_CONSENT_STATEMENT },
    ]);
  });

  it("rejects a tampered request token", async () => {
    const response = await post("/api/resources/consent", {
      requestToken: "1.invalid-signature",
      consent: true,
    });

    expect(response.status).toBe(400);
    expect(consents).toHaveLength(0);
  });
});
