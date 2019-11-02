import styled from '@emotion/styled';

import { InfoSubSection } from './Info';

export const DetailList = styled(InfoSubSection.withComponent('ul'))`
  list-style: none;
`;
export const DetailListItem = styled.li`
  border-top: 0.1rem dashed rgba(148, 174, 229, 0.25);
  display: grid;
  grid-gap: 1rem 0;
  grid-template-columns: 15rem auto;
  grid-template-rows: 1fr;
  list-style: none;
  padding-top: 1rem;

  code {
    background-color: rgba(27, 31, 35, 0.05);
    border: 1px solid #e1e1e8;
    border-radius: 3px;
    color: #d72b3f;
    font-family: 'Operator Mono', Consolas, monaco, 'Ubuntu Mono', courier, monospace;
    font-size: 85%;
    margin: 0;
    padding-bottom: 0.2em;
    padding-top: 0.2em;

    &::before,
    &::after {
      content: '\00a0';
      letter-spacing: -0.2rem;
    }
  }

  a {
    border-bottom: 0.1rem dotted #cfe3cf;
    color: #8d4881;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #cfe3cf;
    }
  }

  & > div {
    &:last-child {
      grid-area: 2 / 5 / 1 / 3;
      & span {
        margin: 0;
        & p {
          margin: 0;
        }
      }

      @media (max-width: 1000px) {
        grid-row: 2 / 3;
      }
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.8rem 1fr;
  }
`;

export const SectionTitle = styled.h2`
  color: rgba(0, 195, 216, 1);
  margin: 0;
  margin-top: -0.1rem;
  text-decoration: underline rgba(186, 39, 66, 1) dotted;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    grid-column: 1 / 5;
    text-align: center;
  }
`;
