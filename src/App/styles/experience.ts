import { css } from '@emotion/core';
import styled from '@emotion/styled';

import rowToColor from '@utils/gradientToHSL';

export const ExperienceGrid = styled.div`
  display: grid;
  grid-gap: 1.2rem 6rem;
  grid-template: auto / [left-start] 1fr [left-end right-start] 1fr [right-end];
  justify-items: center;
`;

export const CompanyName = styled.h3`
  font-family: 'IBM Plex Serif', serif;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

// const LeftBullet = css`
//   right: -3.5rem;
// `;
// const RightBullet = css`
//   left: -3.5rem;
// `;
const LeftBorder = css`
  border-right-width: 0.2rem;
  right: -3.1rem;
`;
const RightBorder = css`
  border-left-width: 0.2rem;
  left: -3.1rem;
`;

const toGridRowString = (rowStart: number, rowEnd: number) => `${rowStart} / ${rowEnd}`;

export const JobItem = styled.div<{
  ColumnSide: 'left' | 'right';
  RowNumber: number;
  TotalRows: number;
}>`
  grid-column: ${props =>
    props.ColumnSide === 'left' ? 'left-start / left-end' : 'right-start / right-end'};
  grid-row: ${props => toGridRowString(props.RowNumber + 1, props.RowNumber + 3)};
  position: relative;

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
    width: 2.7rem;
  }

  &:last-of-type {
    &::before {
      border-color: #f9fcfc;
      border-top-color: hsl(${props => rowToColor(props.RowNumber, props.TotalRows)});
    }
  }
`;

export const JobDescription = styled.p`
  font-size: 1.3rem;
`;
