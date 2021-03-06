import ReactDOMServer from 'react-dom/server';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
// bug in import I guess
// eslint-disable-next-line import/no-extraneous-dependencies
import { getDataFromTree } from '@apollo/client/react/ssr';
import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';
import serverless from 'serverless-http';

// @ts-ignore generated file
// eslint-disable-next-line import/no-unresolved
import htmlTemplate from '../dist/index.html';
import Homepage from './App/components/homepage';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(async (_, response) => {
  const client = new ApolloClient({
    ssrMode: true,
    // @ts-ignore fetch types mismatch
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
      `<script>window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};</script>`,
    );
    response.write(tail);
    response.end();
  });
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
exports.handler = serverless(app);
