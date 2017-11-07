const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLBoolean } = require(`graphql/type`);
const { github, job, project, skill, resume, lastfm, twitter, photoBlog } = require(`./`);
const { limit } = require(`../args`);
const info = require(`../../me.json`);

const getFirstN = (max = 0, array) => (max ? array.slice(0, max) : array);

const simple = {
  name: {
    type: GraphQLString,
    description: `My Name`,
    resolve: () => info.name
  },
  linkedin: {
    type: GraphQLString,
    description: `My LinkedIn URL`,
    resolve: () => info.linkedin
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
  resume: {
    type: resume,
    description: `My Last.FM URL`,
    resolve: () => info.resume
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
    type: skill,
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
    description: `Recent Post from my Photoblog`,
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
module.exports = me;