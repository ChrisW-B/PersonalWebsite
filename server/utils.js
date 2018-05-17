const winston = require(`winston`);

const logger = new (winston.Logger)({
  level: `server`,
  levels: {
    server: 0, twitter: 0, lastfm: 0, bg: 0, github: 0,
  },
  colors: {
    server: `green`, twitter: `blue`, lastfm: `yellow`, bg: `magenta`, github: `red`,
  },
  colorize: true,
  transports: [
    new (winston.transports.Console)({ timestamp: true, prettyPrint: true, colorize: true }),
  ],
});

module.exports = { logger };