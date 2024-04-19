import type { Config } from "tailwindcss";

const config: Config = {
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
        text: "#e8f3f1",
        background: "#0a1513",
        primary: "#9fd6ca",
        secondary: "#2e7869",
        accent: "#63c9b4",
      },
      fontFamily: {
        heading: "Open Sans",
        body: "Rajdhani",
      },
    },
  },
  plugins: [],
};
export default config;
