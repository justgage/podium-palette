import processColor from './processColor';
import type { Color } from './processColor';

export const colors = {
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
  tan: '#e9e5e0',
};

const typeSizes = [80, 48, 36, 24, 20, 16];

export const spacing = 16;

const fontFamilies = {
  display: 'Graphic',
  body: 'Georgia',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  Headline: {
    color: colors.Night,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Night,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Title 2': {
    color: colors.Night,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Night,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Night,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
};

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};
