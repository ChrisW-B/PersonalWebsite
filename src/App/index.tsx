/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import {Homepage} from '@components/Homepage';

const renderFunc = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;

const cache = window.__APOLLO_STATE__
  ? new InMemoryCache().restore(window.__APOLLO_STATE__)
  : new InMemoryCache();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}

const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://api.chriswb.dev' }),
  cache,
});

renderFunc(
  <ApolloProvider client={client}>
    <Homepage />
  </ApolloProvider>,
  document.querySelector('#root'),
);
