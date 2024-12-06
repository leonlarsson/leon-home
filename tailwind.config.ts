import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
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
