import { css } from 'docz-plugin-css';

export default {
  title: 'Podium CSS',
  description: 'Documentation of Podium CSS',
  // theme: 'src/theme/main',
  src: './src',
  themeConfig: {
    colors: {
      primary: '#4c76e0'
    }
  },
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ]
};
