/* eslint-disable react/no-danger */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import serialize from 'serialize-javascript';
import { Homepage } from './shared';

const Html = () => {
  const { html, css, ids } = extractCritical(renderToString(<Homepage />));
  const viewData = `window.APP_DATA=${serialize({ ids })};`;
  return (`
    <html lang='en'>
      <head>
        <meta char-set='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Chris Barry | Software Engineer and more</title>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:700|Source+Sans+Pro:400,700&subset=latin-ext');
          html,body {margin:0;}
        </style>
        <style type='text/css'>${css}</style>
      </head>
      <body>
        <div id='root'>${html}</div>
        <script type='text/javascript'>${viewData}</script>
        <script async type='text/javascript' src='/build/client/app.js'></script>

      </body>
    </html>
  `);
};

export default Html;