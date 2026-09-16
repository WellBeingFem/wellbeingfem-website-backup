/**
 * WellBeingFem restoration reminder: use only the supplied logo and established
 * sage-green, cream, and gold language in this reserved, responsive footer.
 */
const LOGO_URL = "/manus-storage/WellBeingfemlogofinal_e0e51dae.png";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "ONDAMED", href: "/ondamed" },
  { label: "Healy", href: "/healy" },
  { label: "Guided Meditations", href: "/guided-meditations" },
  { label: "Resources", href: "/#free-wellbeingfem-resources" },
  { label: "Research", href: "/research#research-content" },
  { label: "Contact", href: "/research#contact" },
  { label: "Policies & Client Information", href: "/research#policies-client-information" },
];

export default function SiteFooter() {
  return (
    <>
      <div className="page-return-to-top">
        <a href="#page-top">Return to Top of Page</a>
      </div>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__identity">
            <a className="footer-brand-link" href="/" aria-label="WellBeingFem home">
              <img
                className="footer-logo"
                src={LOGO_URL}
                alt="WellBeingFem"
                width="1536"
                height="1024"
              />
            </a>
            <div className="footer-copy">
              <p className="footer-name">WellBeingFem</p>
              <p className="footer-tagline">Rest <span aria-hidden="true">•</span> Reflect <span aria-hidden="true">•</span> Renew</p>
            </div>
          </div>
          <div className="footer-details">
            <a href="https://wellbeingfem.com">wellbeingfem.com</a>
            <a href="mailto:WellBeingFem@gmail.com">WellBeingFem@gmail.com</a>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
