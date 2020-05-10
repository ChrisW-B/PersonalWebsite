import * as React from 'react';

import useLocalStorage from '@hooks/useLocalStorage';
import usePrefersDarkMode from '@hooks/usePrefersDarkMode';
import { NightModeStyles } from '@styles/global';

export const NightModeContext = React.createContext<[boolean, () => void] | null>(null);

export const NightModeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [isClient, setIsClient] = React.useState<boolean | null>(null);
  const [isLightMode, setLightMode] = useLocalStorage<boolean>('light-mode');

  const showLightTheme = typeof isLightMode !== 'undefined' ? isLightMode : !prefersDarkMode;
  const toggleMode = () => setLightMode((isLight) => !isLight);

  React.useEffect(() => {
    setIsClient(typeof window === 'object');
  }, []);

  return (
    <NightModeContext.Provider value={[showLightTheme, toggleMode]}>
      <NightModeStyles isClient={!!isClient} lightMode={showLightTheme}>
        {children}
      </NightModeStyles>
    </NightModeContext.Provider>
  );
};
