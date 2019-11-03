import React from 'react';
import { useQuery } from 'react-apollo';

import githubQuery from '@queries/github.gql';
import { Link } from '@styles/Sidenav';
import { Description, Time } from '@styles/Widgets';

import AnimatedWidget from './AnimatedWidget';
import { useRotateInEntry } from './hooks';

const GithubWidget = () => {
  const { data = { github: { commits: [] } }, loading, error } = useQuery(githubQuery, {
    pollInterval: 1000 * 60 * 10,
    ssr: false,
  });

  const newCommits = !loading && !error ? data.github.commits : [];
  const [commits, rotateInItem] = useRotateInEntry();

  React.useEffect(() => {
    rotateInItem(newCommits);
  }, [newCommits, rotateInItem]);

  if (loading || error) return null;
  return (
    <AnimatedWidget items={commits}>
      {({ message, url, name, reltime }) => (
        <>
          <Description dangerouslySetInnerHTML={{ __html: message }} />
          <Time>
            <Link href={url} title={name}>
              {`${reltime} in ${name}`}
            </Link>
          </Time>
        </>
      )}
    </AnimatedWidget>
  );
};

export default GithubWidget;
