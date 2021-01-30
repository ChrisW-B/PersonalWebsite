import * as React from 'react';

const isClient = typeof window === 'object';

const useMedia = <T = undefined>(queries: string[], values: T[], defaultValue: T) => {
  const mediaQueryLists = React.useMemo(
    () => (isClient ? queries.map((q) => window.matchMedia(q)) : []),
    [queries],
  );

  const getValue = React.useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);

    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  const [value, setValue] = React.useState(getValue);

  const handler = () => setValue(getValue);

  React.useEffect(() => {
    mediaQueryLists.map((mql) => mql.addEventListener('change', handler));
    return () => {
      mediaQueryLists.map((mql) => mql.removeEventListener('change', handler));
    };
  });

  return value;
};
export default useMedia;
