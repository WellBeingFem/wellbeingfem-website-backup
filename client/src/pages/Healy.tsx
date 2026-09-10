import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState } from "react";

const HEALY_LAPTOP_IMAGE = "/manus-storage/frequencylaptophealyimage_9b168a7c.png";
const HEALY_REIKI_IMAGE = "/manus-storage/updatedgreenReikiCombocard_192f43bc.png";

export default function Healy() {
  const [isSessionProcessOpen, setIsSessionProcessOpen] = useState(false);
  const [isWellbeingOpen, setIsWellbeingOpen] = useState(false);
  const [isAuraOpen, setIsAuraOpen] = useState(false);
  const [isIChingOpen, setIsIChingOpen] = useState(false);
  const [isReikiOpen, setIsReikiOpen] = useState(false);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    const scrollToTarget = () => {
      if (!targetId || targetId === "what-is-healy") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    const timer = window.setTimeout(scrollToTarget, 120);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="page-main healy-page">
        <div className="page-main__inner healy-page__inner">
          <header className="page-heading healy-page__heading">
            <p className="page-kicker">WELLBEINGFEM</p>
            <h1>Healy Frequency Sessions</h1>
            <p className="page-heading__intro">
              WellBeingFem offers personalised Healy resonance analysis and frequency-based wellbeing sessions, including remote options.
            </p>
          </header>

          <section className="healy-page__intro" aria-label="Healy Remote Wellbeing Sessions introduction">
            <figure className="healy-page__intro-figure">
              <img
                src={HEALY_LAPTOP_IMAGE}
                alt="Healy remote wellbeing session with laptop and Healy device"
                width={1536}
                height={1024}
              />
              <figcaption className="healy-page__image-actions">
                <a className="healy-page__action" href="/research#contact">Make a Booking</a>
                <a className="healy-page__action" href="mailto:wellbeingfem@gmail.com">Email Us</a>
              </figcaption>
            </figure>
            <p className="healy-page__lead">Personalised, intention-led frequency wellbeing support for sleep, stress, anxious thoughts, emotional balance, fatigue, renewal and energetic wellbeing — from wherever you are.</p>
            <p>Healy sessions at WellBeingFem are designed for women seeking remote support during periods of poor sleep, stress, emotional overwhelm, fatigue, digestive imbalance or personal change.</p>
            <p>Each session combines personalised frequency programs with time for reflection and rest, creating space to pause, reconnect and explore what may be seeking greater balance or renewal.</p>
            <p>Healy can be used as a standalone wellbeing practice or alongside ONDAMED sessions.</p>
          </section>

          <section id="what-is-healy" className="healy-page__section" aria-labelledby="what-is-healy-heading">
            <h2 id="what-is-healy-heading">What is Healy?</h2>
            <p>Healy is a wearable microcurrent and frequency-based wellbeing device with programs designed to support relaxation, energetic balance, self-awareness, renewal and vitality. It uses Individualised Microcurrent Frequencies (IMF) within a bioenergetic wellbeing framework.</p>
            <p>For WellBeingFem remote sessions, selected frequency programs are delivered using the Healy Coil.</p>
            <p>Healy sessions are offered as complementary wellbeing and self-development support. They are not used to diagnose or treat medical conditions and are not a replacement for healthcare advice or treatment.</p>
            <button
              type="button"
              className="healy-page__more"
              aria-expanded={isSessionProcessOpen}
              aria-controls="how-your-remote-healy-session-works"
              onClick={() => setIsSessionProcessOpen((current) => !current)}
            >
              {isSessionProcessOpen ? "Less" : "More"}
            </button>
            {isSessionProcessOpen && (
              <div id="how-your-remote-healy-session-works" className="healy-page__disclosure" aria-labelledby="how-healy-works-heading">
                <h3 id="how-healy-works-heading">How Your Remote Healy Session Works</h3>
                <p>A remote Healy session takes place within a 60-minute session window.</p>
                <p>We begin with a brief WhatsApp or Zoom conversation to agree your intention, confirm your session option and establish the focus for the session.</p>
                <p>Once the selected Healy frequency programs begin running remotely, the session can simply become a time to relax. This might include lying down, journalling, meditating, listening to music or simply resting. There is no need to remain on WhatsApp or Zoom for the full session.</p>
                <p>Afterwards, PDF copies of the personalised Healy frequencies and programs will be provided together with the WellBeingFem resources associated with the chosen session.</p>
                <p>These materials are intended for reflection, journalling and as a personal wellbeing record. They are not medical reports, diagnoses or treatment plans.</p>
              </div>
            )}
          </section>

          <section id="healy-wellbeing" className="healy-page__section" aria-labelledby="healy-wellbeing-heading">
            <h2 id="healy-wellbeing-heading">Healy WellBeing</h2>
            <p>A comprehensive personalised remote frequency wellbeing session shaped around the agreed intention, current wellbeing focus and the areas highlighted through Healy analysis.</p>
            <p>The session begins with the All Healy Program, identifying the frequency programs showing strongest resonance at that time.</p>
            <button
              type="button"
              className="healy-page__more"
              aria-expanded={isWellbeingOpen}
              aria-controls="healy-wellbeing-details"
              onClick={() => setIsWellbeingOpen((current) => !current)}
            >
              {isWellbeingOpen ? "Less" : "More"}
            </button>
            {isWellbeingOpen && (
              <div id="healy-wellbeing-details" className="healy-page__disclosure">
                <p>Additional Healy frequency programs may then be selected from areas such as sleep, stress, vitamins, meridians, energetic balance and other wellbeing-focused frequency sets, depending on the session focus and analysis findings.</p>
                <p>The session also includes the Healy Chakra Program and Creative Homeopathy Program, bringing together energetic and symbolic perspectives to support deeper reflection, self-awareness and exploration of relevant patterns and themes.</p>
                <p>Following the session, PDF copies of the personalised Healy frequency programs are provided together with:</p>
                <ul className="healy-page__list">
                  <li>WellBeingFem Healy Chakra Report</li>
                  <li>WellBeingFem Creative Homeopathy Report</li>
                </ul>
                <p>These reports extend the session beyond the frequency programs themselves, offering a structured framework for reflection, insight and personalised affirmations.</p>
                <p>Healy WellBeing is the broadest of the WellBeingFem Healy sessions, allowing the session to be centred on a particular area of wellbeing or guided by the patterns showing strongest resonance within the Healy analysis.</p>
              </div>
            )}
            <div className="healy-page__session-booking">
              <a className="healy-page__action" href="/research#contact">Make a Booking</a>
              <p className="healy-page__session-fee">Session Fee: €80</p>
            </div>
          </section>

          <section id="healy-aura-analysis" className="healy-page__section" aria-labelledby="healy-aura-analysis-heading">
            <h2 id="healy-aura-analysis-heading">Healy Aura Analysis</h2>
            <p>A deeper personalised remote frequency session combining Healy Aura Analysis with chakra awareness, energetic reflection and supportive frequency programs.</p>
            <p>The Healy Aura Analysis explores the energetic patterns highlighted during the session, including overall energy level, the five chakras assessed by Healy, their relative percentages and the areas showing strongest resonance at that time.</p>
            <button
              type="button"
              className="healy-page__more"
              aria-expanded={isAuraOpen}
              aria-controls="healy-aura-analysis-details"
              onClick={() => setIsAuraOpen((current) => !current)}
            >
              {isAuraOpen ? "Less" : "More"}
            </button>
            {isAuraOpen && (
              <div id="healy-aura-analysis-details" className="healy-page__disclosure">
                <p>The analysis is supported by additional Healy frequency programs selected in response to the themes emerging from the session. These may include Soul Cycle, Power of Three, Gold, flower frequencies and other relevant frequency sets.</p>
                <p>Rather than treating the Aura Analysis simply as a set of percentages, the WellBeingFem approach uses the results as a reflective framework for exploring energetic balance, emotional awareness, recurring patterns and areas that may benefit from greater attention.</p>
                <p>Following the session, the client receives:</p>
                <ul className="healy-page__list">
                  <li>WellBeingFem Healy Aura Analysis Report</li>
                  <li>WellBeingFem Aura Analysis Guide</li>
                  <li>PDF copies of the personalised Healy frequency programs</li>
                </ul>
                <p>Healy Aura Analysis is suited to women wishing to explore wellbeing from a deeper energetic perspective, with particular emphasis on aura awareness, chakra balance, personal insight and the patterns emerging through the analysis.</p>
              </div>
            )}
            <div className="healy-page__session-booking">
              <a className="healy-page__action" href="/research#contact">Make a Booking</a>
              <p className="healy-page__session-fee">Session Fee: €80</p>
            </div>
          </section>

          <section id="healy-i-ching" className="healy-page__section" aria-labelledby="healy-i-ching-heading">
            <h2 id="healy-i-ching-heading">Healy I Ching</h2>
            <p>A personalised remote frequency session combining the Healy I Ching program with symbolic reflection, personal insight and supportive frequency programs.</p>
            <p>Healy I Ching is designed for women exploring life direction, personal change, choices, recurring patterns, emotional growth or a question that may be present at the time of the session.</p>
            <button
              type="button"
              className="healy-page__more"
              aria-expanded={isIChingOpen}
              aria-controls="healy-i-ching-details"
              onClick={() => setIsIChingOpen((current) => !current)}
            >
              {isIChingOpen ? "Less" : "More"}
            </button>
            {isIChingOpen && (
              <div id="healy-i-ching-details" className="healy-page__disclosure">
                <p>Used as a reflective wellbeing tool rather than as prediction, the I Ching offers a symbolic framework for considering what may be emerging, what may require attention and which qualities may support greater clarity, balance and personal growth.</p>
                <p>The session includes the Healy I Ching Program, supported by additional frequency programs selected in response to the themes highlighted through the analysis.</p>
                <p>The Alaskan Gem Elixirs frequency program is also included, chosen to support balance, harmony, grounding and integration as the session draws to a close.</p>
                <p>Following the session, the client receives:</p>
                <ul className="healy-page__list">
                  <li>WellBeingFem I Ching Reflection Guide</li>
                  <li>WellBeingFem Alaskan Gem Elixirs Report</li>
                  <li>PDF copies of the personalised Healy frequency programs</li>
                </ul>
                <p>Healy I Ching is particularly suited to women drawn to symbolic reflection and wishing to explore a current question, transition or life theme from a deeper personal perspective.</p>
              </div>
            )}
            <div className="healy-page__session-booking">
              <a className="healy-page__action" href="/research#contact">Make a Booking</a>
              <p className="healy-page__session-fee">Session Fee: €80</p>
            </div>
          </section>

          <section id="healy-reiki" className="healy-page__section healy-page__reiki-section" aria-labelledby="healy-reiki-heading">
            <h2 id="healy-reiki-heading">Healy Reiki Combined Session</h2>
            <figure className="healy-page__reiki-figure">
              <img
                src={HEALY_REIKI_IMAGE}
                alt="Healy Reiki Combined Session — Rest, Reflect, Renew"
                width={1672}
                height={941}
                loading="eager"
                fetchPriority="high"
              />
            </figure>
            <h3>Support for Balance, Rest &amp; Renewal</h3>
            <p>Reiki is an energy-based wellbeing practice associated with relaxation, chakra balance and aura harmony. Within this framework, the chakras are understood as energy centres connected with different aspects of emotional, physical and spiritual wellbeing, while the aura is viewed as the subtle energy field surrounding the body.</p>
            <button
              type="button"
              className="healy-page__more"
              aria-expanded={isReikiOpen}
              aria-controls="healy-reiki-details"
              onClick={() => setIsReikiOpen((current) => !current)}
            >
              {isReikiOpen ? "Less" : "More"}
            </button>
            {isReikiOpen && (
              <div id="healy-reiki-details" className="healy-page__disclosure">
                <p>At WellBeingFem, the Healy Reiki Combined Session brings together personalised Healy frequency support with the calming, restorative qualities of Reiki.</p>
                <p>The Healy element may include the All Healy Program, Chakra Program, Australian Bush Flower frequencies and Soul Cycle programs, together with additional frequency programs selected according to the themes highlighted during the session.</p>
                <p>Following the session, the client receives:</p>
                <ul className="healy-page__list">
                  <li>WellBeingFem Reiki &amp; Healy Chakra Reflection Guide</li>
                  <li>WellBeingFem Australian Bush Flowers Report</li>
                  <li>PDF copies of the personalised Healy frequency programs</li>
                </ul>
                <p>A first Healy remote session is required before booking the Healy Reiki Combined Session. This provides an opportunity to experience the Healy process independently before the two approaches are brought together within one session.</p>
                <p>Healy Reiki is suited to women seeking a more restorative session with emphasis on energetic balance, chakra awareness, reflection and renewal.</p>
              </div>
            )}
            <a className="healy-page__action healy-page__research-action" href="/research#reiki-research">
              View Reiki Research
            </a>
            <div className="healy-page__session-booking">
              <a className="healy-page__action" href="/research#contact">Make a Booking</a>
              <p className="healy-page__session-fee">Session Fee: €90</p>
            </div>
          </section>

          <section className="healy-page__section healy-page__wellbeing-note" aria-labelledby="healy-wellbeing-note-heading">
            <h2 id="healy-wellbeing-note-heading">WELLBEING NOTE</h2>
            <p><em>Healy and Reiki sessions at WellBeingFem are offered as complementary wellbeing and self-development practices. They are not intended to diagnose, treat, cure or prevent any medical or psychological condition and are not a replacement for medical advice, diagnosis or treatment from a qualified healthcare professional.</em></p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
