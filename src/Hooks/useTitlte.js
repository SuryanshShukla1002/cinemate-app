import { useEffect } from 'react';

export const useTitlte = (title) => {
  useEffect(() => {
    document.title = ` ${title} / Cinemate`;
  });

  return null;
};
