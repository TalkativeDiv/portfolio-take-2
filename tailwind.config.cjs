const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{jsx,ts,tsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
