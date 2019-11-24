import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Photo } from '@schema/dataModel/personalApi';
import { usePhotoBlogQuery } from '@schema/queries/photoBlog.generated';
import { Banner, BannerWrapper, CenterText, Name, Now, StickyWrapper } from '@styles/introBanner';

import { LastFMWidget } from './widgets';

interface OwnProps {
  mini: boolean;
}
const THRESHOLD = 0.01;
export const IntroBanner: React.FC<OwnProps> = ({ mini = false }) => {
  const [scrolledRef, allowScroll] = useInView({ threshold: THRESHOLD });
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
      <div style={{ top: 'calc(50% - 23.25rem)', position: 'absolute' }} ref={scrolledRef} />
      <StickyWrapper mini={!loading && mini}>
        <Banner isLoading={loading} bgImage={bgImage?.photo} mini={mini} fixed={!allowScroll}>
          <CenterText mini={mini && !loading}>
            <Name mini={mini && !loading} title='Chris Barry'>
              Chris Barry
            </Name>
          </CenterText>
        </Banner>
        {!mini && (
          <Now>
            <LastFMWidget />
          </Now>
        )}
      </StickyWrapper>
    </BannerWrapper>
  );
};
