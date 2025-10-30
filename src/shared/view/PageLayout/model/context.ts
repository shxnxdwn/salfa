import { createContext, type ReactNode } from 'react';

export type PageConfig = {
  title: ReactNode;
  headerActions?: ReactNode;
};

export type PageContextType = PageConfig & {
  setPage: (config: PageConfig) => void;
};

export const PageContext = createContext<PageContextType | null>(null);
