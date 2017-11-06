// db/graphql/types/TopAlbum.js
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require(`graphql/type`);

const TopAlbum = new GraphQLObjectType({
  name: `topAlbum`,
  description: `One of my Most Played Songs`,
  fields: () => ({
    title: { type: GraphQLString, description: `The Album Name` },
    artist: { type: GraphQLString, description: `The Artist Name` },
    playcount: { type: GraphQLInt, description: `How many times the album has been played` }
  })
});

module.exports = TopAlbum;