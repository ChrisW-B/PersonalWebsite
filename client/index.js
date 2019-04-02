// react/index.js
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { hydrate as emotionHydrate } from 'emotion';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

import Homepage from './components';

const renderFunc = process.env.NODE_ENV === `production` ? ReactDOM.hydrate : ReactDOM.render;
const cache = window.APOLLO_STATE ? new InMemoryCache().restore(window.APOLLO_STATE) : new InMemoryCache();

if (module.hot && process.env.NODE_ENV !== `production`) {
  module.hot.accept();
}

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});

if (typeof window !== `undefined` && window.APP_DATA) {
  const { ids } = window.APP_DATA;
  emotionHydrate(ids);
}

renderFunc(
  <ApolloProvider client={client}>
    <Homepage />
  </ApolloProvider>,
  document.getElementById(`root`)
);
