import * as React from 'react';

import { Project } from '@schema/dataModel/personalApi.generated';
import { ProjectItem, ProjectScreenshot, ProjectTitle, TitleWrapper } from '@styles/projects';

interface OwnProps {
  project: {
    __typename?: 'Project';
  } & Pick<Project, 'technologies' | 'github' | 'website' | 'description' | 'name' | 'screenshots'>;
}

export default (({ project }) => (
  <ProjectItem>
    <ProjectScreenshot imgUrl={project.screenshots[0]}>
      <TitleWrapper>
        <ProjectTitle>{project.name}</ProjectTitle>
      </TitleWrapper>
    </ProjectScreenshot>

    <p>
      <a href={project.github}>Github</a>
    </p>
  </ProjectItem>
)) as React.FC<OwnProps>;
