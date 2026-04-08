"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const guarantees = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 9v8c0 6.627 5.373 11 12 11s12-4.373 12-11V9L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Garantie 24 mois",
    description: "Couverture complète contre tout défaut de fabrication. Remplacement ou remboursement sans question.",
    highlight: "24 mois",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 15h24" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6l-3 4M22 6l3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 20h4M20 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Retour 30 jours",
    description: "Pas convaincu ? Retournez-le gratuitement. Remboursement intégral sous 5 jours ouvrés, sans conditions.",
    highlight: "30 jours",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 16L3 19l5 5 18-18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 16c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Paiement sécurisé",
    description: "Transactions chiffrées SSL. Paiement par carte, PayPal ou en 3x sans frais. Vos données sont protégées.",
    highlight: "100% sécurisé",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 12h20M6 16h12M6 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 18l-6 6-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="6" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Support dédié",
    description: "Une équipe d'experts disponible 7j/7 par chat, email et téléphone. Réponse garantie sous 2 heures.",
    highlight: "7j/7",
  },
];

const shippingDetails = [
  { label: "Délai France métropolitaine", value: "3 à 5 jours ouvrés" },
  { label: "Délai Europe", value: "5 à 8 jours ouvrés" },
  { label: "Transporteur", value: "Colissimo / DHL Express" },
  { label: "Suivi en temps réel", value: "Inclus par email & SMS" },
  { label: "Emballage", value: "Éco-responsable & sécurisé" },
  { label: "Livraison", value: "Gratuite dès 99€" },
];

export default function Shipping() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="shipping" className="section-padding bg-noir-soft" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-label">Livraison & Garantie</p>
          <h2 className="section-title">
            Achetez en toute
            <br />
            <span className="text-gradient-red">confiance.</span>
          </h2>
          <div className="divider mx-auto" />
          <p className="section-subtitle mx-auto mt-4 text-center">
            Chaque commande est traitée avec soin. Nous nous engageons pour votre
            satisfaction à chaque étape.
          </p>
        </div>

        {/* Guarantee cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-noir-border mb-16">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="bg-noir-card p-8 flex flex-col gap-5 group hover:bg-noir-card/60 transition-all duration-300 animate-on-scroll"
            >
              <div className="text-led-red group-hover:scale-110 transition-transform duration-300 w-fit">
                {item.icon}
              </div>
              <div>
                <div className="inline-block text-xs font-mono text-led-red bg-led-red/10 px-2 py-0.5 mb-3">
                  {item.highlight}
                </div>
                <h3 className="text-cream font-medium text-base mb-2">{item.title}</h3>
                <p className="text-anthracite-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping details */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <h3 className="text-cream font-medium text-xl mb-6 flex items-center gap-3">
              <div className="w-1 h-5 bg-led-red" />
              Informations de livraison
            </h3>
            <div className="space-y-px bg-noir-border">
              {shippingDetails.map((detail) => (
                <div key={detail.label} className="bg-noir-card flex items-center justify-between px-6 py-4">
                  <span className="text-anthracite-muted text-sm">{detail.label}</span>
                  <span className="text-cream text-sm font-medium">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order CTA */}
          <div id="order" className="animate-on-scroll">
            <div className="border border-led-red/20 p-8 relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-led-red/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-led-red animate-glow-pulse" />
                  <span className="text-led-red text-xs tracking-widest uppercase font-medium">
                    Offre actuellement disponible
                  </span>
                </div>

                <h3 className="text-cream font-light text-3xl mb-1" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                  Move Pro
                </h3>
                <p className="text-anthracite-muted text-sm mb-6">
                  Panneau LED Thérapeutique Professionnel
                </p>

                <div className="flex items-end gap-3 mb-6">
                  <span className="text-cream text-4xl font-light">299€</span>
                  <div className="pb-1">
                    <span className="text-anthracite-muted line-through text-lg">399€</span>
                    <span className="ml-2 text-xs bg-led-red text-white px-2 py-0.5 font-medium">
                      -25%
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {[
                    "Panneau Move Pro 660nm & 850nm",
                    "Lunettes de protection incluses",
                    "Guide d'utilisation premium",
                    "Câble d'alimentation universel",
                    "Garantie 24 mois + support 7j/7",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <div className="w-4 h-4 rounded-full bg-led-red/10 border border-led-red/30 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3 5.5 6.5 2" stroke="#E8182A" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="btn-primary w-full text-center mb-4 block">
                  Commander Maintenant
                </a>

                <div className="flex items-center justify-center gap-4 text-anthracite-muted text-xs">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1L7.5 4.5H11L8.25 6.75 9.5 10.5 6 8.5 2.5 10.5 3.75 6.75 1 4.5h3.5L6 1z" fill="#E8182A" />
                    </svg>
                    SSL sécurisé
                  </div>
                  <div className="w-px h-3 bg-noir-border" />
                  <span>3x sans frais disponible</span>
                  <div className="w-px h-3 bg-noir-border" />
                  <span>Retour 30j gratuit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
