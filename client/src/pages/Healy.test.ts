import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const page = readFileSync(resolve(process.cwd(), "client/src/pages/Healy.tsx"), "utf8")
  .replace(/&amp;/g, "&")
  .replace(/\s+/g, " ");
const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Healy service page", () => {
  it("replaces the page with the exact supplied sections while preserving all menu anchors", () => {
    for (const [id, heading] of [
      ["what-is-healy", "What is Healy?"],
      ["how-your-remote-healy-session-works", "How Your Remote Healy Session Works"],
      ["healy-wellbeing", "Healy WellBeing"],
      ["healy-aura-analysis", "Healy Aura Analysis"],
      ["healy-i-ching", "Healy I Ching"],
      ["healy-reiki", "Healy Reiki Combined Session"],
    ]) {
      expect(page).toContain(`id="${id}"`);
      expect(page).toContain(heading);
    }

    const suppliedPhrases = [
      "Healy Remote Wellbeing Sessions",
      "Personalised, intention-led frequency wellbeing support for sleep, stress, anxious thoughts, emotional balance, fatigue, renewal and energetic wellbeing — from wherever you are.",
      "Healy can be used as a standalone wellbeing practice or alongside ONDAMED sessions.",
      "It uses Individualised Microcurrent Frequencies (IMF) within a bioenergetic wellbeing framework.",
      "For WellBeingFem remote sessions, selected frequency programs are delivered using the Healy Coil.",
      "A remote Healy session takes place within a 60-minute session window.",
      "You do not need to remain on WhatsApp or Zoom for the full session.",
      "They are not medical reports, diagnoses or treatment plans.",
      "The session includes the All Healy Program, which identifies the frequency programs showing strongest resonance at the time of your session.",
      "your personalised WellBeingFem Healy Chakra Report",
      "your personalised WellBeingFem Creative Homeopathy Report",
      "your personalised WellBeingFem Healy Aura Analysis Report",
      "the WellBeingFem Aura Analysis Guide",
      "The Healy I Ching is used as a reflective wellbeing tool rather than as prediction.",
      "the WellBeingFem I Ching Reflection Guide",
      "your personalised WellBeingFem Alaskan Gem Elixirs Report",
      "Support for Balance, Rest & Renewal",
      "the WellBeingFem Reiki & Healy Chakra Reflection Guide",
      "your personalised WellBeingFem Australian Bush Flowers Report",
      "A first Healy remote session is required before booking a Healy Reiki Combined Session.",
      "Reiki is offered as an energetic wellbeing practice and is not a replacement for medical advice, diagnosis or treatment.",
    ];

    suppliedPhrases.forEach((phrase) => expect(page).toContain(phrase));
    expect(page).toContain("document.getElementById(targetId)?.scrollIntoView({ block: \"start\" });");
    expect(page).not.toContain("Duration: Approx. 60 minutes");
    expect(page).not.toContain("Healy session: €80");
    expect(page).not.toContain("Healy Reiki session: €90");
    expect(page).not.toContain("View Research");
  });

  it("uses both supplied images only within the responsive Healy page layout", () => {
    expect(page).toContain("/manus-storage/frequencylaptophealyimage_9b168a7c.png");
    expect(page).toContain("/manus-storage/HealyReikicombowebsiteimage_dcf16ff1.png");
    expect(page).toContain("width={1536}");
    expect(page).toContain("height={1024}");
    expect(page).toContain("width={1672}");
    expect(page).toContain("height={941}");
    expect(styles).toContain(".healy-page__intro-figure");
    expect(styles).toContain("float: left;");
    expect(styles).toContain("object-fit: contain;");
    expect(styles).toContain(".healy-page__reiki-figure");
    expect(styles).toContain("@media (max-width: 900px)");
    expect(styles).toContain("float: none;");
  });
});
