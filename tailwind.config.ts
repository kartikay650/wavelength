import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f6f1ea",
        "cream-card": "#e8e3d8",
        "cream-border": "rgba(26,26,26,0.1)",
        green: "#2d4a3e",
        black: "#1a1a1a",
        muted: "#8a8078",
        coral: "#e8897a",
        sage: "#8fa898",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
