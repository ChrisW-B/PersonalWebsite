import styled from 'react-emotion';

export const SidenavItem = styled.li `
  font-family: 'Source Code Pro', monospace;
  max-width: 400px;
  padding-top: 10px;
  text-shadow: 0 0 4px #6a6a6a;

  @media (min-width: 900px) {
    font-size: ${({ emphasis }) => (emphasis ? `1.3em ` : `1em`)};
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