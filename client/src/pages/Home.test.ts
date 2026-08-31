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

  it("keeps the image whole, stacks it first on mobile, and wraps desktop text around it", () => {
    expect(styleSource).toContain(".womens-wisdom__image-wrap img {");
    expect(styleSource).toContain("object-fit: contain;");
    expect(styleSource).not.toContain(".womens-wisdom {\n  display: grid;");
    expect(styleSource).toContain("@media (min-width: 1025px) {\n  .womens-wisdom__image-wrap {\n    float: left;");
  });
});

describe("Final pre-publication corrections", () => {
  it("keeps the hero Contact action on the existing Contact Form with the stronger primary treatment", () => {
    expect(homeSource).toContain('className="hero-booking-link"');
    expect(homeSource).toContain('href="/research#contact"');
    expect(homeSource).toContain('alt="ONDAMED PEMF Healy Frequency Sessions for Women, with a Contact WellBeingFem button"');
    expect(homeSource).not.toContain("<span>Contact WellBeingFem</span>");
    expect(styleSource).toContain(".hero-booking-link {\n  position: absolute;");
    expect(styleSource).toContain("border: 0 !important;\n  border-radius: 0 !important;\n  background: transparent !important;");
  });

  it("restores WellBeingFem-only Guided Meditations copy and its existing YouTube destination", () => {
    expect(homeSource).toContain('const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";');
    expect(homeSource).toContain("Explore guided meditation journeys and wellbeing practices through the WellBeingFem YouTube Channel.");
    expect(homeSource).toContain("WellBeingFem Members’ Library — Coming Soon");
    expect(homeSource).toContain("Visit WellBeingFem on YouTube");
    expect(homeSource).toContain('href={WELLBEINGFEM_YOUTUBE_URL}');
    expect(homeSource).not.toContain("Imagine Well");
  });

  it("keeps Client Experiences in source while hiding it from the public homepage", () => {
    expect(homeSource).toContain("const clientExperienceCards = [");
    expect(homeSource).toContain('<section className="client-experiences" aria-labelledby="client-experiences-heading" hidden>');
  });
});

describe("Primary CTA and hero performance update", () => {
  it("serves responsive WebP hero sources without lazy loading", () => {
    expect(homeSource).toContain('const HERO_WEBP_URL = "/manus-storage/NewHeroAug13-contact-green-900_f5dca042.webp";');
    expect(homeSource).toContain('const DESKTOP_HERO_WEBP_URL = "/manus-storage/DeaktopHeroWBF-contact-green-1600_0b9672ec.webp";');
    expect(homeSource).toContain('<source media="(min-width: 1025px)" type="image/webp" srcSet={DESKTOP_HERO_WEBP_URL} />');
    expect(homeSource).toContain('<source type="image/webp" srcSet={HERO_WEBP_URL} />');
    expect(homeSource).toContain('loading="eager"');
    expect(homeSource).toContain('fetchPriority="high"');
    expect(homeSource).not.toContain('loading="lazy"');
  });

  it("uses stronger green only for primary homepage actions", () => {
    expect(homeSource.match(/service-card-button service-card-button--primary/g)).toHaveLength(2);
    expect(homeSource).toContain('className="service-card-button" href="/ondamed">Learn More');
    expect(homeSource).toContain('className="service-card-button" href="/research#healy">Learn More');
    expect(styleSource).toContain(".service-card-button--primary,\n.homepage-contact-button {\n  background: #3f6b4f;");
    expect(styleSource).toContain(".womens-wisdom__more,\n.womens-wisdom__launch-button {");
    expect(styleSource).toContain("background: var(--wbf-sage);");
    expect(styleSource).toContain(".womens-wisdom__launch-button {\n  display: flex;\n  width: fit-content;\n  margin-top: 30px;\n  background: #3f6b4f;");
  });
});
