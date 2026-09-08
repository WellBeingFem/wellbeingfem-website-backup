import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const indexHtml = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");
const SOCIAL_IMAGE_URL = "https://wellbeingfem.com/manus-storage/NewSocialMediaimageSept8th2026_74736364.png";

describe("WellBeingFem social-sharing image", () => {
  it("uses the supplied wide image for Open Graph and Twitter cards only", () => {
    expect(indexHtml).toContain('property="og:image"');
    expect(indexHtml).toContain('name="twitter:image"');
    expect(indexHtml.match(new RegExp(SOCIAL_IMAGE_URL, "g"))).toHaveLength(2);
  });
});
