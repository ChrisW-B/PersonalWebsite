const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);
const song = require(`./song`);
const { limit } = require(`../args`);
const Lastfm = require(`lastfm-njs`);

const lastFmClient = new Lastfm({
  apiKey: process.env.LASTFM_KEY,
  apiSecret: process.env.LASTFM_SECRET
});

const getLastFmInfo = async (max) => {
  const maxSongs = max > 50 ? 50 : max;
  let tracks = (await lastFmClient.user_getRecentTracks({
    user: process.env.LASTFM_ID,
    limit: maxSongs
  })).track;
  if (max !== tracks.length) tracks = tracks.slice(0, max); // sometimes last.fm returns 2 tracks when you ask for 1
  return tracks.map(track =>
    Object.assign({}, { title: track.name, artist: track.artist[`#text`], nowplaying: false }, track[`@attr`]));
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
    nowplaying: {
      type: song,
      description: `What's playing right now`,
      resolve: async () => {
        const songs = await getLastFmInfo(1);
        return songs[0].nowplaying ? songs[0] : null;
      }
    },
    url: { type: GraphQLString, description: `My Last.FM url`, resolve: ({ url }) => url }
  })
});

module.exports = Github;