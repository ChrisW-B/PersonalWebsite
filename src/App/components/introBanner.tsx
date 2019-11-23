import React from 'react';

import { usePhotoBlogQuery } from '@schema/queries/photoBlog.generated';

export const IntroBanner = () => {
  const { loading, data } = usePhotoBlogQuery();
  console.log({ loading, data });
  if (!loading) {
    console.log({ d: data.photoBlog.photos });
  }
  return <div />;
};
