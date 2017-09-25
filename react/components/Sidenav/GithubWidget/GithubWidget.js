import React, { Component } from 'react';
import GitHubLogo from 'react-icons/lib/io/social-github';

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

  updateCommit = async() => {
    try {
      const commit = await (await fetch('/github')).json();
      if (!commit.success) throw new Error('no github');
      this.setState({ ...commit });
    } catch (error) {
      return;
    }

  }

  render = () => {
    const { link = '//github.com/ChrisW-B/', repo = '', message = '', time = '' } = this.state;
    return (
      <li>
        <a href='//github.com/ChrisW-B/' title='Github'>
          <span className='icon'><GitHubLogo /></span>Github
        </a>
        <div className='github-widget widget'>
          <div className='descrip' dangerouslySetInnerHTML={{__html: message}} /> { /* eeep! */}
          <div className='reltime'>
            {link ? <a href={link} title={time}>{time} in {repo}</a> : null}
          </div>
        </div>
      </li>
    );
  }
}