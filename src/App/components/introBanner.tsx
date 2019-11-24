import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Photo } from '@schema/dataModel/personalApi';
import { usePhotoBlogQuery } from '@schema/queries/photoBlog.generated';
import { Banner, BannerWrapper, CenterText, Name, Now, StickyWrapper } from '@styles/introBanner';

import { LastFMWidget } from './widgets';

export const IntroBanner = () => {
  const [inViewReference, inView] = useInView();
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
    <BannerWrapper>
      <StickyWrapper>
        <Banner isLoading={loading} bgImage={bgImage?.photo} mini={!inView}>
          <CenterText mini={!inView && !loading}>
            <Name mini={!inView && !loading} title='Chris Barry'>
              Chris Barry
            </Name>
          </CenterText>
        </Banner>
        {inView && (
          <Now>
            <LastFMWidget />
          </Now>
        )}
      </StickyWrapper>
      <div ref={inViewReference} />
    </BannerWrapper>
  );
};
