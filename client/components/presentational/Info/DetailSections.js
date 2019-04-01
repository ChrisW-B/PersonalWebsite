// client/components/presentational/Info/DetailSections.js
import React from 'react';
import { DetailList, DetailListItem, SectionTitle } from '../../styles/DetailSections';
import { ExperienceContainer, InterestsContainer, ProjectsContainer, TechnologiesContainer } from '../../containers';

const DetailSectionList = [
  { title: `Interests`, content: <InterestsContainer /> },
  { title: `Projects`, content: <ProjectsContainer /> },
  { title: `Tech`, content: <TechnologiesContainer /> },
  { title: `Experience`, content: <ExperienceContainer /> }
];
const DetailSections = () => (
  <DetailList>
    {DetailSectionList.map(({ title, content }) => (
      <DetailListItem key={title}>
        <SectionTitle>{title}</SectionTitle>
        {content}
      </DetailListItem>
    ))}
  </DetailList>
);

export default DetailSections;
