import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'button': "#004072",
        'hover': "#EDA92A",
        'background': "#001424",
        'top-back': "#E0E0E0",
        // 'icon': "#122753",
        'icon': "#004072",
        'home': "#122753",
        
      },
      screens:{
        'sp-sm': {'min':'500px','max': '640px'},
        'spp-sm': {'max':'500px'}
      }
      
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
};
export default config;
