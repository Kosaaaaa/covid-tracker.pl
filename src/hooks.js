import { useState, useEffect } from 'react';

export const useStateWithLocalStorage = (localStorageKey, defaultState = '') => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || defaultState
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue];
};