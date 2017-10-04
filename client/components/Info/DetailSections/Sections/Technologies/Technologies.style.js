import styled from 'react-emotion';

export { SectionContentDIV } from '../Sections.style';

export const SkillType = styled.div `
  align-items: baseline;
  border-bottom: 1px dashed #ddd;
  display: flex;
  flex-direction: row;

  &:last-child {
    border: 0;
  }
`;

export const SkillName = styled.h4 `
  margin: 0;
  min-width: 120px;
`;

export const SkillList = styled.ul `
  flex: 1 1 auto;
  margin: 0;
  padding: 5px 0;
`;

export const Skill = styled.li `
  display: inline-block;

  &::after {
    content: '•';
    padding: 0 0.5em;
  }
  &:last-child {
    &::after {
      content: '';
      padding: 0;
    }
  }
`;