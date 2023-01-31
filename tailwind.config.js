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
        back: 'linear-gradient(90deg, rgba(255,205,0,1) 50%, rgba(0,0,0,1) 50%)'
      },
      screens:{
        'before-sm': '500px',
        'before-lg': '850px'
      },
      borderRadius:{
        '5xl': '3rem'
      }
    },
  },
  plugins: [],
}
