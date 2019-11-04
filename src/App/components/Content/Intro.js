// react/components/Intro/Intro.js
import React from 'react';
import { useQuery } from 'react-apollo';
import Markdown from 'react-remarkable';

import bioQuery from '@queries/bioQuery.gql';
import { HiMessage, InfoSubSection } from '@styles/Info';

const Intro = () => {
  const { data = { bio: null }, loading, error } = useQuery(bioQuery);
  if (loading || error) return null;
  const { bio } = data;
  return (
    <InfoSubSection>
      <HiMessage>Hi!</HiMessage>
      <Markdown source={bio} />
    </InfoSubSection>
  );
};

export default Intro;
