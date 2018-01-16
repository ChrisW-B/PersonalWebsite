// db/graphql/types/project.js

const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);

const project = new GraphQLObjectType({
  name: `Project`,
  description: `A Project I've done`,
  fields: () => ({
    name: { type: GraphQLString, description: `The Project's Name` },
    description: { type: GraphQLString, description: `What The Project Is` },
    github: { type: GraphQLString, description: `Where You Can See The Source Code` },
    website: { type: GraphQLString, description: `Where You Can See It` },
    technologies: { type: new GraphQLList(GraphQLString), description: `What Technologies I Used` },
  }),
});

module.exports = project;