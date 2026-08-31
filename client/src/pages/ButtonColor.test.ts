import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Hero border and unified button color correction", () => {
  it("keeps the hero overlay footprint while leaving only the original gold border visible", () => {
    expect(styles).toContain(".hero-booking-link {\n  border-color: transparent;");
    expect(styles).toContain("background-clip: padding-box;");
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
