/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import { Homepage } from '@components/Homepage';

const renderFunc = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;

const cache = window.__APOLLO_STATE__
  ? new InMemoryCache().restore(window.__APOLLO_STATE__)
  : new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://api.chriswb.dev' }),
  cache,
});

const supportsIntersectionObserver = () =>
  'IntersectionObserver' in global &&
  'IntersectionObserverEntry' in global &&
  'intersectionRatio' in IntersectionObserverEntry.prototype;

const loadPolyfills = () => {
  const polyfills = [];
  if (!supportsIntersectionObserver()) {
    // eslint-disable-next-line global-require
    polyfills.push(require('intersection-observer'));
  }
  return Promise.all(polyfills);
};

const render = (App: React.FC) => {
  renderFunc(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,

    document.querySelector('#root'),
  );
};
loadPolyfills().then(() => render(Homepage));

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
