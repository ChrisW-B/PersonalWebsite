import React, { Component } from 'react';
const ONE_MIN = 60 * 1000;

export default class TwitterWidget extends Component {
  state = {
    link: null,
    text: null,
    time: null
  }

  componentDidMount = () => {
    this.updateTweet();
    this.autoUpdater = setInterval(this.updateTweet, 5 * ONE_MIN);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateTweet = async() => {
    let tweetJson;
    try {
      tweetJson = await (await fetch('/twitter')).json();
      if (!tweetJson.success) throw new Error('no tweet');
      this.setState({ ...tweetJson });
    } catch (error) {
      return;
    }

  }

  render = () => {
    const { link = '//twitter.com/ChrisW_B/', text = '', time = '' } = this.state;
    return (
      <li>
        <a href='//twitter.com/ChrisW_B/' title='Twitter'>
          Twitter
        </a>
        <div className='twitter-widget widget'>
          <div className='descrip' dangerouslySetInnerHTML={{__html: text}}/> { /* eeep! */}
          <div className='reltime'>
            <a href={link} title={time}>{time}</a>
          </div>
        </div>
      </li>
    );
  }
}