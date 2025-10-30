import { apiInstance } from '@shared/api/base';
import type { Product, ProductId } from '../model/types';

export type FetchProductsResponse = {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
};

export const fetchProducts = (): Promise<FetchProductsResponse> =>
  apiInstance('products');

export const fetchProductById = (id: ProductId): Promise<Product> =>
  apiInstance(`products/${id}`);
