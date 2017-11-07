const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);
const song = require(`./song`);
const chartItem = require(`./chartItem`);
const { limit, period } = require(`../../args`);
const Lastfm = require(`lastfm-njs`);

const lastFmClient = new Lastfm({
  apiKey: process.env.LASTFM_KEY,
  apiSecret: process.env.LASTFM_SECRET
});

const getLastFmSongs = async (max) => {
  const maxSongs = max > 50 ? 50 : max;
  let tracks = (await lastFmClient.user_getRecentTracks({
    user: process.env.LASTFM_ID,
    limit: maxSongs
  })).track;
  if (max !== tracks.length) tracks = tracks.slice(0, max); // sometimes last.fm returns 2 tracks when you ask for 1
  return tracks.map(track =>
    Object.assign({}, { title: track.name, artist: track.artist[`#text`], nowplaying: false }, track[`@attr`]));
};

const getTopTracks = async (timePeriod, max) => {
  const tracks = (await lastFmClient.user_getTopTracks({
    user: process.env.LASTFM_ID,
    limit: max,
    period: timePeriod
  })).track;
  return tracks.map(({ name, artist, playcount }) => ({ name, artist: artist.name, playcount }));
};

const getTopArtists = async (timePeriod, max) => {
  const artists = (await lastFmClient.user_getTopArtists({
    user: process.env.LASTFM_ID,
    limit: max,
    period: timePeriod
  })).artist;
  return artists.map(({ name, playcount }) => ({ artist: name, playcount }));
};

const getTopAlbums = async (timePeriod, max) => {
  const albums = (await lastFmClient.user_getTopAlbums({
    user: process.env.LASTFM_ID,
    limit: max,
    period: timePeriod
  })).album;
  return albums.map(({ name, artist, playcount }) => ({ name, artist: artist.name, playcount }));
};

const LastFMType = new GraphQLObjectType({
  name: `LastFM`,
  description: `My Github Info`,
  fields: () => ({
    mostPlayedTracks: {
      args: { limit, period },
      type: new GraphQLList(chartItem),
      description: `My most played songs`,
      resolve: async (_, { limit: max = 10, period: timePeriod }) => getTopTracks(timePeriod, max)
    },
    mostPlayedArtists: {
      args: { limit, period },
      type: new GraphQLList(chartItem),
      description: `My most played artists`,
      resolve: async (_, { limit: max = 10, period: timePeriod }) => getTopArtists(timePeriod, max)
    },
    mostPlayedAlbums: {
      args: { limit, period },
      type: new GraphQLList(chartItem),
      description: `My most played albums`,
      resolve: async (_, { limit: max = 10, period: timePeriod }) => getTopAlbums(timePeriod, max)
    },
    songs: {
      args: { limit },
      type: new GraphQLList(song),
      description: `A Song I listened to`,
      resolve: async (_, { limit: max = 5 }) => getLastFmSongs(max)
    },
    nowplaying: {
      type: song,
      description: `What's playing right now`,
      resolve: async () => {
        const songs = await getLastFmSongs(1);
        return songs[0].nowplaying ? songs[0] : null;
      }
    },
    url: { type: GraphQLString, description: `My Last.FM url`, resolve: ({ url }) => url }
  })
});

module.exports = LastFMType;