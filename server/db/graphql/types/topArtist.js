// db/graphql/types/topArtist.js
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require(`graphql/type`);

const topArtist = new GraphQLObjectType({
  name: `topArtist`,
  description: `One of my Most Played Songs`,
  fields: () => ({
    name: { type: GraphQLString, description: `The Artist Name` },
    playcount: { type: GraphQLInt, description: `How many times the artist has been played` }
  })
});

module.exports = topArtist;