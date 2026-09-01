import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Research page header-aware anchors", () => {
  it("opens the Contact Form with the full header visible while preserving other research anchors", () => {
    const page = readFileSync(resolve(process.cwd(), "client/src/pages/Research.tsx"), "utf8");

    expect(page).toContain('if (targetId === "contact")');
    expect(page).toContain('window.scrollTo({ top: 0, left: 0, behavior: "auto" })');
    expect(page).toContain('document.getElementById(targetId)?.scrollIntoView({ block: "start" })');
  });
});
