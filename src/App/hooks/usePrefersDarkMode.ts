import useMedia from './useMedia';

const usePrefersDarkMode = (): boolean => useMedia(['(prefers-color-scheme: dark)'], [true], false);
export default usePrefersDarkMode;
