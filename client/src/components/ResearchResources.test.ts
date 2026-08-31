import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const source = readFileSync(resolve(process.cwd(), "client/src/components/ResearchResources.tsx"), "utf8");
const page = readFileSync(resolve(process.cwd(), "client/src/pages/Research.tsx"), "utf8");

describe("supplied Research page resource restoration", () => {
  it("renders only the requested three top-level research categories with Reiki nested in Healy", () => {
    expect(source).toContain('id="ondamed"');
    expect(source).toContain("ONDAMED / PEMF Research");
    expect(source).toContain('id="healy"');
    expect(source).toContain("Healy &amp; Frequency-Based Wellbeing Resources");
    expect(source).toContain('className="research-subsection"');
    expect(source).toContain("Reiki &amp; Distant Reiki Resources");
    expect(source).not.toContain('id="reiki"');
    expect(source).toContain('id="guided-meditations"');
    expect(source).toContain("Guided Meditation Journeys &amp; Inner Imagery Research");
    expect(page).toContain("<ResearchResources />");
  });

  it("preserves all supplied research links and key educational disclaimers without research buttons", () => {
    [
      "https://ondamed.net/wp-content/uploads/2022/10/IJHAS_Publication_Gene_Expression_and_OM.pdf",
      "https://www.dovepress.com/effect-of-pulsed-electromagnetic-field-treatment-on-programmed-resolut-peer-reviewed-fulltext-article-JIR",
      "https://www.sciencedirect.com/science/article/pii/S2214031X25000348",
      "https://us.healy.shop/the-scientific-basis-of-the-healy/",
      "https://www.fortunejournals.com/articles/selftreatment-to-improve-mental-and-physical-health-using-two-bioenergetic-devices-a-randomized-controlled-trial.pdf",
      "https://pubmed.ncbi.nlm.nih.gov/36696891/",
      "https://pubmed.ncbi.nlm.nih.gov/24582620/",
      "https://pubmed.ncbi.nlm.nih.gov/30948444/",
      "https://pubmed.ncbi.nlm.nih.gov/35911042/",
      "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2014.01090/pdf",
      "https://pubmed.ncbi.nlm.nih.gov/37600600/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10346678/",
      "https://pubmed.ncbi.nlm.nih.gov/19926022/",
      "https://pubmed.ncbi.nlm.nih.gov/30333777/",
    ].forEach((url) => expect(source).toContain(url));

    expect(source).toContain("These resources are provided for educational background only.");
    expect(source).toContain("WellBeingFem does not claim that");
    expect(source).toContain("ONDAMED diagnoses, treats, cures or prevents any medical condition.");
    expect(source).toContain("Healy-specific published research is still limited and should be read with care.");
    expect(source).toContain("Reiki research is developing and should be read with care.");
    expect(source).toContain("Guided meditation journeys and inner imagery practices can be supportive, but experiences vary.");
    expect(source).not.toContain("View Research");
    expect(source).not.toContain("Microcurrent Therapy Observational Study");
    expect(source).not.toContain("Mental Imagery, Intention-Setting and Goal Reflection");
  });
});
