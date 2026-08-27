# Contact Form and Footer Validation

## Visual and Responsive Review

Desktop review confirms the Contact Form is the first substantive element below the Research header, with no standalone Research title block above it. The source-prescribed Contact Details, Enquiry Details, and Privacy Confirmation content is present as genuine semantic HTML controls. The research navigation and three anchored placeholders remain below the form.

Mobile review at 390px confirms all form controls stack to one column, the message field remains sufficiently sized, consent text wraps within the viewport, and the compact sage-green footer stacks its small integrated logo, identity, web/email details, and navigation cleanly.

## Submission Scope

The form uses browser-required validation for required inputs and consent controls. Secure form-delivery infrastructure is not present in this frontend-only private recovery draft, so the implementation does not show a false success message or claim that an enquiry has been sent.

## Live Form Checks

The `/research#contact` route was tested in the live private draft and lands at the Contact Form. Required name, email, and message fields accept standard input correctly; the optional phone and appointment-preference fields remain optional.

The required service dropdown accepts the supplied ONDAMED option, and the first required enquiry-consent control is selectable. No externally submitted enquiry has been created during these private interface checks.

The required Privacy Policy acknowledgment control is selectable. The required `/research#research-content` destination was tested and lands immediately before the Research category navigation below the Contact Form.

The refined footer Contact link was tested and correctly opens `/research#contact` at the rebuilt Contact Form.

The refined footer Research link was tested and correctly opens `/research#research-content` immediately before the retained Research category navigation. The header navigation exposes the same specified Contact and Research destinations.

## Shared Layout Preservation

The desktop homepage retains its completed wide hero, original header, and immediate header-to-hero spacing. Its shared footer now uses the exact sampled sage-green reference, displays the required identity and contact details, and remains compact. Mobile homepage review confirms the original finished mobile hero remains intact and the footer content remains readable without clipping.
