import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fetch from 'isomorphic-fetch';
import serverless from 'serverless-http';

import htmlTemplate from '../dist/index.html';
import Homepage from './App/components/homepage';

const functionName = 'ssr-server';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(async (_, response) => {
  console.log({ env: process.env.GRAPHQL_API });
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

  const content = await getDataFromTree(App);

  const [head, tail] = htmlTemplate.split('<div id="root"></div>');
  response.write(`${head}`);
  response.write('<div id="root">');
  const stream = ReactDOMServer.renderToNodeStream(App);
  const state = client.extract();
  console.log({ state });
  stream.pipe(response, { end: false });
  stream.on('end', () => {
    response.write('</div>');
    response.write(
      `<script>window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};</script>`,
    );
    response.write(tail);
    response.end();
  });
});

exports.handler = serverless(app);
