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
    expect(homeSource).toContain('href="mailto:WellBeingFem@gmail.com?subject=Women%E2%80%99s%20Wisdom%20Launch%20List"');
    expect(homeSource).toContain("WellBeingFem Meditations");
    expect(homeSource).toContain('target="_blank"');
    expect(styleSource).toContain(".womens-wisdom__actions {");
    expect(styleSource).toContain("flex-direction: column;");
    expect(homeSource).toContain("Be notified when Women’s Wisdom in Times of Change becomes available.");
  });

  it("keeps the first More/Less control and shows the complete Members’ Library text at all times", () => {
    expect(homeSource).toContain("const [changeDetailsOpen, setChangeDetailsOpen] = useState(false);");
    expect(homeSource).not.toContain("membersLibraryOpen");
    expect(homeSource).toContain('aria-controls="womens-wisdom-change-details"');
    expect(homeSource).not.toContain('aria-controls="womens-wisdom-members-details"');
    expect(homeSource).toContain('{changeDetailsOpen ? "Less" : "More"}');
    expect(homeSource.match(/className="womens-wisdom__more"/g)).toHaveLength(1);
  });

  it("keeps the image whole, stacks it first on mobile, and wraps desktop text around it", () => {
    expect(styleSource).toContain(".womens-wisdom__image-wrap img {");
    expect(styleSource).toContain("object-fit: contain;");
    expect(styleSource).not.toContain(".womens-wisdom {\n  display: grid;");
    expect(styleSource).toContain("@media (min-width: 1025px) {\n  .womens-wisdom__image-wrap {\n    float: left;");
  });
});

describe("Free WellBeingFem Resources homepage carousel", () => {
  it("places the exact new section after Our Philosophy and before the next existing section", () => {
    const philosophyIndex = homeSource.indexOf('<section className="homepage-philosophy"');
    const resourcesIndex = homeSource.indexOf('<section className="homepage-resources"');
    const clientExperiencesIndex = homeSource.indexOf('<section className="client-experiences"');

    expect(philosophyIndex).toBeGreaterThan(-1);
    expect(resourcesIndex).toBeGreaterThan(philosophyIndex);
    expect(clientExperiencesIndex).toBeGreaterThan(resourcesIndex);
    expect(homeSource).toContain("Free WellBeingFem Resources");
    expect(homeSource).toContain("Explore a growing collection of free WellBeingFem resources created to support reflection, learning and everyday wellbeing.");
    expect(homeSource).toContain("New resources will be added regularly.");
  });

  it("uses both supplied portrait images unchanged and only the approved supporting copy", () => {
    expect(homeSource).toContain('const RESOURCE_01_IMAGE_URL = "/manus-storage/WBfResource01CardImage_2ee9605d.png";');
    expect(homeSource).toContain('const RESOURCE_02_IMAGE_URL = "/manus-storage/WBfResource02CardImage_3dc660c3.png";');
    expect(homeSource).toContain("const resourceCards = [");
    expect(homeSource.match(/id: "resource-0[12]"/g)).toHaveLength(2);
    expect(homeSource).toContain('width="1122"');
    expect(homeSource).toContain('height="1402"');
    expect(styleSource).toContain("aspect-ratio: 561 / 701;");
    expect(styleSource).toContain("object-fit: contain;");
    expect(homeSource).toContain("Explore frequency, rhythm, fractals and the patterns woven through nature, the body and everyday wellbeing.");
    expect(homeSource).toContain("Explore imagination as an inner resource for wellbeing, resilience, symbolism, balance, harmony and a deeper sense of inner safety.");
  });

  it("links only Resource 01 to the supplied Kit form in a new tab and keeps Resource 02 non-clickable", () => {
    expect(homeSource).toContain("Get Free Resource");
    expect(homeSource).toContain('const RESOURCE_01_KIT_URL = "https://wellbeingfem.kit.com/21bbc416b2";');
    expect(homeSource).toContain('href={RESOURCE_01_KIT_URL}');
    expect(homeSource).toContain('target="_blank"');
    expect(homeSource).toContain('rel="noopener noreferrer"');
    expect(homeSource).toContain('className="homepage-resource-card__status"');
    expect(homeSource).toContain("Coming Soon");
    expect(homeSource).not.toContain('href="Coming Soon"');
  });

  it("uses a data-driven responsive carousel with automatic overflow navigation and mobile one-card slides", () => {
    expect(homeSource).toContain("const resourceCards = [");
    expect(homeSource).toContain("resourceCards.map((resource)");
    expect(homeSource).toContain('setApi={setResourceCarouselApi}');
    expect(homeSource).toContain("resourceCarouselApi.canScrollPrev() || resourceCarouselApi.canScrollNext()");
    expect(homeSource).toContain("resourceCanNavigate ? (");
    expect(homeSource).toContain("resourceCarouselApi?.scrollTo(index)");
    expect(styleSource).toContain(".homepage-resources__slide {\n  display: flex;\n  flex: 0 0 50%;");
    expect(styleSource).toContain("@media (max-width: 640px)");
    expect(styleSource).toContain(".homepage-resources__slide {\n    flex-basis: 100%;");
  });
});

describe("Homepage opening position", () => {
  it("starts direct and About-home loads at the full header while preserving intentional section anchors", () => {
    expect(homeSource).toContain('import { useEffect, useLayoutEffect, useState } from "react";');
    expect(homeSource).toContain('window.history.scrollRestoration = "manual";');
    expect(homeSource).toContain('if (!targetId || targetId === "about")');
    expect(homeSource).toContain('window.scrollTo({ top: 0, left: 0, behavior: "auto" })');
    expect(homeSource).toContain('document.getElementById(targetId)?.scrollIntoView({ block: "start" });');
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
    const heroPictureSource = homeSource.slice(
      homeSource.indexOf('<picture className="hero-picture">'),
      homeSource.indexOf("</picture>"),
    );
    expect(heroPictureSource).not.toContain('loading="lazy"');
  });

  it("uses stronger green only for primary homepage actions", () => {
    expect(homeSource.match(/service-card-button service-card-button--primary/g)).toHaveLength(2);
    expect(homeSource).toContain('className="service-card-button" href="/ondamed">Learn More');
    expect(homeSource).toContain('className="service-card-button" href="/research#healy">Learn More');
    expect(styleSource).toContain(".service-card-button--primary,\n.homepage-contact-button {\n  background: #3f6b4f;");
    expect(styleSource).toContain(".womens-wisdom__more,\n.womens-wisdom__launch-button {");
    expect(styleSource).toContain("background: var(--wbf-sage);");
    expect(styleSource).toContain(".womens-wisdom__launch-button {\n  display: flex;\n  width: fit-content;\n  margin-top: 0;\n  background: #3f6b4f;");
  });
});
