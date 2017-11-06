// db/graphql/types/TopTrack.js
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require(`graphql/type`);

const TopTrack = new GraphQLObjectType({
  name: `topTrack`,
  description: `One of my Most Played Songs`,
  fields: () => ({
    title: { type: GraphQLString, description: `The Track Name` },
    artist: { type: GraphQLString, description: `The Artist Name` },
    playcount: { type: GraphQLInt, description: `How many times the song has been played` }
  })
});

module.exports = TopTrack;