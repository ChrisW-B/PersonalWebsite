import * as React from 'react';

const isClient = typeof window === 'object';

export default <T = undefined>(
  key: string,
  initialValue?: T,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = isClient ? window.localStorage.getItem(key) : initialValue.toString();
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: ((arg: T) => T) | T) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      throw new Error('No access to localstorage');
    }
  };

  return [storedValue, setValue];
};
