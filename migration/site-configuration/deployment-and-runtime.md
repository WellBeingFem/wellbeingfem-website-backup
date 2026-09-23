# Deployment and runtime configuration

The exported source is a **React 19, TypeScript, Vite, Express, Wouter, Tailwind CSS, MySQL/TiDB, and Drizzle** project. Production uses build-time static pre-rendering for the six public pages and serves those generated files through Express. The repository source includes `vite.config.ts`, `vite.config.ssr.ts`, `scripts/prerender.mjs`, `server/index.ts`, `server/resourceApi.ts`, `drizzle/schema.ts`, `client/index.html`, and the page/component source required to reproduce the site.

## Build and start commands

| Purpose | Command |
|---|---|
| Install dependencies | `pnpm install --frozen-lockfile` |
| Run tests | `pnpm exec vitest run` |
| Type-check | `pnpm run check` |
| Create production build | `pnpm run build` |
| Start the generated production server | `pnpm start` |

The production build runs the Vite client build, the SSR bundle build, `scripts/prerender.mjs`, and then bundles `server/index.ts`. The default application port is `3000`; set `PORT` when a target host requires a different port.

## Required configuration

The Living in Frequency Resource Request and optional Resource List consent APIs use **`DATABASE_URL`** and **`JWT_SECRET`**. Place valid replacement values in the target platform's secure secret manager. Do **not** restore the old database credential or signing secret into another host. Generate a new `JWT_SECRET` for a standalone deployment, then preserve existing database records through the supplied SQL export.

`environment.template.env` lists the project and Manus-managed environment-key names observed at the snapshot. The file intentionally has no values. The frontend/static pages have no third-party marketing-form dependency. The contact form is intentionally not connected to a persistence or delivery service; see `../database/contact-form-submissions-status.md`.

## Data and assets

Import `../database/WellBeingFem-database-full.sql` into a fresh MySQL/TiDB-compatible database. It contains the current schema and records for `resource_requests` and `resource_email_consents`. The application schema source is also included in `source-config/drizzle/schema.ts`.

The assets used by the current production source are copied into `../assets/managed-storage-current/`. All locally preserved original uploads are in `../assets/uploaded-original-assets/`. The source code refers to the deployed assets with `/manus-storage/…` paths. For a non-Manus host, upload those asset files to durable object storage or the target host's static file service, preserve filenames where practical, and update asset URLs in the React source and pre-render configuration.

## Domain and SEO continuity

The current canonical domain is **https://wellbeingfem.com**. Live checks captured during the backup show `http://wellbeingfem.com/` redirects to HTTPS and `https://www.wellbeingfem.com/` redirects to the apex host. Preserve these redirects, self-referencing canonicals, HTTPS certificates, sitemap, robots file, and route structure during migration. `routes-redirects-and-anchors.md`, `seo-metadata.md`, the raw production HTML, and the source configuration copies supply the required implementation details.

Domain registration and DNS-provider access are account-level resources rather than source files. No registrar credential, DNS API key, or secret has been copied into this package. Before moving the domain, verify ownership/access at the existing registrar or DNS provider and keep the live Manus binding unchanged until the replacement host is ready and tested.

## GitHub boundary

The user-owned GitHub backup must be **private** and must contain only source code, source-level documentation, and non-sensitive development configuration. Do not upload database exports, contact/resource personal data, consent records, `.env` values, managed deployment credentials, or DNS credentials to GitHub. `../source/WellBeingFem-production-af602cd-history.bundle` is a complete Git bundle that can be cloned or imported if direct GitHub authorization is not available.
