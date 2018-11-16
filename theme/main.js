// import './styles/prism-theme';
// import './styles/base';

import * as React from 'react';
import { theme, ThemeConfig, DocPreview } from 'docz';
import '../../output.css';
// import { ThemeProvider } from 'emotion-theming';
// import webfont from 'webfontloader';
// import ReactBreakpoints from 'react-breakpoints';

// import { config } from './config';
// import { mq, breakpoints } from './styles/responsive';
// import { Topbar, Main } from '@components/shared';

// webfont.load({
//   google: {
//     families: ['Inconsolata', 'Zilla Slab:300,400,600']
//   }
// });

const Div = className => props => {
  console.log(props);
  return <div className={className}>{props.children}</div>;
};

const Page = props => {
  return (
    <div className="Page max-w-lg mx-auto px-10 py-10 w-full">
      <link href="output.css" rel="stylesheet" />
      {props.children}
    </div>
  );
};

const Theme = () => (
  <ThemeConfig>
    {config => (
      <DocPreview
        components={{
          page: Page,
          loading: Div('loading'),
          h1: Div('h1 text-red text-5xl mb-5'),
          h2: Div('h2 text-5xl mb-5'),
          h3: Div('h3 text-5xl mb-5'),
          h4: Div('h4 text-5xl mb-5'),
          h5: Div('h5 text-5xl mb-5'),
          h6: Div('h6 text-5xl mb-5'),
          hr: Div('hr'),
          img: Div('img'),
          ul: Div('ul'),
          pre: Div('pre'),
          inlineCode: Div('inlineCode'),
          blockquote: Div('blockquote')
        }}
      />
    )}
  </ThemeConfig>
);

export default theme({})(Theme);
