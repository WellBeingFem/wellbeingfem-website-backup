import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { type FormEvent, useLayoutEffect, useState } from "react";

const RESOURCE_01_IMAGE_URL = "/manus-storage/WBfResource01CardImage_2ee9605d.png";
const LIVING_IN_FREQUENCY_PDF_URL = "/manus-storage/Final_WellBeingFem_Living_in_Frequency_Final_Clickable_060c3b15.pdf";
const RESOURCE_LIST_CONSENT =
  "Yes, I would like to receive future WellBeingFem resources and occasional updates by email. I can unsubscribe at any time.";

type ApiResponse = {
  requestToken?: string;
  joined?: boolean;
  error?: string;
};

export default function Resources() {
  const [requestToken, setRequestToken] = useState("");
  const [requestSubmitting, setRequestSubmitting] = useState(false);
  const [requestError, setRequestError] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentSubmitting, setConsentSubmitting] = useState(false);
  const [consentJoined, setConsentJoined] = useState(false);
  const [consentError, setConsentError] = useState("");

  useLayoutEffect(() => {
    if (window.location.hash !== "#living-in-frequency-form") return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("living-in-frequency-form")?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleResourceRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequestSubmitting(true);
    setRequestError("");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/resources/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resourceSlug: "living-in-frequency",
          firstName: formData.get("firstName"),
          email: formData.get("email"),
        }),
      });
      const result = (await response.json()) as ApiResponse;
      if (!response.ok || !result.requestToken) {
        throw new Error(result.error ?? "We could not prepare the guide. Please try again.");
      }
      setRequestToken(result.requestToken);
    } catch (error) {
      setRequestError(error instanceof Error ? error.message : "We could not prepare the guide. Please try again.");
    } finally {
      setRequestSubmitting(false);
    }
  };

  const handleResourceListConsent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consentChecked || !requestToken) return;

    setConsentSubmitting(true);
    setConsentError("");
    try {
      const response = await fetch("/api/resources/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestToken, consent: true }),
      });
      const result = (await response.json()) as ApiResponse;
      if (!response.ok || !result.joined) {
        throw new Error(result.error ?? "We could not save your preference. Please try again.");
      }
      setConsentJoined(true);
    } catch (error) {
      setConsentError(error instanceof Error ? error.message : "We could not save your preference. Please try again.");
    } finally {
      setConsentSubmitting(false);
    }
  };

  return (
    <div className="site-shell resources-route">
      <SiteHeader />
      <main className="page-main resources-page" aria-label="WellBeingFem Free Resources">
        <div className="page-main__inner resources-hub">
          <header className="page-heading resources-hub__heading">
            <p className="page-eyebrow">WellBeingFem</p>
            <h1>Free WellBeingFem Resources</h1>
            <p>
              Explore complimentary wellbeing guides, practices and future resources.
            </p>
          </header>

          <section className="resources-hub__catalog" aria-label="Available WellBeingFem resources">
            <article className="resources-hub__resource" aria-labelledby="living-in-frequency-heading">
              <div className="resources-hub__media">
                <img
                  src={RESOURCE_01_IMAGE_URL}
                  alt="WellBeingFem Resource 01 — Living in Frequency — June 2026"
                  width="1122"
                  height="1402"
                />
              </div>

              <div className="resources-hub__content">
                <p className="resources-hub__number">WellBeingFem Resource 01</p>
                <h2 id="living-in-frequency-heading">Living in Frequency</h2>
                <p>
                  Explore frequency, rhythm, fractals and the patterns woven through nature, the
                  body and everyday wellbeing.
                </p>

                {!requestToken ? (
                  <form
                    id="living-in-frequency-form"
                    className="resources-hub__form"
                    onSubmit={handleResourceRequest}
                  >
                    <label className="form-field">
                      <span>First name</span>
                      <input name="firstName" type="text" autoComplete="given-name" maxLength={100} required />
                    </label>
                    <label className="form-field">
                      <span>Email address</span>
                      <input name="email" type="email" autoComplete="email" maxLength={320} required />
                    </label>
                    {requestError ? <p className="resources-hub__error" role="alert">{requestError}</p> : null}
                    <button className="resources-hub__action" type="submit" disabled={requestSubmitting}>
                      {requestSubmitting ? "Preparing…" : "Get the Free Guide"}
                    </button>
                    <p className="resources-hub__privacy">
                      Your details will be used to provide the resource you requested. See our{" "}
                      <a href="/research#privacy-policy-gdpr-notice">Privacy Policy</a> for information
                      about how WellBeingFem uses and protects your personal data.
                    </p>
                  </form>
                ) : (
                  <section className="resources-hub__ready" aria-labelledby="resource-ready-heading">
                    <h3 id="resource-ready-heading">Your Living in Frequency guide is ready.</h3>
                    <a
                      className="resources-hub__action"
                      href={LIVING_IN_FREQUENCY_PDF_URL}
                      download="Living_in_Frequency.pdf"
                    >
                      Download the Guide
                    </a>

                    <div className="resources-hub__optional">
                      <h3>Would you like future free WellBeingFem resources?</h3>
                      <p>
                        WellBeingFem occasionally shares complimentary resources, guided practices
                        and wellbeing updates.
                      </p>
                      {!consentJoined ? (
                        <form onSubmit={handleResourceListConsent}>
                          <label className="resources-hub__consent">
                            <input
                              type="checkbox"
                              checked={consentChecked}
                              onChange={event => setConsentChecked(event.target.checked)}
                            />
                            <span>{RESOURCE_LIST_CONSENT}</span>
                          </label>
                          {consentError ? <p className="resources-hub__error" role="alert">{consentError}</p> : null}
                          <button
                            className="resources-hub__action"
                            type="submit"
                            disabled={!consentChecked || consentSubmitting}
                          >
                            {consentSubmitting ? "Joining…" : "Join the WellBeingFem Resource List"}
                          </button>
                        </form>
                      ) : (
                        <p className="resources-hub__success" role="status">
                          Your Resource List preference has been saved.
                        </p>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </article>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
