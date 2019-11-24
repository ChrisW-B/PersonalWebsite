import styled from '@emotion/styled';

export const BannerWrapper = styled.div<{ mini: boolean }>`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: ${({ mini }) => (mini ? '5rem' : '100vh')};
  justify-content: center;
  position: ${({ mini }) => (mini ? 'absolute' : 'relative')};
  top: 0;
`;

export const PageGrid = styled.div`
  display: grid;
  grid-template: 100vh 0.1rem max-content / auto;
  overflow: auto;
`;
