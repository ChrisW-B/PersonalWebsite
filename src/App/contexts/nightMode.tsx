import * as React from 'react';

import useLocalStorage from '@hooks/useLocalStorage';

export const NightModeContext = React.createContext<[boolean, () => void]>(null);

export const NightModeProvider: React.FC = ({ children }) => {
  const [isLightMode, setLightMode] = useLocalStorage('lightMode', true);
  const toggleMode = () => setLightMode(isLight => !isLight);
  return (
    <NightModeContext.Provider value={[isLightMode, toggleMode]}>
      {children}
    </NightModeContext.Provider>
  );
};
