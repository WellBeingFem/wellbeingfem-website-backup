/**
 * WellBeingFem restoration reminder: establish only the approved Research
 * anchors and contact location; original research material is restored later.
 */
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Research() {
  return (
    <div className="site-shell research-route">
      <SiteHeader />
      <main className="page-main research-page" aria-label="WellBeingFem research">
        <div className="page-main__inner">
          <header className="page-heading">
            <p className="page-eyebrow">WellBeingFem</p>
            <h1>Research</h1>
          </header>

          <form id="contact" className="contact-form-area" aria-label="Contact and booking form area">
            <h2>Contact &amp; Booking Form</h2>
          </form>

          <nav className="research-category-navigation" aria-label="Research categories">
            <a href="#ondamed">ONDAMED</a>
            <a href="#healy">Healy</a>
            <a href="#guided-meditations">Guided Meditations</a>
          </nav>

          <section id="ondamed" className="research-anchor-section" aria-labelledby="ondamed-heading">
            <h2 id="ondamed-heading">ONDAMED Research</h2>
          </section>
          <section id="healy" className="research-anchor-section" aria-labelledby="healy-heading">
            <h2 id="healy-heading">Healy Research</h2>
          </section>
          <section
            id="guided-meditations"
            className="research-anchor-section"
            aria-labelledby="guided-meditations-heading"
          >
            <h2 id="guided-meditations-heading">Guided Meditations Research</h2>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
