# WellBeingFem Release Verification

The production-readiness build passed focused Vitest checks, TypeScript validation, and the production build on 31 August 2026. The public metadata now uses `index, follow`, and `robots.txt` explicitly allows all crawlers.

Desktop previews were checked for the homepage, Research, Resources, ONDAMED, representative Healy routes, Women’s Wisdom, and Members’ Library. The service aliases resolve to approved recovered sections rather than the 404 page. Mobile previews were checked for the homepage and Contact Form; the responsive header, hero, service content, and form loaded normally.

The supplied logo, desktop and mobile hero assets, service-card images, Women’s Wisdom image, navigation, footer, and Contact/Booking destinations rendered in the managed preview. No publication or DNS change has been performed from the sandbox.

Rendered DOM inspection found seven images and no broken image loads. The homepage title is `WellBeingFem — Women’s Wellbeing Sessions`, the robots directive is `index, follow`, and all visible Contact, Booking, Research, service, Resources, policy, header, and footer links point to the expected recovered paths or anchors.

Live-domain inspection on 31 August 2026 found that both `https://wellbeingfem.com/` and `https://www.wellbeingfem.com/` currently return HTTP 404 through Cloudflare rather than the recovered website. Plain HTTP redirects to HTTPS. Valid Google Trust Services certificates are active for both hostnames, with matching subject alternative names and validity through 25 October 2026. The domain is therefore HTTPS-enabled but is not yet bound to this project’s published deployment.

The later unpublished CTA and hero-performance draft was visually checked at 1280×720 and 375×812. The original desktop and mobile hero compositions, proportions, overlay alignment, section order, and responsive layout remain unchanged. Primary booking, Contact Form, Send Enquiry, and launch-list controls use the stronger green, while Learn More and More/Less controls retain the softer sage treatment.

Rendered desktop inspection confirmed that the browser selects the 1600×900 WebP hero, displays it proportionally, and reports `loading=eager` with `fetchPriority=high`. Computed primary backgrounds are `rgb(63, 107, 79)` (`#3F6B4F`) with cream text, while sampled Learn More and More controls remain `rgb(117, 121, 98)` (the existing sage).

Rendered Contact Form inspection confirmed that Send Enquiry uses `#3F6B4F` with cream text, while policy More/Less remains the existing sage. No form layout or policy content was changed.

Direct visual comparison of the retained 1672×941 PNG and optimized 1600×900 WebP confirmed that the full scene, embedded text, booking artwork, logo, equipment, and edge content remain intact. The WebP is 201.8 KB versus approximately 2.4 MB for the original desktop PNG.

Direct comparison of the retained 1448×1086 mobile/tablet PNG and optimized 900×675 WebP confirmed that the complete 4:3 composition and embedded booking artwork remain intact. The WebP is 92.4 KB versus approximately 2.3 MB for the original PNG.

The live `wellbeingfem.com` domain was checked after these edits. It still serves the prior PNG hero and prior sage booking/contact buttons, while the private managed preview serves the optimized WebP and `#3F6B4F` primary actions. This confirms that the current working-draft changes have not been published.

The previously published live version was also revalidated after domain binding. The apex and `www` hostnames resolve successfully over HTTPS, with `www` canonicalizing to the apex. The homepage, ONDAMED, Healy, Guided Meditations, Resources, Research, `robots.txt`, logo, and original hero endpoints all return HTTP 200. The live robots file allows crawling, and the certificate matches `wellbeingfem.com`.

A waited 375×812 live mobile capture confirmed that the responsive header, logo, full hero, embedded Contact artwork, homepage heading, and service content load normally. The current CTA/WebP edits remain visible only in the private managed preview.

Final pre-publication checks at 1280×720 and 375×812 confirmed a single stronger-green hero Contact action aligned over the unchanged hero artwork and linked to `/research#contact`; the updated Guided Meditations card contains only the specified WellBeingFem wording and its QR-decoded channel URL; Client Experiences is absent from rendered public content but remains in the homepage source; and Women’s Wisdom wraps desktop text around the left-floated image while retaining mobile image-first stacking. Both existing Women’s Wisdom More/Less controls independently expanded and displayed their approved copy.

Checkpoint `9d8fe128` was saved and auto-published. A cache-bypassed live-domain request returned the new production bundle, which contains the required hero label, WellBeingFem YouTube label and URL, and the new Members’ Library wording, while `Imagine Well` is absent. A subsequent cache-busted browser load of `https://wellbeingfem.com/?release=9d8fe128` rendered the updated homepage correctly over HTTPS, with Client Experiences absent from the public content.

Final live checks confirm a waited 375×812 published mobile rendering with the responsive header, unchanged hero, aligned `#3F6B4F` hero Contact action, and subsequent homepage content visible. Live DOM inspection found no broken images; the hero links to `/research#contact`, the Guided Meditations card links to the WellBeingFem YouTube channel, Client Experiences is `hidden` with `display:none`, the footer is visible, and the public robots directive remains `index, follow`.

The final live route check returned HTTP 200 for the homepage, ONDAMED, Healy, Guided Meditations, Resources, Research, Contact anchor, `robots.txt`, logo asset, and optimized desktop hero asset. `www.wellbeingfem.com` canonicalizes to the HTTPS apex domain, and the active certificate matches wellbeingfem.com. Direct interaction with the published hero Contact action opened `https://wellbeingfem.com/research#contact` and displayed the Contact Form.

The subsequent hero border and unified-button pass was verified in the private preview. The hero Contact action preserved its measured 427.44×64.25px desktop footprint and `/research#contact` link, uses `rgb(63, 107, 79)`, and now has a transparent overlay border so the original embedded gold outline is the only visible border. Homepage controls—service-card actions, Contact Form, Women’s Wisdom actions, Client Experiences arrows, and desktop menu triggers—resolved to the same requested green while their measured borders and dimensions stayed intact.

The final CSS correction was retested with 14 focused tests, TypeScript, and a production build. Desktop and mobile captures show the stronger-green hero action with its original size and position, one clean gold outline, and unchanged hero artwork/layout. The remaining form and policy controls resolve to `rgb(63, 107, 79)` with their original 166×48px and 80×40.5px dimensions plus gold borders retained.
