import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const page = readFileSync(resolve(process.cwd(), "client/src/pages/Healy.tsx"), "utf8")
  .replace(/&amp;/g, "&")
  .replace(/\s+/g, " ");
const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Healy service page", () => {
  it("preserves the approved page sections, images, actions, and menu anchors", () => {
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

    expect(page).toContain("/manus-storage/frequencylaptophealyimage_9b168a7c.png");
    expect(page).toContain("/manus-storage/HealyReikicombowebsiteimage_dcf16ff1.png");
    expect(page).toContain('href="/research#contact">Make a Booking</a>');
    expect(page).toContain('href="mailto:wellbeingfem@gmail.com">Email Us</a>');
    expect(page).toContain('href="/research#reiki-research"> View Reiki Research </a>');
    expect(page).toContain("document.getElementById(targetId)?.scrollIntoView({ block: \"start\" });");
    expect(page).toContain('targetId === "what-is-healy"');
    expect(page).toContain('window.scrollTo({ top: 0, left: 0, behavior: "auto" })');
  });

  it("uses the exact revised wording for all four Healy session sections", () => {
    const revisedPhrases = [
      "A comprehensive personalised remote frequency wellbeing session shaped around the agreed intention, current wellbeing focus and the areas highlighted through Healy analysis.",
      "The session begins with the All Healy Program, identifying the frequency programs showing strongest resonance at that time.",
      "Additional Healy frequency programs may then be selected from areas such as sleep, stress, vitamins, meridians, energetic balance and other wellbeing-focused frequency sets, depending on the session focus and analysis findings.",
      "The session also includes the Healy Chakra Program and Creative Homeopathy Program, bringing together energetic and symbolic perspectives to support deeper reflection, self-awareness and exploration of relevant patterns and themes.",
      "Following the session, PDF copies of the personalised Healy frequency programs are provided together with:",
      "WellBeingFem Healy Chakra Report",
      "WellBeingFem Creative Homeopathy Report",
      "These reports extend the session beyond the frequency programs themselves, offering a structured framework for reflection, insight and personalised affirmations.",
      "Healy WellBeing is the broadest of the WellBeingFem Healy sessions, allowing the session to be centred on a particular area of wellbeing or guided by the patterns showing strongest resonance within the Healy analysis.",
      "A deeper personalised remote frequency session combining Healy Aura Analysis with chakra awareness, energetic reflection and supportive frequency programs.",
      "The Healy Aura Analysis explores the energetic patterns highlighted during the session, including overall energy level, the five chakras assessed by Healy, their relative percentages and the areas showing strongest resonance at that time.",
      "The analysis is supported by additional Healy frequency programs selected in response to the themes emerging from the session. These may include Soul Cycle, Power of Three, Gold, flower frequencies and other relevant frequency sets.",
      "Rather than treating the Aura Analysis simply as a set of percentages, the WellBeingFem approach uses the results as a reflective framework for exploring energetic balance, emotional awareness, recurring patterns and areas that may benefit from greater attention.",
      "Healy Aura Analysis is suited to women wishing to explore wellbeing from a deeper energetic perspective, with particular emphasis on aura awareness, chakra balance, personal insight and the patterns emerging through the analysis.",
      "Healy I Ching is designed for women exploring life direction, personal change, choices, recurring patterns, emotional growth or a question that may be present at the time of the session.",
      "Used as a reflective wellbeing tool rather than as prediction, the I Ching offers a symbolic framework for considering what may be emerging, what may require attention and which qualities may support greater clarity, balance and personal growth.",
      "The session includes the Healy I Ching Program, supported by additional frequency programs selected in response to the themes highlighted through the analysis.",
      "The Alaskan Gem Elixirs frequency program is also included, chosen to support balance, harmony, grounding and integration as the session draws to a close.",
      "Healy I Ching is particularly suited to women drawn to symbolic reflection and wishing to explore a current question, transition or life theme from a deeper personal perspective.",
      "Reiki is an energy-based wellbeing practice associated with relaxation, chakra balance and aura harmony. Within this framework, the chakras are understood as energy centres connected with different aspects of emotional, physical and spiritual wellbeing, while the aura is viewed as the subtle energy field surrounding the body.",
      "At WellBeingFem, the Healy Reiki Combined Session brings together personalised Healy frequency support with the calming, restorative qualities of Reiki.",
      "The Healy element may include the All Healy Program, Chakra Program, Australian Bush Flower frequencies and Soul Cycle programs, together with additional frequency programs selected according to the themes highlighted during the session.",
      "A first Healy remote session is required before booking the Healy Reiki Combined Session. This provides an opportunity to experience the Healy process independently before the two approaches are brought together within one session.",
      "Healy Reiki is suited to women seeking a more restorative session with emphasis on energetic balance, chakra awareness, reflection and renewal.",
    ];

    revisedPhrases.forEach((phrase) => expect(page).toContain(phrase));
    expect(page).not.toContain("The session includes the All Healy Program, which identifies");
    expect(page).not.toContain("Reiki is offered as an energetic wellbeing practice and is not a replacement");
  });

  it("adds four independent session disclosures after the visible opening sentences", () => {
    expect(page.match(/className="healy-page__more"/g)).toHaveLength(5);
    expect(page).toContain("const [isWellbeingOpen, setIsWellbeingOpen] = useState(false);");
    expect(page).toContain("const [isAuraOpen, setIsAuraOpen] = useState(false);");
    expect(page).toContain("const [isIChingOpen, setIsIChingOpen] = useState(false);");
    expect(page).toContain("const [isReikiOpen, setIsReikiOpen] = useState(false);");
    expect(page).toContain('aria-controls="healy-wellbeing-details"');
    expect(page).toContain('aria-controls="healy-aura-analysis-details"');
    expect(page).toContain('aria-controls="healy-i-ching-details"');
    expect(page).toContain('aria-controls="healy-reiki-details"');
  });

  it("uses the flower artwork only for Healy lists and places the overall Wellbeing Note above the footer", () => {
    expect(page).not.toContain("<li>your ");
    expect(styles).toContain('background-image: url("/manus-storage/WBFFlowerfromlogo_60274cdc.png")');
    expect(styles).toContain(".healy-page__list li::before");
    expect(page).toContain("WELLBEING NOTE");
    expect(page).toContain("Healy and Reiki sessions at WellBeingFem are offered as complementary wellbeing and self-development practices. They are not intended to diagnose, treat, cure or prevent any medical or psychological condition and are not a replacement for medical advice, diagnosis or treatment from a qualified healthcare professional.");
    expect(page).toContain("<p><em>Healy and Reiki sessions at WellBeingFem are offered as complementary wellbeing and self-development practices.");
    expect(page.indexOf("healy-page__wellbeing-note")).toBeLessThan(page.indexOf("<SiteFooter />"));
  });
});
