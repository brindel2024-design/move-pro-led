"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "850nm", label: "Longueur d'onde optimale" },
  { value: "660nm", label: "Spectre rouge visible" },
  { value: "200mW", label: "Densité de puissance" },
  { value: "98%", label: "Clients satisfaits" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add("opacity-100");
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-led-red/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-led-red/8 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-led-red/4 blur-[80px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 opacity-0 transition-opacity duration-1000"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="w-2 h-2 rounded-full bg-led-red animate-glow-pulse" />
              <span className="text-led-red text-xs font-semibold tracking-[0.35em] uppercase">
                Technologie Professionnelle
              </span>
            </div>

            <h1
              className="font-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream leading-[1.05] animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              La lumière
              <br />
              <span className="text-gradient-red font-normal">
                qui régénère.
              </span>
              <br />
              <span className="text-cream/60 text-3xl sm:text-4xl lg:text-5xl font-extralight italic" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                De l&apos;intérieur.
              </span>
            </h1>

            <p
              className="text-anthracite-muted text-base md:text-lg font-light leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Move Pro utilise la photobiomodulation cliniquement étudiée pour
              soutenir la récupération musculaire, améliorer l&apos;énergie cellulaire
              et favoriser votre bien-être au quotidien.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <a href="#order" className="btn-primary">
                <span>Commander — 299€</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-outline">
                Voir comment ça marche
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-6 pt-2 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              {[
                { icon: "🚚", label: "Livraison offerte" },
                { icon: "🛡️", label: "Garantie 2 ans" },
                { icon: "↩️", label: "Retour 30 jours" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-cream/50 text-xs font-medium tracking-wide">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product visual */}
          <div className="relative flex justify-center items-center animate-float">
            {/* Outer glow rings */}
            <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-led-red/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border border-led-red/15 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Product container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center animate-glow-pulse"
              style={{
                background: "radial-gradient(circle at 40% 35%, #2A0A0D 0%, #1A0608 40%, #0A0203 100%)",
                boxShadow: "0 0 80px rgba(232,24,42,0.25), 0 0 200px rgba(232,24,42,0.08), inset 0 0 60px rgba(232,24,42,0.1)",
              }}
            >
              {/* LED panel representation */}
              <div className="relative w-36 h-44 md:w-48 md:h-60 flex flex-col items-center justify-center gap-3 md:gap-4 rounded-lg"
                style={{ background: "rgba(10,2,3,0.8)" }}
              >
                {/* LED grid */}
                <div className="grid grid-cols-4 gap-2 md:gap-2.5">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-led-red"
                      style={{
                        boxShadow: `0 0 ${6 + (i % 3) * 3}px rgba(232,24,42,${0.6 + (i % 4) * 0.1})`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="w-8 h-px bg-led-red/30 mt-1" />
                <span className="text-led-red/60 text-[8px] md:text-[9px] tracking-widest uppercase font-medium">
                  Move Pro
                </span>
              </div>

              {/* Wavelength labels */}
              <div className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 md:w-8 h-px bg-led-red/40" />
                  <span className="text-led-red/70 text-[9px] md:text-[10px] font-mono">660nm</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 md:w-8 h-px bg-led-red/20" />
                  <span className="text-led-red/40 text-[9px] md:text-[10px] font-mono">850nm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-noir-border rounded-sm overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-noir-card px-6 py-5 flex flex-col gap-1 animate-fade-up"
              style={{ animationDelay: `${0.7 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <span className="text-2xl md:text-3xl font-light text-cream tabular-nums">{stat.value}</span>
              <span className="text-anthracite-muted text-xs font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-anthracite-muted text-[10px] tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-led-red to-transparent" />
      </div>
    </section>
  );
}
