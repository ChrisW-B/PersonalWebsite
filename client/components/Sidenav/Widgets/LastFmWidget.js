import React, { Component } from 'react';
import { Widget, Description } from './Widgets.style';

const ONE_MIN = 60 * 1000;
export default class TwitterWidget extends Component {
  state = {
    text: ``
  }

  componentDidMount = () => {
    this.updateLastFm();
    this.autoUpdater = setInterval(this.updateLastFm, ONE_MIN / 2);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateLastFm = async () => {
    let lastFmJson;
    try {
      lastFmJson = await (await fetch(`/lastfm`)).json();
      if (!lastFmJson.success) throw new Error(`no song`);
      this.setState({ ...lastFmJson });
    } catch (error) {
      console.log({ error });
    }
  }
  render = () => {
    const { text = `` } = this.state;
    return (
      <Widget>
        <Description>
          {text}
        </Description>
      </Widget>
    );
  }
}