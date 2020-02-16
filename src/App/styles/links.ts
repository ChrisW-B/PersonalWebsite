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
  transition: all 0.5s var(--bezier-transition);
  ${AutoSeperator}
  @media screen and (max-width: 46rem) {
    font-size: 1.3rem;
  }
`;

export const Link = styled.a<{ bgColor: string }>`
  border-left: 0;
  border-right: 0;
  box-shadow: inset 0 -0.1rem 0 hsla(${({ bgColor }) => bgColor}, 60%);
  color: var(--link-blue);
  display: inline-block;
  position: relative;
  text-decoration: none;
  transition: all 0.5s var(--bezier-transition);

  :hover,
  :focus,
  :active {
    box-shadow: inset 0 -2rem 0 hsla(${({ bgColor }) => bgColor}, 40%);
  }
`;
