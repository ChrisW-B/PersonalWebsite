import React, { Component } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Widget, Description, Time, Link, WidgetWrapper } from './Widgets.style';
import { ONE_MIN } from './';

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
    let tweetJson;
    try {
      tweetJson = await (await fetch(`/twitter`)).json();
      if (!tweetJson.success) throw new Error(`no tweet`);
      this.updateTweets(tweetJson);
    } catch (error) {
      console.log({ error });
    }
  }

  render = () => {
    const { tweets = [] } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {tweets.map(({ link = `//twitter.com/ChrisW_B/`, text = ``, time = `` }) => (
          <Transition key={text} timeout={1000}>
            { status => (
              <Widget status={status}>
                <Description dangerouslySetInnerHTML={{ __html: text }} /> {/* eeep! */}
                <Time className='reltime'>
                  <Link href={link} title={time}>{time}</Link>
                </Time>
              </Widget>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    );
  }
}