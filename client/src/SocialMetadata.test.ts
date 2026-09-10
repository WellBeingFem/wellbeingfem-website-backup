import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const prerenderSource = readFileSync(resolve(process.cwd(), "scripts/prerender.mjs"), "utf8");
const SOCIAL_IMAGE_URL = "https://wellbeingfem.com/manus-storage/NewSocialMediaimageSept8th2026_74736364.png";

describe("WellBeingFem social-sharing image", () => {
  it("uses the supplied wide image for Open Graph and Twitter cards only", () => {
    expect(prerenderSource).toContain('`<meta property="og:image" content="${escapeHtml(socialImage)}" />`');
    expect(prerenderSource).toContain('`<meta name="twitter:image" content="${escapeHtml(socialImage)}" />`');
    expect(prerenderSource).toContain("NewSocialMediaimageSept8th2026_74736364.png");
  });
});
