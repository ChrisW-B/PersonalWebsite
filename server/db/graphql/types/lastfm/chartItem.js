// db/graphql/types/ChartItem.js
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require(`graphql/type`);

const ChartItem = new GraphQLObjectType({
  name: `chartItem`,
  description: `An item on most played chart`,
  fields: () => ({
    name: { type: GraphQLString, description: `The item Name` },
    artist: { type: GraphQLString, description: `The item Name` },
    playcount: { type: GraphQLInt, description: `How many times the album has been played` }
  })
});

module.exports = ChartItem;