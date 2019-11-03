import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';
import { IoLogoGithub } from 'react-icons/io';
import Markdown from 'react-remarkable';

import projectsQuery from '@queries/projectsQuery';
import { Link } from '@styles/Info';
import { ProjectGithub, ProjectItem, ProjectTitle, ProjectsSection } from '@styles/Projects';

const Projects = () => {
  const { data, loading, error } = useQuery(projectsQuery);
  if (loading || error) return null;
  const { projects = [] } = data;

  return (
    <ProjectsSection>
      {projects.map(({ name, website, github, description }) => (
        <ProjectItem key={name}>
          <ProjectTitle>
            <Link href={website} title={name}>
              {name}
            </Link>
          </ProjectTitle>
          <ProjectGithub>
            <Link href={github} title={`${name} on Github`}>
              <IoLogoGithub />
              Source
            </Link>
          </ProjectGithub>
          <Markdown source={description} />
        </ProjectItem>
      ))}
    </ProjectsSection>
  );
};
Projects.propTypes = { data: PropTypes.shape({ projects: PropTypes.array }) };
Projects.defaultProps = { data: { projects: [] } };

export default Projects;
