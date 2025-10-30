import { useEffect } from 'react';
import { useProductStore } from '../store';
import type { ProductId } from '../types';

export const useProductDetails = (id: string | undefined) => {
  const currentProduct = useProductStore(state => state.currentProduct);
  const isLoading = useProductStore(state => state.isLoading);
  const error = useProductStore(state => state.error);
  const fetchProductById = useProductStore(state => state.fetchProductById);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          await fetchProductById(Number(id) as ProductId);
        } catch (err) {
          console.warn(
            `Не удалось выполнить fetchProductById в useProductDetails с ID ${id}:`,
            err
          );
        }
      })();
    }
  }, [id, fetchProductById]);

  return { product: currentProduct, isLoading, error };
};
