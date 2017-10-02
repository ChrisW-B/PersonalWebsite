import React, { Component } from 'react';
import { Widget, Description, Time } from './Widgets.style';

const ONE_MIN = 60 * 1000;

export default class GithubWidget extends Component {
  state = {
    link: null,
    repo: null,
    message: null,
    time: null
  }

  componentDidMount = () => {
    this.updateCommit();
    this.autoUpdater = setInterval(this.updateCommit, 30 * ONE_MIN);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateCommit = async () => {
    try {
      const commit = await (await fetch(`/github`)).json();
      if (!commit.success) throw new Error(`no github`);
      this.setState({ ...commit });
    } catch (error) {
      console.log({ error });
    }
  }

  render = () => {
    const { link = `//github.com/ChrisW-B/`, repo = ``, message = ``, time = `` } = this.state;
    return (
      <Widget>
        <Description dangerouslySetInnerHTML={{ __html: message }} /> { /* eeep! */}
        <Time>
          {link ? <a href={link} title={time}>{time} in {repo}</a> : null}
        </Time>
      </Widget>
    );
  }
}