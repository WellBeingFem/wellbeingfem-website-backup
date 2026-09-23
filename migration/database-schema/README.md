# Schema-only database structures

This folder contains non-sensitive table definitions only. It contains **no database rows** and no personal information.

The active resource flow uses `resource_requests` and `resource_email_consents`. The source tree also contains `drizzle/schema.ts` and `drizzle/migrations/0000_lean_spot.sql`.

For migration of actual records, use the separately protected database export. Do not add any record export, email-address list, consent history, or production database credentials to this repository.
