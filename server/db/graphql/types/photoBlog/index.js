const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql/type');
const fetch = require('node-fetch');
const photo = require('./photo');
const { limit } = require('../../args');

const getPhotos = async (max) => {
  const res = await fetch(`https://photo.chriswbarry.com/ghost/api/v0.1/posts?client_id=ghost-frontend&client_secret=25eabd64dc95&limit=${max}&fields=feature_image,url,title,html`);

  try {
    const { posts } = await res.json();
    const photos = posts.map(({ url, feature_image: img, title, html }) => ({
      title,
      html,
      url: `https://photo.chriswbarry.com${url}`,
      photo: img.includes('http') ? img : `https://photo.chriswbarry.com${img}`
    }));
    return photos;
  } catch (e) {
    throw new Error(`Error: ${JSON.stringify(e)}`);
  }
};

const Blog = new GraphQLObjectType({
  name: 'Blog',
  description: 'My blog photos',
  fields: () => ({
    photos: {
      args: { limit },
      type: new GraphQLList(photo),
      description: 'All of the avalible photos',
      resolve: async (_, { limit: max = 5 }) => getPhotos(max)
    },
    url: { type: GraphQLString, description: 'My Photo Blog\'s URL', resolve: ({ url }) => url }
  })
});

module.exports = Blog;