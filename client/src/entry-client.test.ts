import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const source = readFileSync(resolve(process.cwd(), "client/src/entry-client.tsx"), "utf8");

describe("SSR client bootstrap", () => {
  it("hydrates only when pre-rendered markup exists and mounts otherwise", () => {
    expect(source).toContain("rootElement.firstElementChild");
    expect(source).toContain("hydrateRoot(rootElement, app)");
    expect(source).toContain("createRoot(rootElement).render(app)");
  });
});
