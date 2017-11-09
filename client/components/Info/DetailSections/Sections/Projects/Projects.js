// react/components/Projects/Projects.js

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import GitHubLogo from 'react-icons/lib/io/social-github';
import { Link, ProjectsSection, ProjectItem, ProjectTitle, ProjectGithub, ProjectDetails } from './Projects.style';

const query = gql `
  {
    projects {
      name description github website technologies
    }
  }
`;

const Projects = ({ data: { projects } }) => (
  <ProjectsSection>
    {
      projects.map(({ name, website, github, description }) =>
        (
          <ProjectItem key={name}>
            <ProjectTitle><Link href={website} title={name}>{name}</Link></ProjectTitle>
            <ProjectGithub><Link href={github} title={`${name} on Github`}><GitHubLogo /> Source</Link></ProjectGithub>
            <ProjectDetails dangerouslySetInnerHTML={{ __html: description }} />
          </ProjectItem>
        )
      )
    }
  </ProjectsSection>
);
Projects.propTypes = { data: PropTypes.shape({ projects: PropTypes.array }) };
Projects.defaultProps = { data: { projects: [] } };

export default graphql(query)(Projects);