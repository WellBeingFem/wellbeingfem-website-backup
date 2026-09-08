import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readPage = (name: string) => readFileSync(resolve(process.cwd(), `client/src/pages/${name}.tsx`), "utf8");
const findH1s = (source: string) => source.match(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/g) ?? [];

const pageContracts = [
  ["Home", "Frequency-Based Wellbeing for Women", "WellBeingFem offers ONDAMED PEMF sessions in Dublin, Healy Frequency Sessions, guided meditations and free wellbeing resources for women."],
  ["Ondamed", "ONDAMED PEMF Sessions in Dublin", "WellBeingFem offers in-person ONDAMED PEMF wellbeing sessions in Dublin."],
  ["Healy", "Healy Frequency Sessions", "WellBeingFem offers personalised Healy resonance analysis and frequency-based wellbeing sessions, including remote options."],
  ["GuidedMeditations", "WellBeingFem Guided Meditations", "The meditation collection includes guided practices using breath, imagery, reflection and nature-based themes."],
  ["Resources", "Free WellBeingFem Resources", "Explore complimentary wellbeing guides, practices and future resources."],
  ["Research", "Research &amp; References", "This page brings together research and references related to the approaches discussed across WellBeingFem."],
] as const;

describe("crawlable public-page HTML content", () => {
  it.each(pageContracts)("uses exactly one visible HTML H1 and requested introduction on %s", (pageName, heading, introduction) => {
    const source = readPage(pageName);

    expect(findH1s(source)).toHaveLength(1);
    expect(source).toContain(`<h1${pageName === "Home" || pageName === "Ondamed" ? " id=" : ""}`);
    expect(source).toContain(heading);
    expect(source).toContain(introduction);
    expect(source).not.toContain("sr-only");
  });

  it("retains HTML service headings, real Women’s Wisdom content, and useful image alternatives", () => {
    const home = readPage("Home");
    const ondamed = readPage("Ondamed");
    const healy = readPage("Healy");
    const guided = readPage("GuidedMeditations");

    expect(home).toContain("<h2>ONDAMED PEMF</h2>");
    expect(home).toContain("<h2>Healy Frequency Sessions</h2>");
    expect(home).toContain("<h2>Guided Meditations</h2>");
    expect(home).toContain('<h2 id="womens-wisdom-heading">Women’s Wisdom in Times of Change</h2>');
    expect(home).toContain("The forthcoming Women’s Wisdom in Times of Change series will bring together guided meditation journeys");
    expect(ondamed).toContain('alt="ONDAMED PEMF device with WellBeingFem branding"');
    expect(healy).toContain('alt="Healy remote wellbeing session with laptop and Healy device"');
    expect(guided).toContain('alt="WellBeingFem Guided Meditations — Rest, Reflect, Renew"');
  });
});
