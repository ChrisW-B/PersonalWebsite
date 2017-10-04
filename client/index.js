// react/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import { Homepage } from './components';

/* eslint-disable no-unused-expressions */
injectGlobal `
  html,
  body {
    margin: 0;
    -ms-overflow-style: none;
  }

`;
/* eslint-enable no-unused-expressions */

if (module.hot && ENV !== `production`) {
  module.hot.accept();
}

ReactDOM.render(
  <Homepage />,
  document.getElementById(`root`)
);