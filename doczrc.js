import { css } from 'docz-plugin-css';

export default {
  title: 'Podium CSS',
  description: 'Documentation of Podium CSS',
  // theme: 'src/theme/main',
  menu: [
    'Introduction',
    'Values',
    'Components',
    'Layout',
    'Style',
    'Example',
    'Table of Styles'
  ],
  src: './src',
  themeConfig: {
    colors: {
      primary: '#4c76e0'
    },
    showPlaygroundEditor: true
  },
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ]
};
