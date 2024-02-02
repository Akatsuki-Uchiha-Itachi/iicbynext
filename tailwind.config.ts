import type { Config } from "tailwindcss";
import bg from './public/cover_bg.png';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "title": `url("/public/cover_bg.png")`,
      },
      colors:{
        'metal':'#565584',
      },
      screens:{
        'mob': '406px',
      },
    },
  },
  plugins: [],
};
export default config;
