/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        gemunu:[ 'Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'gega-red': '#1F8A70',
        'gega-melon': '#FC7300',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
