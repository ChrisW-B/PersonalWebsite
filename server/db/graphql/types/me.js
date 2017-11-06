const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLBoolean } = require(`graphql/type`);
const { github, job, project, skill, resume /* song, tweet */ } = require(`./`);
const { limit } = require(`../args`);
const info = require(`../../me.json`);

const getFirstN = (max = 0, array) => (max ? array.slice(0, max) : array);

const me = new GraphQLObjectType({
  name: `Me`,
  description: `About Me`,
  fields: () => ({
    name: {
      type: GraphQLString,
      description: `My Name`,
      resolve: () => info.name
    },
    twitter: {
      type: GraphQLString,
      description: `My Twitter URL`,
      resolve: () => info.twitter
    },
    github: {
      type: github,
      description: `My Github Info`,
      resolve: () => info.github
    },
    lastfm: {
      type: GraphQLString,
      description: `My Last.FM URL`,
      resolve: () => info.lastfm
    },
    linkedin: {
      type: GraphQLString,
      description: `My LinkedIN URL`,
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
      type: skill,
      description: `Possible Relevant Skills`,
      resolve: () => info.skills
    }
  })
});
module.exports = me;