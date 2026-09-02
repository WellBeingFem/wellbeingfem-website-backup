import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const page = readFileSync(resolve(process.cwd(), "client/src/pages/GuidedMeditations.tsx"), "utf8")
  .replace(/&amp;/g, "&")
  .replace(/\s+/g, " ");
const styles = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Guided Meditation Journeys page", () => {
  it("uses the supplied image unchanged with the established YouTube destination", () => {
    expect(page).toContain('const GUIDED_MEDITATIONS_IMAGE = "/manus-storage/GuidedMedsite_26b6689f.png";');
    expect(page).toContain("width={1672}");
    expect(page).toContain("height={941}");
    expect(page).toContain('const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";');
    expect(page).toContain("WellBeingFem YouTube Channel");
    expect(page).toContain('target="_blank"');
    expect(page).toContain('rel="noreferrer"');
    expect(styles).toContain(".guided-meditations-page__figure {");
    expect(styles).toContain("float: left;");
    expect(styles).toContain("object-fit: contain;");
    expect(styles).not.toContain(".guided-meditations-page__figure img {\n  object-fit: cover;");
    expect(styles).toContain("@media (max-width: 900px)");
    expect(styles).toContain(".guided-meditations-page__figure {\n    float: none;");
  });

  it("preserves all supplied page headings and body text", () => {
    const suppliedCopy = [
      "GUIDED MEDITATION JOURNEYS",
      "Women’s Wisdom & Mind–Body–Spirit Wellbeing",
      "Women carry deep wisdom through every stage of life. At times it feels close and familiar; at others, it can become obscured beneath responsibility, change, grief, uncertainty or the demands of everyday life.",
      "WellBeingFem Guided Meditation Journeys create a doorway inward. Through imagined landscapes, archetypal symbols, evocative imagery and the creative intelligence of the imagination, each journey invites deeper awareness, reconnection with inner wisdom and discovery of aspects of the self that may have been forgotten, hidden from view or not yet fully known.",
      "These journeys are more than relaxation recordings. They are structured meditation and guided visualisation experiences designed to support rest, reflection, emotional regulation and inner renewal.",
      "Each meditation unfolds as an inner journey. A path may lead through an ancient forest, a corridor may open onto unexpected doors, or a mountain summit may reveal a wider horizon.",
      "PERSONAL TRANSFORMATION & WELLBEING",
      "Research into meditation and guided imagery suggests that structured inner practices may support stress regulation, emotional balance, body awareness, resilience and overall wellbeing.",
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
    expect(page).toContain("<p><em>WellBeingFem Guided Meditations are offered as reflective wellbeing and self-development support.");
    expect(styles).toContain(".guided-meditations-page__wellbeing-note h2 {\n  font-style: normal;");
  });
});
