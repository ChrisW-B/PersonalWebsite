import React from 'react';
import { useQuery } from 'react-apollo';
import Markdown from 'react-remarkable';

import interestsQuery from '@queries/interestsQuery';

const Interests = () => {
  const { data, loading, error } = useQuery(interestsQuery);
  if (loading || error) return null;
  const { interests } = data;

  return <Markdown>{interests}</Markdown>;
};

export default Interests;
