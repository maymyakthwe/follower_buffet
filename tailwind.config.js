const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-text": "#4e3d2b",
        "color-text-hover": "#dd8426",
        "color-bg-left": "#fff2e0",
        "color-bg-right": "#999dcc",
        "color-bottom-bg": "#182542",
        "color-bottom-bg-08": "#212d48",
        "color-bottom-bg-06": "#2c3b60",
        "color-nav": "#f6f6f6",
        "color-off-100" : "#0b111f",
        "color-white-07" : "rgba(225, 225, 225,0.7)",
        "color-white-05" : "rgba(225, 225, 225,0.5)",
      },
      
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      135: '135deg',
                  }
              )
          }
       )
    })
  ],
}

