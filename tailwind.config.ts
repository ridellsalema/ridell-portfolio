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
        bg: "#FAFAF8",
        card: "#F3F1EC",
        border: "#D8D5CE",
        primary: "#1E1E1E",
        secondary: "#6B6B6B",
        accent: "#5B4636",
      },
      fontFamily: {
        display: ["var(--font-roboto-slab)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "card-subtle": "0 4px 20px -2px rgba(30, 30, 30, 0.04), 0 2px 6px -1px rgba(30, 30, 30, 0.02)",
        "card-hover": "0 12px 30px -4px rgba(30, 30, 30, 0.08), 0 4px 12px -2px rgba(30, 30, 30, 0.03)",
      },
      transitionTimingFunction: {
        "ease-out-smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
