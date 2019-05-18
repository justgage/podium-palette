module.exports = {
  theme: {
    colors: {
      black: '#000000',
      blue: '#4c76e0',
      darkBlue: '#2353cc',
      green: '#22d85d',
      iron: '#cccccc',
      jumbo: '#878787',
      lightSteel: '#adb6be',
      mineShaft: '#333333',
      red: '#e73e51',
      steel: '#778692',
      white: '#ffffff',
      transparent: 'transparent',
      fbMessenger: '#0084ff',
      goldfish: '#ffc636',
      palePink: '#f6c5c4',
      whiteSmokeDark: '#eaeaee',
      armyGreen: '#7b7257',
      bearLake: '#179be5',
      lightBlue: '#E6F6FF',
      black70: 'rgba(0, 0, 0, 0.7)',
      lightTan: '#f4f2ef',
      whiteSmoke: '#f5f5f7',
      mystic: '#e4e9f0',
      tan: '#e9e5e0'
    },
    borderColor: theme => ({
      ...theme('colors')
    }),
    extend: {
      borderWidth: {
        default: '1px'
      },
      fontFamily: {
        sans: [
          'Graphik',
          'avenir next',
          'avenir',
          'system-ui',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ]
      }
    },
    variants: {},
    plugins: []
  }
};
