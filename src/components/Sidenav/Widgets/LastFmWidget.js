import React from 'react';
import { useQuery } from 'react-apollo';
import { Transition, TransitionGroup } from 'react-transition-group';

import nowPlayingQuery from '@queries/nowPlaying.gql';
import { Description, Widget, WidgetWrapper } from '@styles/Widgets';

import { useRotateInEntry } from './hooks';

const LastFmWidget = () => {
  const { data } = useQuery(nowPlayingQuery, { pollInterval: 1000 * 30, ssr: false });
  const nowPlaying = data && data.lastfm && data.lastfm.nowplaying;

  const [songs, rotateInSong] = useRotateInEntry();

  React.useEffect(() => {
    if (nowPlaying) {
      const newSongs = [`♫ ${nowPlaying.title} by ${nowPlaying.artist}`];
      rotateInSong(newSongs);
    } else {
      rotateInSong([null]);
    }
  }, [nowPlaying, rotateInSong]);

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

export default LastFmWidget;
