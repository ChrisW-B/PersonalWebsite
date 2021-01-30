import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

/* eslint-disable no-underscore-dangle */
const cache = window.__APOLLO_STATE__
  ? new InMemoryCache().restore(window.__APOLLO_STATE__)
  : new InMemoryCache();

export default new ApolloClient({ link: createHttpLink({ uri: process.env.GRAPHQL_API }), cache });
