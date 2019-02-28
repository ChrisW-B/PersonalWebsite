import winston from 'winston';

const CreateLogger = winston.Logger;
const { Console } = winston.transports;

export default new CreateLogger({
  level: `server`,
  levels: {
    server: 0,
    twitter: 0,
    lastfm: 0,
    bg: 0,
    github: 0,
  },
  colors: {
    server: `green`,
    twitter: `blue`,
    lastfm: `yellow`,
    bg: `magenta`,
    github: `red`,
  },
  colorize: true,
  transports: [
    new Console({ timestamp: true, prettyPrint: true, colorize: true }),
  ],
});