# Mobile Resources Action and Hero Performance Verification

## Scoped implementation

The mobile-only Start with a Free Resource hotspot now opens `/resources` at the Free WellBeingFem Resources hub heading. Desktop and tablet retain `/resources#living-in-frequency-form`, preserving their existing direct form behavior. The existing Explore Sessions hotspot remains unchanged at every viewport.

The supplied mobile hero has not been semantically edited, cropped, or regenerated. Its full composition is delivered through two responsive full-composition WebP variants: 720×405 and 1200×675. The original PNG remains only as a browser fallback. The document now preloads the responsive 1200px WebP with `imagesrcset`, `imagesizes="100vw"`, the mobile media query, and high fetch priority. The desktop preload and desktop hero source remain unchanged.

## Local responsive verification

| Viewport | Visible hero source | Resource hotspot destination | Result |
| --- | --- | --- | --- |
| Desktop, 1280×900 | Original desktop hero | `/resources#living-in-frequency-form` | Existing desktop behavior preserved; form visible. |
| Tablet, 768×900 | Original desktop hero | `/resources#living-in-frequency-form` | Existing tablet behavior preserved; form visible. |
| Mobile, 375×812 | 720px optimized WebP via `currentSrc` | `/resources` | Hub heading visible at 189px; sign-up form remains below the resource card. |

All views preserve the full 16:9-like hero composition with `object-fit: contain`, center-hit-testable transparent/borderless hotspots, service-section visibility after Explore Sessions, and no horizontal overflow. Desktop, tablet, and mobile screenshots confirm the expected visual hierarchy without added content or visible overlays.

## Transfer verification

| Asset | Format | Delivered bytes |
| --- | --- | ---: |
| Original mobile fallback | PNG | 2,215,468 |
| Mobile 720px candidate | WebP | 64,192 |
| Mobile 1200px candidate | WebP | 147,680 |

At the 375px mobile viewport, the browser selects the 720px WebP candidate, reducing the image transfer from approximately 2.2 MB to approximately 64 KB while retaining the full uncropped composition.

## Automated verification

The focused homepage, document preload, and social metadata suite passed. The complete run passed 13 Vitest files and 53 tests, `pnpm exec tsc --noEmit`, and `pnpm run build`. Existing managed-storage resolution and bundle-size messages remain non-blocking build advisories.
