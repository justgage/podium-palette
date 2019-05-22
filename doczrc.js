import { css } from 'docz-plugin-css';

import fs from 'fs';

export default {
  title: 'Podium CSS',
  description: 'Documentation of Podium CSS',
  // theme: 'src/theme/main',
  menu: [
    'Introduction',
    'Values',
    'Docs',
    'Shortcuts',
    'Examples',
    'Table of Styles'
  ],
  src: './src',
  themeConfig: {
    colors: {
      primary: '#4c76e0'
    },
    showPlaygroundEditor: true
  },
  htmlContext: {
    head: {
      // Hacky way to include podium.css globally 🙄
      raw: `<style>${fs.readFileSync(
        process.cwd() + '/src/podium.css'
      )}</style>`
    }
  },
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ],

  dest: 'build'
};
