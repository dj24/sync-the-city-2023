const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // content: ['./dist/*.html'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: '#e66c6c'
      },
      border: {
        primary: '#e66c6c'
      }
    },
  },
  plugins: [],
}

