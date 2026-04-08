"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    name: "Marine L.",
    role: "Coach sportive, Lyon",
    avatar: "ML",
    rating: 5,
    title: "Indispensable dans ma routine recovery",
    text: "Je l'utilise après chaque session de CrossFit. Mes courbatures ont diminué de façon notable dès la première semaine. Mes athlètes ont commencé à demander des sessions. Vraiment impressionnant.",
    date: "Il y a 2 semaines",
    verified: true,
  },
  {
    name: "Thomas B.",
    role: "Kinésithérapeute, Paris",
    avatar: "TB",
    rating: 5,
    title: "Qualité professionnelle, prix accessible",
    text: "J'ai testé plusieurs appareils de photobiomodulation à plusieurs milliers d'euros. Move Pro offre une densité de puissance comparable à un coût bien plus raisonnable. Je le recommande à mes patients.",
    date: "Il y a 1 mois",
    verified: true,
  },
  {
    name: "Sophie M.",
    role: "Marathonienne amateur, Bordeaux",
    avatar: "SM",
    rating: 5,
    title: "Ma récupération a changé",
    text: "Après 20 ans de running, je cherchais quelque chose pour mieux récupérer. Move Pro a fait la différence. Je dors mieux, mes jambes sont moins lourdes. Je recommande sans hésiter.",
    date: "Il y a 3 semaines",
    verified: true,
  },
  {
    name: "Julien R.",
    role: "Préparateur physique, Marseille",
    avatar: "JR",
    rating: 5,
    title: "Résultats au-delà des attentes",
    text: "Sceptique au départ, j'ai été convaincu après 3 semaines d'utilisation régulière. La qualité de construction est excellente et les résultats sur la récupération musculaire sont tangibles.",
    date: "Il y a 5 semaines",
    verified: true,
  },
  {
    name: "Céline D.",
    role: "Yoga instructor, Toulouse",
    avatar: "CD",
    rating: 5,
    title: "Pour le bien-être global",
    text: "Je l'utilise pour la peau et la récupération après mes séances de yoga. Mon éclat naturel est revenu et mes articulations se portent bien mieux. Le service client est également excellent.",
    date: "Il y a 6 semaines",
    verified: true,
  },
  {
    name: "Alexandre P.",
    role: "Entrepreneur & sportif, Nantes",
    avatar: "AP",
    rating: 5,
    title: "Investissement rentabilisé en 2 semaines",
    text: "Je l'utilise matin et soir. L'énergie au réveil est différente. Mon neurologue m'a conseillé de continuer. L'appareil est solide, bien conçu et facile à utiliser.",
    date: "Il y a 2 mois",
    verified: true,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1l1.5 4.5H13l-3.75 2.75L10.5 13 7 10.5 3.5 13l1.25-4.75L1 5.5h4.5L7 1z"
        fill={filled ? "#E8182A" : "none"}
        stroke={filled ? "#E8182A" : "#3A3A3A"}
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Reviews() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="reviews" className="section-padding bg-noir-soft" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <p className="section-label">Ils nous font confiance</p>
            <h2 className="section-title">
              Ce que disent
              <br />
              <span className="text-gradient-red">nos utilisateurs.</span>
            </h2>
            <div className="divider" />
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>
              <p className="text-cream font-bold text-2xl">4.9/5</p>
              <p className="text-anthracite-muted text-xs">Sur 1 240 avis vérifiés</p>
            </div>
            <div className="w-px h-12 bg-noir-border" />
            <div className="text-right">
              <p className="text-cream font-bold text-2xl">12 000+</p>
              <p className="text-anthracite-muted text-xs">Clients satisfaits</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-noir-border">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="bg-noir-card p-8 flex flex-col gap-5 hover:bg-noir-card/60 transition-all duration-300 animate-on-scroll"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} filled={j < review.rating} />
                ))}
              </div>

              <div>
                <h3 className="text-cream font-medium text-sm mb-2">{review.title}</h3>
                <p className="text-anthracite-muted text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-noir-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-led-red/10 border border-led-red/20 flex items-center justify-center">
                    <span className="text-led-red text-xs font-bold">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="text-cream text-sm font-medium">{review.name}</p>
                    <p className="text-anthracite-muted text-xs">{review.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  {review.verified && (
                    <div className="flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1L6.5 3.5H9L6.875 5.25 7.5 8 5 6.5 2.5 8l.625-2.75L1 3.5h2.5L5 1z"
                          fill="#E8182A" />
                      </svg>
                      <span className="text-[9px] text-led-red/70 font-medium">Vérifié</span>
                    </div>
                  )}
                  <p className="text-anthracite-muted/50 text-[10px] mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 p-8 border border-noir-border animate-on-scroll">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: "Note moyenne", value: "★ 4.9/5" },
              { label: "Avis vérifiés", value: "1 240+" },
              { label: "Recommandent", value: "98%" },
              { label: "Clients actifs", value: "12 000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-cream font-semibold text-xl">{stat.value}</p>
                <p className="text-anthracite-muted text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
