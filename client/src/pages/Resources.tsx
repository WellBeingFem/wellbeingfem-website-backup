/**
 * WellBeingFem restoration reminder: this route establishes only the approved
 * Resources shell. Free-resource material will be restored in a later stage.
 */
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Resources() {
  return (
    <div className="site-shell resources-route">
      <SiteHeader />
      <main className="page-main resources-page" aria-label="WellBeingFem Resources">
        <div className="page-main__inner">
          <header className="page-heading">
            <p className="page-eyebrow">WellBeingFem</p>
            <h1>WellBeingFem Resources</h1>
          </header>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
