# Replit migration guide

This repository contains the current WellBeingFem production source, public assets, and migration documentation. It can be imported into a Replit project, but it is not a one-click deployment because the live Resource Request flow requires a database and server-side configuration.

## What to import

Import the private `WellBeingFem/wellbeingfem-website-backup` repository. The `main` branch includes the migration additions. The tag `production-af602cd2` identifies the exact current production application source; `migration-ready-2026-09-23` identifies the source-plus-assets migration snapshot.

## Runtime

Use a Linux Node.js environment. The source was validated with Node.js 22 and pnpm. Pin a compatible Node version in Replit rather than relying on a default runtime.

Install and build with:

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
pnpm start
```

The production build creates static client output, an SSR bundle, pre-rendered route pages, `robots.txt`, `sitemap.xml`, and the Express server bundle. Replit must expose the Node server on the `PORT` supplied by its deployment environment.

## Public assets

The active public files are in `migration/public-assets/manus-storage/`, with original uploads preserved in `migration/public-assets/original-uploaded-assets/`.

The existing application refers to active assets at `/manus-storage/<filename>`. Before deployment, choose one of the following approaches:

1. Configure a static/CDN route on the new host so `/manus-storage/<filename>` serves the files from `migration/public-assets/manus-storage/`; or
2. Upload the files to Replit-compatible object storage or a CDN and update all `/manus-storage/` references in source, CSS, HTML preloads, social metadata, JSON-LD, and the PDF download action.

Preserve the desktop and mobile hero variants, ONDAMED responsive image variants, the social-sharing image, logo, and Living in Frequency PDF. `migration/public-assets/ASSET-MANIFEST.tsv` supplies hashes and filenames.

## Database and Resource Request flow

The current Resources page makes same-origin requests to:

- `POST /api/resources/request`
- `POST /api/resources/consent`

The Express implementation is in `server/resourceApi.ts`. It requires a MySQL-compatible connection and a server-side HMAC secret. The source tree contains the Drizzle schema and migration. `migration/database-schema/` contains schema-only definitions for the two active resource tables.

Use a private Replit secret manager or another approved secret store. Do not commit real values. The relevant names are documented in `migration/CONFIGURATION-VARIABLES.md`.

If historical Resource Request or consent records must be carried across, import the separately protected database export outside GitHub. Never add it to this repository.

## Contact Form

The Contact Form on `/research#contact` is currently a deliberate UI-only placeholder. It prevents browser submission and does not write to a database or send email. Replit can reproduce the existing site exactly without adding anything.

If an operational Contact Form is wanted later, implement it separately with server-side validation, spam protection, truthful error/success behavior, data-retention rules, and a vetted email or CRM service.

## SEO, routes, and domain

Retain the production pre-rendering pipeline. Do not deploy this as a client-only SPA if you want the same crawlable HTML.

Preserve these canonical public routes:

```text
/
/ondamed
/healy
/guided-meditations
/resources
/research
```

Preserve the legacy redirects documented in `migration/site-configuration/routes-redirects-and-anchors.md`, serve the generated `robots.txt` and `sitemap.xml`, and configure a real 404 for unknown routes. Attach `wellbeingfem.com` only after testing a preview deployment. When moving the domain, retain HTTPS and redirect HTTP and `www` traffic to the canonical `https://wellbeingfem.com` host.

## Manus-specific cleanup

For a non-Manus deployment, review and remove or replace the Manus runtime plugin, development storage proxy, debug collector, Manus development host allowlist, optional Forge map helper, dormant OAuth helper, and analytics configuration. `migration/site-configuration/deployment-and-runtime.md` describes these dependencies.

## Final pre-launch checks

1. Build and start the app in a non-production Replit environment.
2. Check all six routes and the seven legacy redirects.
3. Check desktop, tablet, and mobile hero selection and buttons.
4. Verify every page image, logo, social-preview image, and PDF download.
5. Test the Resource Request and optional consent workflow against a non-production database.
6. Confirm the Contact Form has the intended behavior.
7. Validate page titles, canonical URLs, social tags, JSON-LD, `robots.txt`, and `sitemap.xml`.
8. Run an external HTTPS, redirect, and mobile smoke test after domain cutover.
