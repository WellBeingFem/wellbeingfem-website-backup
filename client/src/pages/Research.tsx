/**
 * WellBeingFem restoration reminder: the supplied Contact Form leads this page;
 * research sections remain only anchored placeholders pending source restoration.
 */
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { PrivacyPolicyDocument, TermsAndConditionsDocument } from "@/components/PolicyDocuments";
import { useState, type FormEvent } from "react";

export default function Research() {
  const [submissionNotice, setSubmissionNotice] = useState("");
  const [privacyExpanded, setPrivacyExpanded] = useState(false);
  const [gdprExpanded, setGdprExpanded] = useState(false);

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
              <h1>Contact Form</h1>
              <p>For general WellBeingFem enquiries.</p>
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
                  aria-expanded={privacyExpanded}
                  aria-controls="privacy-policy-content"
                  onClick={() => setPrivacyExpanded((expanded) => !expanded)}
                >
                  {privacyExpanded ? "Less" : "More"}
                </button>
                {privacyExpanded ? (
                  <div id="privacy-policy-content" className="policy-card-content">
                    <PrivacyPolicyDocument />
                  </div>
                ) : null}
              </article>
              <article className="policy-card">
                <h3>Terms &amp; Conditions</h3>
                <button
                  className="policy-card-toggle"
                  type="button"
                  aria-expanded={gdprExpanded}
                  aria-controls="gdpr-policy-content"
                  onClick={() => setGdprExpanded((expanded) => !expanded)}
                >
                  {gdprExpanded ? "Less" : "More"}
                </button>
                {gdprExpanded ? (
                  <div id="gdpr-policy-content" className="policy-card-content">
                    <TermsAndConditionsDocument />
                  </div>
                ) : null}
              </article>
            </div>
          </section>

          <div id="research-content" className="research-content-anchor">
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
