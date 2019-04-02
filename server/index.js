// server/index.js

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import env from 'dotenv';
import { extractCritical } from 'emotion-server';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { server } from 'react-dom';

import Html from './components/html';
import Homepage from './components/shared';
import schema from './db/graphql';
import github from './github';
import logger from './logger';
import setup from './setup';

env.config();

const app = express();
const apolloOptions = {
  ssr: true,
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema })
};
const client = new ApolloClient(apolloOptions);
const renderPage = async (req, res) => {
  const site = (
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  );
  try {
    await getDataFromTree(site);
    const content = extractCritical(server.renderToString(site));
    const initialState = client.cache.extract();
    const html = <Html content={content} state={initialState} />;
    res.status(200);
    res.send(`<!doctype html>\n${server.renderToString(html)}`);
    res.end();
  } catch (e) {
    console.error(`RENDERING ERROR:`, e); // eslint-disable-line no-console
    res.status(500);
    res.end(
      `An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${
        e.stack
      }`
    );
  }
};

const sendHtml = (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Dev Mode!</title>
        <style>@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:700|Source+Sans+Pro:400,700&subset=latin-ext');html,body {margin:0; padding: 0; font-size: 10px; border: 2px solid red;}</style>
      </head>
      <body>
          <div id='root'></div>
          <script src='build/client/app.js'></script>
      </body>
    </html>
  `);
};

app.use(setup);
app.use(`/graphql`, graphqlHTTP({ schema, graphiql: true }));
app.get(`/`, process.env.NODE_ENV === `production` ? renderPage : sendHtml);
app.use(github);

app.listen(4737, () => logger.server(`Listening on port 4737!\n http://localhost:4737/`));
