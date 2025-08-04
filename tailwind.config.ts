import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', "cursive"],
        serif: ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;