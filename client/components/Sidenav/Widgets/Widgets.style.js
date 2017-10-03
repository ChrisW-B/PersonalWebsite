import styled from 'react-emotion';
import { Link } from '../SidenavLink/SidenavLink.style';

export const Widget = styled.div `
  color: #fff;
  padding-left: 10px;
  text-align: left;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Time = styled.div `
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.4em;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Description = styled.div `
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.55em;

  & > a {
    color: #cfe3cf;
    text-decoration: none;
    transition: 0.2s;
    white-space: nowrap;

    &:hover {
      color: #8d4881;
    }
  }
`;

export { Link };