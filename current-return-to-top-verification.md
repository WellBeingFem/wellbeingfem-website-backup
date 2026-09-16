# Shared Return to Top of Page Verification

## Implementation

The shared `SiteFooter` component now renders one native `Return to Top of Page` anchor immediately above the existing footer. It uses `href="#page-top"`, targeting the shared `id="page-top"` added to the existing site header. This makes the control available on the homepage, ONDAMED, Healy, Guided Meditations, Resources, and Research without altering their individual content or footer structure.

The control is positioned at the lower right above the footer in the existing cream page area. It uses the established WellBeingFem action green (`#3F6B4F`), cream text, a thin gold border, and a minimum 44px touch target. At mobile widths, its surrounding alignment preserves the lower-right placement with the established page padding.

## Preview verification

Full-page desktop and mobile captures showed the control above the shared footer on all six public routes. A native click verification then tested desktop and mobile routes individually. In all 12 checks, the link existed, was the topmost element at its centre, appeared above the footer, retained the `#page-top` destination, and returned the viewport to scroll position zero with the header visible.

The complete test suite passed: 67 tests across 16 files. TypeScript validation and the production build also passed.
