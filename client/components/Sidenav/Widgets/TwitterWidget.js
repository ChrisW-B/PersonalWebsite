import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Widget, Description, Time, Link, WidgetWrapper } from './Widgets.style';

const query = gql `
  {
    twitter {
      tweets {
        message reltime url
      }
    }
  }
`;

const queryOptions = {
  options: {
    pollInterval: 1000 * 60 * 5,
    ssr: false
  }
};

class TwitterWidget extends Component {
  static propTypes = {
    data: PropTypes.shape({
      twitter: PropTypes.object
    })
  }

  static defaultProps = {
    data: {
      twitter: {
        tweets: []
      }
    }
  }

  state = {
    tweets: []
  }

  componentWillReceiveProps({ data: { twitter } }) {
    const [tweet] = twitter.tweets;
    this.updateTweets(tweet);
  }

  updateTweets = (tweet) => {
    this.setState(state => ({ tweets: [...state.tweets, tweet] }));
    this.setState(state => ({ tweets: [state.tweets[state.tweets.length - 1]] }));
  }

  render = () => {
    const { tweets = [] } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {tweets.map(({ url = `//twitter.com/ChrisW_B/`, message = ``, reltime = `` }) => (
          <Transition key={message} timeout={1000}>
            { status => (
              <Widget status={status}>
                <Description dangerouslySetInnerHTML={{ __html: message }} /> {/* eeep! */}
                <Time>
                  <Link href={url} title={reltime}>{reltime}</Link>
                </Time>
              </Widget>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    );
  }
}

export default graphql(query, queryOptions)(TwitterWidget);