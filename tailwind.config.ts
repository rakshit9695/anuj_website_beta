import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "clamp(1rem, 5vw, 4rem)",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          50: "var(--navy-50)",
          100: "var(--navy-100)",
          700: "var(--navy-700)",
          800: "var(--navy-800)",
          900: "var(--navy-900)",
          950: "var(--navy-950)",
        },
        brass: {
          100: "var(--brass-100)",
          400: "var(--brass-400)",
          500: "var(--brass-500)",
          600: "var(--brass-600)",
        },
        ink: {
          300: "var(--ink-300)",
          500: "var(--ink-500)",
          700: "var(--ink-700)",
          900: "var(--ink-900)",
        },
        paper: "var(--paper)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        cat: {
          direct: "var(--cat-direct)",
          indirect: "var(--cat-indirect)",
          regulatory: "var(--cat-regulatory)",
          litigation: "var(--cat-litigation)",
          giftcity: "var(--cat-giftcity)",
          budget: "var(--cat-budget)",
          trade: "var(--cat-trade)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 5vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        h1: ["clamp(2.25rem, 3.5vw, 3.25rem)", { lineHeight: "1.1" }],
        h2: ["clamp(1.75rem, 2.5vw, 2.5rem)", { lineHeight: "1.15" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
      },
      maxWidth: {
        prose: "68ch",
        lede: "65ch",
        bleed: "1440px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,31,60,.06), 0 8px 24px rgba(10,31,60,.06)",
        "card-hover":
          "0 2px 4px rgba(10,31,60,.08), 0 16px 40px rgba(10,31,60,.10)",
      },
      borderRadius: {
        xl: "12px",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee-x var(--marquee-duration, 40s) linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
