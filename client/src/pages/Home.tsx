/**
 * WellBeingFem restoration reminder: the supplied finished hero is authoritative.
 * It must remain complete, unedited, uncropped, and free of extra visible overlays.
 */
import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HERO_URL = "/manus-storage/NewHeroAug13-contact-green_24848412.png";
const DESKTOP_HERO_URL = "/manus-storage/DeaktopHeroWBF-contact-green_7266dbc9.png";
const HERO_WEBP_URL = "/manus-storage/NewHeroAug13-contact-green-900_f5dca042.webp";
const DESKTOP_HERO_WEBP_URL = "/manus-storage/DeaktopHeroWBF-contact-green-1600_0b9672ec.webp";
const ONDAMED_IMAGE_URL = "/manus-storage/ondamedwlogo_d68ec81a.png";
const HEALY_IMAGE_URL = "/manus-storage/Healyandphone_52ac329b.png";
const GUIDED_MEDITATIONS_IMAGE_URL = "/manus-storage/06_WBF_QR_YouTube_Channel_d57f9130.png";
const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";
const WOMENS_WISDOM_IMAGE_URL = "/manus-storage/WomensWisdom1image_c8dbd7a7.png";

const clientExperienceCards = [
  "Healy Wellbeing",
  "ONDAMED PEMF",
  "Healy Aura Analysis",
  "ONDAMED PEMF",
  "Healy I Ching",
  "ONDAMED PEMF",
];

const clientExperiencePreview =
  "A genuine client experience will be added here after client approval.";
const clientExperiencePlaceholder =
  "A genuine client experience will be added here after it has been supplied by the client, verified as approved for publication, and restored as part of this private recovery draft.";

export default function Home() {
  const [changeDetailsOpen, setChangeDetailsOpen] = useState(false);
  const [membersLibraryOpen, setMembersLibraryOpen] = useState(false);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="about">
        <section className="hero-image-container" aria-label="WellBeingFem ONDAMED PEMF">
          <div className="hero-media">
            <picture className="hero-picture">
              <source media="(min-width: 1025px)" type="image/webp" srcSet={DESKTOP_HERO_WEBP_URL} />
              <source media="(min-width: 1025px)" srcSet={DESKTOP_HERO_URL} />
              <source type="image/webp" srcSet={HERO_WEBP_URL} />
              <img
                src={HERO_URL}
                alt="ONDAMED PEMF Healy Frequency Sessions for Women, with a Contact WellBeingFem button"
                width="1448"
                height="1086"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <a
              className="hero-booking-link"
              href="/research#contact"
              aria-label="Open the Research page for the Contact and Booking Form"
            />
          </div>
        </section>

        <section className="homepage-services" aria-labelledby="homepage-services-heading">
          <header className="homepage-services__heading">
            <p>Frequencies for Women’s Wellbeing</p>
            <h1 id="homepage-services-heading">Women’s Wellbeing Sessions: ONDAMED PEMF, Healy &amp; Guided Meditations</h1>
          </header>

          <div className="service-card-grid">
            <article className="service-card">
              <div className="service-card__image">
                <img src={ONDAMED_IMAGE_URL} alt="ONDAMED equipment with WellBeingFem branding" width="1448" height="1086" />
              </div>
              <div className="service-card__body">
                <div className="service-card__intro">
                  <h2>ONDAMED PEMF</h2>
                  <p className="service-card__subheading">In-person sessions in Dublin</p>
                  <p>Personalised ONDAMED PEMF sessions supporting relaxation, balance and wellbeing.</p>
                </div>
                <div className="service-card__fees" aria-label="ONDAMED fees">
                  <p>In-person session</p>
                  <p>Duration: Approx. 60 minutes</p>
                  <p>Fee: €120</p>
                  <p>Course of three sessions: €300</p>
                </div>
                <div className="service-card__actions">
                  <a className="service-card-button" href="/ondamed">Learn More</a>
                  <a className="service-card-button service-card-button--primary" href="/research#contact">Make a Booking</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <div className="service-card__image">
                <img src={HEALY_IMAGE_URL} alt="Healy device and phone" width="1024" height="1024" />
              </div>
              <div className="service-card__body">
                <div className="service-card__intro">
                  <h2>Healy Frequency Sessions</h2>
                  <p className="service-card__subheading">Remote sessions via Zoom or WhatsApp</p>
                  <p>Personalised frequency sessions that can be experienced remotely in the comfort of your own space.</p>
                </div>
                <div className="service-card__fees" aria-label="Healy fees">
                  <p>Remote session</p>
                  <p>Duration: Approx. 60 minutes</p>
                  <p>Healy session: €80</p>
                  <p>Healy Reiki session: €90</p>
                </div>
                <div className="service-card__actions">
                  <a className="service-card-button" href="/research#healy">Learn More</a>
                  <a className="service-card-button service-card-button--primary" href="/research#contact">Make a Booking</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <div className="service-card__image">
                <img src={GUIDED_MEDITATIONS_IMAGE_URL} alt="WellBeingFem YouTube Channel QR code" width="1254" height="1254" />
              </div>
              <div className="service-card__body">
                <div className="service-card__intro">
                  <h2>Guided Meditations</h2>
                  <p className="service-card__subheading">Free Guided Meditations</p>
                  <p>Explore guided meditation journeys and wellbeing practices through the WellBeingFem YouTube Channel.</p>
                </div>
                <div className="service-card__fees" aria-label="Guided Meditations access information">
                  <p>Free access on YouTube</p>
                  <p>Duration: Varies by meditation</p>
                  <p>WellBeingFem Members’ Library — Coming Soon</p>
                </div>
                <div className="service-card__actions service-card__actions--single">
                  <a className="service-card-button" href={WELLBEINGFEM_YOUTUBE_URL} target="_blank" rel="noreferrer">Visit WellBeingFem on YouTube</a>
                </div>
              </div>
            </article>
          </div>

          <div className="homepage-contact-cta">
            <a className="homepage-contact-button" href="/research#contact">Contact Form</a>
          </div>

          <section className="homepage-welcome" aria-labelledby="welcome-heading">
            <div className="homepage-gold-divider" aria-hidden="true" />
            <h2 id="welcome-heading">Welcome to WellBeingFem</h2>
            <p>Whether you are entering a time of change, curious about your wellbeing, or supporting a woman you care about, you are warmly welcome here.</p>
          </section>

          <section className="homepage-philosophy" aria-labelledby="philosophy-heading">
            <h2 id="philosophy-heading">Our Philosophy</h2>
            <p>At WellBeingFem, we believe wellbeing begins by creating space to rest, reflect and renew every day.</p>
            <p>Through guided meditations, personalised wellbeing sessions, educational resources and reflective practices, we support women in developing lasting habits that nurture wellbeing in everyday life.</p>
            <p>Our aim is not simply to offer individual sessions, but to create a supportive wellbeing journey that encourages learning, self-awareness and personal reflection long after each session has ended.</p>
            <p className="homepage-philosophy__closing">Rest • Reflect • Renew</p>
          </section>

          <section className="client-experiences" aria-labelledby="client-experiences-heading" hidden>
            <header className="client-experiences__heading">
              <div className="homepage-gold-divider" aria-hidden="true" />
              <h2 id="client-experiences-heading">Client Experiences</h2>
            </header>
            <Carousel className="client-experiences__carousel" opts={{ align: "start", loop: false }}>
              <CarouselContent>
                {clientExperienceCards.map((serviceTitle, index) => (
                  <CarouselItem className="client-experiences__slide" key={`${serviceTitle}-${index}`}>
                    <article className="client-experience-card">
                      <h3>{serviceTitle}</h3>
                      <details className="client-experience-card__details">
                        <summary aria-label={`Show more placeholder content for ${serviceTitle}`}>
                          <span className="client-experience-card__preview">{clientExperiencePreview}</span>
                          <span className="client-experience-card__more">More</span>
                          <span className="client-experience-card__less">Less</span>
                        </summary>
                        <p>{clientExperiencePlaceholder}</p>
                      </details>
                      <p className="client-experience-card__name">Client name to be supplied</p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="client-experiences__previous" />
              <CarouselNext className="client-experiences__next" />
            </Carousel>
          </section>

          <section id="womens-wisdom" className="womens-wisdom" aria-labelledby="womens-wisdom-heading">
            <div className="womens-wisdom__image-wrap">
              <img
                src={WOMENS_WISDOM_IMAGE_URL}
                alt="Women’s Wisdom in Times of Change companion book in a calm wellbeing setting"
                width="1536"
                height="1024"
              />
            </div>
            <div className="womens-wisdom__content">
              <h2 id="womens-wisdom-heading">Women’s Wisdom in Times of Change</h2>
              <h3>Forthcoming Meditation Series &amp; Companion Books</h3>
              <p>The forthcoming Women’s Wisdom in Times of Change series will bring together guided meditation journeys, archetypal symbolism and reflective companion books created to support deeper self-understanding, inner renewal and mind–body–spirit awareness.</p>
              <button
                className="womens-wisdom__more"
                type="button"
                aria-expanded={changeDetailsOpen}
                aria-controls="womens-wisdom-change-details"
                onClick={() => setChangeDetailsOpen((open) => !open)}
              >
                {changeDetailsOpen ? "Less" : "More"}
              </button>
              {changeDetailsOpen ? (
                <div id="womens-wisdom-change-details" className="womens-wisdom__details">
                  <p>The first book, Seven Archetypal Journeys of Self-Discovery, is set within an ancient forest landscape. Across seven guided meditation journeys, you are invited to move through symbolic pathways, thresholds, natural elements and archetypal encounters that open space for reflection, insight and reconnection with your own wisdom.</p>
                  <p>Each companion volume is designed to deepen the meditation experience. The books will offer archetypal background, reflective insight before each journey, and wisdom-led exploration to help you work with the symbols, themes and inner knowing that arise.</p>
                </div>
              ) : null}

              <h3 id="members-library">WellBeingFem Members’ Library</h3>
              <p>The launch of Women’s Wisdom in Times of Change will also open the WellBeingFem online Members Library, where the first meditation series and companion book will be included with membership.</p>
              <button
                className="womens-wisdom__more"
                type="button"
                aria-expanded={membersLibraryOpen}
                aria-controls="womens-wisdom-members-details"
                onClick={() => setMembersLibraryOpen((open) => !open)}
              >
                {membersLibraryOpen ? "Less" : "More"}
              </button>
              {membersLibraryOpen ? (
                <div id="womens-wisdom-members-details" className="womens-wisdom__details">
                  <p>Members will also receive access to two monthly guided meditations aligned with each month’s New Moon for intention, creation and new beginnings, and Full Moon for reflection, release and renewal.</p>
                  <p>The series will continue with future companion books exploring deeper reflection, energy awareness, spiritual dialogue and self-understanding.</p>
                </div>
              ) : null}

              <div className="womens-wisdom__actions">
                <a
                  className="womens-wisdom__launch-button"
                  href="mailto:WellBeingFem@gmail.com?subject=Women%E2%80%99s%20Wisdom%20Launch%20List"
                >
                  Join the Women’s Wisdom Launch List
                </a>
                <a
                  className="womens-wisdom__launch-button"
                  href={WELLBEINGFEM_YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  WellBeingFem Meditations
                </a>
              </div>
              <p className="womens-wisdom__notice">Be notified when Women’s Wisdom in Times of Change becomes available.</p>
            </div>
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
