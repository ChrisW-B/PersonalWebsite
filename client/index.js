// react/index.js
import React from 'react';
import { hydrate } from 'react-dom';
import { hydrate as emotionHydrate } from 'emotion';
import { Homepage } from './components';

if (module.hot && ENV !== `production`) {
  module.hot.accept();
}
if (typeof window !== `undefined`) {
  const { ids } = window.APP_DATA;
  console.log({ ids });
  emotionHydrate(ids);
}

hydrate(<Homepage />, document.getElementById(`root`));