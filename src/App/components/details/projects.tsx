import React from 'react';

import { useProjectsQuery } from '@queries/projects.generated';
import { ProjectList } from '@styles/projects';

import Project from './project';

const Projects: React.FC = () => {
  const { loading, data } = useProjectsQuery();

  if (loading) return null;
  const projects = data?.projects || [];

  return (
    <ProjectList>
      {projects.map((project) => (
        <Project key={project?.github || undefined} project={project} />
      ))}
    </ProjectList>
  );
};

export default Projects;
