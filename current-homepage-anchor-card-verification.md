# Homepage Anchor and Card Cleanup Verification

The mobile hero now uses two separate standard HTML `<a href>` elements with dedicated `mobile-hero-action-link` classes. The former `.hero-action-link` elements are hidden below the mobile breakpoint, so the mobile touch targets do not overlap. At 375px, the Explore Sessions anchor rendered at the established embedded-button footprint and linked to `/#ondamed-service-card`; the Start with a Free Resource anchor rendered below it and linked to `/resources`. Both had `pointer-events: auto`, `touch-action: manipulation`, full-footprint hit coverage, and no horizontal overflow. Desktop and tablet retained the original desktop anchor elements and destinations.

The homepage Healy service-card Learn More link now points to `/healy`. The Guided Meditations card no longer includes `Duration: Varies by meditation`. The service-card fee-section `border-top` is now removed while the existing card dimensions, image presentation, spacing, buttons, colours, and layout remain unchanged.

Responsive screenshots at 1280px, 768px, and 375px showed the preserved hero, cards, and Founder’s Note layout. The complete test suite passed with 65 tests, TypeScript validation passed, and the production build passed.
