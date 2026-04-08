"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Bénéfices", href: "#benefits" },
  { label: "Fonctionnement", href: "#how-it-works" },
  { label: "Avis", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-noir/95 backdrop-blur-md border-b border-noir-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-led-red rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-glow-pulse" />
            <div className="w-4 h-4 bg-led-red rounded-full relative z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-cream font-semibold text-sm tracking-[0.15em] uppercase">
              Move Pro
            </span>
            <span className="text-led-red text-[9px] font-medium tracking-[0.25em] uppercase">
              Red LED Therapy
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-anthracite-muted hover:text-cream text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-led-red group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#order"
            className="btn-primary text-xs py-3 px-6"
          >
            Commander
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-noir-card border-b border-noir-border`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/80 hover:text-cream text-base font-medium block"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#order"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center text-xs py-3"
            >
              Commander Maintenant
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
