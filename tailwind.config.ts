import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        "geist-mono": "var(--font-geist-mono)",
      },
      colors: {
        "kinda-black": "#0e1011",
        "kinda-white": "#f2f0ed",
      },
    },
  },
} satisfies Config;
