import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("WellBeingFem navigation color hierarchy", () => {
  it("keeps desktop navigation, menu triggers, and mobile menu controls out of the primary action green", () => {
    expect(styles).toContain(".desktop-submenu {\n  position: absolute;");
    expect(styles).toContain("background: var(--wbf-cream);");
    expect(styles).toContain(".desktop-menu-trigger {\n  background: transparent;\n  color: var(--wbf-green);");
    expect(styles).toContain(".mobile-menu-button {\n  background: transparent;\n  color: var(--wbf-green);");
    expect(styles).toContain(".mobile-navigation {\n    position: absolute;");
  });
});
