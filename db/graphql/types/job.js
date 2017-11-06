// db/graphql/types/Job.js

const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);

const Job = new GraphQLObjectType({
  name: `Job`,
  description: `A Job I've done`,
  fields: () => ({
    company: { type: (GraphQLString), description: `The Company's Name` },
    title: { type: (GraphQLString), description: `What My Title Was` },
    start: { type: (GraphQLString), description: `My Starting Date` },
    end: { type: (GraphQLString), description: `My Ending Date` },
    details: { type: new GraphQLList(GraphQLString), description: `More About the Job` }
  })
});

module.exports = Job;