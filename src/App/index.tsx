import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

import Homepage from '@components/homepage';
import { NightModeProvider } from '@contexts/nightMode';
import apolloClient from '@utils/apollo';
import loadPolyfills from '@utils/polyfills';

const renderFunc = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;

const render = (App: React.FC) => {
  renderFunc(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <NightModeProvider>
          <App />
        </NightModeProvider>
      </ApolloProvider>
    </React.StrictMode>,
    document.querySelector('#root'),
  );
};

loadPolyfills().then(() => render(Homepage));

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
