import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        led: {
          red: "#E8182A",
          "red-dark": "#B5111F",
          "red-glow": "#FF2D3F",
        },
        noir: {
          DEFAULT: "#080808",
          deep: "#050505",
          soft: "#0F0F0F",
          card: "#141414",
          border: "#1E1E1E",
        },
        anthracite: {
          DEFAULT: "#2A2A2A",
          light: "#3A3A3A",
          muted: "#888888",
        },
        cream: {
          DEFAULT: "#F5F0EB",
          muted: "#C8C4BE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(232,24,42,0.3), 0 0 60px rgba(232,24,42,0.1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(232,24,42,0.6), 0 0 100px rgba(232,24,42,0.2)",
          },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "led-gradient":
          "radial-gradient(ellipse at center, rgba(232,24,42,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(ellipse at 60% 50%, rgba(232,24,42,0.12) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #050505 100%)",
        "card-gradient":
          "linear-gradient(135deg, #141414 0%, #0F0F0F 100%)",
        shimmer:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
