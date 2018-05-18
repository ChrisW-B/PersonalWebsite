import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Link } from '../../../styles/Sidenav';
import { Widget, Description, Time, WidgetWrapper } from '../../../styles/Widgets';

class GithubWidget extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      github: PropTypes.object,
    }),
  };

  static defaultProps = {

    data: { loading: true, github: { commits: [] } },
  };

  state = {
    commits: [],
  };

  componentWillReceiveProps({ data: { loading, github = { commits: [] } } }) {
    if (loading) {
      this.updateCommits(false);
    } else {
      const [commit = null] = github.commits;
      this.updateCommits(commit || null);
    }
  }

  updateCommits = (commit) => {
    if (!commit) this.setState(() => ({ commits: [] }));
    else {
      this.setState(state => ({ commits: [...state.commits, commit] }));
      this.setState(state => ({
        commits: [state.commits[state.commits.length - 1]],
      }));
    }
  };

  render = () => {
    const { commits = [] } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {commits.map(({
 url = `//github.com/ChrisW-B/`, name = ``, message = ``, reltime = ``,
}) => (
  <Transition key={message} timeout={1000}>
    {status => (
      <Widget status={status}>
        <Description dangerouslySetInnerHTML={{ __html: message }} />
        {/* eeep! */}
        <Time>
          <Link href={url} title={name}>
            {reltime} in {name}
          </Link>
        </Time>
      </Widget>
            )}
  </Transition>
        ))}
      </TransitionGroup>
    );
  };
}

export default GithubWidget;