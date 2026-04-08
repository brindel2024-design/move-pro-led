const footerLinks = {
  Produit: [
    { label: "Caractéristiques", href: "#benefits" },
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Avis clients", href: "#reviews" },
    { label: "Commander", href: "#order" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Livraison & Retours", href: "#shipping" },
    { label: "Garantie", href: "#shipping" },
    { label: "Contact", href: "mailto:contact@movepro.fr" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const certifications = [
  { label: "CE Certifié", desc: "Conformité européenne" },
  { label: "FDA Listed", desc: "Enregistré FDA USA" },
  { label: "RoHS", desc: "Sans substances nocives" },
  { label: "ISO 9001", desc: "Qualité certifiée" },
];

export default function Footer() {
  return (
    <footer className="bg-noir-deep border-t border-noir-border">
      {/* Certifications strip */}
      <div className="border-b border-noir-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
            <p className="text-anthracite-muted text-xs tracking-widest uppercase">
              Certifications & conformité
            </p>
            <div className="flex flex-wrap gap-6">
              {certifications.map((cert) => (
                <div key={cert.label} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-led-red" />
                  <div>
                    <span className="text-cream text-xs font-semibold">{cert.label}</span>
                    <span className="text-anthracite-muted text-xs ml-1.5 hidden sm:inline">{cert.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-led-red rounded-full opacity-20" />
                <div className="w-3.5 h-3.5 bg-led-red rounded-full relative z-10" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-cream font-semibold text-xs tracking-[0.15em] uppercase">
                  Move Pro
                </span>
                <span className="text-led-red text-[8px] font-medium tracking-[0.2em] uppercase">
                  Red LED Therapy
                </span>
              </div>
            </div>

            <p className="text-anthracite-muted text-xs leading-relaxed mb-6 max-w-[200px]">
              Technologie de photobiomodulation professionnelle, conçue pour votre
              bien-être quotidien.
            </p>

            <div className="flex items-center gap-3">
              {["instagram", "facebook", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 border border-noir-border hover:border-led-red/40 flex items-center justify-center text-anthracite-muted hover:text-led-red transition-all duration-200"
                  aria-label={social}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    {social === "instagram" && (
                      <>
                        <rect x="2" y="2" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="10.5" cy="3.5" r="0.75" fill="currentColor"/>
                      </>
                    )}
                    {social === "facebook" && (
                      <path d="M10 2H8.5C7.4 2 6.5 2.9 6.5 4v1.5H5V7.5h1.5V12h2.5V7.5H10.5l.5-2H9V4.2c0-.44.36-.7.7-.7H10.5V2H10z" fill="currentColor"/>
                    )}
                    {social === "youtube" && (
                      <>
                        <rect x="1.5" y="3" width="11" height="8" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M6 5.5l3 1.5-3 1.5V5.5z" fill="currentColor"/>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-cream text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-anthracite-muted text-sm hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-noir-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-anthracite-muted text-xs">
            © {new Date().getFullYear()} Move Pro. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-anthracite-muted/50 text-[10px] tracking-wide">
              Fabriqué avec soin · Livraison mondiale
            </p>
            <div className="flex items-center gap-2">
              {["💳", "🔒"].map((icon) => (
                <span key={icon} className="text-xs">{icon}</span>
              ))}
              <span className="text-anthracite-muted/50 text-[10px]">Paiement sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
