import { PropTypes } from 'prop-types';
import React from 'react';
import { Skill, SkillList, SkillType, SkillName, SectionContentDIV } from '../../../styles/Technologies';

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
