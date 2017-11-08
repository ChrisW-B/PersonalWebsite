import styled from 'react-emotion';

export const SidenavItem = styled.li `
  font-family: 'Source Code Pro', monospace;
  max-width: 40rem;
  padding-top: 1rem;
  text-shadow: 0 0 0.4rem #6a6a6a;

  @media (min-width: 900px) {
    font-size: ${({ emphasis }) => (emphasis ? `3rem ` : `2.7rem`)};
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
  font-size: 2rem;
  padding-right: 0.3rem;

  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

export const Link = styled.a `
  color: #cfe3cf;
  text-decoration: none;
  text-shadow: none;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #8d4881;
  }
`;