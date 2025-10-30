import { useContext } from 'react';
import { PageContext, PageContextType } from '../context';

export const usePage = (): PageContextType => {
  const context = useContext(PageContext);

  if (!context) throw new Error('Нет context в usePage');

  return context;
};
