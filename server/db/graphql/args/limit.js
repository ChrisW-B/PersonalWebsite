const { GraphQLInt } = require(`graphql/type`);

module.exports = {
  name: `limit`,
  description: `The Max Number Of Results Returned`,
  type: GraphQLInt
};