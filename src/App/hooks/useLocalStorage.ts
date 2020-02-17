import * as React from 'react';

export default <T = undefined>(
  key: string,
  initialValue?: T,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
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
