import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Widget, Description, Time, Link, WidgetWrapper } from './Widgets.style';
import { ONE_MIN } from './';

export default class GithubWidget extends Component {
  state = {
    commits: []
  }

  componentDidMount = () => {
    setTimeout(() => this.updateCommit(), 1000);
    this.autoUpdater = setInterval(this.updateCommit, 30 * ONE_MIN);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateCommits = (commit) => {
    this.setState(state => ({ commits: [...state.commits, commit] }));
    this.setState(state => ({ commits: [state.commits[state.commits.length - 1]] }));
  }

  updateCommit = async () => {
    try {
      const commit = await (await fetch(`/github`)).json();
      if (!commit.success) throw new Error(`no github`);
      this.updateCommits(commit);
    } catch (error) {
      console.log({ error });
    }
  }

  render = () => {
    const { commits } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {commits.map(({ link = `//github.com/ChrisW-B/`, repo = ``, message = ``, time = `` }) => (
          <Transition key={message} timeout={1000}>
            { status => (
              <Widget status={status}>
                <Description dangerouslySetInnerHTML={{ __html: message }} /> {/* eeep! */}
                <Time>
                  <Link href={link} title={repo}>{time} in {repo}</Link>
                </Time>
              </Widget>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    );
  }
}