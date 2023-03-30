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
        cinzel: 'Cinzel Decorative',
        syncopate: 'Syncopate'
      },
      colors:{
        smallhead: '#b8c1ec',
        type: '#eebbc3',
        bg: '#d4d8f0',
        yellow: '#fdc21d'
      },
      backgroundImage:{
        back: 'linear-gradient(90deg, rgba(254,213,78,1) 54%, rgba(247,241,229,1) 54%)',
        back2: 'linear-gradient(90deg, rgba(0,0,0,1) 56%, rgba(225,205,0,1) 56%)',
        back3: 'linear-gradient(315deg, rgba(225,205,0,1) 56%, rgba(0,0,0,1) 56%)',
        back4: 'linear-gradient(304deg, rgba(255,205,0,1) 47%, rgba(0,0,0,1) 47%);',
        back5: 'linear-gradient(304deg, rgba(0,0,0,1) 47%, rgba(255,205,0,1) 47%)'
      },
      screens:{
        'before-sm': '500px',
        'before-lg': '850px',
        'md-2': '468px',
        'sm-0': '633px',
        'md-3': '871px',
        'md-4': '914px',
        'md-5': '943px',
        'lg-1': '1430px',
        'lg-2': '1199px'
      },
      borderRadius:{
        '5xl': '3rem'
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite',
        'fast-pulse': 'pulse 0.5s linear infinite',
        'heart-beat': 'heartbeat .6s alternate infinite'
      },
      keyframes:{
        heartbeat:{
          '0%': {transform: 'rotate(45deg) scale(1.2)'},
          '40%': {transform: 'rotate(45deg) scale(1)'},
          '100%': {transform: 'rotate(45deg) scale(1)'}
        }
      }
    },
  },
  plugins: [],
}
