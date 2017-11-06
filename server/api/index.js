import express from 'express';
import Background from './background';

const app = express();

app.use(Background);

module.exports = app;