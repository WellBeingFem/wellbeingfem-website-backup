import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Hero design restoration and unified button color correction", () => {
  it("keeps both hero click targets entirely invisible so the embedded image buttons are the only visible controls", () => {
    expect(styles).toContain(".hero-action-link {\n  position: absolute;");
    expect(styles).toContain(".hero-action-link--sessions {");
    expect(styles).toContain(".hero-action-link--resource {");
    expect(styles).toContain("border: 0 !important;\n  border-radius: 0 !important;\n  background: transparent !important;");
    expect(styles).toContain("font-size: 0 !important;");
  });

  it("applies #3F6B4F to content and action buttons while excluding navigation controls", () => {
    expect(styles).toContain(".service-card-button,\n.homepage-contact-button,");
    expect(styles).toContain(".send-enquiry-button,");
    expect(styles).toContain(".policy-card-toggle,");
    expect(styles).toContain(".womens-wisdom__more,");
    expect(styles).toContain(".client-experiences__previous,");
    expect(styles).toContain("background: #3f6b4f;");
    expect(styles).toContain("/* Navigation is deliberately excluded from the action-button color.");
    expect(styles).toContain(".desktop-menu-trigger {\n  background: transparent;");
    expect(styles).toContain(".mobile-menu-button {\n  background: transparent;");
  });
});
