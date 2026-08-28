import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
const styleSource = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");

describe("Women’s Wisdom homepage recovery section", () => {
  it("keeps the supplied managed image and approved copy", () => {
    expect(homeSource).toContain('const WOMENS_WISDOM_IMAGE_URL = "/manus-storage/WomensWisdom1image_c8dbd7a7.png";');
    expect(homeSource).toContain("Women’s Wisdom in Times of Change");
    expect(homeSource).toContain("Forthcoming Meditation Series &amp; Companion Books");
    expect(homeSource).toContain("The forthcoming Women’s Wisdom in Times of Change series will bring together guided meditation journeys, archetypal symbolism and reflective companion books created to support deeper self-understanding, inner renewal and mind–body–spirit awareness.");
    expect(homeSource).toContain("The first book, Seven Archetypal Journeys of Self-Discovery, is set within an ancient forest landscape.");
    expect(homeSource).toContain("Each companion volume is designed to deepen the meditation experience.");
    expect(homeSource).toContain("WellBeingFem Members’ Library");
    expect(homeSource).toContain("The launch of Women’s Wisdom in Times of Change will also open the WellBeingFem online Members Library, where the first meditation series and companion book will be included with membership.");
    expect(homeSource).toContain("Members will also receive access to two monthly guided meditations aligned with each month’s New Moon for intention, creation and new beginnings, and Full Moon for reflection, release and renewal.");
    expect(homeSource).toContain("The series will continue with future companion books exploring deeper reflection, energy awareness, spiritual dialogue and self-understanding.");
    expect(homeSource).toContain("Join the Women’s Wisdom Launch List");
    expect(homeSource).toContain("Be notified when Women’s Wisdom in Times of Change becomes available.");
  });

  it("provides independent More/Less controls for both expandable blocks", () => {
    expect(homeSource).toContain("const [changeDetailsOpen, setChangeDetailsOpen] = useState(false);");
    expect(homeSource).toContain("const [membersLibraryOpen, setMembersLibraryOpen] = useState(false);");
    expect(homeSource).toContain('aria-controls="womens-wisdom-change-details"');
    expect(homeSource).toContain('aria-controls="womens-wisdom-members-details"');
    expect(homeSource).toContain('{changeDetailsOpen ? "Less" : "More"}');
    expect(homeSource).toContain('{membersLibraryOpen ? "Less" : "More"}');
  });

  it("keeps the image whole and stacks it first on mobile", () => {
    expect(styleSource).toContain(".womens-wisdom__image-wrap img {");
    expect(styleSource).toContain("object-fit: contain;");
    expect(styleSource).toContain(".womens-wisdom {\n  display: grid;");
    expect(styleSource).toContain("@media (max-width: 760px) {\n  .womens-wisdom {\n    grid-template-columns: minmax(0, 1fr);");
  });
});
