import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import typePolicies from '@schema/typePolicies';

/* eslint-disable no-underscore-dangle */
const cache = window.__APOLLO_STATE__
  ? new InMemoryCache({ typePolicies }).restore(window.__APOLLO_STATE__)
  : new InMemoryCache({ typePolicies });

export default new ApolloClient({ link: createHttpLink({ uri: process.env.GRAPHQL_API }), cache });
