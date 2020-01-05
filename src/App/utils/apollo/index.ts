import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

/* eslint-disable no-underscore-dangle */
const cache = window.__APOLLO_STATE__
  ? new InMemoryCache().restore(window.__APOLLO_STATE__)
  : new InMemoryCache();

export default new ApolloClient({
  link: createHttpLink({ uri: 'https://api.chriswb.dev' }),
  cache,
});
