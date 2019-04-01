import { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLBoolean } from 'graphql/type';
import { github, job, project, skill, resume, lastfm, twitter, photoBlog } from '.';
import { limit } from '../args';
import info from '../../me.json';

const getFirstN = (max = 0, array) => (max ? array.slice(0, max) : array);

const simple = {
  name: {
    type: GraphQLString,
    description: `My Name`,
    resolve: () => info.name
  },
  linkedin: {
    type: new GraphQLObjectType({
      name: `Linkedin`,
      description: `My Linkedin Info`,
      fields: () => ({
        url: { type: GraphQLString, description: `My LinkedIn URL`, resolve: ({ url }) => url }
      })
    }),
    description: `My LinkedIn Info`,
    resolve: () => ({ url: info.linkedin })
  },
  email: {
    type: GraphQLString,
    description: `My Email Address`,
    resolve: () => info.email
  },
  employed: {
    type: GraphQLBoolean,
    description: `Do I Have A Job?`,
    resolve: () => info.employed
  },
  bio: {
    type: GraphQLString,
    description: `A Little About Me`,
    resolve: () => info.bio
  },
  interests: {
    type: GraphQLString,
    description: `What I'm Interested In`,
    resolve: () => info.interests
  }
};

const complex = {
  resume: {
    type: resume,
    description: `My Resume`,
    resolve: () => info.resume
  },
  projects: {
    args: { limit },
    type: new GraphQLList(project),
    description: `Some Recent Projects`,
    resolve: (_, { limit: max }) => getFirstN(max, info.projects)
  },
  jobs: {
    args: { limit },
    type: new GraphQLList(job),
    description: `My Recent Jobs`,
    resolve: (_, { limit: max }) => getFirstN(max, info.jobs)
  },
  skills: {
    type: new GraphQLList(skill),
    description: `Possible Relevant Skills`,
    resolve: () => info.skills
  }
};

const external = {
  twitter: {
    type: twitter,
    description: `My Twitter Info`,
    resolve: () => ({ url: info.twitter })
  },
  github: {
    type: github,
    description: `My Github Info`,
    resolve: () => ({ url: info.github })
  },
  lastfm: {
    type: lastfm,
    description: `My Last.FM info`,
    resolve: () => ({ url: info.lastfm })
  },
  photoBlog: {
    type: photoBlog,
    description: `My Photo Blog info`,
    resolve: () => ({ url: info.blog })
  }
};

const me = new GraphQLObjectType({
  name: `Me`,
  description: `About Me`,
  fields: () => ({
    ...simple,
    ...complex,
    ...external
  })
});
export default me;
