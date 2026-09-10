/**
 * WellBeingFem restoration reminder: preserve the supplied cream, gold, green,
 * serif-led identity; keep interactions quiet and do not introduce new motifs.
 */
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LOGO_URL = "/manus-storage/WellBeingfemlogofinal_e0e51dae.png";

type NavigationItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string; external?: boolean }>;
};

const WELLBEINGFEM_YOUTUBE_URL = "https://www.youtube.com/@wellbeingfem";

const navigation: NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "ONDAMED", href: "/ondamed" },
  {
    label: "Healy",
    href: "/healy",
    children: [
      { label: "What is Healy", href: "/healy" },
      { label: "Healy WellBeing", href: "/healy#healy-wellbeing" },
      { label: "Healy Aura Analysis", href: "/healy#healy-aura-analysis" },
      { label: "Healy I Ching", href: "/healy#healy-i-ching" },
      { label: "Healy Reiki", href: "/healy#healy-reiki" },
    ],
  },
  {
    label: "Guided Meditations",
    href: "/guided-meditations",
    children: [
      { label: "About WBF Meditations", href: "/guided-meditations" },
      { label: "Women's Wisdom", href: "/guided-meditations/womens-wisdom" },
      { label: "WBF YouTube Channel", href: WELLBEINGFEM_YOUTUBE_URL, external: true },
    ],
  },
  { label: "Resources", href: "/#free-wellbeingfem-resources" },
  {
    label: "Research",
    href: "/research#research-content",
    children: [
      { label: "ONDAMED", href: "/research#ondamed" },
      { label: "Healy", href: "/research#healy" },
      { label: "Guided Meditations", href: "/research#guided-meditations" },
    ],
  },
  { label: "Contact", href: "/research#contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeAtDesktop = () => {
      if (window.innerWidth >= 1080) setMobileOpen(false);
    };

    window.addEventListener("resize", closeAtDesktop);
    return () => window.removeEventListener("resize", closeAtDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-link" href="/" aria-label="WellBeingFem home">
          <img
            className="brand-logo"
            src={LOGO_URL}
            alt="WellBeingFem"
            width="1536"
            height="1024"
          />
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <ul className="desktop-menu">
            {navigation.map((item) => (
              <li className="desktop-menu-item" key={item.label}>
                {item.children ? (
                  <>
                    {item.href ? (
                      <a className="desktop-menu-trigger" href={item.href} aria-haspopup="true">
                        <span>{item.label}</span>
                        <ChevronDown aria-hidden="true" size={14} strokeWidth={1.5} />
                      </a>
                    ) : (
                      <button
                        className="desktop-menu-trigger"
                        type="button"
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown aria-hidden="true" size={14} strokeWidth={1.5} />
                      </button>
                    )}
                    <ul className="desktop-submenu" aria-label={`${item.label} submenu`}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noreferrer" : undefined}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a className="desktop-menu-link" href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X aria-hidden="true" size={25} strokeWidth={1.4} />
          ) : (
            <Menu aria-hidden="true" size={27} strokeWidth={1.4} />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation${mobileOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <ul className="mobile-menu">
          {navigation.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <details className="mobile-submenu">
                  <summary>
                    {item.href ? (
                      <a href={item.href} onClick={(event) => event.stopPropagation()}>
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    <ChevronDown aria-hidden="true" size={16} strokeWidth={1.5} />
                  </summary>
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noreferrer" : undefined}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  href={item.href}
                  onClick={item.label === "Resources" ? () => setMobileOpen(false) : undefined}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
