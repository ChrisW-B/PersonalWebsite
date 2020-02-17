import * as React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import useLocalStorage from '@hooks/useLocalStorage';
import usePrefersDarkMode from '@hooks/usePrefersDarkMode';

export const NightModeContext = React.createContext<[boolean, () => void]>(null);

const LightModeCSS = css`
  --cyan: var(--light-mode-cyan);
  --cyan-70: var(--light-mode-cyan-70);
  --dark: var(--light-mode-dark);
  --light-grey: var(--light-mode-light-grey);
  --light-grey-00: var(--light-mode-light-grey-00);
  --link-blue: var(--light-mode-link-blue);
  --rose: var(--light-mode-rose);
  --rose-50: var(--light-mode-rose-50);
  --white: var(--light-mode-white);
  --white-00: var(--light-mode-white-00);
`;

const DarkModeCSS = css`
  --cyan: var(--dark-mode-cyan);
  --cyan-70: var(--dark-mode-cyan-70);
  --dark: var(--dark-mode-dark);
  --light-grey: var(--dark-mode-light-grey);
  --light-grey-00: var(--dark-mode-light-grey-00);
  --link-blue: var(--dark-mode-link-blue);
  --rose: var(--dark-mode-rose);
  --rose-50: var(--dark-mode-rose-50);
  --white: var(--dark-mode-white);
  --white-00: var(--dark-mode-white-00);
`;

const NightModeStyles = styled.div<{ lightMode: boolean; isClient: boolean }>`
  ${props => (props.isClient ? (props.lightMode ? LightModeCSS : DarkModeCSS) : css``)};
  background-color: var(--white);
  color: var(--dark);
  transition: all 0.5s var(--bezier-transition);
`;

export const NightModeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [isClient, setIsClient] = React.useState(null);
  const [isLightMode, setLightMode] = useLocalStorage<boolean>('light-mode');

  const showLightTheme = typeof isLightMode !== 'undefined' ? isLightMode : !prefersDarkMode;
  const toggleMode = () => setLightMode(isLight => !isLight);

  React.useEffect(() => {
    setIsClient(typeof window === 'object');
  }, []);

  return (
    <NightModeContext.Provider value={[showLightTheme, toggleMode]}>
      <NightModeStyles isClient={isClient} lightMode={isLightMode}>
        {children}
      </NightModeStyles>
    </NightModeContext.Provider>
  );
};
