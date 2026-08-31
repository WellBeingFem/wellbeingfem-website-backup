import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("ONDAMED page image addition", () => {
  it("uses the supplied image only on the dedicated ONDAMED page with a Contact Form booking link", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx");
    const home = readProjectFile("client/src/pages/Home.tsx");

    expect(page).toContain('/manus-storage/ondamedwlogo-page_477a3f15.png');
    expect(page).toContain('href="/research#contact"');
    expect(page).toContain("Make a Booking");
    expect(home).not.toContain("ondamedwlogo-page_477a3f15.png");
    expect(home).toContain('className="service-card-button" href="/ondamed">Learn More</a>');
  });

  it("restores the complete approved ONDAMED copy with unbolded support list items", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx")
      .replace(/\{\" \"\}/g, " ")
      .replace(/\s+/g, " ");
    const approvedPhrases = [
      "ONDAMED PEMF",
      "Wellbeing Sessions",
      "ONDAMED is a powerful, non-invasive biofeedback system that combines focused pulsed electromagnetic field stimulation with a personalised frequency-based approach.",
      "At WellBeingFem, ONDAMED sessions are offered in Dublin",
      "for women seeking deeper support around stress regulation, nervous system calm, sleep, low energy, hormonal change and transition, digestive wellbeing and inflammation-related concerns.",
      "Why Choose ONDAMED PEMF?",
      "ONDAMED is a German-developed system that combines focused PEMF stimulation with biofeedback.",
      "Rather than using a standard one-size-fits-all PEMF approach, ONDAMED uses your body’s responses to help guide the selection of frequencies, applicators and areas of focus. This allows each session to be shaped around what appears most relevant for you at that time.",
      "Stress regulation and nervous system balance",
      "Poor sleep and rest disruption",
      "Low energy and physical depletion",
      "Hormonal change, perimenopause and menopause",
      "Digestive wellbeing and bloating-related concerns",
      "Inflammation-related wellbeing concerns",
      "Metabolic wellbeing and weight-management concerns",
      "Emotional overwhelm and body disconnection",
      "Recovery, restoration and resilience",
      "What to Expect During Your ONDAMED Session",
      "Your ONDAMED session lasts approximately 60 minutes.",
      "During your session, the ONDAMED biofeedback system helps guide the frequencies and applicators selected.",
      "Focused pulsed electromagnetic field stimulation is then delivered through applicators positioned on or near selected areas of the body. The session is non-invasive and designed to support the body’s natural capacity for regulation, restoration and balance.",
      "You remain fully clothed throughout and can simply sit or recline comfortably while the session runs.",
      "ONDAMED Frequency-Charged Water",
      "As an optional addition to your ONDAMED experience, clients can receive water prepared using selected ONDAMED frequencies focused around women’s wellbeing.",
      "Many clients enjoy bringing their own water bottle to each session so they can take their frequency-charged water home and continue enjoying it after their appointment.",
      "ONDAMED guidance states that charged water can be diluted at a ratio of 1 part charged water to 5 parts water.",
      "A Personalised Approach to Wellbeing",
      "Women often come to ONDAMED when they feel that something in their body, energy or inner balance has shifted — perhaps through stress, poor sleep, low energy, hormonal change, digestive imbalance, metabolic changes or periods of nervous system overwhelm.",
      "Some women choose ONDAMED as part of an ongoing wellbeing routine, while others prefer a short course of sessions when they feel depleted, overstimulated or simply no longer quite like themselves.",
      "Every session is individual. Clients may notice changes in areas such as energy, sleep, stress response, body awareness, emotional balance, focus, digestion and physical comfort. Some experiences may be gradual, while others can feel more immediate or deeply restorative.",
    ];

    approvedPhrases.forEach((phrase) => expect(page).toContain(phrase));
    expect(page).not.toContain("<strong>");
  });

  it("uses a desktop float and tablet/mobile image-first stacking without image cropping", () => {
    const styles = readProjectFile("client/src/index.css");

    expect(styles).toContain(".ondamed-page__figure");
    expect(styles).toContain("float: left");
    expect(styles).toContain(".ondamed-page__figure img");
    expect(styles).toContain("height: auto");
    expect(styles).toContain("@media (max-width: 900px)");
    expect(styles).toContain("float: none");
  });

  it("keeps the requested title hierarchy, support card, and four independent green More/Less controls", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx");
    const styles = readProjectFile("client/src/index.css");

    expect(page).toContain('<h1 id="ondamed-page-heading">ONDAMED PEMF</h1>');
    expect(page).toContain('className="ondamed-page__subtitle">Wellbeing Sessions</p>');
    expect(page.match(/className="ondamed-page__more"/g)).toHaveLength(4);
    expect(page).toContain("setIntroExpanded");
    expect(page).toContain("setExpectationsExpanded");
    expect(page).toContain("setWaterExpanded");
    expect(page).toContain("setApproachExpanded");
    expect(page).toContain('className="ondamed-page__support-card"');
    expect(page).toContain('id="ondamed-support-heading"');
    expect(styles).toContain(".ondamed-page__more");
    expect(styles).toContain("background: #3f6b4f;");
    expect(styles).toContain(".ondamed-page__support-card");
    expect(styles).toContain("border: 1px solid var(--wbf-green);");
  });
});
