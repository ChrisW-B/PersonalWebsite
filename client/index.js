// react/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate as emotionHydrate } from 'emotion';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Homepage } from './components';

const renderFunc = ENV === `production` ? ReactDOM.hydrate : ReactDOM.render;
const cache = window.APOLLO_STATE ? new InMemoryCache().restore(window.APOLLO_STATE) : new InMemoryCache();

if (module.hot && ENV !== `production`) {
  module.hot.accept();
}

const client = new ApolloClient({
  link: new HttpLink(),
  cache,
});

if (typeof window !== `undefined` && window.APP_DATA) {
  const { ids } = window.APP_DATA;
  emotionHydrate(ids);
}

renderFunc(
  <ApolloProvider client={client}>
    <Homepage />
  </ApolloProvider>,
  document.getElementById(`root`),
);