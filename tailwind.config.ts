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
        sans: "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
      },
      colors: {
        "kinda-black": "#070808",
        "kinda-white": "#f9f9f7",
      },
    },
  },
} satisfies Config;
