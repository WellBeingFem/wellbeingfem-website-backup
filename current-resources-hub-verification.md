# Permanent Free Resources Hub Verification

The restored `/resources` route presents the existing Living in Frequency artwork in a calm cream, green, and gold two-column resource card. Initial rendered inspection confirms the image retains its original 1122×1402 natural dimensions and proportional 390×487.31px desktop display. The only initial fields are required `First name` and `Email address`, followed by `Get the Free Guide`.

Before submission, neither the ready/download area nor optional Resource List invitation is shown. The page contains no duplicated Women’s Wisdom section, Kit destination, third-party form, pop-up, recommendation, or advertising-consent content. The hub uses a data-ready resource catalog container and has no horizontal overflow.

Submitting the initial form through the rendered interface replaces only the two-field form with the exact message `Your Living in Frequency guide is ready.`, followed by the visible inactive `Download the Guide` action. The separate `Would you like future free WellBeingFem resources?` invitation appears below the download area with its approved explanatory and consent wording, checkbox, and Resource List action; guide access is therefore shown before and independently from the optional consent decision.

In the submitted UI, `Download the Guide` is a visible button with no href and `aria-disabled="true"`, ready for the future PDF connection. The optional checkbox is initially false and the Resource List action is disabled until it is actively selected. Database inspection after this rendered first-step submission confirms one dated `resource_requests` row and zero `resource_email_consents` rows for the synthetic verification identity, demonstrating that guide access does not create marketing consent.

A second clearly synthetic rendered submission independently reaches the same guide-ready and optional-consent interface, again with the checkbox unticked and no automatic Resource List enrollment. This state is retained for the explicit checkbox and consent-action interaction check.

Actively selecting the optional checkbox changes its controlled state to true and enables `Join the WellBeingFem Resource List`; before that selection the action is disabled. `Download the Guide` remains available throughout, confirming that the separate optional decision does not gate guide access.

Submitting the enabled optional action replaces only that form with `Your Resource List preference has been saved.` Database inspection confirms the second original request has its own `requested_at` date and the optional record is stored separately in `resource_email_consents` with the exact approved consent statement and its own later `consented_at` date. The first synthetic guide request retained zero consent records. All synthetic UI verification requests were then deleted by exact `.invalid` addresses, with cascading cleanup and zero verification request/consent rows remaining.

The first-party API and database migration create separate `resource_requests` and `resource_email_consents` tables. A synthetic end-to-end API check confirmed invalid requests are rejected, a valid request creates only the original request, false consent is rejected, and explicit consent creates a separate dated record linked to the verified request. The synthetic records were removed afterward, with zero verification rows remaining.

The complete automated suite passes all 12 Vitest files and 52 tests, `pnpm run check`, and `pnpm run build`. Existing managed-storage resolution and bundle-size messages remain non-blocking advisories.

The existing homepage `Get Free Resource` action remains inside the unchanged Resource 01 carousel card and now links directly to `/resources`. Activating it opens the restored first-party hub and its initial two-field form. The original homepage Women’s Wisdom section remains present immediately after the resources carousel, while `/resources` contains no Women’s Wisdom copy.

Full-page captures at 1280×720, 768×1024, and 375×812 confirm the restored hub’s branded resource card, proportional unchanged image, readable fields, responsive one-column stacking at tablet/mobile widths, full-width mobile action, preserved header/footer, and absence of horizontal overflow.
