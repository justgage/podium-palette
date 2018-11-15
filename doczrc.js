import { css } from 'docz-plugin-css';

export default {
  title: 'Podium CSS',
  description: 'Documentation of Podium CSS',
  // theme: 'src/theme/main',
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ]
};
