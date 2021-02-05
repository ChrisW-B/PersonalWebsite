import * as React from 'react';

import { useNowPlayingQuery } from '@queries/nowPlaying.generated';

const LastFM: React.FC = () => {
  const { data, loading } = useNowPlayingQuery({ pollInterval: (1000 * 60) / 2 });

  const currentlyPlaying = data?.lastfm?.nowplaying?.nowplaying;
  if (loading || !currentlyPlaying) {
    return null;
  }
  const title = data?.lastfm?.nowplaying?.title ?? '';
  const artist = data?.lastfm?.nowplaying?.artist ?? '';
  return <p>{`♫ ${title} by ${artist}`}</p>;
};
export default LastFM;
