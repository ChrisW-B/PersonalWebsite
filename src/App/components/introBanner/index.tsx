import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import LastFMWidget from '@components/widgets/lastfm';
import { NightModeContext } from '@contexts/nightMode';
import { usePhotoBlogQuery } from '@queries/photoBlog.generated';
import { Photo } from '@schema/dataModel/personalApi.generated';
import {
  Banner,
  BannerPositioner,
  BannerWrapper,
  BulbIcon,
  CenterText,
  DarkModeButton,
  Details,
  Name,
  Now,
  ScrollMonitor,
} from '@styles/introBanner';

import Links from './links';

interface OwnProps {
  mini: boolean;
}

const IntroBanner: React.FC<OwnProps> = ({ mini = false }) => {
  const [, toggleLightMode] = useContext(NightModeContext) || [];
  const [scrolledRef, allowScroll] = useInView();
  const [bgImage, setBgImage] = useState<Photo | null>(null);
  const { loading, data } = usePhotoBlogQuery();

  useEffect(() => {
    const photos = data?.photoBlog?.photos || [];
    if (!loading && photos.length > 0) {
      const randomPhotoNumber = Math.floor(Math.random() * photos.length);
      setBgImage(photos[randomPhotoNumber]);
    }
  }, [data?.photoBlog?.photos, loading]);

  return (
    <BannerWrapper mini={!loading && mini}>
      <ScrollMonitor ref={scrolledRef} />

      <BannerPositioner mini={mini}>
        <Banner bgImage={bgImage?.photo || ''} mini={mini} fixed={!loading && !allowScroll}>
          <DarkModeButton title='Toggle dark mode' type='button' onClick={toggleLightMode}>
            <span title='bulb icon from noun project'>
              <BulbIcon />
            </span>
          </DarkModeButton>
          <CenterText mini={mini && !loading}>
            <Name mini={mini && !loading} title='Chris Barry'>
              Chris Barry
            </Name>

            <Details mini={mini}>
              <Links mini={mini} />
              {!mini && (
                <Now>
                  <LastFMWidget />
                </Now>
              )}
            </Details>
          </CenterText>
        </Banner>
      </BannerPositioner>
    </BannerWrapper>
  );
};
export default IntroBanner;
