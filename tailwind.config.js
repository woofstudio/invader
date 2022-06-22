/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        druk: ["Druk Wide Bold", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#FFBF00",
          200: "#FFD261",
          300: "#FFE2A1",
        },
        dark: {
          100: "#0F0F0F",
          200: "#161616",
          300: "#1C1C1C",
          400: "#252525",
        },
      },
    },
  },
  plugins: [],
};
