import styled from 'emotion/react';

export const SidenavItem = styled.li `
  font-family: 'Source Code Pro', monospace;
  max-width: 400px;
  overflow: hidden;
  padding-top: 10px;
  text-shadow: 0 0 4px #6a6a6a;
  transition: opacity 0.3s ease-in-out;

  & > a {
    white-space: nowrap;
  }

  @media (min-width: 900px) {
    font-size: ${({ emphasis }) => (emphasis ? '1.5em' : '1em')};
  }

  @media only screen and (max-width: 640px) {
    display: inline;

    &:not(:last-child) {
      &:not(:first-child) {
        &::after {
          content: ' / ';
        }
      }
    }
  }
`;

export const Icon = styled.span `
  font-size: 1em;
  padding-right: 0.3em;

  @media only screen and (min-width: 640px) {
    display: none;
  }
`;