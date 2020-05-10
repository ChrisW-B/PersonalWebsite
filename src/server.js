/* eslint-disable react/jsx-filename-extension */
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

// htmlTemplate is a generated file
import htmlTemplate from '../dist/index.html'; // eslint-disable-line import/no-unresolved
import Homepage from './App/components/homepage';

const functionName = 'ssr-server';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routerBasePath =
  process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`;

app.use(async (_, response) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({ uri: process.env.GRAPHQL_API, fetch }),
    cache: new InMemoryCache(),
  });

  const App = (
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  );
  await getDataFromTree(App);
  const [head, tail] = htmlTemplate.split('<div id="root"></div>');
  response.write(`${head}`);
  response.write('<div id="root">');
  const stream = ReactDOMServer.renderToNodeStream(App);
  const state = client.extract();
  stream.pipe(response, { end: false });
  stream.on('end', () => {
    response.write('</div>');
    response.write(
      `<script>window.__APOLLO_STATE__ = ${JSON.stringify(state).replace(
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
