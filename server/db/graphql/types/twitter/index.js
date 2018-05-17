const { GraphQLObjectType, GraphQLString, GraphQLList } = require(`graphql/type`);
const Twitter = require(`twitter`);
const twitterText = require(`twitter-text`);
const { relTime } = require(`../../utils`);
const tweet = require(`./tweet`);
const { limit } = require(`../../args`);

let twitterClient = null;
// for some reason setting twitterClient on its own wasn't working so...
// singleton!
const getTwitterClient = () => {
  if (twitterClient === null) {
    twitterClient = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    });
  }
  return twitterClient;
};

const convertToText = (text, urlEntities) =>
  twitterText.autoLink(text, { urlEntities });

const getTweets = async (max) => {
  const twitter = getTwitterClient();
  try {
    const tweets = await twitter.get(`statuses/user_timeline`, {
      screen_name: process.env.TWITTER_ID,
      count: 200, // so we get enough without rts and mentions
      exclude_replies: true,
      include_rts: false,
    });
    return tweets.map(({ text, entities, created_at: time, id_str: id }) => ({
      time,
      message: convertToText(text, entities.urls),
      reltime: relTime(new Date(time)),
      url: `https://twitter.com/statuses/${id}`,
    })).slice(0, max);
  } catch (e) {
    throw e;
  }
};

const TwitterType = new GraphQLObjectType({
  name: `Twitter`,
  description: `My Twitter Info`,
  fields: () => ({
    tweets: {
      args: { limit },
      type: new GraphQLList(tweet),
      description: `My recent tweets`,
      resolve: async (_, { limit: max = 5 }) => getTweets(max),
    },
    url: { type: GraphQLString, description: `My Twitter url`, resolve: ({ url }) => url },
  }),
});

module.exports = TwitterType;