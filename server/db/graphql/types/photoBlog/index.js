import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql/type';
import fetch from 'node-fetch';
import photo from './photo';
import { limit } from '../../args';

const getPhotos = async (max) => {
  const res = await fetch(`https://photo.chriswbarry.com/ghost/api/v2/content/posts/?key=${process.env.GHOST_KEY}&limit=${max}&fields=feature_image,url,title,html`);

  try {
    const { posts } = await res.json();
    return posts
      .filter(({ feature_image: img }) => !!img)
      .map(({
        url,
        feature_image: img = ``,
        title,
        html,
      }) => ({
        title,
        html,
        url,
        photo: img.includes(`http`) ? img : `https://photo.chriswbarry.com${img}`,
      }));
  } catch (e) {
    throw e;
  }
};

const Blog = new GraphQLObjectType({
  name: `Blog`,
  description: `My blog photos`,
  fields: () => ({
    photos: {
      args: { limit },
      type: new GraphQLList(photo),
      description: `All of the avalible photos`,
      resolve: async (_, { limit: max = 5 }) => getPhotos(max),
    },
    url: { type: GraphQLString, description: `My Photo Blog's URL`, resolve: ({ url }) => url },
  }),
});

export default Blog;