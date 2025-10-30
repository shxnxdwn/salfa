import { useEffect } from 'react';
import { useProductStore } from '../store';

export const useProductLoader = () => {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  const isLoading = useProductStore(state => state.isLoading);
  const error = useProductStore(state => state.error);

  useEffect(() => {
    (async () => {
      try {
        await fetchProducts();
      } catch (err) {
        console.warn(
          'Не удалось выполнить fetchProducts в useProductLoader:',
          err
        );
      }
    })();
  }, [fetchProducts]);

  return { isLoading, error };
};
