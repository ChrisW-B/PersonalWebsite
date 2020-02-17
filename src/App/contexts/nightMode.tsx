import * as React from 'react';

import styled from '@emotion/styled';

import useLocalStorage from '@hooks/useLocalStorage';

export const NightModeContext = React.createContext<[boolean, () => void]>(null);

const NightModeStyles = styled.div<{ isLightMode: boolean }>`
  --cyan: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-cyan);
  --cyan-70: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-cyan-70);
  --dark: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-dark);
  --light-grey: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-light-grey);
  --light-grey-00: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-light-grey-00);
  --link-blue: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-link-blue);
  --rose: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-rose);
  --rose-50: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-rose-50);
  --white: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-white);
  --white-00: var(${props => (props.isLightMode ? '--light' : '--dark')}-mode-white-00);

  background-color: var(--white);
  color: var(--dark);
  transition: all 0.5s var(--bezier-transition);
`;

export const NightModeProvider: React.FC = ({ children }) => {
  const [isLightMode, setLightMode] = useLocalStorage('lightMode', true);
  const toggleMode = () => setLightMode(isLight => !isLight);
  return (
    <NightModeContext.Provider value={[isLightMode, toggleMode]}>
      <NightModeStyles isLightMode={isLightMode}>{children}</NightModeStyles>
    </NightModeContext.Provider>
  );
};
