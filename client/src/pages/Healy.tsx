import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useEffect } from "react";

export default function Healy() {
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
            <h1>Healy Frequency Sessions</h1>
            <p>Remote sessions via Zoom or WhatsApp</p>
          </header>

          <section id="what-is-healy" className="healy-page__section" aria-labelledby="what-is-healy-heading">
            <h2 id="what-is-healy-heading">What is Healy?</h2>
            <p>Personalised frequency sessions that can be experienced remotely in the comfort of your own space.</p>
          </section>

          <section id="healy-wellbeing" className="healy-page__section" aria-labelledby="healy-wellbeing-heading">
            <h2 id="healy-wellbeing-heading">Healy WellBeing</h2>
            <p>Remote session</p>
            <p>Duration: Approx. 60 minutes</p>
            <p>Healy session: €80</p>
          </section>

          <section id="healy-aura-analysis" className="healy-page__section" aria-labelledby="healy-aura-analysis-heading">
            <h2 id="healy-aura-analysis-heading">Healy Aura Analysis</h2>
            <p>Remote sessions via Zoom or WhatsApp</p>
          </section>

          <section id="healy-i-ching" className="healy-page__section" aria-labelledby="healy-i-ching-heading">
            <h2 id="healy-i-ching-heading">Healy I Ching</h2>
            <p>Remote sessions via Zoom or WhatsApp</p>
          </section>

          <section id="healy-reiki" className="healy-page__section" aria-labelledby="healy-reiki-heading">
            <h2 id="healy-reiki-heading">Healy Reiki</h2>
            <p>Remote Healy, Reiki and distant Reiki sessions are offered as complementary wellbeing and reflective supports.</p>
            <p>Healy Reiki session: €90</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
