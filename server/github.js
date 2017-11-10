import crypto from 'crypto';
import { spawn } from 'child_process';
import path from 'path';
import express from 'express';
import { logger } from './utils';

const app = express();

const ensureGithub = (req, res, next) => {
  if (!req.headers[`user-agent`].includes(`GitHub-Hookshot`)) res.redirect(301, `/`);
  const hmac = crypto.createHmac(`sha1`, process.env.GITHUB_SECRET);
  const ourSignature = `sha1=${hmac.update(JSON.stringify(req.body)).digest(`hex`)}`;
  const theirSignature = req.get(`X-Hub-Signature`);
  if (crypto.timingSafeEqual(Buffer.from(ourSignature, `utf8`), Buffer.from(theirSignature, `utf8`))) return next();
  return res.redirect(301, `/`); // give up
};

app.post(`/postrecieve`, ensureGithub, (req, res) => {
  const cwd = path.join(__dirname, `..`, `..`, `..`);
  const updateFile = path.join(cwd, `scripts`, `update.sh`);
  logger.server(`updating from github! cwd: ${cwd}, file: ${updateFile}`);
  spawn(`sh`, [updateFile], {
    cwd,
    env: Object.assign({}, process.env, { PATH: `${process.env.PATH} :/usr/local/bin` })
  });
  res.writeHead(200, { 'Content-Type': `text/plain` });
  res.end(`Thanks GitHub <3`);
});

module.exports = app;