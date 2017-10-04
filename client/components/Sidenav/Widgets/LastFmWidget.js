import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Widget, Description, WidgetWrapper } from './Widgets.style';
import { ONE_MIN } from './';

export default class LastFmWidget extends Component {
  state = {
    songs: []
  }

  componentDidMount = () => {
    setTimeout(() => this.updateLastFm(), 1500);
    this.autoUpdater = setInterval(this.updateLastFm, ONE_MIN / 2);
  }

  componentWillUnmount = () => {
    clearInterval(this.autoUpdater);
    this.autoUpdater = null;
  }

  updateSong = ({ text }) => {
    this.setState(state => ({ songs: [...state.songs, text] }));
    this.setState(state => ({ songs: [state.songs[state.songs.length - 1]] }));
  }

  updateLastFm = async () => {
    let lastFmJson;
    try {
      lastFmJson = await (await fetch(`/lastfm`)).json();
      if (!lastFmJson.success) throw new Error(`no song`);
      this.updateSong({ ...lastFmJson });
    } catch (error) {
      console.log({ error });
    }
  }
  render = () => {
    const { songs = [] } = this.state;
    return (
      <TransitionGroup component={WidgetWrapper}>
        {songs.map(song => (
          <Transition key={song} timeout={1000}>
            { status => (
              <Widget status={status}>
                <Description>{song}</Description>
              </Widget>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    );
  }
}