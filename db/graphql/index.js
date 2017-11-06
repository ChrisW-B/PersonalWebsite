// db/graphql/index.js

const { GraphQLSchema } = require(`graphql/type`);
const query = require(`./queries`);

module.exports = new GraphQLSchema({ query });