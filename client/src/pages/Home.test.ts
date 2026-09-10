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
    const resourcesIndex = homeSource.indexOf('className="homepage-resources"');
    const clientExperiencesIndex = homeSource.indexOf('<section className="client-experiences"');

    expect(philosophyIndex).toBeGreaterThan(-1);
    expect(resourcesIndex).toBeGreaterThan(philosophyIndex);
    expect(clientExperiencesIndex).toBeGreaterThan(resourcesIndex);
    expect(homeSource).toContain('id="free-wellbeingfem-resources"');
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

  it("links Resource 01 only to the restored first-party Resources hub and keeps Resource 02 non-clickable", () => {
    expect(homeSource).toContain("Get Free Resource");
    expect(homeSource).toContain('className="homepage-resource-card__button"');
    expect(homeSource).toContain('href="/resources"');
    expect(homeSource).not.toContain("RESOURCE_01_KIT_URL");
    expect(homeSource).not.toContain("https://wellbeingfem.kit.com/21bbc416b2");
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
    expect(styleSource).toContain("scroll-margin-top: 135px;");
    expect(styleSource).toContain("scroll-margin-top: 119px;");
    expect(styleSource).toContain("scroll-margin-top: 105px;");
    expect(homeSource).toContain('window.location.hash === "#free-wellbeingfem-resources"');
    expect(homeSource).toContain('window.addEventListener("hashchange", updateResourcesAnchorState)');
    expect(homeSource).toContain('site-shell--resources-anchor');
    expect(styleSource).toContain(".site-shell--resources-anchor > .site-header {");
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
  it("uses the supplied complete hero with two transparent, accessible action hotspots", () => {
    expect(homeSource).toContain('const DESKTOP_HERO_FALLBACK_URL = "/manus-storage/GreenHeroDesktop_79969576.png";');
    expect(homeSource).toContain('const DESKTOP_HERO_WEBP_1280 = "/manus-storage/GreenHeroDesktop-1280_752dae66.webp";');
    expect(homeSource).toContain('const DESKTOP_HERO_WEBP_1600 = "/manus-storage/GreenHeroDesktop-1600_66805239.webp";');
    expect(homeSource).toContain('const MOBILE_HERO_FALLBACK_URL = "/manus-storage/mobileHerowithflower_fbd04612.png";');
    expect(homeSource).toContain('const MOBILE_HERO_WEBP_480 = "/manus-storage/mobileHerowithflower-480_c468ad6b.webp";');
    expect(homeSource).toContain('const MOBILE_HERO_WEBP_720 = "/manus-storage/mobileHerowithflower-720_46706bfe.webp";');
    expect(homeSource).toContain('const [mobileHeroActive, setMobileHeroActive] = useState(false);');
    expect(homeSource).toContain('const mediaQuery = window.matchMedia(MOBILE_HERO_MEDIA_QUERY);');
    expect(homeSource).toContain('className="hero-picture__image hero-picture__image--mobile"');
    expect(homeSource).toContain('srcSet={`${MOBILE_HERO_WEBP_480} 480w, ${MOBILE_HERO_WEBP_720} 720w`}');
    expect(homeSource).toContain('srcSet={`${DESKTOP_HERO_WEBP_1280} 1280w, ${DESKTOP_HERO_WEBP_1600} 1600w`}');
    expect(homeSource).toContain('sizes="100vw"');
    expect(homeSource).toContain('width="941"');
    expect(homeSource).toContain('height="1672"');
    expect(homeSource).toContain('className="hero-action-link hero-action-link--sessions"');
    expect(homeSource).toContain('className="hero-action-link hero-action-link--resource"');
    expect(homeSource).toContain('className="mobile-hero-button-link mobile-hero-button-link--sessions"');
    expect(homeSource).toContain('className="mobile-hero-button-link mobile-hero-button-link--resource"');
    expect(homeSource.match(/className="mobile-hero-button-link/g)).toHaveLength(2);
    expect(homeSource).not.toContain('mobile-hero-anchor');
    expect(homeSource).not.toContain('mobile-hero-action-link');
    expect(homeSource).toContain('href="/#ondamed-service-card"');
    expect(homeSource).toContain('href="/resources"');
    expect(homeSource).toContain('aria-label="Browse free WellBeingFem resources"');
    expect(homeSource).toContain('id="homepage-services"');
    expect(homeSource).toContain('id="ondamed-service-card"');
    expect(homeSource).toContain('id="founders-note"');
    expect(homeSource).toContain("A Note from the Founder");
    expect(homeSource).toContain("WellBeingFem grew from a long-standing curiosity about how we can actively cultivate our wellbeing in everyday life");
    expect(homeSource).toContain("I’m Suzanne, a Doctor of Education and an educator with more than 20 years of experience.");
    expect(homeSource).toContain("“All that I seek is already within me.”");
    expect(homeSource).toContain("Founder, WellBeingFem");
    expect(homeSource.indexOf('id="founders-note"')).toBeGreaterThan(homeSource.indexOf('<section className="womens-wisdom"'));
    expect(homeSource.indexOf('id="founders-note"')).toBeLessThan(homeSource.indexOf("<SiteFooter />"));
    expect(styleSource).toContain(".hero-action-link {\n  position: absolute;");
    expect(styleSource).toContain("display: block;\n  top: 73.54%;\n  height: 9.78%;\n  pointer-events: auto !important;\n  touch-action: manipulation;");
    expect(styleSource).toContain(".hero-action-link--sessions {\n  left: 5.60%;\n  width: 19.44%;");
    expect(styleSource).toContain(".hero-action-link--resource {\n  left: 26.44%;\n  width: 18.30%;");
    expect(styleSource).toContain(".mobile-hero-button-link {\n    position: absolute;");
    expect(styleSource).toContain(".mobile-hero-button-link--sessions {\n    top: 72.35%;\n    height: 6.10%;");
    expect(styleSource).toContain(".mobile-hero-button-link--resource {\n    top: 83.18%;\n    height: 6.40%;");
    expect(styleSource).toContain("width: 82.0%;");
    expect(styleSource).toContain(".hero-action-link {\n    display: none;");
    expect(styleSource).toContain("border: 0 !important;\n  border-radius: 0 !important;\n  background: transparent !important;");
  });

  it("restores WellBeingFem-only Guided Meditations copy and its existing YouTube destination", () => {
    expect(homeSource).toContain('const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";');
    expect(homeSource).toContain('const GUIDED_MEDITATIONS_IMAGE_URL = "/manus-storage/WBFUpdatedYTQR_cf8434a2.png";');
    expect(homeSource).toContain("Explore guided meditation journeys and wellbeing practices through the WellBeingFem YouTube Channel.");
    expect(homeSource).toContain("WellBeingFem Members’ Library — Coming Soon");
    expect(homeSource).not.toContain("Duration: Varies by meditation");
    expect(homeSource).toContain("Visit WellBeingFem on YouTube");
    expect(homeSource).toContain('href={WELLBEINGFEM_YOUTUBE_URL}');
    expect(homeSource).toContain('alt="WellBeingFem YouTube Channel QR code" width="1254" height="1254"');
    expect(homeSource).not.toContain("Imagine Well");
  });

  it("keeps Client Experiences in source while hiding it from the public homepage", () => {
    expect(homeSource).toContain("const clientExperienceCards = [");
    expect(homeSource).toContain('<section className="client-experiences" aria-labelledby="client-experiences-heading" hidden>');
  });
});

describe("Primary CTA and hero performance update", () => {
  it("serves the supplied hero unchanged, eagerly, and proportionally at every breakpoint", () => {
    expect(homeSource).toContain('src={DESKTOP_HERO_FALLBACK_URL}');
    expect(homeSource).toContain('src={MOBILE_HERO_FALLBACK_URL}');
    expect(homeSource).toContain('srcSet={`${MOBILE_HERO_WEBP_480} 480w, ${MOBILE_HERO_WEBP_720} 720w`}');
    expect(homeSource).toContain('srcSet={`${DESKTOP_HERO_WEBP_1280} 1280w, ${DESKTOP_HERO_WEBP_1600} 1600w`}');
    expect(homeSource).toContain('loading="eager"');
    expect(homeSource).toContain('fetchPriority="high"');
    const heroPictureSource = homeSource.slice(
      homeSource.indexOf('<picture className="hero-picture">'),
      homeSource.indexOf("</picture>"),
    );
    expect(heroPictureSource).not.toContain('loading="lazy"');
    expect(styleSource).toContain("max-width: 1279.32px;");
    expect(styleSource).toContain("max-width: 923.96px;");
    expect(styleSource).toContain("object-fit: contain;");
  });

  it("uses stronger green only for primary homepage actions", () => {
    expect(homeSource.match(/service-card-button service-card-button--primary/g)).toHaveLength(2);
    expect(homeSource).toContain('className="service-card-button" href="/ondamed">Learn More');
    expect(homeSource).toContain('className="service-card-button" href="/healy">Learn More');
    expect(styleSource).toContain(".service-card__fees {\n  margin-top: 20px;\n  padding-top: 15px;\n  border-top: 0;");
    expect(styleSource).toContain(".service-card-button--primary,\n.homepage-contact-button {\n  background: #3f6b4f;");
    expect(styleSource).toContain(".womens-wisdom__more,\n.womens-wisdom__launch-button {");
    expect(styleSource).toContain("background: var(--wbf-sage);");
    expect(styleSource).toContain(".womens-wisdom__launch-button {\n  display: flex;");
    expect(styleSource).toContain(".founders-note {");
    expect(styleSource).toContain(".founders-note blockquote {");
  });
});
