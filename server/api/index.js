import express from 'express';
import Background from './background';
import Github from './github';
import LastFm from './lastfm';
import Twitter from './twitter';

const app = express();

app.use(Background);
app.use(Github);
app.use(LastFm);
app.use(Twitter);

module.exports = app;