import { css } from '@emotion/core';
import styled from '@emotion/styled';

import rowToColor from '@utils/gradientToHSL';

export const ExperienceGrid = styled.div`
  display: grid;
  grid-gap: 3rem 6rem;
  grid-template: auto / [left-start] 1fr [left-end right-start] 1fr [right-end];
  justify-items: center;
  margin: 0 0 5rem;
`;

export const CompanyName = styled.h3`
  font-family: var(--font-family-header);
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

export const JobItem = styled.div<{
  ColumnSide: 'left' | 'right';
  RowNumber: number;
  TotalRows: number;
}>`
  grid-column: ${(props) =>
    props.ColumnSide === 'left' ? 'left-start / left-end' : 'right-start / right-end'};
  grid-row: ${(props) => toGridRowString(props.RowNumber + 1, props.RowNumber + 3)};
  position: relative;

  &::before {
    border-color: hsl(${(props) => rowToColor(props.RowNumber, props.TotalRows)});
    border-style: solid;
    border-width: 0;
    border-top-width: 0.2rem;
    ${(props) => (props.ColumnSide === 'left' ? LeftBorder : RightBorder)};
    content: '';
    height: 100%;
    position: absolute;
    top: 1.25rem;
    width: 1.5rem;
  }

  &:last-of-type {
    &::before {
      border-color: var(--light-grey);
      border-top-color: hsl(${(props) => rowToColor(props.RowNumber, props.TotalRows)});
    }
  }
`;

export const JobDescription = styled.p`
  font-size: var(--description-text);
`;
