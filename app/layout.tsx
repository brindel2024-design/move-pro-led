import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Move Pro Red LED Light Therapy | Thérapie Lumière Rouge Premium",
  description:
    "Découvrez Move Pro, le dispositif de thérapie par lumière rouge de qualité professionnelle. Récupération musculaire, bien-être cellulaire, performance optimisée. Livraison gratuite. Garantie 2 ans.",
  keywords:
    "thérapie lumière rouge, red light therapy, Move Pro, bien-être, récupération musculaire, photobiomodulation, led rouge",
  openGraph: {
    title: "Move Pro Red LED Light Therapy | Performance & Bien-Être",
    description:
      "Technologie de photobiomodulation professionnelle. Récupération, vitalité, performance. Découvrez Move Pro.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-noir text-cream antialiased noise-overlay">
        {children}
      </body>
    </html>
  );
}
