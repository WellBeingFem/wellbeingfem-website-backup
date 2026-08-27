# Policy, Navigation, and Footer Validation

## Desktop and Mobile Layout

Desktop review confirms the Contact Form remains first, followed immediately by Policies & Client Information, then the two equal Privacy Policy and GDPR Policy cards, and finally the existing Research content anchor and categories. The policy cards sit side by side at desktop width with matching collapsed height and sage-green More controls.

Mobile review at 390px confirms the Contact Form stays first and the policy cards stack Privacy Policy then GDPR Policy at full readable width. No policy wording has been introduced; expanded areas are reserved for approved content. The footer uses the unchanged sampled sage-green, retains all required links, and the supplied logo now displays without blending, filter, tint, or transparency effects.

## Interaction Checks

The new `/research#policies-client-information` target was tested and lands at the policy-card section. Privacy Policy More changes to Less and reveals the reserved in-page content region; Less returns the card to its balanced collapsed state.

GDPR Policy More and Less were tested with the same result: its reserved in-page region expands and collapses while the other card remains unchanged.

The repaired header About link was tested from Research and returns to the existing homepage at `/#about`, with no second homepage created.

The matching footer About link was tested and resolves to the same existing homepage anchor. The new footer Policies & Client Information link was tested and opens `/research#policies-client-information` directly at the policy cards.
