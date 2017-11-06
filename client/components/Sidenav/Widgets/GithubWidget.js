import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Widget, Description, Time, Link, WidgetWrapper } from './Widgets.style';
import { ONE_MIN } from './';
import query from '../../queries';

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

  updateCommits = (commit, url) => {
    this.setState(() => ({ url }));
    this.setState(state => ({ commits: [...state.commits, commit] }));
    this.setState(state => ({ commits: [state.commits[state.commits.length - 1]] }));
  }

  updateCommit = async () => {
    const { github: { commits, url } } = await query(`{github{url commits(limit: 1){message reltime url name}}}`);
    const [commit] = commits;
    if (commit) this.updateCommits(commit, url);
  }

  render = () => {
    const { commits } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {commits.map(({ url = `//github.com/ChrisW-B/`, name = ``, message = ``, reltime = `` }) => (
          <Transition key={message} timeout={1000}>
            { status => (
              <Widget status={status}>
                <Description dangerouslySetInnerHTML={{ __html: message }} /> {/* eeep! */}
                <Time>
                  <Link href={url} title={name}>{reltime} in {name}</Link>
                </Time>
              </Widget>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    );
  }
}