const { wedgesTW } = require("@lemonsqueezy/wedges");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg": "url('./assets/background.jpg')",
        "other-hero-bg": "url('./assets/herobg.png')",
      },
      fontFamily: {
        primary: "Cabinet Grotesk",
      },
    },
    container: {
      screens: {
       
        xl: '1304px',
        
      },
    },
  },
  darkMode: "class",
  plugins: [wedgesTW()],
};
