// server/components/html.js

import React from 'react';
import serialize from 'serialize-javascript';
import { PropTypes } from 'prop-types';
import path from 'path';

const webpackManifest = process.env.NODE_ENV === `production`
  ? require(`../../public/build/client/manifest.json`)
  : {};

const globalCSS = `@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:700|Source+Sans+Pro:400,700&subset=latin-ext');html,body {margin:0; padding:0; font-size: 10px;}`;

const vendorsRoot = webpackManifest && Object.prototype.hasOwnProperty.call(webpackManifest, `vendors.js`)
  ? webpackManifest[`vendors.js`]
  : ``;
const vendorsPath = vendorsRoot.includes(`build/client`) ? vendorsRoot : path.join(`/build`, `client`, vendorsRoot);

const runtimeRoot = webpackManifest && Object.prototype.hasOwnProperty.call(webpackManifest, `runtime.js`)
  ? webpackManifest[`runtime.js`]
  : ``;
const runtimePath = runtimeRoot.includes(`build/client`) ? runtimeRoot : path.join(`/build`, `client`, runtimeRoot);

const appRoot = webpackManifest && Object.prototype.hasOwnProperty.call(webpackManifest, `app.js`)
  ? webpackManifest[`app.js`]
  : ``;
const appPath = appRoot.includes(`build/client`) ? appRoot : path.join(`/build`, `client`, appRoot);

const Html = ({ state, content: { html, css, ids } }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>Chris Barry | Software Engineer and more</title>
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: html }} />
      <script key='css-ids' dangerouslySetInnerHTML={{ __html: `window.APP_DATA=${serialize({ ids })};` }} />
      <script key='apollo-state' dangerouslySetInnerHTML={{ __html: `window.APOLLO_STATE=${JSON.stringify(state).replace(/</g, `\\u003c`)};` }} />
      <script key='runtime' src={runtimePath} />
      <script key='vendors' src={vendorsPath} />
      <script key='app' src={appPath} />
      <style type='text/css' dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <style type='text/css' dangerouslySetInnerHTML={{ __html: css }} />
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