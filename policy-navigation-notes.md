# Policy, Navigation, and Footer Correction Notes

The current shared header and footer both direct About to `/about`, which has no route in the existing single homepage setup. Both must instead use `/#about` while retaining the existing homepage at `/`.

The current footer logo uses the supplied source file but is visually altered by CSS blending. The requested correction is limited to removing this presentation effect and keeping the original proportional logo smaller and clear.

The Policies & Client Information content must sit immediately after the Contact Form and before the existing `#research-content` anchor. No Privacy Policy or GDPR Policy wording is available in the project, so the expandable card bodies must remain empty, ready for approved content.
