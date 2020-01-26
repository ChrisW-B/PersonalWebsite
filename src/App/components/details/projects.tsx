import React from 'react';

import { useProjectsQuery } from '@queries/projects.generated';
import { ProjectList } from '@styles/projects';

import Project from './project';

export default () => {
  const { loading, data } = useProjectsQuery();

  if (loading) return null;
  const projects = data?.projects || [];

  return (
    <ProjectList>
      {projects.map(project => (
        <Project key={project.github} project={project} />
      ))}
    </ProjectList>
  );
};
