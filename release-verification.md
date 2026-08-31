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

Checkpoint `a75a6395` was saved after explicit user approval and began publishing to wellbeingfem.com. The initial cache-busted browser request rendered the correct link and green background but still reported the prior gold overlay border, so a deployment-propagation check remains in progress before final confirmation.

The managed production domain subsequently served the corrected checkpoint: the hero has `rgb(63, 107, 79)`, a transparent 1px overlay border, `padding-box` background clipping, and the existing `/research#contact` destination. Existing service-card buttons also resolve to the requested green with cream text. The custom-domain cache is being rechecked before the final publication confirmation.

For the pending hero design restoration, desktop and mobile preview captures confirm the original embedded Contact WellBeingFem button is again the single visible hero control. Its gold flower icon, cream lettering, original typography, original rounded footprint, and a single thin gold outline are intact; only the fill is now the requested `#3F6B4F`. The hero image composition and responsive dimensions remain unchanged.

The restored hero variants retain their original full dimensions—1672×941 for desktop and 1448×1086 for mobile/tablet—while their no-crop optimized WebP derivatives are 1600×900 (224 KB) and 900×675 (104 KB). Direct activation of the empty, transparent homepage hero anchor opened the existing `/research#contact` Contact Form, confirming that the artwork is the only visible button and the click target remains intact.

Checkpoint `39a4a264` was published after explicit user approval. Once propagation completed, the live custom-domain bundle included both restored `contact-green` hero sources and no longer contained visible anchor text. A cache-busted production visit confirmed the original embedded Contact button is the only visible control, and its transparent hit area opened the live `https://wellbeingfem.com/research#contact` Contact Form successfully.

For the pending navigation restoration, desktop and mobile private-preview captures confirm that Healy, Guided Meditations, and Research no longer have solid dark-green backgrounds. Desktop navigation now returns to the original cream-header, sage-text treatment, and the mobile hamburger returns to a transparent cream control with its thin gold border. The hero button remains the only stronger-green element in the above-the-fold capture.

Desktop hover verification confirmed the Healy dropdown still opens normally with its original cream background, gold border, and sage navigation links. The trigger retains the transparent header treatment, so no dark-green background has been introduced to navigation, menus, or dropdowns.

Computed styles confirm the restored separation: the desktop menu trigger is transparent with dark sage text, the desktop submenu is cream with a gold border, submenu links are transparent sage text, and the mobile menu control is transparent sage when rendered. Existing content/action buttons retain the requested `rgb(63, 107, 79)` fill with cream text and gold borders.

The restored mobile control was directly exercised through its React event handler: `aria-expanded` and the `is-open` class changed from false to true and returned to false on close. A representative Healy submenu link was followed after the color restoration and resolved correctly to the existing `/research#healy` destination.

The restored Guided Meditations dropdown also opens with its original cream menu treatment; its Women’s Wisdom link resolves to the existing `/#womens-wisdom` content. The top-level Research navigation still resolves to `/research#research-content`, confirming that representative navigation destinations remain intact after the color restoration.

The restored top-level Contact link was also followed and loaded the existing `/research#contact` Contact Form. This completes direct checks for the mobile menu toggle, desktop dropdowns, representative Healy and Guided Meditations routes, Research, and Contact following navigation color restoration.

A true 375×812 headless mobile capture with the menu open confirms the restored navigation layout: transparent mobile toggle with a thin gold border, cream menu surface, sage text, subtle gold dividers, and no solid dark-green backgrounds. Project metadata now identifies the project as `WellBeingFem`.

Checkpoint `f55a89f3` is published to wellbeingfem.com. A fresh cache-disabled production capture and direct stylesheet inspection confirm that live desktop navigation triggers are transparent with sage text, menu panels are cream with gold borders, and mobile controls use transparent sage styling. The live stylesheet retains #3F6B4F only for content/action buttons, not navigation or menu backgrounds.

The dedicated `/ondamed` page now renders the supplied ONDAMED WellBeingFem image only on that route. Desktop verification confirms it floats beside the existing ONDAMED text with a #3F6B4F Make a Booking action beneath; mobile verification confirms image-first stacking with proportional uncropped sizing. The homepage retains its prior ONDAMED card image. Direct activation of the new booking action opens the existing `/research#contact` Contact Form. Vitest completed 17 tests successfully; TypeScript validation and the production build also passed.

Checkpoint `4421687c` is published to wellbeingfem.com. After deployment propagation, the custom-domain `/ondamed` route renders the supplied ONDAMED WellBeingFem image and Make a Booking action as expected. Direct activation of that published action loaded the live `/research#contact` Contact Form.

The full supplied ONDAMED copy is restored on the dedicated local `/ondamed` page, including all five approved headings, each paragraph, and the nine-item unbolded wellbeing list. Desktop verification shows the text wrapping alongside and beneath the supplied image; mobile verification shows the same complete copy beneath the proportionally stacked image. The homepage ONDAMED card remains unchanged apart from its approved Learn More destination now opening the dedicated `/ondamed` page. The strengthened content-copy suite, full Vitest run, TypeScript check, and production build all pass (18 tests).

Checkpoint `4484f4d3` is published to wellbeingfem.com. Following propagation, a live custom-domain check confirmed all supplied ONDAMED headings, paragraphs, and unbolded list items are rendered at `/ondamed`, with the supplied image and the Make a Booking link to `/research#contact` intact.

For the pending ONDAMED layout update, the local desktop preview confirms a large dark-green serif ONDAMED PEMF title, clearly smaller Wellbeing Sessions subtitle, left-floated supplied image, text flowing to its right and beneath, the intact Make a Booking link, and three independently visible #3F6B4F More controls. In their collapsed state, the first introductory paragraph remains fully visible; the requested introductory continuation, expectation-section continuation, and personalised-approach continuation are not shown.

Direct interaction confirms the introductory More control reveals the preserved continuation and changes only that control to Less. The What to Expect More control independently reveals both remaining approved paragraphs and changes to Less; the personalised-approach control remains collapsed, confirming independent state behavior.

The final independent interaction check confirms the A Personalised Approach More control reveals its remaining two approved paragraphs and changes to Less while the other two disclosures remain independently open. A 375×812 mobile capture confirms the requested title, subtitle, supplied uncropped image, booking button, then text sequence, with all three controls correctly reset and collapsed in a fresh mobile render. The large desktop ONDAMED PEMF title, smaller subtitle, left image, and text wrapping/continuing underneath are confirmed in the desktop capture. Full verification passes: 19 Vitest tests, TypeScript, and production build.
