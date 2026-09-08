/**
 * WellBeingFem restoration reminder: the supplied Contact Form leads this page;
 * supplied cited research is isolated in the existing Research page only.
 */
import ResearchResources from "@/components/ResearchResources";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { PrivacyPolicyDocument, TermsAndConditionsDocument } from "@/components/PolicyDocuments";
import { useEffect, useState, type FormEvent } from "react";

export default function Research() {
  const [submissionNotice, setSubmissionNotice] = useState("");
  const [expandedPolicy, setExpandedPolicy] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    const scrollToCurrentAnchor = () => {
      const targetId = window.location.hash.slice(1);
      if (!targetId) return;

      window.requestAnimationFrame(() => {
        if (targetId === "contact") {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          return;
        }
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      });
    };

    scrollToCurrentAnchor();
    window.addEventListener("hashchange", scrollToCurrentAnchor);
    return () => window.removeEventListener("hashchange", scrollToCurrentAnchor);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionNotice(
      "Secure enquiry delivery is not connected in this private recovery draft. Please do not rely on this form to send information yet.",
    );
  }

  return (
    <div className="site-shell research-route">
      <SiteHeader />
      <main className="page-main research-page" aria-label="WellBeingFem research">
        <div className="page-main__inner">
          <form
            id="contact"
            className="contact-form-area"
            aria-label="WellBeingFem Contact Form"
            onSubmit={handleSubmit}
          >
            <header className="contact-form-heading">
              <p className="page-eyebrow">WellBeingFem</p>
              <h1>Research &amp; References</h1>
              <p>This page brings together research and references related to the approaches discussed across WellBeingFem.</p>
            </header>

            <fieldset className="contact-fieldset">
              <legend>1. Contact Details</legend>
              <div className="contact-form-grid">
                <label className="form-field">
                  <span>Name <b aria-hidden="true">*</b></span>
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label className="form-field">
                  <span>Email <b aria-hidden="true">*</b></span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label className="form-field">
                  <span>Phone / WhatsApp <em>Optional</em></span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <fieldset className="form-field contact-method-fieldset">
                  <legend>Preferred contact method</legend>
                  <div className="contact-method-options">
                    <label><input type="radio" name="contact-method" value="email" /> <span>Email</span></label>
                    <label><input type="radio" name="contact-method" value="whatsapp" /> <span>WhatsApp</span></label>
                    <label><input type="radio" name="contact-method" value="phone" /> <span>Phone</span></label>
                  </div>
                </fieldset>
              </div>
            </fieldset>

            <fieldset className="contact-fieldset">
              <legend>2. Enquiry Details</legend>
              <div className="contact-form-grid">
                <label className="form-field">
                  <span>Service / enquiry type <b aria-hidden="true">*</b></span>
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Select an option</option>
                    <option value="ondamed">ONDAMED</option>
                    <option value="healy">Healy</option>
                    <option value="reiki">Reiki</option>
                    <option value="guided-meditation">Guided Meditation</option>
                    <option value="gift-card">Gift Card</option>
                    <option value="membership">Membership</option>
                    <option value="general-enquiry">General Enquiry</option>
                  </select>
                </label>
                <label className="form-field">
                  <span>Preferred appointment date/time <em>Optional</em></span>
                  <input name="appointment-preference" type="text" />
                </label>
              </div>
              <label className="form-field form-field--full">
                <span>Message <b aria-hidden="true">*</b></span>
                <textarea name="message" placeholder="Type here..." required />
              </label>
              <p className="sensitive-information-note">
                Please briefly tell us what you are enquiring about. Please do not include detailed medical,
                health or sensitive personal information in this form. If needed, a Client Consent &amp;
                Wellbeing Form will be provided directly before your first session.
              </p>
            </fieldset>

            <fieldset className="contact-fieldset privacy-fieldset">
              <legend>3. Privacy Confirmation</legend>
              <p>
                WellBeingFem will use the information provided in this form only to respond to your enquiry
                and communicate with you about WellBeingFem services.
              </p>
              <p>
                This contact form is for general enquiries only. More detailed wellbeing information, where
                needed, is gathered separately before a session.
              </p>
              <label className="consent-check">
                <input type="checkbox" name="enquiry-consent" required />
                <span>I consent to WellBeingFem using the information provided in this form to respond to my enquiry. <b aria-hidden="true">*</b></span>
              </label>
              <label className="consent-check">
                <input type="checkbox" name="privacy-confirmation" required />
                <span>
                  I confirm that I have read the WellBeingFem <a href="/research#policies-client-information">Privacy Policy / GDPR Notice</a>. <b aria-hidden="true">*</b>
                </span>
              </label>
            </fieldset>

            <div className="form-submit-row">
              <button className="send-enquiry-button" type="submit">Send Enquiry</button>
              <p className="form-required-note">Required fields are marked <b aria-hidden="true">*</b>.</p>
            </div>
            {submissionNotice ? <p className="form-submission-notice" role="status">{submissionNotice}</p> : null}
          </form>

          <section
            id="policies-client-information"
            className="policies-client-information"
            aria-labelledby="policies-client-information-heading"
          >
            <h2 id="policies-client-information-heading">Policies &amp; Client Information</h2>
            <div className="policy-card-grid">
              <article className="policy-card" id="privacy-policy-gdpr-notice">
                <h3>Privacy Policy / GDPR Notice</h3>
                <button
                  className="policy-card-toggle"
                  type="button"
                  aria-expanded={expandedPolicy === "privacy"}
                  aria-controls="privacy-policy-content"
                  onClick={() => setExpandedPolicy((current) => current === "privacy" ? null : "privacy")}
                >
                  {expandedPolicy === "privacy" ? "Less" : "More"}
                </button>
              </article>
              <article className="policy-card">
                <h3>Terms &amp; Conditions</h3>
                <button
                  className="policy-card-toggle"
                  type="button"
                  aria-expanded={expandedPolicy === "terms"}
                  aria-controls="terms-conditions-content"
                  onClick={() => setExpandedPolicy((current) => current === "terms" ? null : "terms")}
                >
                  {expandedPolicy === "terms" ? "Less" : "More"}
                </button>
              </article>
            </div>
            {expandedPolicy ? (
              <div
                id={expandedPolicy === "privacy" ? "privacy-policy-content" : "terms-conditions-content"}
                className="policy-expanded-panel"
              >
                {expandedPolicy === "privacy" ? <PrivacyPolicyDocument /> : <TermsAndConditionsDocument />}
              </div>
            ) : null}
          </section>

          <ResearchResources />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
