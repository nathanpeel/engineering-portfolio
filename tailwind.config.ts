import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": {backgroundPosition: "100% 50%"}
        },
        'up-down-l': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-300px)' },
        },
        'up-down-s': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-150px)' },
        },
      },
      animation: {
        gradient: "gradient 3s linear infinite",
        "up-down-s1": 'up-down-s 3.2s ease-in-out infinite 0.8s',
        "up-down-s2": 'up-down-s 3.2s ease-in-out infinite',
        "up-down-l1": 'up-down-l 3.2s ease-in-out infinite 0.8s',
        "up-down-l2": 'up-down-l 3.2s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: '#E8EEF2',
        lgreen: '#0C583D',
        dgreen: '#073928',
        lblue: '#3B8CCF',
        dblue: '#0A599A'
      },
    },
  },
  plugins: [],
};
export default config;
