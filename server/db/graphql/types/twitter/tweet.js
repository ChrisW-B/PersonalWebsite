// db/graphql/types/Tweet.js

const { GraphQLObjectType, GraphQLString } = require(`graphql/type`);

const Tweet = new GraphQLObjectType({
  name: `Tweet`,
  description: `A Tweet I've Tweeted`,
  fields: () => ({
    message: { type: GraphQLString, description: `The Tweet Text` },
    time: { type: GraphQLString, description: `When the tweet was tweeted` },
    reltime: { type: GraphQLString, description: `When the tweet was tweeted, relatively` },
    url: { type: GraphQLString, description: `The Tweet Permalink` }
  })
});

module.exports = Tweet;