// server/index.js

import express from 'express';
import graphqlHTTP from 'express-graphql';

import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import React from 'react';

import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import { Homepage } from './components/shared';

import github from './github';
import setup from './setup';
import Html from './components/html';
import { logger } from './utils';
import graphqlSchema from './db/graphql';
import LocalQuery from './apollo-local-query';

require(`dotenv`).config();

const app = express();

app.use(setup);
app.use(`/graphql`, graphqlHTTP({ schema: graphqlSchema, graphiql: true }));
app.get(`/`, async (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: new LocalQuery(graphqlSchema),
    cache: new InMemoryCache()
  });

  // The client-side app will instead use <BrowserRouter>
  const site = (
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  );
  try {
    await getDataFromTree(site);
    const content = extractCritical(renderToString(site));
    const initialState = client.cache.extract();
    const html = <Html content={content} state={initialState} />;
    res.status(200);
    res.send(`<!doctype html>\n${renderToString(html)}`);
    res.end();
  } catch (e) {
    console.error(`RENDERING ERROR:`, e); // eslint-disable-line no-console
    res.status(500);
    res.end(
      `An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${e.stack}`
    );
  }
});
app.use(github);
app.get(`*`, (req, res) => res.redirect(`/`));

app.listen(4737, () => logger.server(`Listening on port 4737!\n http://localhost:4737/`));