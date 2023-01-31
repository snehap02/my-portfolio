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
        source: 'Source Code Pro',
        cinzel: 'Cinzel Decorative'
      },
      colors:{
        smallhead: '#b8c1ec',
        type: '#eebbc3',
        bg: '#d4d8f0',
        yellow: '#fdc21d'
      },
      backgroundImage:{
        back: 'linear-gradient(90deg, rgba(255,205,0,1) 50%, rgba(0,0,0,1) 50%)',
        back2: 'linear-gradient(90deg, rgba(0,0,0,1) 56%, rgba(225,205,0,1) 56%)',
        back3: 'linear-gradient(315deg, rgba(225,205,0,1) 56%, rgba(0,0,0,1) 56%)'
      },
      screens:{
        'before-sm': '500px',
        'before-lg': '850px'
      },
      borderRadius:{
        '5xl': '3rem'
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}
