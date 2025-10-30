import { type ProductId, useProductStore } from '@entities/Product';

export const useDeleteProduct = () => {
  const deleteAction = useProductStore(state => state.deleteProduct);

  const deleteProduct = (id: number) => deleteAction(id as ProductId);

  return { deleteProduct };
};
