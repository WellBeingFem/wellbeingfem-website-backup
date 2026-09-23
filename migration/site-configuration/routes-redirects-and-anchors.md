# WellBeingFem routes, redirects, and anchors

This is the routing inventory for the production source snapshot `af602cd2617e119ea217993985a167cb4278d7b1`. The canonical public origin is **https://wellbeingfem.com**. The raw HTTP redirect captures are stored in `live-http-headers/`.

## Public canonical routes

| Route | Purpose | Canonical URL |
|---|---|---|
| `/` | Homepage | `https://wellbeingfem.com/` |
| `/ondamed` | ONDAMED PEMF sessions | `https://wellbeingfem.com/ondamed` |
| `/healy` | Healy frequency sessions | `https://wellbeingfem.com/healy` |
| `/guided-meditations` | Guided Meditation Journeys | `https://wellbeingfem.com/guided-meditations` |
| `/resources` | Free WellBeingFem Resources and the Living in Frequency request flow | `https://wellbeingfem.com/resources` |
| `/research` | Contact Form, Policies & Client Information, Research & References | `https://wellbeingfem.com/research` |

## Redirects

| Requested URL/path | Redirect target | Observed/implemented status |
|---|---|---:|
| `http://wellbeingfem.com/` | `https://wellbeingfem.com/` | 301 (live edge) |
| `https://www.wellbeingfem.com/` | `https://wellbeingfem.com/` | 301 (live edge) |
| `/healy/what-is-healy` | `/healy` | 301 |
| `/healy/wellbeing` | `/healy#healy-wellbeing` | 301 |
| `/healy/aura-analysis` | `/healy#healy-aura-analysis` | 301 |
| `/healy/i-ching` | `/healy#healy-i-ching` | 301 |
| `/healy/reiki` | `/healy#healy-reiki` | 301 |
| `/guided-meditations/womens-wisdom` | `/guided-meditations` | 301 |
| `/guided-meditations/members-library` | `/guided-meditations` | 301 |

## Source anchors

| Route/component | Current static anchor IDs |
|---|---|
| Shared header | `#page-top`, `#mobile-navigation` |
| Homepage | `#about`, `#homepage-services`, `#homepage-services-heading`, `#ondamed-service-card`, `#welcome-heading`, `#philosophy-heading`, `#free-wellbeingfem-resources`, `#homepage-resources-heading`, `#client-experiences-heading`, `#womens-wisdom`, `#womens-wisdom-heading`, `#womens-wisdom-change-details`, `#members-library`, `#founders-note`, `#founders-note-heading` |
| ONDAMED | `#ondamed-page-heading`, `#ondamed-intro-more`, `#ondamed-support-heading`, `#ondamed-wellbeing-note-heading` |
| Healy | `#what-is-healy`, `#what-is-healy-heading`, `#how-your-remote-healy-session-works`, `#how-healy-works-heading`, `#healy-wellbeing`, `#healy-wellbeing-heading`, `#healy-wellbeing-details`, `#healy-aura-analysis`, `#healy-aura-analysis-heading`, `#healy-aura-analysis-details`, `#healy-i-ching`, `#healy-i-ching-heading`, `#healy-i-ching-details`, `#healy-reiki`, `#healy-reiki-heading`, `#healy-reiki-details`, `#healy-wellbeing-note-heading` |
| Guided Meditations | `#guided-meditations-opening-details`, `#personal-transformation-heading`, `#guided-meditations-transformation-details`, `#guided-meditations-wellbeing-note-heading` |
| Resources | `#living-in-frequency-heading`, `#living-in-frequency-form`, `#resource-ready-heading` |
| Research and policies | `#contact`, `#policies-client-information`, `#policies-client-information-heading`, `#privacy-policy-gdpr-notice`, `#research-content`, `#ondamed`, `#ondamed-heading`, `#ondamed-note-heading`, `#healy`, `#healy-heading`, `#healy-closing-note-heading`, `#reiki-research`, `#reiki-closing-note-heading`, `#guided-meditations`, `#guided-meditations-heading`, `#guided-opening-note-heading`, `#guided-closing-note-heading` |

The authoritative implementation is retained in the source snapshot—primarily `server/index.ts`, `client/src/App.tsx`, `client/src/components/SiteHeader.tsx`, `client/src/components/ResearchResources.tsx`, and the six page components. Keep or replace these routes deliberately during a migration to preserve external links and search-engine continuity.
