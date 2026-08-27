/**
 * WellBeingFem restoration reminder: the supplied finished hero is authoritative.
 * It must remain complete, unedited, uncropped, and free of extra visible overlays.
 */
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const HERO_URL = "/manus-storage/NewHeroAug13_e95140e6.png";
const DESKTOP_HERO_URL = "/manus-storage/DeaktopHeroWBF_921006d2.png";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
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
      </main>
      <SiteFooter />
    </div>
  );
}
