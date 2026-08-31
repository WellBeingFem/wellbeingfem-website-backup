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

  it("resolves every existing service navigation URL to recovered content", () => {
    const appSource = readProjectFile("client/src/App.tsx");

    expect(appSource).toContain('<Route path="/ondamed">');
    expect(appSource).toContain('<RouteAlias to="/research#ondamed" />');
    expect(appSource).toContain('<Route path="/healy">');
    expect(appSource.match(/<Route path="\/healy\//g)).toHaveLength(5);
    expect(appSource.match(/<RouteAlias to="\/research#healy" \/>/g)).toHaveLength(6);
    expect(appSource).toContain('<Route path="/guided-meditations">');
    expect(appSource).toContain('<RouteAlias to="/research#guided-meditations" />');
    expect(appSource).toContain('<Route path="/guided-meditations/womens-wisdom">');
    expect(appSource).toContain('<RouteAlias to="/#womens-wisdom" />');
    expect(appSource).toContain('<Route path="/guided-meditations/members-library">');
    expect(appSource).toContain('<RouteAlias to="/#members-library" />');
  });

  it("keeps the approved homepage targets available for guided-meditation aliases", () => {
    const homeSource = readProjectFile("client/src/pages/Home.tsx");

    expect(homeSource).toContain('id="womens-wisdom"');
    expect(homeSource).toContain('id="members-library"');
  });
});
