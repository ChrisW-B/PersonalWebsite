import React from 'react';
import { ExperienceContainer, InterestsContainer, ProjectsContainer, TechnologiesContainer } from '../../../containers';

export default [
  { title: `Interests`, content: <InterestsContainer /> },
  { title: `Projects`, content: <ProjectsContainer /> },
  { title: `Tech`, content: <TechnologiesContainer /> },
  { title: `Experience`, content: <ExperienceContainer /> }
];