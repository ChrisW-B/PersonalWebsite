import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import { Skill, SkillList, SkillType, SkillName, SectionContentDIV } from './Technologies.style';

const query = gql `
  {
    skills {
      category types
    }
  }
`;

const Technologies = ({ data: { skills } }) => (
  <SectionContentDIV>
    {
      skills.map(({ category, types }) => (
        <SkillType key={category}>
          <SkillName>{category}</SkillName>
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

Technologies.propTypes = { data: PropTypes.shape({ projects: PropTypes.array }) };
Technologies.defaultProps = { data: { projects: [] } };

export default graphql(query)(Technologies);