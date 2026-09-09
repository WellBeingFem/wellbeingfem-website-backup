import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const resourcesSource = readProjectFile("client/src/pages/Resources.tsx");
const normalizedResourcesSource = resourcesSource.replace(/\s+/g, " ");
const styles = readProjectFile("client/src/index.css");

describe("permanent WellBeingFem Free Resources hub", () => {
  it("uses the existing Living in Frequency asset and contains no duplicated Women’s Wisdom content", () => {
    expect(resourcesSource).toContain("/manus-storage/WBfResource01CardImage_2ee9605d.png");
    expect(resourcesSource).toContain('width="1122"');
    expect(resourcesSource).toContain('height="1402"');
    expect(resourcesSource).toContain("Living in Frequency");
    expect(resourcesSource).not.toContain("Women’s Wisdom in Times of Change");
    expect(resourcesSource).not.toContain("WellBeingFem Members’ Library");
  });

  it("keeps the initial resource request limited to first name, email, and the exact action", () => {
    expect(resourcesSource).toContain("First name");
    expect(resourcesSource).toContain("Email address");
    expect(resourcesSource).toContain("Get the Free Guide");
    expect(resourcesSource).toContain('name="firstName"');
    expect(resourcesSource).toContain('name="email"');
    expect(resourcesSource).toContain('fetch("/api/resources/request"');
    expect(resourcesSource).toContain('id="living-in-frequency-form"');
    expect(normalizedResourcesSource).toContain(
      'Your details will be used to provide the resource you requested. See our{" "} <a href="/research#privacy-policy-gdpr-notice">Privacy Policy</a> for information about how WellBeingFem uses and protects your personal data.',
    );
    expect(resourcesSource).not.toMatch(/privacy[^\n]*checkbox|checkbox[^\n]*privacy/i);
    expect(styles).toContain(".resources-hub__privacy {");
  });

  it("shows independent guide access before the optional unticked Resource List invitation", () => {
    const downloadIndex = resourcesSource.indexOf("Download the Guide");
    const optionalIndex = resourcesSource.indexOf("Would you like future free WellBeingFem resources?");

    expect(resourcesSource).toContain("Your Living in Frequency guide is ready.");
    expect(resourcesSource).toContain("/manus-storage/Final_WellBeingFem_Living_in_Frequency_Final_Clickable_060c3b15.pdf");
    expect(resourcesSource).toContain('download="Living_in_Frequency.pdf"');
    expect(resourcesSource).toContain('href={LIVING_IN_FREQUENCY_PDF_URL}');
    expect(downloadIndex).toBeGreaterThan(0);
    expect(optionalIndex).toBeGreaterThan(downloadIndex);
    expect(resourcesSource).toContain('const [consentChecked, setConsentChecked] = useState(false)');
    expect(resourcesSource).toContain("checked={consentChecked}");
    expect(resourcesSource).toContain("disabled={!consentChecked || consentSubmitting}");
    expect(resourcesSource).toContain("Join the WellBeingFem Resource List");
    expect(resourcesSource).toContain('fetch("/api/resources/consent"');
  });

  it("contains the exact optional consent wording and no prohibited third-party or promotional flows", () => {
    expect(normalizedResourcesSource).toContain(
      "WellBeingFem occasionally shares complimentary resources, guided practices and wellbeing updates.",
    );
    expect(resourcesSource).toContain(
      "Yes, I would like to receive future WellBeingFem resources and occasional updates by email. I can unsubscribe at any time.",
    );
    expect(resourcesSource).not.toMatch(/wellbeingfem\.kit\.com|Kit form|popup|recommendation|advertising consent/i);
  });

  it("uses a future-expandable branded catalog and responsive one-column form layout", () => {
    expect(resourcesSource).toContain('className="resources-hub__catalog"');
    expect(resourcesSource).toContain('className="resources-hub__resource"');
    expect(styles).toContain(".resources-hub__catalog {");
    expect(styles).toContain("grid-template-columns: minmax(260px, 390px) minmax(0, 1fr);");
    expect(styles).toContain("@media (max-width: 820px)");
    expect(styles).toContain(".resources-hub__action {");
    expect(styles).toContain("background: #3F6B4F;");
  });
});
