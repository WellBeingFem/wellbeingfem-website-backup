import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState } from "react";

const ONDAMED_PAGE_IMAGE_FALLBACK = "/manus-storage/ondamedwlogo-page-1448_147a2994.jpg";
const ONDAMED_PAGE_IMAGE_WEBP = "/manus-storage/ondamedwlogo-page-1448_113a94c2.webp";
const ONDAMED_PAGE_IMAGE_MOBILE_WEBP = "/manus-storage/ondamedwlogo-page-720_a87d4d44.webp";
const ONDAMED_PAGE_IMAGE_MOBILE_FALLBACK = "/manus-storage/ondamedwlogo-page-720_6f3bbdb0.jpg";

export default function Ondamed() {
  const [introExpanded, setIntroExpanded] = useState(false);

  useEffect(() => {
    const openAtTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frame = window.requestAnimationFrame(openAtTop);
    const timer = window.setTimeout(openAtTop, 120);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="site-shell ondamed-route">
      <SiteHeader />
      <main className="page-main ondamed-page" aria-label="ONDAMED PEMF">
        <div className="page-main__inner">
          <section className="ondamed-page__intro" aria-labelledby="ondamed-page-heading">
            <header className="ondamed-page__title-group">
              <h1 id="ondamed-page-heading">ONDAMED PEMF Sessions in Dublin</h1>
              <p className="ondamed-page__subtitle">Wellbeing Sessions</p>
              <p className="ondamed-page__crawlable-intro">
                WellBeingFem offers in-person ONDAMED PEMF wellbeing sessions in Dublin.
              </p>
            </header>

            <figure className="ondamed-page__figure">
              <picture>
                <source media="(max-width: 900px)" type="image/webp" srcSet={ONDAMED_PAGE_IMAGE_MOBILE_WEBP} />
                <source media="(max-width: 900px)" type="image/jpeg" srcSet={ONDAMED_PAGE_IMAGE_MOBILE_FALLBACK} />
                <source type="image/webp" srcSet={ONDAMED_PAGE_IMAGE_WEBP} />
                <img
                  src={ONDAMED_PAGE_IMAGE_FALLBACK}
                  alt="ONDAMED PEMF device with WellBeingFem branding"
                  width={1448}
                  height={1086}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <div className="ondamed-page__booking-row">
                <a className="ondamed-page__booking" href="/research#contact">
                  Make a Booking
                </a>
                <p className="ondamed-page__fee">Session Fee: €120 | Course of 3: €300</p>
              </div>
            </figure>

            <div className="ondamed-page__text">
              <p>
                ONDAMED is a powerful, non-invasive biofeedback system that combines focused pulsed
                electromagnetic field stimulation with a personalised frequency-based approach.
              </p>
              <p>
                At WellBeingFem, ONDAMED sessions are offered in Dublin
              </p>
              <button
                className="ondamed-page__more"
                type="button"
                aria-expanded={introExpanded}
                aria-controls="ondamed-intro-more"
                onClick={() => setIntroExpanded((expanded) => !expanded)}
              >
                {introExpanded ? "Less" : "More"}
              </button>
              {introExpanded ? (
                <div id="ondamed-intro-more" className="ondamed-page__disclosure">
                  <p>
                    for women seeking deeper support around stress regulation, nervous system calm, sleep, low
                    energy, hormonal change and transition, digestive wellbeing and inflammation-related concerns.
                  </p>
                  <h2>Why Choose ONDAMED PEMF?</h2>
                  <p>ONDAMED is a German-developed system that combines focused PEMF stimulation with biofeedback.</p>
                  <p>
                    Rather than using a standard one-size-fits-all PEMF approach, ONDAMED uses your body’s
                    responses to help guide the selection of frequencies, applicators and areas of focus. This
                    allows each session to be shaped around what appears most relevant for you at that time.
                  </p>
                </div>
              ) : null}

              <section className="ondamed-page__support-card" aria-labelledby="ondamed-support-heading">
                <h2 id="ondamed-support-heading">Women may choose ONDAMED to support:</h2>
                <ul className="ondamed-page__support-list">
                  <li>Stress regulation and nervous system balance</li>
                  <li>Poor sleep and rest disruption</li>
                  <li>Low energy and physical depletion</li>
                  <li>Hormonal change, perimenopause and menopause</li>
                  <li>Digestive wellbeing and bloating-related concerns</li>
                  <li>Inflammation-related wellbeing concerns</li>
                  <li>Metabolic wellbeing and weight-management concerns</li>
                  <li>Emotional overwhelm and body disconnection</li>
                  <li>Recovery, restoration and resilience</li>
                </ul>
              </section>

              <h2>What to Expect During Your ONDAMED Session</h2>
              <p>Your ONDAMED session lasts approximately 60 minutes.</p>
              <p>
                During your session, the ONDAMED biofeedback system helps guide the frequencies and
                applicators selected.
              </p>
              <p>
                Focused pulsed electromagnetic field stimulation is then delivered through applicators
                positioned on or near selected areas of the body. The session is non-invasive and designed to
                support the body’s natural capacity for regulation, restoration and balance.
              </p>
              <p>
                You remain fully clothed throughout and can simply sit or recline comfortably while the
                session runs.
              </p>

              <h2>ONDAMED Frequency-Charged Water</h2>
              <p>
                As an optional addition to your ONDAMED experience, clients can receive water prepared using
                selected ONDAMED frequencies focused around women’s wellbeing.
              </p>
              <p>
                Many clients enjoy bringing their own water bottle to each session so they can take their
                frequency-charged water home and continue enjoying it after their appointment.
              </p>
              <p>
                ONDAMED guidance states that charged water can be diluted at a ratio of 1 part charged water to
                5 parts water.
              </p>

              <h2>A Personalised Approach to Wellbeing</h2>
              <p>
                Women often come to ONDAMED when they feel that something in their body, energy or inner
                balance has shifted — perhaps through stress, poor sleep, low energy, hormonal change,
                digestive imbalance, metabolic changes or periods of nervous system overwhelm.
              </p>
              <p>
                Some women choose ONDAMED as part of an ongoing wellbeing routine, while others prefer a short
                course of sessions when they feel depleted, overstimulated or simply no longer quite like
                themselves.
              </p>
              <p>
                Every session is individual. Clients may notice changes in areas such as energy, sleep, stress
                response, body awareness, emotional balance, focus, digestion and physical comfort. Some
                experiences may be gradual, while others can feel more immediate or deeply restorative.
              </p>
            </div>
          </section>
        </div>
        <section className="ondamed-page__wellbeing-note" aria-labelledby="ondamed-wellbeing-note-heading">
          <h2 id="ondamed-wellbeing-note-heading">WELLBEING NOTE</h2>
          <p>
            <em>
              ONDAMED sessions at WellBeingFem are offered as complementary wellbeing support. They are not
              intended to diagnose, treat, cure or prevent any medical condition and are not a replacement for
              medical advice, diagnosis or treatment from a qualified healthcare professional.
            </em>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
