import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("ONDAMED page image addition", () => {
  it("uses the supplied image only on the dedicated ONDAMED page with a Contact Form booking link", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx");
    const home = readProjectFile("client/src/pages/Home.tsx");

    expect(page).toContain('/manus-storage/ondamedwlogo-page-1448_113a94c2.webp');
    expect(page).toContain('/manus-storage/ondamedwlogo-page-720_a87d4d44.webp');
    expect(page).toContain('/manus-storage/ondamedwlogo-page-1448_147a2994.jpg');
    expect(page).toContain('/manus-storage/ondamedwlogo-page-720_6f3bbdb0.jpg');
    expect(page).toContain('<source media="(max-width: 900px)" type="image/webp"');
    expect(page).toContain('<source media="(max-width: 900px)" type="image/jpeg"');
    expect(page).toContain('loading="eager"');
    expect(page).toContain('fetchPriority="high"');
    expect(page).toContain('width={1448}');
    expect(page).toContain('height={1086}');
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

  it("keeps the requested title hierarchy, centered support card, and the single approved opening More/Less control", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx");
    const styles = readProjectFile("client/src/index.css");

    expect(page).toContain('<h1 id="ondamed-page-heading">ONDAMED PEMF</h1>');
    expect(page).toContain('className="ondamed-page__subtitle">Wellbeing Sessions</p>');
    expect(page.match(/className="ondamed-page__more"/g)).toHaveLength(1);
    expect(page).toContain("setIntroExpanded");
    expect(page).not.toContain("setWhyExpanded");
    expect(page).not.toContain("setExpectationsExpanded");
    expect(page).not.toContain("setWaterExpanded");
    expect(page).not.toContain("setApproachExpanded");
    expect(page).toContain('className="ondamed-page__support-card"');
    expect(page).toContain('id="ondamed-support-heading"');
    expect(styles).toContain(".ondamed-page__more");
    expect(styles).toContain("background: #3f6b4f;");
    expect(styles).toContain(".ondamed-page__support-card");
    expect(styles).toContain("border: 1px solid var(--wbf-green);");
    expect(styles).toContain("width: min(100%, 980px);");
    expect(styles).toContain("margin: 30px auto 32px;");
    expect(styles).toContain("margin: 0 0 24px;");
    expect(styles).toContain("grid-template-columns: repeat(2, minmax(0, 1fr));");
    expect(styles).toContain("grid-template-columns: minmax(0, 1fr);");
    expect(styles).toContain(".ondamed-page__support-list li::before");
    expect(styles).toContain('background-image: url("/manus-storage/WBFFlowerfromlogo_60274cdc.png")');
    expect(styles).toContain("list-style: none;");
  });

  it("adds the responsive booking fee, keeps Why Choose inside the opening disclosure, and retains the final wellbeing note verbatim", () => {
    const page = readProjectFile("client/src/pages/Ondamed.tsx").replace(/\s+/g, " ");
    const styles = readProjectFile("client/src/index.css");

    expect(page).toContain("Session Fee: €120 | Course of 3: €300");
    expect(page).toContain('className="ondamed-page__booking-row"');
    expect(page).toContain('aria-controls="ondamed-intro-more"');
    expect(page).toContain('<div id="ondamed-intro-more" className="ondamed-page__disclosure">');
    expect(page).not.toContain('id="ondamed-why-more"');
    expect(page).toContain("ONDAMED is a German-developed system that combines focused PEMF stimulation with biofeedback.");
    expect(page).toContain("Rather than using a standard one-size-fits-all PEMF approach, ONDAMED uses your body’s responses to help guide the selection of frequencies, applicators and areas of focus. This allows each session to be shaped around what appears most relevant for you at that time.");
    expect(page).toContain("ONDAMED sessions at WellBeingFem are offered as complementary wellbeing support. They are not intended to diagnose, treat, cure or prevent any medical condition and are not a replacement for medical advice, diagnosis or treatment from a qualified healthcare professional.");
    expect(page).toContain('<h2 id="ondamed-wellbeing-note-heading">WELLBEING NOTE</h2>');
    expect(page).toContain("<em>");
    expect(styles).toContain(".ondamed-page__booking-row {");
    expect(styles).toContain("flex-direction: column;");
    expect(styles).toContain(".ondamed-page__wellbeing-note {");
    expect(styles).toContain("font-style: normal;");
  });
});
