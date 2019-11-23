import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { ApolloProvider } from '@apollo/react-common';
import { getDataFromTree } from '@apollo/react-ssr';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';
import serverless from 'serverless-http';

import Homepage from '@components/Homepage';

import htmlTemplate from '../dist/index.html';

const functionName = 'ssr-server';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routerBasePath =
  process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`;

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://api.chriswb.dev/',
    fetch,
  }),
  cache: new InMemoryCache(),
});
const App = (
  <ApolloProvider client={client}>
    <Homepage />
  </ApolloProvider>
);

app.use(async (_, response) => {
  await getDataFromTree(App);
  const [head, tail] = htmlTemplate.split('<div id="root"></div>');
  response.write(`${head}`);
  response.write('<div id="root">');
  const stream = ReactDOMServer.renderToNodeStream(App);
  stream.pipe(response, { end: false });
  stream.on('end', () => {
    const initialState = client.cache.extract();
    response.write('</div>');
    response.write(
      `<script>window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(
        /</g,
        '\\u003c',
      )};</script>`,
    );
    response.write(tail);
    response.end();
  });
});
app.get('*', (_, response) => response.send(`Go to ${routerBasePath}`));

exports.handler = serverless(app);
