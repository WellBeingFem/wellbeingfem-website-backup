import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const pageSource = readFileSync(resolve(process.cwd(), "client/src/pages/GuidedMeditations.tsx"), "utf8");
const page = pageSource.replace(/&amp;/g, "&").replace(/\s+/g, " ");
const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Guided Meditation Journeys page", () => {
  it("keeps the supplied image unchanged and integrates the exact title within its left media panel", () => {
    expect(page).toContain('const GUIDED_MEDITATIONS_IMAGE = "/manus-storage/GuidedMedsite_26b6689f.png";');
    expect(page).toContain("width={1672}");
    expect(page).toContain("height={941}");
    expect(page).toContain('className="guided-meditations-page__media-panel"');
    expect(page.indexOf('className="guided-meditations-page__media-panel"')).toBeLessThan(page.indexOf("GUIDED MEDITATION JOURNEYS"));
    expect(page.indexOf("GUIDED MEDITATION JOURNEYS")).toBeLessThan(page.indexOf('className="guided-meditations-page__figure"'));
    expect(page).toContain("Women’s Wisdom & Mind–Body–Spirit Wellbeing");
    expect(styles).toContain(".guided-meditations-page__media-panel {");
    expect(styles).toContain("float: left;");
    expect(styles).toContain("object-fit: contain;");
    expect(styles).not.toContain(".guided-meditations-page__figure img {\n  object-fit: cover;");
    expect(styles).toContain(".guided-meditations-page__media-panel {\n    float: none;");
  });

  it("preserves the existing YouTube action and exact page wording", () => {
    expect(page).toContain('const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";');
    expect(page).toContain("WellBeingFem YouTube Channel");
    expect(page).toContain('target="_blank"');
    expect(page).toContain('rel="noreferrer"');

    const suppliedCopy = [
      "Women carry deep wisdom through every stage of life. At times it feels close and familiar; at others, it can become obscured beneath responsibility, change, grief, uncertainty or the demands of everyday life.",
      "WellBeingFem Guided Meditation Journeys create a doorway inward.",
      "Through imagined landscapes, archetypal symbols, evocative imagery and the creative intelligence of the imagination, each journey invites deeper awareness, reconnection with inner wisdom and discovery of aspects of the self that may have been forgotten, hidden from view or not yet fully known.",
      "These journeys are more than relaxation recordings. They are structured meditation and guided visualisation experiences designed to support rest, reflection, emotional regulation and inner renewal.",
      "Each meditation unfolds as an inner journey. A path may lead through an ancient forest, a corridor may open onto unexpected doors, or a mountain summit may reveal a wider horizon.",
      "PERSONAL TRANSFORMATION & WELLBEING",
      "Research into meditation and guided imagery suggests that structured inner practices may support stress regulation, emotional balance, body awareness, resilience and overall wellbeing. WellBeingFem Meditation Journeys draw on this research-informed understanding while remaining rooted in women’s wisdom, symbolic reflection and mind–body–spirit awareness.",
      "Each journey is personal. There is simply an invitation to relax, listen and allow the images, symbols and inner landscape to unfold in their own way.",
      "There is no right or wrong experience.",
      "No two journeys are ever quite the same.",
      "Begin with a free WellBeingFem Guided Meditation and allow yourself time to step away from the outer world, journey inward and return with whatever insight, stillness or renewed awareness the experience may offer.",
      "REST • REFLECT • RENEW",
      "Step away from the noise of everyday life and enter a space created for rest, sleep, restoration and emotional renewal.",
      "Create space for stillness, perspective and deeper reflection, allowing the mind to quieten and inner wisdom to become easier to hear.",
      "Reconnect with energy, confidence and a renewed sense of possibility through times of change, personal challenge, perimenopause or menopause.",
      "WELLBEING NOTE",
      "WellBeingFem Guided Meditations are offered as reflective wellbeing and self-development support. They are not a replacement for medical care, psychotherapy, trauma therapy, diagnosis or treatment from a qualified healthcare professional.",
    ];

    suppliedCopy.forEach((copy) => expect(page).toContain(copy));
  });

  it("adds two independent More/Less disclosures at the requested copy boundaries", () => {
    expect(page.match(/className="guided-meditations-page__more"/g)).toHaveLength(2);
    expect(page).toContain("const [openingExpanded, setOpeningExpanded] = useState(false);");
    expect(page).toContain("const [transformationExpanded, setTransformationExpanded] = useState(false);");
    expect(page).toContain('aria-controls="guided-meditations-opening-details"');
    expect(page).toContain('aria-controls="guided-meditations-transformation-details"');
    expect(page).toContain('{openingExpanded ? "Less" : "More"}');
    expect(page).toContain('{transformationExpanded ? "Less" : "More"}');
    expect(page.indexOf("WellBeingFem Guided Meditation Journeys create a doorway inward.")).toBeLessThan(page.indexOf('aria-controls="guided-meditations-opening-details"'));
    expect(page.indexOf("Research into meditation and guided imagery suggests")).toBeLessThan(page.indexOf('aria-controls="guided-meditations-transformation-details"'));
  });

  it("links directly to existing Guided Meditation research and keeps the note typography", () => {
    expect(page).toContain('href="/research#guided-meditations"');
    expect(page).toContain("View Research");
    expect(page).toContain("<p><em>WellBeingFem Guided Meditations are offered as reflective wellbeing and self-development support.");
    expect(styles).toContain(".guided-meditations-page__wellbeing-note h2 {\n  font-style: normal;");
  });

  it("uses three equal-height refined Rest, Reflect, and Renew cards with mobile stacking", () => {
    expect(page.match(/className="guided-meditations-page__renewal-card"/g)).toHaveLength(3);
    expect(styles).toContain("grid-template-columns: repeat(3, minmax(0, 1fr));");
    expect(styles).toContain("align-items: stretch;");
    expect(styles).toContain("border-radius: 14px;");
    expect(styles).toContain("background: #fbf8f0;");
    expect(styles).toContain("box-shadow: 0 10px 25px rgb(65 86 72 / 6%);");
    expect(styles).toContain(".guided-meditations-page__renewal-items {\n    grid-template-columns: minmax(0, 1fr);");
  });
});
