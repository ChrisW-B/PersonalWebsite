import styled from 'react-emotion';

import { InfoSubSection, Link } from '../Info.style';

export const LearnMoreSection = styled(InfoSubSection)`
  min-height: 200px;
  text-align: center;

  @media only screen and (max-width: 640px) {
    margin: 0 auto;
    width: 275px;
  }
`;

export { Link };