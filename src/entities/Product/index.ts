export { useProductStore } from './model/store';
export { useProductLoader } from './model/hooks/useProductLoader';
export { useProductDetails } from './model/hooks/useProductDetails';
export { useFilteredProducts } from './model/hooks/useFilteredProducts';
export { usePagination } from './model/hooks/usePagination';
export { ProductCard } from './view/ProductCard';
export { PRODUCTS_PER_PAGE } from './model/config';

export type {
  Product,
  ProductId,
  ProductCore,
  ProductFilter
} from './model/types';
