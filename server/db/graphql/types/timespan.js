// db/graphql/types/Timespan.js

import { GraphQLObjectType, GraphQLString } from 'graphql/type';

const Timespan = new GraphQLObjectType({
  name: `Timespan`,
  description: `a timespan`,
  fields: () => ({
    start: { type: GraphQLString, description: `the start date` },
    end: { type: GraphQLString, description: `the end date` }
  })
});

export default Timespan;
