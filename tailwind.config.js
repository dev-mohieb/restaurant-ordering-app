/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        'plusSignTxDESIGN': '#3C3C3C',
        'descreptionTxDESIGN': '#8B8B8B',
        'modalTxDESIGN': '#757575'
      },
      backgroundColor: {
        'lightGreenDESIGN': '#16DB99',
        'darkGreenDESIGN': '#065F46',
        'lightGrayDESIGN': '#D2D2D2',
        'modalBgDESIGN': '#757575',
        'lightBlue': '#ECFDF5'
      },
      backgroundImage: {
        'header': 'url("/images/header.png")'
      },
      fontFamily: {
        'smythe': 'Smythe, cursive;',
        'nunito-sans': '"Nunito Sans", sans-serif'
      },
      screens: {
        'xs': '600px'
      }
    },
  },
  plugins: [],
}