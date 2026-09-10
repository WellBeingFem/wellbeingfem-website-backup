# Homepage SSR Hydration Verification

The reported mismatch was reproduced on the WebDev preview URL `/?from_webdev=1`. The preview HTML still contained the Vite template placeholders `<!--app-head-->` and `<!--app-html-->` inside an otherwise empty `#root`, while `entry-client.tsx` called `hydrateRoot` unconditionally. React therefore attempted to hydrate an empty development placeholder as though it were server-rendered homepage markup and reported a mismatch at the first `Home` wrapper.

The client bootstrap now checks `rootElement.firstElementChild`. Production pre-rendered route files contain a real first child and continue through `hydrateRoot`; the Vite development placeholder is empty and now uses `createRoot`, avoiding hydration against nonexistent markup. This is a bootstrap-only correction and does not alter the homepage content or visual layout.

After the fix, the same preview URL produced no exception events. The page rendered one homepage H1, the expected page text, and the existing hero. The full suite passed with 65 tests, TypeScript passed, and the production build passed.

Live production verification remains after the automatic publication checkpoint.
