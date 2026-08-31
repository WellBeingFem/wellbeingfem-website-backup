import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Hero design restoration and unified button color correction", () => {
  it("keeps the hero click target entirely invisible so the embedded original button is the only visible control", () => {
    expect(styles).toContain(".hero-booking-link {\n  position: absolute;");
    expect(styles).toContain("border: 0 !important;\n  border-radius: 0 !important;\n  background: transparent !important;");
    expect(styles).toContain("font-size: 0 !important;");
  });

  it("applies #3F6B4F to every existing site button treatment", () => {
    expect(styles).toContain(".service-card-button,\n.homepage-contact-button,");
    expect(styles).toContain(".send-enquiry-button,");
    expect(styles).toContain(".policy-card-toggle,");
    expect(styles).toContain(".womens-wisdom__more,");
    expect(styles).toContain(".client-experiences__previous,");
    expect(styles).toContain(".desktop-menu-trigger,");
    expect(styles).toContain(".mobile-menu-button {");
    expect(styles).toContain("background: #3f6b4f;");
  });
});
