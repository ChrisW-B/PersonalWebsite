// react/components/Projects/Projects.js
import { PropTypes } from 'prop-types';
import GitHubLogo from 'react-icons/lib/io/social-github';
import Markdown from 'react-remarkable';
import React from 'react';
import { Link } from '../../../styles/Info';
import { ProjectsSection, ProjectItem, ProjectTitle, ProjectGithub } from '../../../styles/Projects';

const Projects = ({ data: { projects } }) => (
  <ProjectsSection>
    {
      projects.map(({ name, website, github, description }) =>
        (
          <ProjectItem key={name}>
            <ProjectTitle><Link href={website} title={name}>{name}</Link></ProjectTitle>
            <ProjectGithub><Link href={github} title={`${name} on Github`}><GitHubLogo /> Source</Link></ProjectGithub>
            <Markdown source={description} />
          </ProjectItem>
        )
      )
    }
  </ProjectsSection>
);
Projects.propTypes = { data: PropTypes.shape({ projects: PropTypes.array }) };
Projects.defaultProps = { data: { projects: [] } };

export default Projects;