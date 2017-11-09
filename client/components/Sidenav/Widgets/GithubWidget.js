import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Widget, Description, Time, Link, WidgetWrapper } from './Widgets.style';

const query = gql `
  {
    github {
      commits(limit: 1) {
        url author name time reltime message
      }
    }
  }
`;

const queryOptions = {
  options: {
    pollInterval: 1000 * 60 * 10,
    ssr: false
  }
};

class GithubWidget extends Component {
  static propTypes = {
    data: PropTypes.shape({
      github: PropTypes.object
    })
  }

  static defaultProps = {
    data: { github: { commits: [] } }
  }

  state = {
    commits: []
  }

  componentWillReceiveProps({ data: { github = { commits: [null] } } }) {
    const [commit] = github.commits;
    this.updateCommits(commit);
  }

  updateCommits = (commit) => {
    this.setState(state => ({ commits: [...state.commits, commit] }));
    this.setState(state => ({ commits: [state.commits[state.commits.length - 1]] }));
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

export default graphql(query, queryOptions)(GithubWidget);