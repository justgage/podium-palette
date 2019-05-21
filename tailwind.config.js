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
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '1.5rem',
      full: '9999px'
    },
    // Extend section will allow you to add a single value to the Tailwind defaults
    extend: {
      boxShadow: {
        focus: '0 0 0 3px rgba(76,118,224, 0.5) '
      },
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
    variants: {
      // alignContent: ['responsive'],
      // alignItems: ['responsive'],
      // alignSelf: ['responsive'],
      // appearance: ['responsive'],
      // backgroundAttachment: ['responsive'],
      // backgroundColor: ['responsive', 'hover', 'focus'],
      // backgroundPosition: ['responsive'],
      // backgroundRepeat: ['responsive'],
      // backgroundSize: ['responsive'],
      // borderCollapse: ['responsive'],
      // borderColor: ['responsive', 'hover', 'focus'],
      // borderRadius: ['responsive'],
      // borderStyle: ['responsive'],
      // borderWidth: ['responsive'],
      // boxShadow: ['responsive', 'hover', 'focus'],
      // cursor: ['responsive'],
      // display: ['responsive'],
      // fill: ['responsive'],
      // flex: ['responsive'],
      // flexDirection: ['responsive'],
      // flexGrow: ['responsive'],
      // flexShrink: ['responsive'],
      // flexWrap: ['responsive'],
      // float: ['responsive'],
      // fontFamily: ['responsive'],
      // fontSize: ['responsive'],
      // fontSmoothing: ['responsive'],
      // fontStyle: ['responsive'],
      // fontWeight: ['responsive', 'hover', 'focus'],
      // height: ['responsive'],
      // inset: ['responsive'],
      // justifyContent: ['responsive'],
      // letterSpacing: ['responsive'],
      // lineHeight: ['responsive'],
      // listStylePosition: ['responsive'],
      // listStyleType: ['responsive'],
      // margin: ['responsive'],
      // maxHeight: ['responsive'],
      // maxWidth: ['responsive'],
      // minHeight: ['responsive'],
      // minWidth: ['responsive'],
      // objectFit: ['responsive'],
      // objectPosition: ['responsive'],
      // opacity: ['responsive'],
      // order: ['responsive'],
      // outline: ['responsive', 'focus'],
      // overflow: ['responsive'],
      // padding: ['responsive'],
      // pointerEvents: ['responsive'],
      // position: ['responsive'],
      // resize: ['responsive'],
      // stroke: ['responsive'],
      // tableLayout: ['responsive'],
      // textAlign: ['responsive'],
      // textColor: ['responsive', 'hover', 'focus'],
      // textDecoration: ['responsive', 'hover', 'focus'],
      // textTransform: ['responsive'],
      // userSelect: ['responsive'],
      // verticalAlign: ['responsive'],
      // visibility: ['responsive'],
      // whitespace: ['responsive'],
      // width: ['responsive'],
      // wordBreak: ['responsive'],
      // zIndex: ['responsive']
    },
    plugins: [
      function({ addVariant }) {
        addVariant('variant-a', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.variant-a .a${separator}${className}`;
          });
        });

        addVariant('variant-b', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.variant-b .b${separator}${className}`;
          });
        });
      }
    ]
  }
};
