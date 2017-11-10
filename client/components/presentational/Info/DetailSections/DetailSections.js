import React from 'react';
import { DetailSectionList } from './';
import { DetailList, DetailListItem, SectionTitle } from './DetailSections.style';

const DetailSections = () => (
  <DetailList>
    {
      DetailSectionList.map(({ title, content }) =>
        (
          <DetailListItem key={title}>
            <SectionTitle>{title}</SectionTitle>
            {content}
          </DetailListItem>
        ))
    }
  </DetailList>
);

export default DetailSections;