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
        lightBlue: {
          200: "#90cdf4", // Your chosen shade of light blue
        },
        amber: {
          200: "#fbd38d", // Your chosen shade of amber
        },
        deepRed: {
          200: "#e53e3e", // Your chosen shade of deep red
        },
      },
    },
  },
  plugins: [],
};
export default config;
