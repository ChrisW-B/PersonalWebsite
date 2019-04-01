// db/graphql/types/Github.js
import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql/type';
import commitType from './commit';
import { limit } from '../../args';
import relTime from '../../utils/relTime';

const getFirstN = (max = 0, array) => (max ? array.slice(0, max) : array);

const getGithubInfo = async () => {
  const githubRes = await fetch(`https://api.github.com/graphql`, {
    method: `POST`,
    'Content-Type': `application/json`,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `{viewer{repositories(first:5 orderBy: {field: PUSHED_AT, direction: DESC} affiliations:[OWNER, COLLABORATOR, ORGANIZATION_MEMBER]){nodes{url nameWithOwner refs(first: 50 refPrefix: "refs/heads/"){nodes{name target{ ... on Commit{history(first: 5){edges{node{author{user{login}} committedDate messageHeadlineHTML messageBodyHTML}}}}}}}}}}}`
    }) // best way I know of to get all of the refs
  });

  try {
    return (await githubRes.json()).data.viewer.repositories.nodes
      .reduce((repos, { url, nameWithOwner, refs }) => [...repos, ...refs.nodes.map(ref => ({ url, nameWithOwner, ref }))], [])
      .reduce(
        (coms, { url, nameWithOwner, ref }) => [
          ...coms,
          ...ref.target.history.edges.map(node => Object.assign({}, { url, nameWithOwner, branch: ref.name }, node.node))
        ],
        []
      )
      .map(({ url, nameWithOwner, branch, committedDate, messageBodyHTML, messageHeadlineHTML, author }) => ({
        url,
        nameWithOwner,
        branch,
        committedDate,
        messageBodyHTML,
        messageHeadlineHTML,
        author: author.user
      }))
      .filter(({ author }) => author !== null && author.login === process.env.GITHUB_ID)
      .map(commit => Object.assign({}, commit, { author: commit.author.login }))
      .map(({ url, nameWithOwner, branch, committedDate, messageBodyHTML, messageHeadlineHTML, author }) => ({
        url: `${url}/tree/${branch}`,
        author,
        name: `${nameWithOwner}@${branch}`,
        time: committedDate,
        reltime: relTime(new Date(committedDate)),
        message: `${messageHeadlineHTML.replace(`…`, ``)}${messageBodyHTML.replace(`…`, ``)}`
      }))
      .sort((a, b) => new Date(b.time) - new Date(a.time));
  } catch (e) {
    throw e;
  }
};

const Github = new GraphQLObjectType({
  name: `Github`,
  description: `My Github Info`,
  fields: () => ({
    commits: {
      args: { limit },
      type: new GraphQLList(commitType),
      description: `The Company's Name`,
      resolve: async (_, { limit: max = 5 }) => getFirstN(max, await getGithubInfo())
    },
    url: { type: GraphQLString, description: `My Github URL`, resolve: ({ url }) => url }
  })
});

export default Github;
