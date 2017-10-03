import styled from 'react-emotion';

import { InfoSubSection, Link } from '../Info.style';

export const LearnMoreSection = styled(InfoSubSection)`
  text-align: center;

  @media only screen and (max-width: 640px) {
    margin: 0 auto;
    width: 275px;
  }
`;

export { Link };