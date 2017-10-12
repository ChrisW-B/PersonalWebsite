import express from 'express';
import Lastfm from 'lastfm-njs';
import { logger } from '../utils';

require(`dotenv`).config();
require(`babel-polyfill`);

const app = express();

const lastFmClient = new Lastfm({
  apiKey: process.env.LASTFM_KEY,
  apiSecret: process.env.LASTFM_SECRET
});

app.get(`/lastfm`, async (req, res) => {
  logger.lastfm(`getting recent play`);
  const recentTrack = (await lastFmClient.user_getRecentTracks({
    user: `Christo27`,
    limit: 1
  })).track;
  if (recentTrack.length && recentTrack[0][`@attr`] && recentTrack[0][`@attr`].nowplaying) {
    const lastTrack = recentTrack[0];
    logger.lastfm(`got now playing`);
    return res.send({
      success: true,
      text: `♫ ${lastTrack.name} by ${lastTrack.artist[`#text`]}`
    });
  }
  logger.lastfm(`no track!`);
  return res.send({ success: false });
});

module.exports = app;