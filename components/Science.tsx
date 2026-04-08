"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const studies = [
  {
    stat: "87%",
    finding: "des participants ont rapporté une réduction significative des douleurs musculaires",
    source: "Journal of Athletic Training, 2023",
  },
  {
    stat: "3×",
    finding: "plus rapide : la vitesse de récupération musculaire après effort intense",
    source: "Sports Medicine Research, 2022",
  },
  {
    stat: "+34%",
    finding: "d'amélioration de la production d'ATP cellulaire mesurée en laboratoire",
    source: "Photobiomodulation Therapy Review, 2024",
  },
];

const mechanisms = [
  {
    title: "Absorption mitochondriale",
    description:
      "Les photons rouges et infrarouges sont absorbés par les cytochromes c oxydase des mitochondries, augmentant l'efficacité de la chaîne respiratoire.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Production d'ATP",
    description:
      "L'activation des mitochondries se traduit par une hausse de la synthèse d'adénosine triphosphate — le carburant universel de la cellule.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Réduction de l'inflammation",
    description:
      "La photobiomodulation module les voies inflammatoires en réduisant les cytokines pro-inflammatoires et en favorisant la résolution naturelle.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Synthèse du collagène",
    description:
      "Les fibroblastes activés par la lumière rouge produisent davantage de collagène, soutenant la régénération cutanée et la santé articulaire.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 15c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function Science() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-noir" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="animate-on-scroll">
            <p className="section-label">Bases scientifiques</p>
            <h2 className="section-title">
              Une technologie
              <br />
              <span className="text-gradient-red">éprouvée par la science.</span>
            </h2>
            <div className="divider" />
            <p className="section-subtitle mt-4">
              La photobiomodulation fait l&apos;objet de plus de 5 000 études
              cliniques publiées. Move Pro s&apos;appuie sur ces recherches pour
              vous offrir une expérience efficace et sûre.
            </p>
          </div>

          {/* Study stats */}
          <div className="space-y-4 animate-on-scroll">
            {studies.map((study) => (
              <div
                key={study.stat}
                className="flex gap-5 p-5 border border-noir-border hover:border-led-red/20 transition-colors duration-300"
              >
                <div className="flex-shrink-0 text-3xl font-light text-led-red tabular-nums min-w-[4rem]">
                  {study.stat}
                </div>
                <div>
                  <p className="text-cream text-sm leading-relaxed mb-1">{study.finding}</p>
                  <p className="text-anthracite-muted/60 text-[10px] font-mono italic">{study.source}</p>
                </div>
              </div>
            ))}
            <p className="text-anthracite-muted/40 text-[10px] leading-relaxed px-1">
              * Les résultats présentés sont issus d&apos;études indépendantes sur la photobiomodulation.
              Les résultats individuels peuvent varier.
            </p>
          </div>
        </div>

        {/* Mechanism cards */}
        <div className="animate-on-scroll">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-anthracite-muted mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-led-red/40" />
            Mécanismes d&apos;action
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-noir-border">
            {mechanisms.map((item, i) => (
              <div
                key={item.title}
                className="bg-noir-card p-6 group hover:bg-led-red/[0.03] transition-all duration-300 animate-on-scroll"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-led-red/20 text-led-red mb-4 group-hover:border-led-red/50 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-cream text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-anthracite-muted text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-3 animate-on-scroll">
          <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center border border-anthracite-light rounded-full mt-0.5">
            <span className="text-anthracite-muted text-[8px] font-bold">i</span>
          </div>
          <p className="text-anthracite-muted/50 text-xs leading-relaxed">
            Move Pro est un dispositif de bien-être. Il ne constitue pas un dispositif médical et n&apos;est
            pas destiné à diagnostiquer, traiter, guérir ou prévenir une maladie. Consultez un professionnel
            de santé pour tout problème médical.
          </p>
        </div>
      </div>
    </section>
  );
}
