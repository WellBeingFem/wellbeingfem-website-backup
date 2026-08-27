# Hero-Only Correction Validation

## Implemented Scope

The homepage hero rules now use a `width: 100%` media wrapper and `width: 100%` image declaration with no artificial wrapper-width cap. The hero continues to begin immediately below the header, uses the existing cream ground, and preserves the complete uploaded image with `object-fit: contain`. No other website content was changed.

## Desktop and Tablet Observation

The complete uploaded hero is a 4:3 image. The requested `max-height: 650px` desktop rule limits its proportional rendered width to approximately 867px; similarly, the requested `max-height: 520px` tablet rule limits its proportional width to approximately 693px. This browser behavior maintains the full image without distortion, but it prevents the image from occupying more horizontal space despite `width: 100%` being declared.

## Confirmed Preservation

The hero is directly beneath the header, no cropping or `object-fit: cover` is used, the image remains an inline image rather than a background, and the existing transparent overlay remains relative to the hero media so its percentage-based alignment is preserved at every rendered size.

The transparent overlay was retested in the live draft and successfully opened the exact `/research` route. Mobile review at 390px confirmed that the hero remains full-width, proportional, and complete without cropping.

## Approved 720px Desktop Adjustment

Desktop review at 1440px confirms the supplied 4:3 hero now renders at 960 × 720px. It is visibly larger than the earlier 867 × 650px treatment, reduces the cream side space, remains centred directly under the existing header, and is not a full-screen hero. Tablet review at 1024px confirms the existing 520px maximum-height behaviour remains unchanged, complete, and proportional.

Mobile review at 390px confirms the existing `width: 100%`, automatic-height, no-maximum-height behaviour remains unchanged. The final live retest confirms the single transparent overlay remains aligned over the embedded Contact & Booking Form artwork and opens `/research` successfully.
