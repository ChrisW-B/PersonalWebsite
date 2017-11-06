// db/graphql/types/Skills.js

const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);

const Skills = new GraphQLObjectType({
  name: `Skills`,
  description: `Some Relevant Skills`,
  fields: () => ({
    programming: { type: new GraphQLList(GraphQLString), description: `Programming Languages` },
    libraries: { type: new GraphQLList(GraphQLString), description: `Programming Libraries and Frameworks` },
    visuals: { type: new GraphQLList(GraphQLString), description: `Programming Languages` },
    social: { type: new GraphQLList(GraphQLString), description: `Programming Languages` },
    platforms: { type: new GraphQLList(GraphQLString), description: `Programming Languages` },
  })
});

module.exports = Skills;