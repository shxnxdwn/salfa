import { useEffect } from 'react';
import { usePage } from './usePage';
import { PageConfig } from '../context';

export const usePageConfig = (config: PageConfig) => {
  const { setPage } = usePage();
  const { title, headerActions } = config;

  useEffect(() => {
    setPage({ title, headerActions });
  }, [title, headerActions, setPage]);
};
