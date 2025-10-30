import { useMemo } from 'react';
import { useProductStore } from '../store';

export const useFilteredProducts = () => {
  const products = useProductStore(state => state.products);
  const likedProductIds = useProductStore(state => state.likedProductIds);
  const filter = useProductStore(state => state.filter);
  const searchQuery = useProductStore(state => state.searchQuery);

  return useMemo(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter === 'liked') {
      filtered = filtered.filter(product => likedProductIds.has(product.id));
    }

    return filtered;
  }, [products, filter, likedProductIds, searchQuery]);
};
