import * as React from 'react';

const isClient = typeof window === 'object';

type Nullable<T> = T | undefined;

const useLocalStorage = <T extends number | string | boolean | undefined>(
  key: string,
  initialValue?: Nullable<T>,
): [Nullable<T>, React.Dispatch<React.SetStateAction<Nullable<T>>>] => {
  const [storedValue, setStoredValue] = React.useState<Nullable<T>>(() => {
    try {
      const item = isClient ? window.localStorage.getItem(key) : (initialValue ?? '').toString();
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: ((arg: Nullable<T>) => Nullable<T>) | Nullable<T>) => {
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

export default useLocalStorage;
