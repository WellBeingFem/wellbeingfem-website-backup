import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const ONDAMED_PAGE_IMAGE = "/manus-storage/ondamedwlogo-page_477a3f15.png";

export default function Ondamed() {
  return (
    <div className="site-shell ondamed-route">
      <SiteHeader />
      <main className="page-main ondamed-page" aria-label="ONDAMED PEMF">
        <div className="page-main__inner">
          <section className="ondamed-page__intro" aria-labelledby="ondamed-page-heading">
            <figure className="ondamed-page__figure">
              <img
                src={ONDAMED_PAGE_IMAGE}
                alt="ONDAMED PEMF device with WellBeingFem branding"
                width={1448}
                height={1086}
              />
              <a className="ondamed-page__booking" href="/research#contact">
                Make a Booking
              </a>
            </figure>

            <div className="ondamed-page__text">
              <p className="page-eyebrow">WellBeingFem</p>
              <h1 id="ondamed-page-heading">ONDAMED PEMF</h1>
              <p className="ondamed-page__subheading">In-person sessions in Dublin</p>
              <p>
                Personalised ONDAMED PEMF sessions supporting relaxation, balance and wellbeing.
              </p>
              <p>Each session is approximately 60 minutes.</p>
              <p>Individual session: €120</p>
              <p>Course of three sessions: €300</p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
