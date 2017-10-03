import React from 'react';
import Skills from './Skills';
import { Skill, SkillList, SkillType, SkillName } from './Technologies.style';

const Technologies = () => (
  <div>
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
  </div>
);

export default Technologies;