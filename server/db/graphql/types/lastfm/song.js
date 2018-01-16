// db/graphql/types/Song.js

const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require(`graphql/type`);

const Song = new GraphQLObjectType({
  name: `Song`,
  description: `A Song I've Listened To`,
  fields: () => ({
    title: { type: GraphQLString, description: `The Song Name` },
    nowplaying: { type: GraphQLBoolean, description: `Whether the song is currently playing` },
    artist: { type: GraphQLString, description: `The Artist Name` },
  }),
});

module.exports = Song;