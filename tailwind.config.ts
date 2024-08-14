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
        'text': '#e1ecf7',
        'background': '#050d14',
        'primary': '#92bae3',
        'secondary': '#20257a',
        'accent': '#6350d1',
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
