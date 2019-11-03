import React from 'react';

import Experience from '@components/Content/Sections/Experience';
import Interests from '@components/Content/Sections/Interests';
import Projects from '@components/Content/Sections/Projects';
import Technologies from '@components/Content/Sections/Technologies';
import { DetailList, DetailListItem, SectionTitle } from '@styles/DetailSections';

const DetailSections = () => (
  <DetailList>
    <DetailListItem key='interests'>
      <SectionTitle>Interests</SectionTitle>
      <Interests />
    </DetailListItem>
    <DetailListItem key='Projects'>
      <SectionTitle>Projects</SectionTitle>
      <Projects />
    </DetailListItem>
    <DetailListItem key='Tec'>
      <SectionTitle>Tech</SectionTitle>
      <Technologies />
    </DetailListItem>
    <DetailListItem key='Experience'>
      <SectionTitle>Experience</SectionTitle>
      <Experience />
    </DetailListItem>
  </DetailList>
);

export default DetailSections;
