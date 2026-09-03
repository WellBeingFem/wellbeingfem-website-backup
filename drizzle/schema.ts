import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const resourceRequests = mysqlTable("resource_requests", {
  id: int("id").autoincrement().primaryKey(),
  resourceSlug: varchar("resource_slug", { length: 128 }).notNull(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  requestedAt: timestamp("requested_at").defaultNow().notNull(),
});

export const resourceEmailConsents = mysqlTable("resource_email_consents", {
  id: int("id").autoincrement().primaryKey(),
  requestId: int("request_id")
    .notNull()
    .unique()
    .references(() => resourceRequests.id, { onDelete: "cascade" }),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  consentStatement: text("consent_statement").notNull(),
  consentedAt: timestamp("consented_at").defaultNow().notNull(),
});

export type ResourceRequest = typeof resourceRequests.$inferSelect;
export type InsertResourceRequest = typeof resourceRequests.$inferInsert;
export type ResourceEmailConsent = typeof resourceEmailConsents.$inferSelect;
export type InsertResourceEmailConsent = typeof resourceEmailConsents.$inferInsert;
