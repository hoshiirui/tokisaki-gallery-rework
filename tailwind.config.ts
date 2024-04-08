import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      cormorantGaramond: ["Cormorant Garamond", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        image: "url('/assets/pseudo.jpg')",
      },
      colors: {
        primary500: "#3A2E26",
        fontBlack: "#464646",
        fontGray: "#4D504A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "24px",
          lg: "24px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
