import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");
const header = readFileSync(resolve(process.cwd(), "client/src/components/SiteHeader.tsx"), "utf8");

describe("WellBeingFem navigation color hierarchy", () => {
  it("keeps desktop navigation, menu triggers, and mobile menu controls out of the primary action green", () => {
    expect(styles).toContain(".desktop-submenu {\n  position: absolute;");
    expect(styles).toContain("background: var(--wbf-cream);");
    expect(styles).toContain(".desktop-menu-trigger {\n  background: transparent;\n  color: var(--wbf-green);");
    expect(styles).toContain(".mobile-menu-button {\n  background: transparent;\n  color: var(--wbf-green);");
    expect(styles).toContain(".mobile-navigation {\n    position: absolute;");
  });

  it("uses the existing WellBeingFem YouTube destination in the Guided Meditations menu", () => {
    expect(header).toContain('const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";');
    expect(header).toContain('{ label: "About WBF Meditations", href: "/guided-meditations" }');
    expect(header).toContain('{ label: "Women\'s Wisdom", href: "/guided-meditations/womens-wisdom" }');
    expect(header).toContain('{ label: "WBF YouTube Channel", href: WELLBEINGFEM_YOUTUBE_URL, external: true }');
    expect(header).not.toContain("Members' Library");
    expect(header).toContain('target={child.external ? "_blank" : undefined}');
  });

  it("routes every Healy menu item to its matching Healy page section", () => {
    expect(header).toContain('{ label: "What is Healy", href: "/healy" }');
    expect(header).toContain('{ label: "Healy WellBeing", href: "/healy#healy-wellbeing" }');
    expect(header).toContain('{ label: "Healy Aura Analysis", href: "/healy#healy-aura-analysis" }');
    expect(header).toContain('{ label: "Healy I Ching", href: "/healy#healy-i-ching" }');
    expect(header).toContain('{ label: "Healy Reiki", href: "/healy#healy-reiki" }');
    expect(header).not.toContain('{ label: "What is Healy", href: "/research#healy" }');
    expect(header).not.toContain('{ label: "Healy WellBeing", href: "/research#healy" }');
    expect(header).not.toContain('{ label: "Healy Aura Analysis", href: "/research#healy" }');
    expect(header).not.toContain('{ label: "Healy I Ching", href: "/research#healy" }');
    expect(header).not.toContain('{ label: "Healy Reiki", href: "/research#healy" }');
  });
});
