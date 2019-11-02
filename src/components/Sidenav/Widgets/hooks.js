import { useCallback, useEffect, useState } from 'react';

const useRotateInEntry = () => {
  const [items, updateList] = useState([]);
  useEffect(() => {
    if (items.length === 2) {
      updateList(oldList => [oldList.shift()]);
    }
  }, [items]);

  const rotateList = useCallback(newList => {
    console.log({ newList });
    const newItem = newList && newList.length > 0 ? newList[0] : null;
    updateList(oldList => (newItem ? [newItem, ...oldList] : oldList));
  }, []);
  return [items, rotateList];
};

// eslint-disable-next-line import/prefer-default-export
export { useRotateInEntry };
