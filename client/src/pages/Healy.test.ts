import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const page = readFileSync(resolve(process.cwd(), "client/src/pages/Healy.tsx"), "utf8")
  .replace(/&amp;/g, "&")
  .replace(/\s+/g, " ");
const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Healy service page", () => {
  it("preserves the approved page sections and menu anchors", () => {
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

    expect(page).toContain("Healy Remote Wellbeing Sessions");
    expect(page).toContain("It uses Individualised Microcurrent Frequencies (IMF) within a bioenergetic wellbeing framework.");
    expect(page).toContain("For WellBeingFem remote sessions, selected frequency programs are delivered using the Healy Coil.");
    expect(page).toContain("The session includes the All Healy Program, which identifies the frequency programs showing strongest resonance at the time of your session.");
    expect(page).toContain("The Healy I Ching is used as a reflective wellbeing tool rather than as prediction.");
    expect(page).toContain("A first Healy remote session is required before booking a Healy Reiki Combined Session.");
    expect(page).toContain("Reiki is offered as an energetic wellbeing practice and is not a replacement for medical advice, diagnosis or treatment.");
    expect(page).toContain("document.getElementById(targetId)?.scrollIntoView({ block: \"start\" });");
    expect(page).not.toContain("Duration: Approx. 60 minutes");
    expect(page).not.toContain("Healy session: €80");
    expect(page).not.toContain("Healy Reiki session: €90");
    expect(page).not.toContain("View Research");
  });

  it("applies the supplied session-process replacements and intro disclosure exactly", () => {
    expect(page).toContain("Once the selected Healy frequency programs begin running remotely, the session can simply become a time to relax. This might include lying down, journalling, meditating, listening to music or simply resting. There is no need to remain on WhatsApp or Zoom for the full session.");
    expect(page).toContain("Afterwards, PDF copies of the personalised Healy frequencies and programs will be provided together with the WellBeingFem resources associated with the chosen session.");
    expect(page).toContain("These materials are intended for reflection, journalling and as a personal wellbeing record. They are not medical reports, diagnoses or treatment plans.");
    expect(page).toContain("const [isSessionProcessOpen, setIsSessionProcessOpen] = useState(false);");
    expect(page).toContain('aria-controls="how-your-remote-healy-session-works"');
    expect(page).toContain('{isSessionProcessOpen ? "Less" : "More"}');
    expect(page).not.toContain("You can then relax while the selected Healy frequency programs run remotely.");
    expect(page).not.toContain("Afterwards, you will receive PDF copies of your personalised Healy frequencies and programs");
    expect(page).not.toContain("These materials are provided for reflection, journalling and your personal wellbeing record.");
  });

  it("uses the supplied images, image actions, wrapped Reiki visual, and flower list icon only within Healy", () => {
    expect(page).toContain("/manus-storage/frequencylaptophealyimage_9b168a7c.png");
    expect(page).toContain("/manus-storage/HealyReikicombowebsiteimage_dcf16ff1.png");
    expect(page).toContain('href="/research#contact">Make a Booking</a>');
    expect(page).toContain('href="mailto:wellbeingfem@gmail.com">Email Us</a>');
    expect(page).toContain("width={1536}");
    expect(page).toContain("height={1024}");
    expect(page).toContain("width={1672}");
    expect(page).toContain("height={941}");
    expect(page).not.toContain("<li>your ");
    expect(styles).toContain('background-image: url("/manus-storage/WBFFlowerfromlogo_60274cdc.png")');
    expect(styles).toContain(".healy-page__image-actions");
    expect(styles).toContain(".healy-page__more");
    expect(styles).toContain(".healy-page__reiki-section::after");
    expect(styles).toContain(".healy-page__reiki-figure");
    expect(styles).toContain("object-fit: contain;");
    expect(styles).toContain("@media (max-width: 900px)");
  });
});
