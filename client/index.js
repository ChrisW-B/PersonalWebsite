// react/index.js
import React from 'react';
import { hydrate } from 'react-dom';
import { hydrate as emotionHydrate } from 'emotion';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { Homepage } from './components';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache().restore(window.APOLLO_STATE),
  ssrForceFetchDelay: 100
});

if (module.hot && ENV !== `production`) {
  module.hot.accept();
}
if (typeof window !== `undefined`) {
  const { ids } = window.APP_DATA;
  emotionHydrate(ids);
}

hydrate(
  <ApolloProvider client={client}>
    <Homepage />
  </ApolloProvider>,
  document.getElementById(`root`));