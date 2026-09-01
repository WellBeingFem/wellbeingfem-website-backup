import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState } from "react";

const HEALY_LAPTOP_IMAGE = "/manus-storage/frequencylaptophealyimage_9b168a7c.png";
const HEALY_REIKI_IMAGE = "/manus-storage/HealyReikicombowebsiteimage_dcf16ff1.png";

export default function Healy() {
  const [isSessionProcessOpen, setIsSessionProcessOpen] = useState(false);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    const scrollToTarget = () => {
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
            <h1>Healy Remote Wellbeing Sessions</h1>
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
            <p>A comprehensive personalised remote frequency wellbeing session tailored to your intention, current wellbeing focus and the areas highlighted through your Healy analysis.</p>
            <p>The session includes the All Healy Program, which identifies the frequency programs showing strongest resonance at the time of your session.</p>
            <p>Depending on your intention and analysis, additional Healy frequency programs may also be selected from areas such as sleep, stress, vitamins, meridians, energetic balance and other wellbeing-focused frequency sets.</p>
            <p>The session also includes the Healy Chakra Program and Creative Homeopathy Program, bringing together energetic and symbolic perspectives that can support deeper reflection, self-awareness and understanding of patterns that may be relevant for you at this time.</p>
            <p>After your session, you will receive PDF copies of your personalised Healy frequency programs together with:</p>
            <ul className="healy-page__list">
              <li>personalised WellBeingFem Healy Chakra Report</li>
              <li>personalised WellBeingFem Creative Homeopathy Report</li>
            </ul>
            <p>These reports are designed to help you explore the themes emerging from your session and continue working with them through reflection and personalised affirmations.</p>
            <p>Healy Wellbeing is the broadest of the WellBeingFem Healy sessions and can be centred on a particular wellbeing concern or guided by the areas showing strongest resonance within your Healy analysis.</p>
          </section>

          <section id="healy-aura-analysis" className="healy-page__section" aria-labelledby="healy-aura-analysis-heading">
            <h2 id="healy-aura-analysis-heading">Healy Aura Analysis</h2>
            <p>A deeper personalised remote frequency session combining the Healy Aura Analysis with chakra awareness, energetic reflection and supportive frequency programs.</p>
            <p>The Healy Aura Analysis explores the energetic patterns highlighted through your session, including your overall energy level, the five chakras assessed by Healy, their relative percentages and the areas showing strongest resonance at that time.</p>
            <p>The session brings together the Healy Aura Analysis with additional frequency programs selected according to the themes emerging from your analysis. These may include Soul Cycle, Power of Three, Gold, flower frequencies and other supportive Healy programs highlighted during the session.</p>
            <p>Rather than viewing the Aura Analysis simply as a set of percentages, the WellBeingFem approach uses the results as a reflective framework for exploring energetic balance, emotional awareness, personal patterns and areas that may benefit from greater attention or support.</p>
            <p>After your session, you will receive:</p>
            <ul className="healy-page__list">
              <li>personalised WellBeingFem Healy Aura Analysis Report</li>
              <li>the WellBeingFem Aura Analysis Guide</li>
              <li>PDF copies of personalised Healy frequency programs</li>
            </ul>
            <p>Healy Aura Analysis is particularly suited to women who would like to explore their wellbeing from a deeper energetic perspective, with a focus on the aura, chakra awareness, personal insight and the patterns emerging through their Healy analysis.</p>
          </section>

          <section id="healy-i-ching" className="healy-page__section" aria-labelledby="healy-i-ching-heading">
            <h2 id="healy-i-ching-heading">Healy I Ching</h2>
            <p>A personalised remote frequency session combining the Healy I Ching program with symbolic reflection, personal insight and supportive frequency programs.</p>
            <p>This option is designed for women exploring life direction, personal change, choices, recurring patterns, emotional growth or a question they may be holding at the time of the session.</p>
            <p>The Healy I Ching is used as a reflective wellbeing tool rather than as prediction. It offers a symbolic framework for exploring what may be emerging, what may need attention and which qualities may support greater clarity, balance and personal growth.</p>
            <p>The session includes the Healy I Ching Program, together with additional frequency support selected according to the themes highlighted during your analysis.</p>
            <p>It also includes the Alaskan Gem Elixirs frequency program, chosen to support balance, harmony, grounding and integration at the close of the session.</p>
            <p>After your session, you will receive:</p>
            <ul className="healy-page__list">
              <li>the WellBeingFem I Ching Reflection Guide</li>
              <li>personalised WellBeingFem Alaskan Gem Elixirs Report</li>
              <li>PDF copies of personalised Healy frequency programs</li>
            </ul>
            <p>Healy I Ching is particularly suited to women who are drawn to symbolic reflection and would like to explore a current question, transition or life theme from a deeper personal perspective.</p>
          </section>

          <section id="healy-reiki" className="healy-page__section healy-page__reiki-section" aria-labelledby="healy-reiki-heading">
            <h2 id="healy-reiki-heading">Healy Reiki Combined Session</h2>
            <figure className="healy-page__reiki-figure">
              <img
                src={HEALY_REIKI_IMAGE}
                alt="Healy Reiki Combined Session — Rest, Reflect, Renew"
                width={1672}
                height={941}
                loading="lazy"
              />
            </figure>
            <h3>Support for Balance, Rest &amp; Renewal</h3>
            <p>Reiki is an energy-based wellbeing practice that supports relaxation, chakra balance and aura harmony. The chakras are traditionally understood as energy centres connected with different aspects of emotional, physical and spiritual wellbeing, while the aura is viewed as the subtle energy field around the body.</p>
            <p>At WellBeingFem, a Healy / Reiki Remote Wellbeing session brings together the personalised frequency support of Healy with the calming, restorative support of Reiki.</p>
            <p>The Healy element of this combined session may include the All Healy Program, Chakra Program, Australian Bush Flower frequencies and Soul Cycle programs, together with any additional Healy frequency programs highlighted during the session.</p>
            <p>After your session, you will receive:</p>
            <ul className="healy-page__list">
              <li>the WellBeingFem Reiki &amp; Healy Chakra Reflection Guide</li>
              <li>personalised WellBeingFem Australian Bush Flowers Report</li>
              <li>PDF copies of personalised Healy frequency programs</li>
            </ul>
            <p>A first Healy remote session is required before booking a Healy Reiki Combined Session. This allows you to experience the Healy process first and helps ensure the combined session is offered in a way that feels clear, grounded and supportive.</p>
            <p>Reiki is offered as an energetic wellbeing practice and is not a replacement for medical advice, diagnosis or treatment.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
