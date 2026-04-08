"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  "Sciences & Vie",
  "Le Figaro Santé",
  "Men's Health",
  "Femme Actuelle",
  "L'Équipe",
  "Doctissimo",
];

const highlights = [
  {
    value: "660",
    unit: "nm",
    label: "Rouge visible",
    description: "Pénétration superficielle optimale",
  },
  {
    value: "850",
    unit: "nm",
    label: "Infrarouge proche",
    description: "Profondeur musculaire & articulaire",
  },
  {
    value: "100",
    unit: "mW/cm²",
    label: "Puissance irradiante",
    description: "Densité cliniquement efficace",
  },
];

export default function SocialProof() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-noir border-y border-noir-border" ref={sectionRef}>
      {/* Media logos */}
      <div className="border-b border-noir-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <span className="text-anthracite-muted/50 text-[10px] tracking-widest uppercase hidden md:block">
              Vu dans
            </span>
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-anthracite-muted/40 hover:text-anthracite-muted text-xs md:text-sm font-light tracking-wider transition-colors duration-200 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Technical highlights */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-px bg-noir-border">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className="bg-noir-card px-8 py-10 text-center group animate-on-scroll"
            >
              <div className="inline-flex items-end gap-1 mb-3">
                <span className="text-5xl md:text-6xl font-light text-cream tabular-nums group-hover:text-gradient-red transition-all duration-300">
                  {item.value}
                </span>
                <span className="text-led-red text-base font-mono mb-2">{item.unit}</span>
              </div>
              <p className="text-cream font-medium text-sm mb-1">{item.label}</p>
              <p className="text-anthracite-muted text-xs">{item.description}</p>

              {/* Bottom accent */}
              <div className="w-8 h-px bg-led-red mx-auto mt-4 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
