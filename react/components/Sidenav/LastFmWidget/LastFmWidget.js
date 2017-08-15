import React, { Component } from 'react';
const ONE_MIN = 60 * 1000;
export default class TwitterWidget extends Component {
  state = {
    text: ''
  }

  componentDidMount = () => {
    this.updateLastFm();
    this.autoUpdater = setInterval(this.updateLastFm, ONE_MIN / 2);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateLastFm = async() => {
    let lastFmJson;
    try {
      lastFmJson = await (await fetch('/lastfm')).json();
      if (!lastFmJson.success) throw new Error('no song');
      this.setState({ ...lastFmJson });
    } catch (error) {
      console.error({ error });
    }

  }
  render = () => {
    const { text = '' } = this.state;
    return (
      <li>
        <a href='http://last.fm/user/christo27/' title='Last.fm'>
          Last.FM
        </a>
        <div className='lastfm-widget widget'>
          <div className='descrip'>
            {text}
          </div>
        </div>
      </li>
    );
  }
}