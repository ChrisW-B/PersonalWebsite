import * as React from 'react';
import Markdown from 'react-markdown';

import { ProjectFragment } from '@queries/projects.generated';
import { Link } from '@styles/details';
import {
  ProjectDescriptionPara,
  ProjectDetails,
  ProjectItem,
  ProjectScreenshot,
  ProjectTitle,
  Tech,
  TechList,
  TitleWrapper,
} from '@styles/projects';

interface OwnProps {
  project: ProjectFragment | null;
}

const Project: React.FC<OwnProps> = ({ project }) => (
  <ProjectItem>
    <div>
      <ProjectScreenshot
        imgUrl={project?.screenshots?.[0] ?? ''}
        href={project?.website ?? undefined}
        target='_blank'
        rel='noopener noreferrer'
      >
        <TitleWrapper>
          <ProjectTitle>{project?.name}</ProjectTitle>
        </TitleWrapper>
      </ProjectScreenshot>
      <ProjectDetails>
        <TechList>
          {project?.technologies?.map((tech) => (
            <Tech key={tech ?? undefined}>{tech}</Tech>
          ))}
        </TechList>
        <Markdown
          components={{
            p: (props) => <ProjectDescriptionPara {...props} />,
            a: (props) => <Link target='_blank' rel='noopener noreferrer' {...props} />,
          }}
        >
          {project?.description ?? ''}
        </Markdown>
        <p>
          <Link href={project?.github ?? undefined} target='_blank' rel='noopener noreferrer'>
            Github
          </Link>
        </p>
      </ProjectDetails>
    </div>
  </ProjectItem>
);
export default Project;
