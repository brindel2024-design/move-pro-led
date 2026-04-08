"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "Positionnez l'appareil",
    description:
      "Placez le panneau Move Pro à 5–15 cm de la zone ciblée. La distance optimale est indiquée dans le guide inclus.",
    time: "30 secondes",
  },
  {
    number: "02",
    title: "Sélectionnez le mode",
    description:
      "Choisissez entre rouge (660nm), infrarouge (850nm) ou le mode combiné selon vos besoins. L'interface est intuitive.",
    time: "5 secondes",
  },
  {
    number: "03",
    title: "Votre séance commence",
    description:
      "Une à deux séances de 10 à 20 minutes par jour suffisent. La lumière pénètre profondément sans aucune chaleur désagréable.",
    time: "10–20 minutes",
  },
  {
    number: "04",
    title: "Résultats progressifs",
    description:
      "Les premiers effets sont perceptibles dès la première semaine. Des bénéfices durables s'établissent avec une pratique régulière.",
    time: "Dès 7 jours",
  },
];

const specs = [
  { label: "Longueurs d'onde", value: "660nm & 850nm" },
  { label: "Puissance irradiante", value: "100 mW/cm²" },
  { label: "Surface couverte", value: "30 × 20 cm" },
  { label: "Durée de vie LEDs", value: "50 000 h" },
  { label: "Certification", value: "CE / FDA" },
  { label: "Garantie", value: "24 mois" },
];

export default function HowItWorks() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding bg-noir" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Steps */}
          <div>
            <div className="animate-on-scroll">
              <p className="section-label">Protocole d&apos;utilisation</p>
              <h2 className="section-title mb-4">
                Simple comme
                <br />
                <span className="text-gradient-red">allumer la lumière.</span>
              </h2>
              <div className="divider" />
            </div>

            <div className="mt-12 space-y-0">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative flex gap-6 pb-10 last:pb-0 animate-on-scroll"
                >
                  {/* Line connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-7 top-14 w-px h-full bg-gradient-to-b from-led-red/30 to-transparent" />
                  )}

                  {/* Number circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-led-red/30 flex items-center justify-center relative z-10 bg-noir">
                    <span className="text-led-red font-mono text-sm font-bold">{step.number}</span>
                  </div>

                  <div className="pt-3 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-cream font-medium text-lg">{step.title}</h3>
                      <span className="text-[10px] text-led-red/60 font-mono bg-led-red/10 px-2 py-0.5 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-anthracite-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specs + visual */}
          <div className="space-y-8">
            {/* Device visual */}
            <div
              className="relative h-64 md:h-80 flex items-center justify-center rounded-none overflow-hidden animate-on-scroll border border-noir-border"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(232,24,42,0.08) 0%, #080808 70%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-3 p-8 border border-led-red/10 bg-noir-card/80">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full"
                      style={{
                        background:
                          i % 3 === 0
                            ? "radial-gradient(circle, #E8182A 30%, #8B0000 100%)"
                            : "radial-gradient(circle, #CC1A2A 30%, #6B0000 100%)",
                        boxShadow: `0 0 ${4 + (i % 4) * 2}px rgba(232,24,42,${0.4 + (i % 3) * 0.15})`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 right-4 text-right">
                <p className="text-[9px] text-anthracite-muted tracking-widest uppercase">Move Pro</p>
                <p className="text-[9px] text-led-red/60 tracking-widest uppercase">Panel Series</p>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-led-red animate-glow-pulse" />
                  <span className="text-[9px] text-anthracite-muted uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>

            {/* Specs grid */}
            <div className="animate-on-scroll">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-anthracite-muted mb-4">
                Spécifications techniques
              </p>
              <div className="grid grid-cols-2 gap-px bg-noir-border">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-noir-card px-5 py-4 group"
                  >
                    <p className="text-anthracite-muted text-xs mb-1">{spec.label}</p>
                    <p className="text-cream font-medium text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Science note */}
            <div className="border-l-2 border-led-red/40 pl-5 animate-on-scroll">
              <p className="text-anthracite-muted text-xs leading-relaxed italic">
                &ldquo;La photobiomodulation agit sur les cytochromes mitochondriaux,
                stimulant la production d&apos;ATP et favorisant les processus naturels
                de régénération tissulaire.&rdquo;
              </p>
              <p className="text-led-red/50 text-[10px] mt-2 font-medium tracking-wide">
                — Mécanisme d&apos;action documenté
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
