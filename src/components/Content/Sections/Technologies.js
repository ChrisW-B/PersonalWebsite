import React from 'react';
import { PropTypes } from 'prop-types';

import { SectionContentDIV, Skill, SkillList, SkillName, SkillType } from '@styles/Technologies';

const Technologies = ({ data: { skills = [] } }) => (
  <SectionContentDIV>
    {skills.map(({ category, types }) => (
      <SkillType key={category}>
        <SkillName>{category}</SkillName>
        <SkillList>
          {types.map(type => (
            <Skill key={type}>{type}</Skill>
          ))}
        </SkillList>
      </SkillType>
    ))}
  </SectionContentDIV>
);

Technologies.propTypes = { data: PropTypes.shape({ projects: PropTypes.array }) };
Technologies.defaultProps = { data: { projects: [] } };

export default Technologies;
