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
        'text': '#120c01',
        'background': '#fefaf4',
        'primary': '#f3941d',
        'secondary': '#7f89f8',
        'accent': '#f54bf2',
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
