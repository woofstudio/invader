/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DrukWideBold: ["Druk Wide Bold", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        bg: {
          100: "#1C1C1C",
          200: "#161616",
          300: "#0F0F0F",
        },
      },
    },
  },
  plugins: [],
};
