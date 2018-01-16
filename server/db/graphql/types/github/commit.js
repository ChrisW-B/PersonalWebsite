// db/graphql/types/Commit.js

const { GraphQLObjectType, GraphQLString } = require(`graphql/type`);

const Commit = new GraphQLObjectType({
  name: `Commit`,
  description: `A Commit I've done`,
  fields: () => ({
    url: { type: GraphQLString, description: `The Repository Url` },
    author: { type: GraphQLString, description: `Should be me always` },
    name: { type: GraphQLString, description: `The Repository name with branch` },
    time: { type: GraphQLString, description: `When the commit occured` },
    reltime: { type: GraphQLString, description: `When the commit occured, relatively` },
    message: { type: GraphQLString, description: `What the commit said` },
  }),
});

module.exports = Commit;