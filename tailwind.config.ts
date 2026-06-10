import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F2",
        ink: "#0E0E10",
        "ink-muted": "#5C5C66",
        rule: "#E6E1D7",
        // Accents (book / film / music)
        film: "#D97706",
        music: "#E11D48",
        book: "#4D7C0F",
        // Primary (Scout indigo)
        scout: {
          DEFAULT: "#4F46E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          900: "#312E81",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)",
        phone: "0 25px 60px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
