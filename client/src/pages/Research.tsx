/**
 * WellBeingFem restoration reminder: Step 1 creates the Research route only.
 * Research copy, forms, sections, and footer intentionally remain unbuilt.
 */
import SiteHeader from "@/components/SiteHeader";

export default function Research() {
  return (
    <div className="site-shell research-route">
      <SiteHeader />
      <main aria-label="Research page reserved for the next recovery stage" />
    </div>
  );
}
