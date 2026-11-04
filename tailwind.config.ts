import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#c82425", // Industrial Red (Primary Brand Color)
          hover: "#b01f20",
          dark: "#911a1b",
          light: "#fef2f2",
        },
        navy: {
          DEFAULT: "#0a3161", // PrecastXchange & USA Industrial Navy
          950: "#062040",
          900: "#0a3161",
          800: "#13396b",
          700: "#21447b",
          600: "#2c5597",
          muted: "#1e457a",
        },
        cobalt: {
          DEFAULT: "#1d4ed8",
          hover: "#1e40af",
          light: "#eff6ff",
        },
        ink: {
          DEFAULT: "#062040",
          dark: "#041426",
        },
        surface: {
          DEFAULT: "#f5f7fa",
          white: "#ffffff",
        },
        molten: {
          DEFAULT: "#f26a1b",
          hover: "#d6550f",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Rajdhani", "sans-serif"],
        body: ["var(--font-body)", "IBM Plex Sans", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
