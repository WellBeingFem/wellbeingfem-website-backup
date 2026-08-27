/**
 * WellBeingFem restoration reminder: the supplied finished hero is authoritative.
 * It must remain complete, unedited, uncropped, and free of extra visible overlays.
 */
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const HERO_URL = "/manus-storage/NewHeroAug13_e95140e6.png";
const DESKTOP_HERO_URL = "/manus-storage/DeaktopHeroWBF_921006d2.png";
const ONDAMED_IMAGE_URL = "/manus-storage/ondamedwlogo_d68ec81a.png";
const HEALY_IMAGE_URL = "/manus-storage/Healyandphone_52ac329b.png";
const GUIDED_MEDITATIONS_IMAGE_URL = "/manus-storage/06_WBF_QR_YouTube_Channel_d57f9130.png";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="about">
        <section className="hero-image-container" aria-label="WellBeingFem ONDAMED PEMF">
          <div className="hero-media">
            <picture className="hero-picture">
              <source media="(min-width: 1025px)" srcSet={DESKTOP_HERO_URL} />
              <img
                src={HERO_URL}
                alt="ONDAMED PEMF Healy Frequency Sessions for Women, with a Contact WellBeingFem button"
                width="1448"
                height="1086"
              />
            </picture>
            <a
              className="hero-booking-link"
              href="/research#contact"
              aria-label="Open the Research page for the Contact and Booking Form"
            >
              <span className="visually-hidden">
                Open the Research page for the Contact and Booking Form
              </span>
            </a>
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
                <h2>ONDAMED PEMF</h2>
                <p className="service-card__subheading">In-person sessions in Dublin</p>
                <p>Personalised ONDAMED PEMF sessions supporting relaxation, balance and wellbeing.</p>
                <div className="service-card__fees" aria-label="ONDAMED fees">
                  <p>€120 per session</p>
                  <p>Course of three sessions: €300</p>
                </div>
                <div className="service-card__actions">
                  <a className="service-card-button" href="/research#ondamed">Learn More</a>
                  <a className="service-card-button" href="/research#contact">Make a Booking</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <div className="service-card__image">
                <img src={HEALY_IMAGE_URL} alt="Healy device and phone" width="1024" height="1024" />
              </div>
              <div className="service-card__body">
                <h2>Healy Frequency Sessions</h2>
                <p className="service-card__subheading">Remote sessions via Zoom or WhatsApp</p>
                <p>Personalised frequency sessions that can be experienced remotely in the comfort of your own space.</p>
                <div className="service-card__fees" aria-label="Healy fees">
                  <p>€80 per Healy session</p>
                  <p>€90 for Healy Reiki</p>
                </div>
                <div className="service-card__actions">
                  <a className="service-card-button" href="/research#healy">Learn More</a>
                  <a className="service-card-button" href="/research#contact">Make a Booking</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <div className="service-card__image">
                <img src={GUIDED_MEDITATIONS_IMAGE_URL} alt="WellBeingFem YouTube Channel QR code" width="1254" height="1254" />
              </div>
              <div className="service-card__body">
                <h2>Guided Meditations</h2>
                <p className="service-card__subheading">Free Guided Meditations</p>
                <p>Explore guided meditation journeys and wellbeing practices through the WellBeingFem YouTube Channel.</p>
                <div className="service-card__actions service-card__actions--single">
                  <a className="service-card-button" href="https://www.youtube.com/@wellbeingfem" target="_blank" rel="noreferrer">Visit WellBeingFem on YouTube</a>
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
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
