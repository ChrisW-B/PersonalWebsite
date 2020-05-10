import { useCallback, useEffect, useState } from 'react';

const isClient = typeof window === 'object';

const useMedia = <T = undefined>(queries: string[], values: T[], defaultValue: T) => {
  const mediaQueryLists = isClient ? queries.map((q) => window.matchMedia(q)) : [];

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);

    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  const [value, setValue] = useState(getValue);

  const handler = () => setValue(getValue);

  useEffect(() => {
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  });

  return value;
};
export default useMedia;
