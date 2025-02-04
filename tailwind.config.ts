import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#020617', // Azul (como no MUI)
        secondary: '#ff6b6b', // Vermelho (como no MUI)
        button: "#004072",
        hover: "#EDA92A",
        background: "#142851",
        topBack: "#E0E0E0",
        // 'icon': "#122753",
        icon: "#004072",
        home: "#122753",
      },
      screens: {
        'smartphone': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'sp-sm': { 'min': '500px', 'max': '640px' },
        'spp-sm': { 'max': '500px' }

      }
    },
  },
  // darkMode: "class",
  plugins: [
    nextui(),
    require("daisyui"),
  ],
};
export default config;
