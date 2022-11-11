/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        mdlg: '924px',
        lg: '1080px',
      },
      colors: {
        neutral: '#F7F9F9',
        ocean: {
          default: '#2A2744',
          light: '#545175',
          grey: '#A3A2AE',
        },
        aqua: '#51AADE',
        barney: '#C251E9',
        ice: '#6BE7D8',
        wine: '#B64058',
        lime: '#AADE51',
        'purp-stop': '#C251E9',
        'cyan-stop': '#6BE7D8',
      },
      boxShadow: {
        card: '6px 3px 20px #C251E9, -3px -3px 20px #6BE7D8',
      },
      dropShadow: {
        dark: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
