# Podium CSS

## So What's Podium CSS?

Podium CSS is a **Utility First CSS design system** built on [Tailwind](https://tailwindcss.com).

Basically this means it provides a **lot of little CSS classes** that you can combine to create anything, while still staying on brand.

To learn more please see the official site: https://podium-css.surge.sh

## Install and Usage

Install via NPM

```
npm i @podiumhq/css
```

Then import the CSS file into some root JS file (if using Webpack)

```js
import '@podiumhq/css';
```

Then somewhere in a React component or other HTML div (can be in index.html for instance) add some classes:

```jsx
<div className="bg-red text-white">I am a poppy red</div>
```
