import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Research page header-aware anchors", () => {
  it("places the one Research & References heading after policies and immediately before research content", () => {
    const page = readFileSync(resolve(process.cwd(), "client/src/pages/Research.tsx"), "utf8");
    const policiesIndex = page.indexOf('id="policies-client-information"');
    const headingIndex = page.indexOf('<header className="contact-form-heading research-page-heading">');
    const researchContentIndex = page.indexOf("<ResearchResources />");

    expect(policiesIndex).toBeGreaterThan(-1);
    expect(headingIndex).toBeGreaterThan(policiesIndex);
    expect(researchContentIndex).toBeGreaterThan(headingIndex);
    expect(page.match(/<h1>Research &amp; References<\/h1>/g)).toHaveLength(1);
    expect(page.match(/This page brings together research and references related to the approaches discussed across WellBeingFem\./g)).toHaveLength(1);
  });

  it("opens the Contact Form with the full header visible while preserving other research anchors", () => {
    const page = readFileSync(resolve(process.cwd(), "client/src/pages/Research.tsx"), "utf8");

    expect(page).toContain('if (targetId === "contact")');
    expect(page).toContain('window.scrollTo({ top: 0, left: 0, behavior: "auto" })');
    expect(page).toContain('document.getElementById(targetId)?.scrollIntoView({ block: "start" })');
  });
});
