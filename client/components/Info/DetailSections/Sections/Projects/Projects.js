// react/components/Projects/Projects.js

import React from 'react';
import GitHubLogo from 'react-icons/lib/io/social-github';
import { Link, ProjectsSection, ProjectItem, ProjectTitle, ProjectGithub, ProjectDetails } from './Projects.style';

import ProjectList from './ProjectList';

const Projects = () => (
  <ProjectsSection>
    {
      ProjectList.map(({ name, url, github, description }) =>
        (
          <ProjectItem key={name}>
            <ProjectTitle><Link href={url} title={name}>{name}</Link></ProjectTitle>
            <ProjectGithub><Link href={github} title={`${name} on Github`}><GitHubLogo /> Source</Link></ProjectGithub>
            <ProjectDetails>{description}</ProjectDetails>
          </ProjectItem>
        )
      )
    }
  </ProjectsSection>
);

export default Projects;