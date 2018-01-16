// db/graphql/types/Timespan.js

const { GraphQLObjectType, GraphQLString } = require(`graphql/type`);

const Timespan = new GraphQLObjectType({
  name: `Timespan`,
  description: `a timespan`,
  fields: () => ({
    start: { type: GraphQLString, description: `the start date` },
    end: { type: GraphQLString, description: `the end date` },
  }),
});

module.exports = Timespan;