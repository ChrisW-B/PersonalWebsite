import Twitter from 'twitter';
import twitterText from 'twitter-text';
import express from 'express';
import { logger, relativeTimeDifference } from '../utils';

require(`babel-polyfill`);
require(`dotenv`).config();

const app = express();

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

app.get(`/twitter`, async (req, res) => {
  logger.twitter(`getting recent tweet`);
  const params = {
    screen_name: `ChrisW_B`,
    count: 20, // make sure we get enough to ignore RTs
    exclude_replies: true,
    include_rts: false
  };
  try {
    const newTweet = (await twitterClient.get(`statuses/user_timeline`, params))[0];
    res.send({
      success: true,
      message: twitterText.autoLink(newTweet.text, {
        urlEntities: newTweet.entities.urls
      }),
      time: relativeTimeDifference(new Date(newTweet.created_at)),
      link: `https://twitter.com/statuses/${newTweet.id_str}`
    });
    logger.twitter(`got tweet`);
  } catch (e) {
    logger.twitter(`no tweet!`, e);
    res.send({ success: false, e });
  }
});

module.exports = app;