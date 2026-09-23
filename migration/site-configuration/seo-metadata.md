# WellBeingFem SEO metadata export

The production build uses `scripts/prerender.mjs` to generate real HTML for the six public routes. Each route has a self-referencing canonical URL, an `index, follow` robots meta tag, title, meta description, Open Graph fields, Twitter fields, and JSON-LD `Organization`, `WebSite`, and `WebPage` schema. The raw live HTML responses are stored in `live-raw-html/`.

| Route | Title | Meta description | Canonical URL |
|---|---|---|---|
| `/` | WellBeingFem — Frequency-Based Wellbeing for Women | WellBeingFem offers ONDAMED PEMF sessions in Dublin, Healy Frequency Sessions, guided meditations and free wellbeing resources for women. | https://wellbeingfem.com/ |
| `/ondamed` | ONDAMED PEMF Sessions in Dublin \| WellBeingFem | WellBeingFem offers in-person ONDAMED PEMF wellbeing sessions in Dublin with personalised frequency-based support. | https://wellbeingfem.com/ondamed |
| `/healy` | Healy Frequency Sessions \| WellBeingFem | WellBeingFem offers personalised Healy resonance analysis and frequency-based wellbeing sessions, including remote options. | https://wellbeingfem.com/healy |
| `/guided-meditations` | WellBeingFem Guided Meditations \| Women’s Wellbeing | Explore WellBeingFem guided meditation practices using breath, imagery, reflection and nature-based themes. | https://wellbeingfem.com/guided-meditations |
| `/resources` | Free WellBeingFem Resources | Explore complimentary WellBeingFem wellbeing guides, practices and future resources. | https://wellbeingfem.com/resources |
| `/research` | Research & References \| WellBeingFem | Research and references related to the wellbeing approaches discussed across WellBeingFem. | https://wellbeingfem.com/research |

## Shared social image

All six routes declare the following unchanged social-sharing image in both `og:image` and `twitter:image`:

`https://wellbeingfem.com/manus-storage/NewSocialMediaimageSept8th2026_74736364.png`

## Crawling files

* `robots.live.txt` permits all crawlers and points to `https://wellbeingfem.com/sitemap.xml`.
* `sitemap.live.xml` lists exactly the six canonical public URLs in the table above.
* `source-config/scripts/prerender.mjs` contains the source-of-truth metadata definitions and build-time sitemap/robots generation.

No `noindex` directive was observed in the captured production source configuration or raw live page headers.
