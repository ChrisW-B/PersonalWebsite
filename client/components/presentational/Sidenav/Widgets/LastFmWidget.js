import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Widget, Description, WidgetWrapper } from '../../../styles/Widgets';

class LastFmWidget extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      lastfm: PropTypes.object,
    }),
  };

  static defaultProps = {
    data: {
      loading: true,
      lastfm: {
        nowplaying: null,
      },
    },
  };

  state = {
    songs: [],
  };

  componentWillReceiveProps = ({ data: { loading, lastfm = { nowplaying: null } } }) => (loading ? this.updateSong(false) : this.updateSong(lastfm.nowplaying));

  updateSong = (nowplaying) => {
    if (!nowplaying) this.setState(state => ({ songs: [...state.songs, null] }));
    else this.setState(state => ({ songs: [...state.songs, `♫ ${nowplaying.title} by ${nowplaying.artist}`] }));
    this.setState(state => ({ songs: [state.songs[state.songs.length - 1]] }));
  };

  render = () => {
    const { songs = [] } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {songs.map(song => (
          <Transition key={song} timeout={1000}>
            {status => (
              <Widget status={status}>
                <Description>{song}</Description>
              </Widget>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    );
  };
}

export default LastFmWidget;