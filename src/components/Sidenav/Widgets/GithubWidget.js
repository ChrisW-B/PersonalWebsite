import React from 'react';
import { useQuery } from 'react-apollo';
import { Transition, TransitionGroup } from 'react-transition-group';

import githubQuery from '@queries/github.gql';
import { Link } from '@styles/Sidenav';
import { Description, Time, Widget, WidgetWrapper } from '@styles/Widgets';

import { useRotateInEntry } from './hooks';

const GithubWidget = () => {
  const { data } = useQuery(githubQuery, { pollInterval: 1000 * 60 * 10, ssr: false });
  const newCommits = data && data.github && data.github.commits;

  const [commits, rotateInItem] = useRotateInEntry();

  React.useEffect(() => {
    rotateInItem(newCommits);
  }, [newCommits, rotateInItem]);

  return (
    <TransitionGroup component={WidgetWrapper}>
      {commits &&
        commits.map(({ url = `//github.com/ChrisW-B/`, name = ``, message = ``, reltime = `` }) => (
          <Transition key={message} timeout={1000}>
            {status => (
              <Widget status={status}>
                {/* eeep! */}
                <Description dangerouslySetInnerHTML={{ __html: message }} />
                <Time>
                  <Link href={url} title={name}>
                    {`${reltime} in ${name}`}
                  </Link>
                </Time>
              </Widget>
            )}
          </Transition>
        ))}
    </TransitionGroup>
  );
};

export default GithubWidget;
