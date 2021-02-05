import * as React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import Homepage from '@components/homepage';
import apolloClient from '@utils/apollo';
import loadPolyfills from '@utils/polyfills';

const renderFunc = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;

const render = (App: React.FC) => {
  renderFunc(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.querySelector('#root'),
  );
};

const runPolyfills = loadPolyfills().then(() => render(Homepage));
await runPolyfills;

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
