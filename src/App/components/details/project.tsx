import * as React from 'react';

import { Project } from '@schema/dataModel/personalApi.generated';
import { ProjectItem } from '@styles/projects';

interface OwnProps {
  project: {
    __typename?: 'Project';
  } & Pick<Project, 'technologies' | 'github' | 'website' | 'description' | 'name'>;
}

export default (({ project }) => (
  <ProjectItem>
    <a href={project.github}>{project.name}</a>
  </ProjectItem>
)) as React.FC<OwnProps>;
