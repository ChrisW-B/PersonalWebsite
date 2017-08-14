// react/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Homepage } from './components';

if (module.hot && ENV !== 'production') {
  module.hot.accept();
}

ReactDOM.render(
  <Homepage />,
  document.getElementById('root')
);