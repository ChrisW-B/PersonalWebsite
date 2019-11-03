import React from 'react';
import { useQuery } from 'react-apollo';

import tweetsQuery from '@queries/tweets.gql';
import { Link } from '@styles/Sidenav';
import { Description, Time } from '@styles/Widgets';

import AnimatedWidget from './AnimatedWidget';
import { useRotateInEntry } from './hooks';

const TwitterWidget = () => {
  const { data = { twitter: { tweets: [] } }, loading, error } = useQuery(tweetsQuery, {
    pollInterval: 1000 * 60 * 5,
    ssr: false,
  });
  const newTweets = !loading && !error ? data.twitter.tweets : [];

  const [tweets, rotateInTweet] = useRotateInEntry();

  React.useEffect(() => {
    rotateInTweet(newTweets);
  }, [newTweets, rotateInTweet]);
  if (loading || error) return null;
  return (
    <AnimatedWidget items={tweets}>
      {({ url = '//twitter.com/ChrisW_B/', message = '', reltime = '' }) => (
        <>
          <Description dangerouslySetInnerHTML={{ __html: message }} />
          <Time>
            <Link href={url} title={reltime}>
              {reltime}
            </Link>
          </Time>
        </>
      )}
    </AnimatedWidget>
  );
};

export default TwitterWidget;
