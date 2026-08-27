# Full-Width Policy Panel Validation

## Desktop interaction

The Privacy Policy / GDPR Notice opens in one panel beneath both compact cards. Its panel width matches the full Policies & Client Information section width, with no document or page-level horizontal overflow. Selecting Terms & Conditions while Privacy is open closes Privacy, changes its control back to More, opens Terms in the same full-width panel, and changes the Terms control to Less.

## Responsive layout

At 1024px, the two compact policy cards remain balanced and side by side. At 390px, they stack Privacy first and Terms second at full available width. The expanded panel uses `width: 100%`, has no fixed height or internal overflow, and its mobile padding reduces without creating horizontal scrolling.

## Preserved scope

The Contact Form remains first, Policies & Client Information remains second, and existing Research content remains third. The approved policy component and wording were not edited during this display-only correction.

## Cross-page anchor check

From the existing Resources page, the footer Policies & Client Information link now opens `/research#policies-client-information` and scrolls directly to the section with its heading clearly visible below the navigation. The cross-page hash restoration runs only on the existing Research route and preserves the three distinct anchor URLs.

The footer Contact link was independently tested from Resources and opens `/research#contact` at the Contact Form after the same cross-page hash restoration.

The footer Research link was independently tested from Resources and opens `/research#research-content`, distinct from both Contact and Policies.

Privacy Policy / GDPR Notice was opened again in the shared full-width panel and its Less control was then tested directly. The panel closes and the view returns to the two balanced compact cards with both controls labelled More.
