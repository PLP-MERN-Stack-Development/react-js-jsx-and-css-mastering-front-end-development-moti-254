import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      return saved ? JSON.parse(saved) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      console.error('Failed to write to localStorage', e);
    }
  }, [key, value]);

  return [value, setValue];
}
 