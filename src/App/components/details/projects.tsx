import React from 'react';

import { useProjectsQuery } from '@schema/queries/projects.generated';

export default () => {
  const { loading, data } = useProjectsQuery();

  if (loading) return null;
  const projects = data?.projects || [];

  return (
    <ul>
      {projects.map(project => (
        <li key={project.github}>{project.name}</li>
      ))}
    </ul>
  );
};
