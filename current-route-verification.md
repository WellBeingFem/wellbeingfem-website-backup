# Current Route Verification

The private `/ondamed` route opens at `scrollY: 0` with no hash and the complete site header at viewport coordinates 0–158.66px. Its collapsed opening content contains only one More control; the Why Choose heading and unchanged copy remain inside that disclosure.

The private What is Healy destination now uses `/healy` and opens at `scrollY: 0` with no hash and the complete header at viewport coordinates 0–158.66px. The existing What is Healy section remains on the page below the introductory content.

The private `/research#contact` destination opens at `scrollY: 0` with the complete header at viewport coordinates 0–158.66px. The Contact Form begins at 196.66px, directly below the visible header, while the `#contact` hash remains in the URL.

The ONDAMED collapsed state renders one opening More control and omits the Why Choose heading. Activating that sole control changes its label to Less and reveals the unchanged opening continuation, the full “Why Choose ONDAMED PEMF?” heading, and both existing body paragraphs. No separate Why Choose control is rendered.

The private `/healy#healy-reiki` destination renders `View Reiki Research` at the end of the existing Healy Reiki Combined Session section, pointing to `/research#reiki-research`. The final WELLBEING NOTE heading remains in its existing heading style, and the full paragraph beneath it is visibly italic.

Computed-style inspection confirms the WELLBEING NOTE heading has `font-style: normal`, while the emphasis wrapper containing the paragraph’s complete exact text has `font-style: italic`. The action’s DOM destination is exactly `/research#reiki-research`.

Activating `View Reiki Research` reaches `/research#reiki-research`. The target is an `H3` whose exact text is “Reiki & Distant Reiki Research”; DOM containment checks confirm it remains nested inside the existing Healy research category and the existing Research content region, rather than creating a new page or top-level category.

Desktop screenshots at 1280×720 and tablet screenshots at 768×1024 confirm `/ondamed`, `/healy`, and `/research#contact` all open with the complete responsive header visible. ONDAMED and Healy start at their page tops; Contact starts with the Contact Form immediately beneath the header. The established cream, sage, gold, and action-green styling remains unchanged.

Mobile screenshots at 375×812 confirm the same opening behavior: the compact header and logo remain fully visible, ONDAMED and Healy start at their page tops, and Contact begins with the Contact Form directly beneath the header. The final validation run passed all 8 Vitest files and 30 tests, `pnpm run check`, and `pnpm run build`; only the existing managed-storage resolution and bundle-size advisories were emitted.

Production bundle propagation for checkpoint `8b73fec3` completed. A cache-bypassed live `/ondamed` load now starts with the complete header visible and one collapsed More control, with Why Choose absent. Activating that control changes it to Less and reveals the unchanged continuation plus the full Why Choose heading and both existing paragraphs; no second control appears.

The propagated live `/healy` route opens at `scrollY: 0` with the complete header at 0–158.66px. Computed styles confirm the WELLBEING NOTE heading remains `normal` while the emphasis wrapper containing the full exact paragraph is `italic`. The published `View Reiki Research` action points exactly to `/research#reiki-research`.

The published research target resolves to `#reiki-research` and places the exact `H3` heading “Reiki & Distant Reiki Research” at the viewport target. DOM containment confirms it remains inside the existing Healy research category and existing Research content region.

The propagated live `/research#contact` destination opens at `scrollY: 0` with the complete desktop header at 0–158.66px and the Contact Form beginning at 196.66px. The `#contact` hash remains in the published URL.

The published legacy `/healy/what-is-healy` route redirects to `/healy` with no hash, opens at `scrollY: 0`, and retains the full desktop header at 0–158.66px.

The published desktop Healy dropdown exposes `What is Healy` with the direct destination `/healy`; selecting it preserves that page-top URL rather than adding the previous `#what-is-healy` hash.
