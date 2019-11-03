import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';

import technologiesQuery from '@queries/technologiesQuery.gql';
import { SectionContentDIV, Skill, SkillList, SkillName, SkillType } from '@styles/Technologies';

const Technologies = () => {
  const { data, loading, error } = useQuery(technologiesQuery);
  if (loading || error) return null;
  const { skills = [] } = data;
  return (
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
};

Technologies.propTypes = { data: PropTypes.shape({ skills: PropTypes.array }) };
Technologies.defaultProps = { data: { skills: [] } };

export default Technologies;
