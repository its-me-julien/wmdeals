import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coinbase: ["CoinbaseText", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        black: "var(--black)",
        darkGrey: "var(--dark-grey)",
        grey: "var(--grey)",
        lightestGrey: "var(--lightest-grey)",
        primary: "var(--primary)",
        midGrey: "var(--mid-grey)",
        lightGrey: "var(--light-grey)",
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
