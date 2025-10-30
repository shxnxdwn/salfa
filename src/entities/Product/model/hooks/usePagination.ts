import { useMemo } from 'react';
import { PRODUCTS_PER_PAGE } from '../config';
import type { Product } from '../types';

export const usePagination = (items: Product[], currentPage: number) => {
  const totalPages = Math.ceil(items.length / PRODUCTS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;

    return items.slice(startIndex, endIndex);
  }, [items, currentPage]);

  return {
    paginatedItems,
    totalPages
  };
};
