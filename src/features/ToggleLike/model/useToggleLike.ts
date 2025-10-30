import { type ProductId, useProductStore } from '@entities/Product';

export const useToggleLike = (productId: number) => {
  const isLiked = useProductStore(state =>
    state.likedProductIds.has(productId as ProductId)
  );
  const toggleLikeAction = useProductStore(state => state.toggleLike);

  const handleToggleLike = () => toggleLikeAction(productId as ProductId);

  return {
    isLiked,
    handleToggleLike
  };
};
