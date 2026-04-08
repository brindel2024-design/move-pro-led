"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 80vh)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-noir-card/95 backdrop-blur-md border-t border-noir-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
          {/* Product info */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex-shrink-0 w-8 h-8 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-led-red/20 rounded-full" />
              <div className="w-3 h-3 bg-led-red rounded-full" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="text-cream text-sm font-medium truncate">Move Pro Red LED Therapy</p>
              <p className="text-anthracite-muted text-xs">660nm + 850nm · Certifié CE</p>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-cream font-semibold text-lg">299€</span>
                <span className="text-anthracite-muted line-through text-sm">399€</span>
              </div>
              <p className="text-led-red text-[10px] font-medium">Livraison gratuite</p>
            </div>
            <a
              href="#order"
              className="btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
            >
              Commander
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
