import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const footer = readFileSync(resolve(process.cwd(), "client/src/components/SiteFooter.tsx"), "utf8");
const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("WellBeingFem shared footer", () => {
  it("routes Resources to the homepage resources anchor while preserving the shared footer content", () => {
    expect(footer).toContain('{ label: "Resources", href: "/#free-wellbeingfem-resources" }');
    expect(footer).not.toContain('{ label: "Resources", href: "/resources" }');
    expect(footer).toContain("WellBeingFem");
    expect(footer).toContain("Rest <span aria-hidden=\"true\">•</span> Reflect");
    expect(footer).toContain("Policies & Client Information");
  });

  it("uses the exact action-button green consistently with readable existing cream and gold text", () => {
    expect(styles).toContain(".site-footer {\n  width: 100%;\n  background: #3F6B4F;");
    expect(styles).toContain(".footer-copy p {\n  margin: 0;\n  color: var(--wbf-cream);");
    expect(styles).toContain(".footer-navigation a {\n  color: var(--wbf-cream);");
    expect(styles).toContain("color: #f3dfac !important;");
  });

  it("adds one shared lower-right native return-to-top link above every footer", () => {
    expect(footer).toContain('<div className="page-return-to-top">');
    expect(footer).toContain('<a href="#page-top">Return to Top of Page</a>');
    expect(styles).toContain(".page-return-to-top {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;");
    expect(styles).toContain(".page-return-to-top a {\n  display: inline-flex;\n  min-height: 44px;");
    expect(styles).toContain("background: #3F6B4F;");
  });
});
