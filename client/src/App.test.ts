import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) =>
  readFileSync(resolve(process.cwd(), path), "utf8");

describe("WellBeingFem production readiness", () => {
  it("allows public indexing", () => {
    const indexHtml = readProjectFile("client/index.html");
    const robots = readProjectFile("client/public/robots.txt");

    expect(indexHtml).toContain('<meta name="robots" content="index, follow" />');
    expect(indexHtml).not.toMatch(/noindex|nofollow/i);
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
  });

  it("preloads the optimized hero for desktop and mobile", () => {
    const indexHtml = readProjectFile("client/index.html");

    expect(indexHtml).toContain('href="/manus-storage/DeaktopHeroWBF-contact-green-1600_0b9672ec.webp"');
    expect(indexHtml).toContain('media="(min-width: 1025px)"');
    expect(indexHtml).toContain('href="/manus-storage/NewHeroAug13-contact-green-900_f5dca042.webp"');
    expect(indexHtml).toContain('media="(max-width: 1024px)"');
    expect(indexHtml.match(/fetchpriority="high"/g)).toHaveLength(2);
  });

  it("resolves every existing service navigation URL to recovered content", () => {
    const appSource = readProjectFile("client/src/App.tsx");

    expect(appSource).toContain('<Route path="/ondamed" component={Ondamed} />');
    expect(appSource).not.toContain('<RouteAlias to="/research#ondamed" />');
    expect(appSource).toContain('<Route path="/healy" component={Healy} />');
    expect(appSource.match(/<Route path="\/healy\//g)).toHaveLength(5);
    expect(appSource).not.toContain('<RouteAlias to="/research#healy" />');
    expect(appSource).toContain('<RouteAlias to="/healy" />');
    expect(appSource).toContain('<RouteAlias to="/healy#healy-wellbeing" />');
    expect(appSource).toContain('<RouteAlias to="/healy#healy-aura-analysis" />');
    expect(appSource).toContain('<RouteAlias to="/healy#healy-i-ching" />');
    expect(appSource).toContain('<RouteAlias to="/healy#healy-reiki" />');
    expect(appSource).toContain('import GuidedMeditations from "./pages/GuidedMeditations";');
    expect(appSource).toContain('<Route path="/guided-meditations" component={GuidedMeditations} />');
    expect(appSource).not.toContain('<RouteAlias to="/research#guided-meditations" />');
    expect(appSource).toContain('<Route path="/guided-meditations/womens-wisdom">');
    expect(appSource).toContain('<RouteAlias to="/#womens-wisdom" />');
    expect(appSource).toContain('<Route path="/guided-meditations/members-library">');
    expect(appSource).toContain('<RouteAlias to="/#members-library" />');
    expect(appSource).toContain('import Resources from "./pages/Resources";');
    expect(appSource).toContain('<Route path="/resources" component={Resources} />');
  });

  it("keeps the approved homepage targets available for guided-meditation aliases", () => {
    const homeSource = readProjectFile("client/src/pages/Home.tsx");

    expect(homeSource).toContain('id="womens-wisdom"');
    expect(homeSource).toContain('id="members-library"');
    expect(homeSource).toContain('id="free-wellbeingfem-resources"');
  });
});
