import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Links } from '@components/links';
import { Photo } from '@schema/dataModel/personalApi';
import { usePhotoBlogQuery } from '@schema/queries/photoBlog.generated';
import {
  Banner,
  BannerPositioner,
  BannerWrapper,
  CenterText,
  Details,
  Name,
  Now,
  ScrollMonitor,
} from '@styles/introBanner';

import { LastFMWidget } from './widgets';

interface OwnProps {
  mini: boolean;
}

export const IntroBanner: React.FC<OwnProps> = ({ mini = false }) => {
  const [scrolledRef, allowScroll] = useInView();
  const [bgImage, setBgImage] = useState<Photo>(null);
  const { loading, data } = usePhotoBlogQuery();

  const photos = data?.photoBlog?.photos;

  useEffect(() => {
    if (!loading && photos.length > 0) {
      const randomPhotoNumber = Math.floor(Math.random() * photos.length);
      setBgImage(photos[randomPhotoNumber]);
    }
  }, [photos, loading]);

  return (
    <BannerWrapper mini={!loading && mini}>
      <ScrollMonitor ref={scrolledRef} />
      <BannerPositioner mini={mini}>
        <Banner bgImage={bgImage?.photo} mini={mini} fixed={!loading && !allowScroll}>
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
