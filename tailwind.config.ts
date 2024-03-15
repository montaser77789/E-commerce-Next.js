import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        herbg: {
          DEFAULT: "rgb(var(--color-herbg))",
          foreground: "white",
        },
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          foreground: "white",
        },
        textcolor: {
          DEFAULT: "rgb(var(--color-textcolor))",
          foreground: "white",
        },
      },
    },
  },
  plugins: [],
};
export default config;
