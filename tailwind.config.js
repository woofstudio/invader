/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        druk: ['Druk Wide Bold', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        sans: ['kanit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#FFBF00',
          200: '#FFD261',
          300: '#FFE2A1',
        },
        dark: {
          100: '#0F0F0F',
          200: '#161616',
          300: '#1C1C1C',
          400: '#252525',
          500: '#3E3E3E',
          900: 'rgba(0, 0, 0, 0.74)',
        },
        text: {
          100: '#F2F2F2',
          200: '#555555',
          300: '#5F5F5F',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
