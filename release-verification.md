# WellBeingFem Release Verification

The production-readiness build passed focused Vitest checks, TypeScript validation, and the production build on 31 August 2026. The public metadata now uses `index, follow`, and `robots.txt` explicitly allows all crawlers.

Desktop previews were checked for the homepage, Research, Resources, ONDAMED, representative Healy routes, Women’s Wisdom, and Members’ Library. The service aliases resolve to approved recovered sections rather than the 404 page. Mobile previews were checked for the homepage and Contact Form; the responsive header, hero, service content, and form loaded normally.

The supplied logo, desktop and mobile hero assets, service-card images, Women’s Wisdom image, navigation, footer, and Contact/Booking destinations rendered in the managed preview. No publication or DNS change has been performed from the sandbox.

Rendered DOM inspection found seven images and no broken image loads. The homepage title is `WellBeingFem — Women’s Wellbeing Sessions`, the robots directive is `index, follow`, and all visible Contact, Booking, Research, service, Resources, policy, header, and footer links point to the expected recovered paths or anchors.

Live-domain inspection on 31 August 2026 found that both `https://wellbeingfem.com/` and `https://www.wellbeingfem.com/` currently return HTTP 404 through Cloudflare rather than the recovered website. Plain HTTP redirects to HTTPS. Valid Google Trust Services certificates are active for both hostnames, with matching subject alternative names and validity through 25 October 2026. The domain is therefore HTTPS-enabled but is not yet bound to this project’s published deployment.
