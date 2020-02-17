import { css } from '@emotion/core';
import styled from '@emotion/styled';

import rowToColor from '@utils/gradientToHSL';

export const ExperienceGrid = styled.div`
  display: grid;
  grid-gap: 1.2rem 6rem;
  grid-template: auto / [left-start] 1fr [left-end right-start] 1fr [right-end];
  justify-items: center;

  @media screen and (max-width: 74rem) {
    grid-gap: 0;
    grid-template: auto / [left-start right-start] 1fr [left-end right-end];
  }
`;

export const CompanyName = styled.h3`
  font-family: 'IBM Plex Serif', serif;
  font-size: var(--subhead-text);
  margin: 0;
  padding: 0;
`;

const LeftBorder = css`
  border-right-width: 0.2rem;
  right: -3.1rem;
`;
const RightBorder = css`
  border-left-width: 0.2rem;
  left: -3.1rem;
`;

const toGridRowString = (rowStart: number, rowEnd: number) => `${rowStart} / ${rowEnd}`;

interface JobItemProps {
  ColumnSide: 'left' | 'right';
  RowNumber: number;
  TotalRows: number;
}

export const JobItem = styled.div<JobItemProps>`
  grid-column: ${props =>
    props.ColumnSide === 'left' ? 'left-start / left-end' : 'right-start / right-end'};
  grid-row: ${props => toGridRowString(props.RowNumber + 1, props.RowNumber + 3)};
  position: relative;

  @media screen and (max-width: 74rem) {
    grid-row: span 1;
  }

  &::before {
    border-color: hsl(${props => rowToColor(props.RowNumber, props.TotalRows)});
    border-style: solid;
    border-width: 0;
    border-top-width: 0.2rem;
    ${props => (props.ColumnSide === 'left' ? LeftBorder : RightBorder)};
    content: '';
    height: 100%;
    position: absolute;
    top: 1.25rem;
    width: 1.5rem;

    @media screen and (max-width: 74rem) {
      border-left-width: 0.2rem;
      border-right-width: 0;
      left: -1.5rem;
      width: 1rem;
    }
  }

  &:last-of-type {
    &::before {
      border-color: var(--light-grey);
      border-top-color: hsl(${props => rowToColor(props.RowNumber, props.TotalRows)});
    }
  }
`;

export const JobDescription = styled.p`
  font-size: var(--description-text);
`;
