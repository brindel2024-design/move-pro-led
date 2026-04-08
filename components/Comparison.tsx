"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { label: "Double longueur d'onde (660 + 850nm)", movePro: true, basic: false, spa: "Partiel" },
  { label: "100 mW/cm² densité de puissance", movePro: true, basic: false, spa: false },
  { label: "Certifié CE & FDA", movePro: true, basic: false, spa: "Variable" },
  { label: "50 000h de durée de vie LED", movePro: true, basic: false, spa: false },
  { label: "Garantie 24 mois", movePro: true, basic: "12 mois", spa: false },
  { label: "Support expert 7j/7", movePro: true, basic: false, spa: false },
  { label: "Retour 30 jours gratuit", movePro: true, basic: false, spa: false },
  { label: "Guide protocole inclus", movePro: true, basic: false, spa: false },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-led-red/10 border border-led-red/30 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2.5 2.5L8 3" stroke="#E8182A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3 3l4 4M7 3L3 7" stroke="#3A3A3A" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  return <span className="text-anthracite-muted text-xs text-center block">{value}</span>;
}

export default function Comparison() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-noir-soft" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="section-label">Comparaison</p>
          <h2 className="section-title">
            Move Pro vs
            <br />
            <span className="text-gradient-red">les alternatives.</span>
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto animate-on-scroll">
          <table className="w-full border-collapse min-w-[540px]">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 text-anthracite-muted text-xs font-medium tracking-wide w-1/2 border-b border-noir-border" />
                <th className="px-5 py-4 border-b border-led-red/30 bg-led-red/[0.04]">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-led-red animate-glow-pulse" />
                    <span className="text-cream text-sm font-semibold">Move Pro</span>
                    <span className="text-led-red text-xs font-mono">299€</span>
                  </div>
                </th>
                <th className="px-5 py-4 border-b border-noir-border">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-anthracite-muted text-sm font-medium">Appareil basique</span>
                    <span className="text-anthracite-muted text-xs font-mono">~80€</span>
                  </div>
                </th>
                <th className="px-5 py-4 border-b border-noir-border">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-anthracite-muted text-sm font-medium">Séance spa</span>
                    <span className="text-anthracite-muted text-xs font-mono">~60€/séance</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-noir-border last:border-0 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-noir-card/30"
                  }`}
                >
                  <td className="px-5 py-3.5 text-cream/80 text-sm">{row.label}</td>
                  <td className="px-5 py-3.5 bg-led-red/[0.03]">
                    <Cell value={row.movePro} />
                  </td>
                  <td className="px-5 py-3.5">
                    <Cell value={row.basic} />
                  </td>
                  <td className="px-5 py-3.5">
                    <Cell value={row.spa} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ROI note */}
        <div className="mt-8 p-5 border border-led-red/15 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-on-scroll">
          <div className="flex-shrink-0 text-3xl font-light text-led-red">5×</div>
          <p className="text-anthracite-muted text-sm leading-relaxed">
            Rentabilisé en moins de 5 séances de spa. Move Pro s&apos;utilise
            illimité, à domicile, à votre rythme — sans abonnement ni frais cachés.
          </p>
        </div>
      </div>
    </section>
  );
}
