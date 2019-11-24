import styled from '@emotion/styled';

import { AutoSeperator } from './css';

export const LinkList = styled.ul<{ mini: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  font-size: ${({ mini }) => (mini ? 1.3 : 2)}rem;
  font-weight: 500;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  ${AutoSeperator}
`;

export const Link = styled.a<{ bgColor: string }>`
  border-left: 0;
  border-right: 0;
  box-shadow: inset 0 -0.07rem 0 #${({ bgColor }) => bgColor}b2;
  color: #2f4351;
  display: inline-block;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus,
  :active {
    box-shadow: inset 0 -2rem 0 #${({ bgColor }) => bgColor}4d;
  }
`;
