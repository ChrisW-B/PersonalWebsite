import * as React from 'react';

import { ProjectFragment } from '@schema/fragments/__generated__/project.generated';
import { ProjectItem, ProjectScreenshot, ProjectTitle, TitleWrapper } from '@styles/projects';

interface OwnProps {
  project: ProjectFragment | null;
}

const Project: React.FC<OwnProps> = ({ project }) => (
  <ProjectItem>
    <div>
      <ProjectScreenshot imgUrl={project?.screenshots?.[0] || ''}>
        <TitleWrapper>
          <ProjectTitle>{project?.name}</ProjectTitle>
        </TitleWrapper>
      </ProjectScreenshot>

      <p>
        <a href={project?.github || undefined}>Github</a>
      </p>
    </div>
  </ProjectItem>
);
export default Project;
