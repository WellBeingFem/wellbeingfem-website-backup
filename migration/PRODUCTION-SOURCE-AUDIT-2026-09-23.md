# WellBeingFem Production Source and Migration Readiness Audit

**Audit date:** 23 September 2026  
**Author:** Manus AI  
**Production source checkpoint:** `af602cd2617e119ea217993985a167cb4278d7b1`  
**GitHub target:** `WellBeingFem/wellbeingfem-website-backup` — private, empty, and unchanged during this audit

## Conclusion

The prepared source ZIP and Git bundle **accurately reproduce the current production source** for WellBeingFem. The source ZIP is a byte-for-byte export of the 172 tracked files at production commit `af602cd2617e119ea217993985a167cb4278d7b1`. The Git bundle resolves to the same commit and preserves the full repository history.

A clean audit copy installed from the lockfile, passed all **68 tests**, passed TypeScript checking, and completed the full production build. The build generated the six public pre-rendered pages, the Express server bundle, `robots.txt`, and `sitemap.xml`. The generated JavaScript and CSS bundles were byte-identical to the files served by the live website. The generated HTML for every public route was also byte-identical to production after removing one Manus-host-injected Progressive Web App manifest tag. That tag is hosting-layer output, not application content.

The source package is therefore **ready for transfer to the private GitHub repository as a source-only backup**. It is not, by itself, a complete host-independent migration. A working migration also requires the separately prepared asset collection, the separately protected database export if existing resource records must be retained, replacement environment values in the new host’s secret manager, domain/DNS configuration, and replacement or removal of the identified Manus-specific runtime integrations.

No push was performed. The private GitHub repository remained empty throughout this audit.

## Production and export identity

| Verification | Result |
|---|---|
| Current production workspace commit | `af602cd2617e119ea217993985a167cb4278d7b1` |
| Source ZIP commit fidelity | All 172 tracked files matched the Git commit by path and byte content |
| Git bundle integrity | Valid; clones to `main` at the production commit |
| Source ZIP integrity | Passed `unzip -t` |
| Source ZIP SHA-256 | `8daa9c0387d2b62575a5d3b9ceca07d91d3fdef51d5ab8d0f9767fd0c7e35871` |
| Git bundle SHA-256 | `8236488a3b90e8c520fa183fe369852fa0c926e50ffa0b2f82d80bb092002215` |
| Clean isolated install | Passed with the committed `pnpm-lock.yaml` |
| Automated tests | 68 passed across 16 test files |
| TypeScript validation | Passed |
| Production build | Passed |
| Compiled production JavaScript | Byte-identical to live `index-BtpYr76g.js` |
| Compiled production CSS | Byte-identical to live `index-CT_sCJ-r.css` |
| Generated route HTML | Exact match after removal of the single hosting-injected manifest tag |

The production workspace was clean after the audit. No live source change, checkpoint, deployment, unpublish action, database mutation, or DNS action occurred.

## Pages and routes

The source includes every current canonical public route and its page component. Each live route returned HTTP 200 during the audit.[1] [2] [3] [4] [5] [6]

| Route | Page source | Live/build status |
|---|---|---|
| `/` | `client/src/pages/Home.tsx` | Present, pre-rendered, HTTP 200 |
| `/ondamed` | `client/src/pages/Ondamed.tsx` | Present, pre-rendered, HTTP 200 |
| `/healy` | `client/src/pages/Healy.tsx` | Present, pre-rendered, HTTP 200 |
| `/guided-meditations` | `client/src/pages/GuidedMeditations.tsx` | Present, pre-rendered, HTTP 200 |
| `/resources` | `client/src/pages/Resources.tsx` | Present, pre-rendered, HTTP 200 |
| `/research` | `client/src/pages/Research.tsx` | Present, pre-rendered, HTTP 200 |

The source also preserves the current legacy redirects:

| Legacy path | Destination | Status |
|---|---|---:|
| `/healy/what-is-healy` | `/healy` | 301 |
| `/healy/wellbeing` | `/healy#healy-wellbeing` | 301 |
| `/healy/aura-analysis` | `/healy#healy-aura-analysis` | 301 |
| `/healy/i-ching` | `/healy#healy-i-ching` | 301 |
| `/healy/reiki` | `/healy#healy-reiki` | 301 |
| `/guided-meditations/womens-wisdom` | `/guided-meditations` | 301 |
| `/guided-meditations/members-library` | `/guided-meditations` | 301 |

The current canonical host behavior is also operational: HTTP redirects to HTTPS, and `www.wellbeingfem.com` redirects to the apex `wellbeingfem.com` host. A migrated deployment should preserve these rules.

## Components, styling, navigation, and anchors

The source contains the current shared `SiteHeader`, `SiteFooter`, `ResearchResources`, policy components, all six page components, React contexts/hooks, UI components, and the complete global stylesheet in `client/src/index.css`. The exact source build produced the same JavaScript and CSS bytes as production, which confirms that the current components and styling are represented accurately.

The audit checked **293 internal links and anchor destinations** in the generated public HTML and found **zero failures**. This included the shared header and footer, service links, Contact destinations, Research category anchors, Resources links, Healy section links, Women’s Wisdom, homepage service-card anchors, and Return to Top links.

The source preserves the principal anchors used by current navigation, including `#page-top`, `#about`, `#homepage-services`, `#ondamed-service-card`, `#free-wellbeingfem-resources`, `#womens-wisdom`, `#members-library`, `#contact`, `#policies-client-information`, `#privacy-policy-gdpr-notice`, `#research-content`, the Healy section anchors, and the research category anchors.

## Mobile layouts and hero assets

The responsive source is complete. It includes separate desktop/tablet and mobile navigation rules, responsive service cards, resource cards, forms, policy layouts, footer behavior, and the dedicated mobile hero treatment.

The homepage hero uses:

- Desktop responsive WebP variants and a PNG fallback for the current GreenHeroDesktop artwork.
- The dedicated button-free `MobileforManus` portrait artwork below 768px.
- Two genuine, visible mobile HTML anchor buttons rather than invisible image-coordinate overlays.
- `Explore Sessions` linking to `/#ondamed-service-card`.
- `Start with a Free Resource` linking to `/resources`.

Live touch checks at **320px, 375px, and 430px** found exactly two separate mobile actions. Explore Sessions reached the visible ONDAMED service card, and the Resource action opened `/resources`. The compiled desktop and mobile implementation is included in the source archive.

## Images and downloadable assets

The source-only ZIP intentionally contains **no large image or PDF binaries**. Current production code references 21 active first-party files through `/manus-storage/...` paths. The separate migration package contains all 21 files, and each was re-downloaded during this audit and found to be HTTP 200 and byte-identical to the backed-up copy.

| Asset group | Source ZIP | Separate migration package |
|---|---:|---:|
| Current `/manus-storage` images/PDF | References only | 21 of 21 present |
| Preserved original uploaded files | Not included | 22 files present |
| Living in Frequency PDF | Reference only | Current managed copy and preserved original present |

The separately backed-up operational asset set includes the site logo, desktop hero PNG/WebP variants, mobile hero, flower icon, homepage service-card images, YouTube QR image, Women’s Wisdom image, both resource-card images, ONDAMED responsive JPG/WebP variants, Healy images, Guided Meditations image, social-sharing image, and the Living in Frequency PDF.

These files **must be exported separately from GitHub source** or moved into the destination platform’s object storage/CDN. The migration must either preserve equivalent `/manus-storage/filename` paths or update every affected source reference, preload, favicon, CSS background, structured-data logo URL, social image URL, and download URL.

The site also links to third-party research documents. These are external dependencies rather than website assets. One tested ONDAMED PDF destination presented a CAPTCHA page instead of a PDF on the audit network. A separate research-link review is advisable before a future cutover, but third-party PDFs should not be copied without permission.

## Forms, backend, and database

The source includes the Express backend and Resource Request API. `server/resourceApi.ts` implements:

- `POST /api/resources/request` for a first name, email address, and the fixed Living in Frequency resource identifier.
- Input validation and lowercase email normalization.
- Database insertion before guide access.
- An HMAC-signed request token.
- `POST /api/resources/consent` for a separately and actively selected Resource List consent.
- Verification that consent relates to a valid original request.
- One consent record per request, with idempotent duplicate handling.

A non-mutating live API check using an invalid empty payload returned the expected HTTP 400 validation response. No audit submission was created.

The current production database contains two active tables: `resource_requests` and `resource_email_consents`. Their schema and relationship are represented in source. The separate private migration package contains the protected record export, but no database records belong in the GitHub repository.

`drizzle/schema.ts` also declares a `users` table inherited from the broader full-stack scaffold. The current production database inventory does not contain that table, the committed SQL migration does not create it, and the active website does not use it. If authentication is added in a future environment, this schema difference must be resolved with a deliberate migration. It is not required to reproduce the current public website.

The Contact Form on `/research#contact` is fully present as UI and validation markup, but its submit handler currently prevents submission and displays a notice that secure enquiry delivery is not connected. It has no API route, database table, email integration, CRM integration, or stored submission records. A migration can reproduce the current behavior exactly; making the Contact Form operational would be a separate feature and privacy review.

## SEO, crawler configuration, and social metadata

The source contains a complete build-time pre-render pipeline in `scripts/prerender.mjs`. The live site and isolated build agreed on all route titles, descriptions, self-referencing canonical URLs, `index, follow` robots meta, Open Graph metadata, Twitter metadata, and JSON-LD for the six canonical routes.

| SEO element | Audit result |
|---|---|
| Initial HTML content | Full crawlable page content present before JavaScript |
| H1 structure | Exactly one H1 on each canonical page |
| Titles and descriptions | Present and matched source on all six routes |
| Canonical URLs | Present and self-referencing |
| Open Graph and Twitter metadata | Present and matched source |
| Social image | Current managed social image present and separately backed up |
| Structured data | Valid `Organization`, `WebSite`, and route-specific `WebPage` graph |
| `robots.txt` | Allows crawling and references the sitemap[7] |
| `sitemap.xml` | Contains the six canonical HTTPS URLs[8] |
| Unknown route behavior | Real HTTP 404 preserved |

A migrated host must preserve route-specific pre-rendered HTML or equivalent server-side rendering. Deploying this source as a client-only single-page application would reduce crawler-visible content and would not recreate the current production SEO behavior.

The five non-root canonical pages currently also respond at trailing-slash variants while declaring the slashless canonical. This is not a source/export mismatch. A new host may optionally normalize those variants with tested 301 redirects.

## Package files, dependencies, and build pipeline

The source includes `package.json`, the complete `pnpm-lock.yaml`, Vite client configuration, SSR configuration, TypeScript configuration, the Wouter patch, Express server source, Drizzle schema and migration, pre-render script, public crawler files, tests, and documentation.

The package declares **53 runtime dependencies** and **23 development dependencies**. The production build sequence is:

1. Vite client build.
2. Vite SSR bundle build using `vite.config.ssr.ts`.
3. Static pre-rendering using `scripts/prerender.mjs`.
4. Express server bundling using esbuild.

The generated production server runs with `pnpm start`. The source was successfully audited with Node 22 and pnpm. The package does not declare a Node `engines` field, so a future host should explicitly pin a compatible Node version rather than relying on its default.

The build issued one expected warning that the flower image’s `/manus-storage` URL remains unresolved at build time. This is correct for the current Manus runtime path, but it reinforces the requirement to migrate the external assets or rewrite their paths on another host.

## Environment variables

The following names appear in the current source. No values were inspected or included.

| Name | Current role | Migration treatment |
|---|---|---|
| `DATABASE_URL` | MySQL/TiDB connection for Resource Requests and consent | Required if retaining the resource flow |
| `JWT_SECRET` | HMAC signing/verification for Resource Request tokens | Required; generate/store securely on the new host |
| `NODE_ENV` | Build/runtime mode | Required runtime setting |
| `PORT` | Express listen port | Set by or for the target host |
| `VITE_ANALYTICS_ENDPOINT` | Browser analytics script endpoint | Conditional; replace or remove analytics |
| `VITE_ANALYTICS_WEBSITE_ID` | Browser analytics site identifier | Conditional; replace or remove analytics |
| `BUILT_IN_FORGE_API_URL` | Manus development storage proxy | Manus-specific; replace/remove externally |
| `BUILT_IN_FORGE_API_KEY` | Manus development storage proxy credential | Manus-specific; do not migrate as a value |
| `VITE_FRONTEND_FORGE_API_URL` | Dormant optional Map component | Not required by current public pages |
| `VITE_FRONTEND_FORGE_API_KEY` | Dormant optional Map component | Not required by current public pages |
| `VITE_OAUTH_PORTAL_URL` | Dormant Manus OAuth helper | Not required by current public pages |
| `VITE_APP_ID` | Dormant Manus OAuth helper | Not required by current public pages |

All functional values must be configured outside Git through the destination secret/configuration manager. No `.env` file should be committed.

## Manus-specific services that need replacement or removal

The current public website is portable, but the following platform integrations need a deliberate migration decision:

| Manus-specific element | Current use | External-platform action |
|---|---|---|
| `/manus-storage` | All current branded images and PDF delivery | Move assets to durable storage/CDN and retain or rewrite paths |
| Forge storage proxy in `vite.config.ts` | Local development resolution of managed assets | Remove or replace with the new asset service |
| `vite-plugin-manus-runtime` | Manus build/runtime integration | Remove or replace after verifying the external build |
| Manus debug collector | Development/browser diagnostics | Remove or replace with approved monitoring |
| Manus host allowlist | Development preview hosts | Replace with target development hosts |
| Manus analytics environment | Current Umami-style browser analytics configuration | Recreate with a compatible service or remove |
| Optional Forge Map component | Unused scaffold component | Remove or configure a direct map provider only if needed |
| Dormant Manus OAuth helper/schema | Not used by the current public website | Remove or deliberately reimplement if future authentication is required |
| Manus database binding | Resource Request and consent persistence | Move to MySQL/TiDB-compatible service and import protected data if required |
| Manus domain/HTTPS binding | Production domain delivery | Recreate DNS, TLS, redirects, and canonical-host configuration on the target |

## GitHub source safety

The source ZIP and complete Git history were scanned for likely secret-bearing files and credential patterns. The audit found no tracked `.env` files, `.project-config.json`, private keys, certificates, database dumps, local database files, CSV/JSON submission exports, or high-confidence private-token patterns.

The source contains schema definitions and migration SQL, which are appropriate for source control. It does **not** contain the separately exported Resource Request records, consent records, contact submissions, database credentials, managed project secrets, DNS credentials, or the migration package itself.

One configuration file contains a deliberately non-functional placeholder-style database URL fallback. It does not expose a production credential, but replacing that fallback with an environment-only validation path would be prudent in a later cleanup. This does not prevent the source-only backup from being placed in a private repository.

## Included in the GitHub-ready source package

The GitHub-ready source includes the exact current React/TypeScript pages, components, styles, tests, router, Express server, Resource Request API, Drizzle schema/migration source, pre-rendering implementation, crawler files, package manifest, lockfile, build configurations, patches, and project documentation. The Git bundle also retains the full available Git history.

## Missing from the source-only package

The source-only package does not include the image/PDF binaries, database records, live environment values, DNS/domain configuration, TLS certificates, analytics account/history, platform deployment settings, or third-party account configuration. It also does not include a working Contact Form delivery backend because current production does not have one.

These omissions are expected and appropriate for a source-only GitHub repository.

## Items that must be exported or recreated separately

The following materials are needed in addition to GitHub source for a complete migration:

1. The separately backed-up set of 21 current managed assets, including all desktop/mobile hero variants, logos, page images, resource-card images, social image, and the Living in Frequency PDF.
2. The protected database export if existing Resource Request and consent records must be retained. This must remain outside GitHub and be transferred securely.
3. New destination values for `DATABASE_URL` and `JWT_SECRET`, plus normal runtime settings. These values must be stored in the target secret manager.
4. The new platform’s domain, DNS, HTTPS, redirect, caching, and canonical-host configuration.
5. Replacement or removal of Manus storage/runtime/debug/analytics integrations.
6. A new Contact Form delivery service only if the form is intended to become operational.
7. Any authorized copies or updated destinations for third-party research documents if continued direct access is required.

## Final readiness decision

**The validated source ZIP and Git bundle are ready to transfer to the private GitHub repository.** They accurately reproduce the current production source and exclude database records, client submissions, consent records, environment values, and secrets.

**The GitHub repository must remain private.** Only the source tree or Git bundle should be pushed. The complete migration ZIP must not be committed because it contains separately protected operational data and asset backups.

For deployment to another platform, classify readiness as **source-ready, migration-ready with external dependencies**. The source compiles and reproduces production accurately, but the destination deployment will not be complete until assets, database/runtime settings, domain configuration, and chosen Manus-service replacements are supplied and tested.

## References

[1]: https://wellbeingfem.com/ "WellBeingFem homepage"
[2]: https://wellbeingfem.com/ondamed "ONDAMED PEMF Sessions in Dublin"
[3]: https://wellbeingfem.com/healy "Healy Frequency Sessions"
[4]: https://wellbeingfem.com/guided-meditations "WellBeingFem Guided Meditations"
[5]: https://wellbeingfem.com/resources "Free WellBeingFem Resources"
[6]: https://wellbeingfem.com/research "Research & References"
[7]: https://wellbeingfem.com/robots.txt "WellBeingFem robots.txt"
[8]: https://wellbeingfem.com/sitemap.xml "WellBeingFem XML sitemap"
[9]: https://manus.im/backup "Manus Data Backup"
[10]: https://help.manus.im/en/articles/16147892-service-change-overview-how-to-back-up-your-data "How to Back Up Your Data"
