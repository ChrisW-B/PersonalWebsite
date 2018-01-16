// db/graphql/types/Resume.js

const { GraphQLObjectType, GraphQLString } = require(`graphql/type`);

const Resume = new GraphQLObjectType({
  name: `Resume`,
  description: `Versions of my Resume`,
  fields: () => ({
    pdf: { type: GraphQLString, description: `Resume in pdf format` },
    docx: { type: GraphQLString, description: `Resume in docx format` },
  }),
});

module.exports = Resume;