"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "La thérapie par lumière rouge est-elle sûre ?",
    answer:
      "Oui, la photobiomodulation est non-invasive et considérée comme sûre pour la grande majorité des utilisateurs. Elle n'émet pas de rayonnement UV. Move Pro est certifié CE et répond aux normes européennes de sécurité. Les personnes sous traitements photosensibilisants ou enceintes doivent consulter leur médecin avant utilisation.",
  },
  {
    question: "Combien de temps dure une séance efficace ?",
    answer:
      "Une séance de 10 à 20 minutes par zone est recommandée. Vous pouvez traiter plusieurs zones lors d'une même session. Pour des résultats optimaux, 1 à 2 séances par jour sont conseillées, à distance régulière de 5 à 15 cm de la zone ciblée.",
  },
  {
    question: "Quand vais-je commencer à voir des résultats ?",
    answer:
      "Les premières améliorations sont généralement perceptibles après 1 à 2 semaines d'utilisation régulière. Les effets les plus significatifs sur la récupération musculaire et le bien-être s'installent après 3 à 4 semaines de pratique quotidienne. Les résultats varient selon les individus et les objectifs ciblés.",
  },
  {
    question: "Quelle est la différence entre 660nm et 850nm ?",
    answer:
      "La lumière rouge visible (660nm) pénètre les couches superficielles de la peau — idéale pour la santé cutanée, les tissus superficiels et l'énergie cellulaire. L'infrarouge proche (850nm) pénètre plus profondément dans les muscles et les articulations, favorisant la récupération musculaire et le confort articulaire. Le mode combiné offre les deux bénéfices simultanément.",
  },
  {
    question: "Puis-je utiliser Move Pro sur n'importe quelle partie du corps ?",
    answer:
      "Oui, Move Pro peut être utilisé sur la quasi-totalité du corps : dos, jambes, épaules, ventre, visage (avec protection des yeux fournie). Évitez l'exposition directe des yeux à la lumière. Pour des zones spécifiques comme la thyroïde, consultez un professionnel de santé.",
  },
  {
    question: "Quelle est la durée de vie de l'appareil ?",
    answer:
      "Les LEDs Move Pro sont certifiées pour 50 000 heures de fonctionnement, soit plus de 13 ans à raison de 10 séances par jour. L'appareil est conçu pour durer et est accompagné d'une garantie de 24 mois couvrant tous les défauts de fabrication.",
  },
  {
    question: "Puis-je utiliser Move Pro si je prends des médicaments ?",
    answer:
      "La plupart des médicaments sont compatibles avec la photobiomodulation. Cependant, certains médicaments photosensibilisants (certains antibiotiques, médicaments dermatologiques) peuvent nécessiter des précautions. En cas de doute, consultez votre médecin ou pharmacien avant de commencer.",
  },
  {
    question: "Comment se passe la livraison et les retours ?",
    answer:
      "Move Pro est livré sous 3 à 5 jours ouvrés en France métropolitaine (livraison gratuite). Si l'appareil ne vous convient pas, vous bénéficiez d'un droit de retour de 30 jours. Nous prenons en charge les frais de retour et vous remboursons intégralement sous 5 à 7 jours ouvrés.",
  },
];

export default function FAQ() {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-noir" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-label">Questions fréquentes</p>
          <h2 className="section-title">
            Tout ce que vous devez
            <br />
            <span className="text-gradient-red">savoir sur Move Pro.</span>
          </h2>
          <div className="divider mx-auto" />
        </div>

        {/* Accordion */}
        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-noir-border animate-on-scroll"
            >
              <button
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className={`text-base font-medium transition-colors duration-200 ${
                    openIndex === i ? "text-led-red" : "text-cream group-hover:text-led-red"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border transition-all duration-300 mt-0.5 ${
                    openIndex === i
                      ? "border-led-red bg-led-red/10 rotate-45"
                      : "border-anthracite-light"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? "max-h-64 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-anthracite-muted text-sm leading-relaxed pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-anthracite-muted text-sm">
            Vous avez d&apos;autres questions ?{" "}
            <a
              href="mailto:contact@movepro.fr"
              className="text-led-red hover:text-led-red-glow underline underline-offset-4 transition-colors"
            >
              Contactez notre équipe
            </a>
            {" "}— réponse sous 24h.
          </p>
        </div>
      </div>
    </section>
  );
}
