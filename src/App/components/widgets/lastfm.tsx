import * as React from 'react';

import { useNowPlayingQuery } from '@schema/queries/nowPlaying.generated';
import { NowPlaying } from '@styles/lastFmWidget';

export const LastFMWidget = () => {
  const { data, loading } = useNowPlayingQuery({ pollInterval: (1000 * 60) / 2 });

  const title = data?.lastfm?.nowplaying?.title || '';
  const artist = data?.lastfm?.nowplaying?.artist || '';
  const currentlyPlaying = data?.lastfm?.nowplaying?.nowplaying;

  if (loading || !currentlyPlaying) {
    return null;
  }

  return <NowPlaying>{`♫ ${title} by ${artist}`}</NowPlaying>;
};
