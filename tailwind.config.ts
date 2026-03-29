import type { Config } from "tailwindcss";

const config: Config = {
  // Class-based dark mode so ThemeContext can control it via a "dark" class on the wrapper div
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          blue:   "#4285F4",
          red:    "#EA4335",
          yellow: "#FBBC04",
          green:  "#34A853",
        },
      },
    },
  },
  plugins: [],
};

export default config;