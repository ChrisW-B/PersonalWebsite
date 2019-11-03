import React from 'react';
import { useQuery } from 'react-apollo';

import nowPlayingQuery from '@queries/nowPlaying.gql';
import { Description } from '@styles/Widgets';

import AnimatedWidget from './AnimatedWidget';
import { useRotateInEntry } from './hooks';

const LastFmWidget = () => {
  const { data = { lastfm: { nowPlaying: null } }, loading, error } = useQuery(nowPlayingQuery, {
    pollInterval: 1000 * 30,
    ssr: false,
  });
  const nowPlaying = !loading && !error ? data.lastfm.nowplaying : null;
  const [songs, rotateInSong] = useRotateInEntry();

  React.useEffect(() => {
    if (nowPlaying) {
      const newSongs = [`♫ ${nowPlaying.title} by ${nowPlaying.artist}`];
      rotateInSong(newSongs);
    } else {
      rotateInSong([null]);
    }
  }, [nowPlaying, rotateInSong]);

  if (loading || error) return null;
  return <AnimatedWidget items={songs}>{song => <Description>{song}</Description>}</AnimatedWidget>;
};

export default LastFmWidget;
