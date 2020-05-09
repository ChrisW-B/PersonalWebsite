import useMedia from './useMedia';

const usePrefersDarkMode = () => useMedia(['(prefers-color-scheme: dark)'], [true], false);
export default usePrefersDarkMode;
