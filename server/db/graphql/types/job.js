// db/graphql/types/Job.js

const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);
const Timespan = require(`./timespan`);

const Job = new GraphQLObjectType({
  name: `Job`,
  description: `A Job I've done`,
  fields: () => ({
    company: { type: GraphQLString, description: `The Company's Name` },
    title: { type: GraphQLString, description: `What My Title Was` },
    when: { type: Timespan, description: `When I had the job` },
    details: { type: new GraphQLList(GraphQLString), description: `More About the Job` },
  }),
});

module.exports = Job;