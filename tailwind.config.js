/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'white': '#FFF',
        'primary': '#48556A',
        'secondary': '#6E8098',
        'footer': '#9DAEC2',
        'background': '#F0F4F8',
        'dark-blue': '#48556A',
        'light-grayish-blue': '#F0F4F8'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}