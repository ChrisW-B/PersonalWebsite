import express from 'express';
import fetch from 'node-fetch';
import { logger } from '../utils';

require(`babel-polyfill`);
require(`dotenv`).config();

const app = express();

app.get(`/bg`, async (req, res) => {
  logger.bg(`getting a background`);
  try {
    const posts = (await (await fetch(`https://photo.chriswbarry.com/ghost/api/v0.1/posts?client_id=${process.env.GHOST_ID}&client_secret=${process.env.GHOST_SECRET}&limit=7&fields=feature_image,url,title`)).json()).posts;
    const recentPhoto = posts[Math.round(Math.random() * (posts.length - 1))];
    recentPhoto.url = `https://photo.chriswbarry.com${recentPhoto.url}`;
    if (!recentPhoto.feature_image.includes(`http`)) {
      recentPhoto.feature_image = `https://photo.chriswbarry.com${recentPhoto.feature_image}`;
    }
    recentPhoto.photo = recentPhoto.feature_image;
    delete recentPhoto.feature_image;
    res.send({
      success: true,
      ...recentPhoto
    });
    logger.bg(`got bg`);
  } catch (e) {
    logger.bg(`no bg!`, e);
    res.send({ success: false, e });
  }
});

module.exports = app;