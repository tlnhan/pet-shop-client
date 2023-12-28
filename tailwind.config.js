/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '890': '55rem',
        '1220': '76rem',
        '264': '16.5rem',
        '250': '15.625rem',
        '660': '41.25rem',
      },
      height: {
        '300': '18.75rem',
        '242': '15.125rem',
        '1100': '68.75rem',
        '133': '8.3125'
      },
      colors: {
        'regal-blue': '#273171',
      },
      spacing: {
        '360': '360px',
        // '78':'78px',
      },
      fontFamily: {
        'sans': ['Montserrat']
      },
      fontFamily: {
        'sans': ['Montserrat']
      },

      // keyframes:{
      //   'scaleUp':{
      //     // '0%,100%': {transform: 'scale(0)'},
      //     // '100%': {transform: 'scale(100)'},
      //     '0%, 100%': { transform: 'rotate(-3deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   }
      // },
      // animation: {
      //   // 'BannerIn': 'scaleUp 1s linear',
      // },
      //  animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      // }

      keyframes: {
        scaleX: {
          '0%': { transform: 'scaleX(0%)' },
          '100%': { transform: 'scaleX(100%)' },
        },
        scaleY: {
          '0%': { transform: 'scaleY(10%)' },
          '70%': { transform: 'scaleY(10%)' },
          '100%': { transform: 'scaleY(100%)' },
        },
        searchInputIn: {
          '0%': { transform: 'scaleX(0%)' },
          '100%': { transform: 'scaleX(100%)' },
        },
        searchInputOut: {
          '0%': { transform: 'scaleX(100%)' },
          '99%': { transform: 'scaleX(0%)' },
          '100%': { display: 'none' }
        },
        SlideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(100%)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        SildeInLeft: {
          'from': {
            opacity: '1',
            // transform: 'translateX(0)'
          },
          'to': {
            opacity: '0',
            transform: 'translateX(100%)'
          }
        },
        DisplaySlowly: {
          'from': {
            opacity: '0',
            // 'background-color': 'white'
          },
          'to': {
            opacity: '1',
            'background-color': '#00000033'
          }
        },
        HiddenSlowly: {
          'from': {
            opacity: '1',
            'background-color': '#00000033'
          },
          'to': {
            opacity: '0'
          }
        }

      },
      animation: {
        'Slideinright': 'SlideInRight ease 0.3s',
        'Slideinleft': 'SildeInLeft ease 0.3s',
        'Displayslowly': 'DisplaySlowly linear 0.2s forwards',
        'Hiddenslowly': 'HiddenSlowly linear 0.2s',

        scaleX: 'scaleX 0.35s ease-in-out 1',
        scaleY: 'scaleY 0.5s ease-in-out 0s 1',
        searchInputIn: 'searchInputIn 0.4s linear 1',
        searchInputOut: 'searchInputOut 0.4s linear 1',
        'Slideinright': 'SlideInRight ease 0.3s',
        'Slideinleft': 'SildeInLeft ease 0.3s',
        'Displayslowly': 'DisplaySlowly linear 0.2s forwards',
        'Hiddenslowly': 'HiddenSlowly linear 0.2s'
      }


    },
  },
  plugins: [],
}

