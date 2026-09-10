import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const read = (file: string) => readFileSync(resolve(process.cwd(), file), "utf8");
const indexHtml = read("client/index.html");
const prerender = read("scripts/prerender.mjs");
const robots = read("client/public/robots.txt");
const sitemap = read("client/public/sitemap.xml");
const header = read("client/src/components/SiteHeader.tsx");

const publicRoutes = ["/", "/ondamed", "/healy", "/guided-meditations", "/resources", "/research"];

describe("WellBeingFem crawlability contract", () => {
  it("renders the app into explicit server pre-render placeholders", () => {
    expect(indexHtml).toContain("<div id=\"root\"><!--app-html--></div>");
    expect(indexHtml).toContain("<!--app-head-->");
    expect(indexHtml).toContain('src="/src/entry-client.tsx"');
  });

  it("defines route-aware titles, descriptions, canonicals, robots, and schema", () => {
    for (const route of publicRoutes) expect(prerender).toContain(`\"${route}\"`);
    expect(prerender).toContain('rel=\"canonical\"');
    expect(prerender).toContain('name=\"robots\" content=\"index, follow\"');
    expect(prerender).toContain('application/ld+json');
  });

  it("publishes the sitemap and advertises it from robots", () => {
    expect(robots).toContain("Sitemap: https://wellbeingfem.com/sitemap.xml");
    for (const route of publicRoutes) expect(sitemap).toContain(`https://wellbeingfem.com${route}`);
  });

  it("keeps primary service destinations as real navigation anchors", () => {
    expect(header).toContain('label: "Healy",\n    href: "/healy"');
    expect(header).toContain('label: "Guided Meditations",\n    href: "/guided-meditations"');
  });
});
