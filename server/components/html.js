/* eslint-disable react/no-danger */

import React from 'react';
import serialize from 'serialize-javascript';
import { PropTypes } from 'prop-types';

const Html = ({ state, content: { html, css, ids } }) => (

  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Chris Barry | Software Engineer and more</title>
      <style
        type='text/css'
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:700|Source+Sans+Pro:400,700&subset=latin-ext');html,body {margin:0; font-size: 10px;}` }}
      />
      <style
        type='text/css'
        dangerouslySetInnerHTML={{ __html: css }}
      />
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: html }} />
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{ __html: `window.APP_DATA=${serialize({ ids })};` }}
      />
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{ __html: `window.APOLLO_STATE=${JSON.stringify(state).replace(/</g, `\\u003c`)};` }}
      />
      <script
        type='text/javascript'
        src='/build/client/app.js'
      />
    </body>
  </html>
);
Html.propTypes = {
  content: PropTypes.shape({
    html: PropTypes.string,
    css: PropTypes.string,
    ids: PropTypes.array
  }).isRequired,
  state: PropTypes.shape({
    ROOT_QUERY: PropTypes.object
  }).isRequired
};

export default Html;