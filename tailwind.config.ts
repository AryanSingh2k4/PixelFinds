import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3A57EA",
        "primary-container": "#2940B5",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#A0B3F5",
        secondary: "#3A57EA",
        "secondary-container": "#E0E7FF",
        "on-secondary": "#ffffff",
        tertiary: "#0D0F1B",
        "tertiary-container": "#1e293b",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#94a3b8",
        background: "#f8fafc",
        "on-background": "#0D0F1B",
        surface: "#ffffff",
        "on-surface": "#0D0F1B",
        "surface-container": "#f1f5f9",
        "surface-container-low": "#f8fafc",
        "surface-container-high": "#e2e8f0",
        "surface-container-highest": "#cbd5e1",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#f1f5f9",
        "on-surface-variant": "#475569",
        outline: "#94a3b8",
        "outline-variant": "#cbd5e1",
        "surface-dim": "#e2e8f0",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      spacing: {
        "stack-sm": "0.5rem",
        "container-max": "1280px",
        gutter: "1.5rem",
        "stack-md": "1rem",
        "stack-lg": "2rem",
        "section-gap": "5rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.05)",
        md: "0 8px 30px rgba(0, 0, 0, 0.08)",
        soft: "0px 10px 25px -5px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

