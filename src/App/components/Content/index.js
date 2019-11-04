import React from 'react';
import { useQuery } from 'react-apollo';

import DetailSections from '@components/Content/DetailSections';
import Intro from '@components/Content/Intro';
import LearnMore from '@components/Content/LearnMore';
import profilePhotoQuery from '@queries/profilePhotoQuery.gql';
import { InfoSection, ProfilePhoto } from '@styles/Info';

const Content = () => {
  const { data, loading, error } = useQuery(profilePhotoQuery);
  return (
    <InfoSection>
      <ProfilePhoto src={!loading && !error && data.photo} alt='Profile' />
      <Intro />
      <DetailSections />
      <LearnMore />
    </InfoSection>
  );
};

export default Content;
