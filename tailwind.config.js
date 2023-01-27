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
        type: '#eebbc3'
      },
      animation:{
        anim: 'anim 4s steps(12) infinite',
      },
      keyframes:{
        anim:{
          '40%, 60%': {left:'86%'},
          '100%': {left: '0%'}
        }
      }
    },
  },
  plugins: [],
}
