import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Widget, Description, WidgetWrapper } from './Widgets.style';
import { ONE_MIN } from './';
import query from '../../queries';

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

  updateSong = ({ title, artist }) => {
    this.setState(state => ({ songs: [...state.songs, `♫ ${title} by ${artist}`] }));
    this.setState(state => ({ songs: [state.songs[state.songs.length - 1]] }));
  }

  updateLastFm = async () => {
    const { lastfm: { nowplaying, url } } = await query(`{lastfm{url nowplaying{title artist}}}`);
    if (nowplaying) this.updateSong(nowplaying, url);
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