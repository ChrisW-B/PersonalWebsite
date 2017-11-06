import React, { Component } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Widget, Description, Time, Link, WidgetWrapper } from './Widgets.style';
import { ONE_MIN } from './';
import query from '../../queries';

export default class TwitterWidget extends Component {
  state = {
    tweets: []
  }

  componentDidMount = () => {
    setTimeout(() => this.updateTweet(), 1250);
    this.autoUpdater = setInterval(this.updateTweet, 30 * ONE_MIN);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateTweets = (tweet) => {
    this.setState(state => ({ tweets: [...state.tweets, tweet] }));
    this.setState(state => ({ tweets: [state.tweets[state.tweets.length - 1]] }));
  }

  updateTweet = async () => {
    const { twitter: { tweets, url } } = await query(`{twitter{url tweets(limit: 1){message reltime url}}}`);
    const [tweet] = tweets;
    if (tweet) this.updateTweets(tweet, url);
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