import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: "Geist",
        mono: "Geist Mono",
      },
      colors: {
        "kinda-black": "#070808",
        "kinda-white": "#f9f9f7",
        "foreground-dark": "#0d0e0e",
        "foreground-light": "white",
      },
    },
  },
} satisfies Config;
