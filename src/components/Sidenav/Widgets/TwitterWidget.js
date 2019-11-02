import React from 'react';
import { useQuery } from 'react-apollo';
import { Transition, TransitionGroup } from 'react-transition-group';

import tweetsQuery from '@queries/tweets.gql';
import { Link } from '@styles/Sidenav';
import { Description, Time, Widget, WidgetWrapper } from '@styles/Widgets';

import { useRotateInEntry } from './hooks';

const TwitterWidget = () => {
  const { data } = useQuery(tweetsQuery, { pollInterval: 1000 * 60 * 5, ssr: false });
  const newTweets = data && data.twitter && data.twitter.tweets;

  const [tweets, rotateInTweet] = useRotateInEntry();

  React.useEffect(() => {
    rotateInTweet(newTweets);
  }, [newTweets, rotateInTweet]);

  return (
    <TransitionGroup component={WidgetWrapper}>
      {tweets.map(({ url = `//twitter.com/ChrisW_B/`, message = ``, reltime = `` }) => (
        <Transition key={message} timeout={1000}>
          {status => (
            <Widget status={status}>
              {/* eeep! */}
              <Description dangerouslySetInnerHTML={{ __html: message }} />
              <Time>
                <Link href={url} title={reltime}>
                  {reltime}
                </Link>
              </Time>
            </Widget>
          )}
        </Transition>
      ))}
    </TransitionGroup>
  );
};

export default TwitterWidget;
