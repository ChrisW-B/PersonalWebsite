const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);
const song = require(`./song`);
const { limit } = require(`../args`);
const Lastfm = require(`lastfm-njs`);

const lastFmClient = new Lastfm({
  apiKey: process.env.LASTFM_KEY,
  apiSecret: process.env.LASTFM_SECRET
});

const getLastFmInfo = async (max) => {
  let maxSongs = max;
  if (maxSongs > 50) maxSongs = 50;
  return (await lastFmClient.user_getRecentTracks({
    user: process.env.LASTFM_ID,
    limit: maxSongs
  })).track.map(track => Object.assign({}, { title: track.name, artist: track.artist[`#text`], nowplaying: false }, track[`@attr`]));
};

const Github = new GraphQLObjectType({
  name: `LastFM`,
  description: `My Github Info`,
  fields: () => ({
    songs: {
      args: { limit },
      type: new GraphQLList(song),
      description: `A Song I listened to`,
      resolve: async (_, { limit: max = 5 }) => getLastFmInfo(max)
    },
    url: { type: GraphQLString, description: `My Last.FM url`, resolve: url => url }
  })
});

module.exports = Github;