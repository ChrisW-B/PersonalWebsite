import React from 'react';
import Skills from './Skills';
import { Skill, SkillList, SkillType, SkillName, SectionContentDIV } from './Technologies.style';

const Technologies = () => (
  <SectionContentDIV>
    {
      Skills.map(({ name, types }) => (
        <SkillType key={name}>
          <SkillName>{name}</SkillName>
          <SkillList>
            {
              types.map(type => (
                <Skill key={type}>{type}</Skill>
              ))
            }
          </SkillList>
        </SkillType>
      ))
    }
  </SectionContentDIV>
);

export default Technologies;