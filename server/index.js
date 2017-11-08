// server/index.js

import express from 'express';
import graphqlHTTP from 'express-graphql';
import github from './github';
import setup from './setup';
import Html from './components/html';
import { logger } from './utils';
import graphqlSchema from './db/graphql';

require(`dotenv`).config();
require(`babel-polyfill`);

const app = express();

app.use(setup);
app.use(`/graphql`, graphqlHTTP({ schema: graphqlSchema, graphiql: true }));
app.get(`/`, (req, res) => res.send(Html()));
app.use(github);
app.get(`*`, (req, res) => res.redirect(`/`));

app.listen(4737, () => logger.server(`Listening on port 4737!\n http://localhost:4737/`));