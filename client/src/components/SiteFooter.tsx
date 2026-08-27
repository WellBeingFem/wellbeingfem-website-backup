/**
 * WellBeingFem restoration reminder: use only the supplied logo and established
 * sage-green, cream, and gold language in this reserved, responsive footer.
 */
const LOGO_URL = "/manus-storage/WellBeingfemlogofinal_e0e51dae.png";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "ONDAMED", href: "/ondamed" },
  { label: "Healy", href: "/healy" },
  { label: "Guided Meditations", href: "/guided-meditations" },
  { label: "Resources", href: "/resources" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/research#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="footer-brand-link" href="/" aria-label="WellBeingFem home">
          <img
            className="footer-logo"
            src={LOGO_URL}
            alt="WellBeingFem"
            width="1536"
            height="1024"
          />
        </a>
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
  );
}
