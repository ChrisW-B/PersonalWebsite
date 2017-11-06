const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);
const Twitter = require(`twitter`);
const twitterText = require(`twitter-text`);
const { relTime } = require(`../utils`);

const tweet = require(`./tweet`);
const { limit } = require(`../args`);

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

const convertToText = (text, urlEntities) =>
  twitterText.autoLink(text, { urlEntities });

const getTweets = async (max) => {
  try {
    const tweets = await twitterClient.get(`statuses/user_timeline`, {
      screen_name: process.env.TWITTER_ID,
      count: 200,
      exclude_replies: true,
      include_rts: false
    });
    return tweets.map(({ text, entities, created_at, id_str: id }) => ({
      message: convertToText(text, entities.urls),
      time: created_at,
      reltime: relTime(new Date(created_at)),
      url: `https://twitter.com/statuses/${id}`
    })).slice(0, max);
  } catch (e) {
    throw e;
  }
};

const TwitterType = new GraphQLObjectType({
  name: `Twitter`,
  description: `My Github Info`,
  fields: () => ({
    tweets: {
      args: { limit },
      type: new GraphQLList(tweet),
      description: `A Tweet I wrote`,
      resolve: async (_, { limit: max = 5 }) => getTweets(max)
    },
    url: { type: GraphQLString, description: `My Twitter url`, resolve: ({ url }) => url }
  })
});

module.exports = TwitterType;