# WellBeingFem migration repository

This private repository contains the validated production source snapshot from commit `af602cd2617e119ea217993985a167cb4278d7b1`, plus non-sensitive public assets and migration documentation needed to reproduce WellBeingFem on another hosting platform.

## Source provenance

The Git tag `production-af602cd2` marks the exact published production source snapshot. The current migration commit adds only `migration/` documentation, public assets, and schema-only structures; it does not alter application source.

## Included migration additions

- `migration/public-assets/manus-storage/` contains the 21 active public assets referenced through the current `/manus-storage/` paths, including the Living in Frequency PDF.
- `migration/public-assets/original-uploaded-assets/` preserves 22 original uploaded public asset files. Some are historical or duplicate originals and are not necessarily active production dependencies.
- `migration/database-schema/` contains schema-only table definitions for the Resource Request and Resource List consent tables. The normal source tree also contains the Drizzle schema and committed migration.
- `migration/site-configuration/` contains production-safe route, redirect, crawler, SEO, social metadata, build/runtime, raw HTML, response-header, and sanitised configuration records.

## Deliberate exclusions

No client submissions, Resource Request rows, email addresses, consent rows or timestamps, database dumps, contact-form data, production environment values, API keys, database passwords, private tokens, or DNS credentials are committed.

The current Contact Form is an intentionally non-delivering UI. The source preserves that behavior; it does not include a contact-submission backend because current production does not have one.

## Deployment notes

The source is React/Vite/TypeScript with a Node/Express backend, MySQL-compatible Resource Request API, and build-time pre-rendering. Before deploying elsewhere:

1. Upload the assets in `migration/public-assets/manus-storage/` to the destination object store/CDN and retain equivalent paths or update all source references.
2. Apply the source Drizzle migration and schema-only files to a MySQL-compatible database if retaining the Resource Request process.
3. Configure the resource backend's database connection and signing secret through the destination secret manager. Do not commit production values.
4. Preserve pre-rendering, six canonical routes, SEO metadata, robots, sitemap, legacy redirects, and canonical domain redirects.
5. Replace or remove Manus-specific runtime, storage, diagnostics, analytics, optional map, and dormant OAuth helpers as described in `migration/site-configuration/deployment-and-runtime.md`.

## Data migration

If personal data must be migrated, use the separately protected database export outside GitHub. It is intentionally not part of this repository.
