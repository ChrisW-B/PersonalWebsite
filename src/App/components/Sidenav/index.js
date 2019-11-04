import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

import SidenavLinks from '@components/Sidenav/SidenavLinks';
import photoBlogQuery from '@queries/photoBlogQuery.gql';
import { Name, PhotoDescription, SidenavContainer, SidenavItems } from '@styles/Sidenav';

const Sidenav = () => {
  const [photoData, setPhoto] = useState(null);
  const { data, loading, error } = useQuery(photoBlogQuery);
  const photos = data && data.photoBlog && data.photoBlog.photos;

  useEffect(() => {
    if (photos && photos.length > 0) {
      setPhoto(photos[Math.floor(Math.random() * (photos.length - 1))]);
    }
  }, [photos]);

  if (loading || error) return null;

  const { photo = '', title = '', url = '' } = photoData || {};

  return (
    <SidenavContainer bg={photo}>
      <SidenavItems>
        <li>
          <Name>Chris Barry</Name>
        </li>
        <SidenavLinks />
      </SidenavItems>
      <PhotoDescription>
        {title ? (
          <a href={url}>
            Background:
            <br />
            {title}
          </a>
        ) : null}
      </PhotoDescription>
    </SidenavContainer>
  );
};

export default Sidenav;
