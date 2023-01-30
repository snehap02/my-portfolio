/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        poppins: 'Poppins',
        rajdhani: 'Rajdhani',
        raleway: 'Raleway',
        source: 'Source Code Pro'
      },
      colors:{
        smallhead: '#b8c1ec',
        type: '#eebbc3',
        bg: '#d4d8f0'
      },
      backgroundImage:{
        back: 'url(/images/back.jpg)'
      },
      screens:{
        'before-sm': '500px'
      }
    },
  },
  plugins: [],
}
