import express from 'express';
import fetch from 'node-fetch';
import { logger, relativeTimeDifference } from '../utils';

require(`babel-polyfill`);
require(`dotenv`).config();

const app = express();

app.get(`/github`, async (req, res) => {
  logger.github(`getting recent commit`);
  const githubRes = await fetch(`https://api.github.com/graphql`, {
    method: `POST`,
    'Content-Type': `application/json`,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({ query: `{viewer{repositories(first:1 orderBy: {field: PUSHED_AT, direction: DESC} affiliations:[OWNER, COLLABORATOR, ORGANIZATION_MEMBER]){nodes{url nameWithOwner refs(first: 50 refPrefix: "refs/heads/"){nodes{name target{ ... on Commit{history(first: 10){edges{node{committedDate messageHeadlineHTML messageBodyHTML}}}}}}}}}}}` }) // best way I know of to get all of the refs
  });
  try {
    const githubJson = await githubRes.json();
    logger.github(`got commits, now to sort`);
    const repository = githubJson.data.viewer.repositories.nodes[0];
    const { url, nameWithOwner, refs: { nodes: refs } } = repository;
    const commits = refs.map((ref) => {
      const {
        messageHeadlineHTML,
        messageBodyHTML,
        committedDate
      } = ref.target.history.edges[0].node;
      return {
        success: true,
        link: `${url}/tree/${ref.name}`,
        repo: `${nameWithOwner}#${ref.name}`,
        message: `${messageHeadlineHTML.replace(`…`, ``)}${messageBodyHTML.replace(`…`, ``)}`,
        time: committedDate
      };
    });
    commits.sort((a, b) => new Date(b.time) - new Date(a.time));
    const mostRecentCommit = commits[0];
    res.send({
      ...mostRecentCommit,
      time: relativeTimeDifference(new Date(mostRecentCommit.time))
    });
  } catch (e) {
    logger.github(`no commit!`, e);
    res.send({ success: false, e });
  }
});

module.exports = app;