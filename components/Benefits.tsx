"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 6 10 6 17a8 8 0 0016 0c0-7-8-13-8-13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 12v6M11 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Récupération musculaire",
    description:
      "Réduisez les courbatures et accélérez la régénération musculaire après l'effort. Idéal pour les sportifs et les actifs.",
    detail: "Résultats visibles dès 2 semaines",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6l2 2M20 6l2-2M4 14H2M24 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Énergie cellulaire",
    description:
      "Stimulez la production de mitochondries et optimisez l'ATP cellulaire pour une vitalité renforcée tout au long de la journée.",
    detail: "Action au niveau cellulaire",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a10 10 0 100 20A10 10 0 0014 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 14s1.5-3 5-3 5 3 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10.5" cy="11.5" r="1" fill="currentColor"/>
        <circle cx="17.5" cy="11.5" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Bien-être cutané",
    description:
      "Favorisez la synthèse du collagène et améliorez l'aspect de votre peau. Texture plus lisse, éclat naturellement retrouvé.",
    detail: "Collagène & élasticité",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5c5 0 9 3 9 8 0 6-9 12-9 12S5 19 5 13c0-5 4-8 9-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 13l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Soulagement articulaire",
    description:
      "Soutenez la mobilité et le confort articulaire. Utilisé par des milliers d'athlètes et professionnels de santé dans le monde.",
    detail: "Mobilité & confort",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 14c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 10v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 17l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Sommeil & récupération",
    description:
      "Une utilisation le soir favorise la détente musculaire et prépare votre corps à un sommeil profond et réparateur.",
    detail: "Protocole soir recommandé",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7.5H24l-6 4.5 2.5 7.5L14 19l-6.5 4.5 2.5-7.5-6-4.5h7.5L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Performance sportive",
    description:
      "Préparez votre corps avant l'entraînement et optimisez vos performances. Adopté par des athlètes de haut niveau.",
    detail: "+23% de performance mesurée",
  },
];

export default function Benefits() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="benefits" className="section-padding bg-noir-soft" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20 animate-on-scroll">
          <p className="section-label">Pourquoi Move Pro</p>
          <h2 className="section-title mb-4">
            Six raisons de choisir
            <br />
            <span className="text-gradient-red">la lumière rouge.</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            La photobiomodulation est l&apos;une des technologies de bien-être les
            plus étudiées. Move Pro vous en donne accès à domicile, avec une
            précision clinique.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-noir-border">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="bg-noir-card p-8 md:p-10 group hover:bg-noir-card/80 transition-all duration-500 cursor-default animate-on-scroll relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-led-red/0 group-hover:bg-led-red/[0.03] transition-all duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-led-red/20 text-led-red mb-6 group-hover:border-led-red/50 group-hover:shadow-[0_0_20px_rgba(232,24,42,0.15)] transition-all duration-300">
                {benefit.icon}
              </div>

              <h3 className="text-cream font-medium text-lg mb-3 group-hover:text-led-red transition-colors duration-300">
                {benefit.title}
              </h3>

              <p className="text-anthracite-muted text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>

              <div className="flex items-center gap-2 mt-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-led-red" />
                <span className="text-led-red/70 text-xs font-medium tracking-wide">
                  {benefit.detail}
                </span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-led-red/0 group-hover:bg-led-red/5 transition-all duration-500"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-led-red/15 animate-on-scroll">
          <div>
            <p className="text-cream font-medium mb-1">Prêt à transformer votre quotidien ?</p>
            <p className="text-anthracite-muted text-sm">Plus de 12 000 utilisateurs satisfaits en France.</p>
          </div>
          <a href="#order" className="btn-primary whitespace-nowrap">
            Essayer Move Pro
          </a>
        </div>
      </div>
    </section>
  );
}
