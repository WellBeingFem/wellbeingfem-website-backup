# Policy, Navigation, and Footer Validation

## Desktop and Mobile Layout

Desktop review confirms the Contact Form remains first, followed immediately by Policies & Client Information, then the two equal Privacy Policy and GDPR Policy cards, and finally the existing Research content anchor and categories. The policy cards sit side by side at desktop width with matching collapsed height and sage-green More controls.

Mobile review at 390px confirms the Contact Form stays first and the policy cards stack Privacy Policy then GDPR Policy at full readable width. No policy wording has been introduced; expanded areas are reserved for approved content. The footer uses the unchanged sampled sage-green, retains all required links, and the supplied logo now displays without blending, filter, tint, or transparency effects.

## Interaction Checks

The new `/research#policies-client-information` target was tested and lands at the policy-card section. Privacy Policy More changes to Less and reveals the reserved in-page content region; Less returns the card to its balanced collapsed state.

GDPR Policy More and Less were tested with the same result: its reserved in-page region expands and collapses while the other card remains unchanged.

The repaired header About link was tested from Research and returns to the existing homepage at `/#about`, with no second homepage created.

The matching footer About link was tested and resolves to the same existing homepage anchor. The new footer Policies & Client Information link was tested and opens `/research#policies-client-information` directly at the policy cards.

## Approved Policy Content Layout

Desktop review confirms the collapsed Privacy Policy / GDPR Notice and Terms & Conditions cards are equal-width and side by side, directly after the Contact Form and before the retained Research content. Mobile review at 390px confirms the cards stack in the required Privacy-then-Terms order with full readable width and easy-to-tap More controls.

## Approved Text Rendering

The Privacy Policy / GDPR Notice More control was tested after the document import. It changes to Less and renders the approved title, “Last updated: 1st August, 2026,” numbered sections, lists, and closing note naturally in the page without a scrolling box or document download.

The Privacy Policy / GDPR Notice Less control was tested and returns the card to its compact state. The Terms & Conditions More control was then tested: it renders “WellBeingFem Terms & Conditions,” “Last updated: 26th July, 2026,” and the complete approved terms in-page with natural document length and the control changes to Less.

The Terms & Conditions Less control returns that card to its compact state. The footer Contact link was independently retested and opens `/research#contact`, confirming it remains distinct from the policy destination.

The footer Research link was independently tested and opens `/research#research-content`, confirming it bypasses the Contact Form and Policies section as required.

The footer Policies & Client Information link was independently retested and opens `/research#policies-client-information`, confirming it does not route to the Contact Form.

The Contact Form’s Privacy Policy / GDPR Notice link was tested and opens `/research#policies-client-information`, without returning the visitor to the Contact Form.
