import { create } from 'zustand';
import {
  Product,
  ProductCore,
  ProductId,
  ProductStore,
  ProductStoreState
} from './types';
import {
  fetchProductById as fetchProductByIdApi,
  fetchProducts as fetchProductsApi
} from '../api/productApi';

const initialState: ProductStoreState = {
  products: [],
  currentProduct: null,
  likedProductIds: new Set(),
  isLoading: false,
  error: null,
  filter: 'all',
  searchQuery: '',
  totalProducts: 0
};

export const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,

  fetchProducts: async () => {
    if (get().products.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const { products, total } = await fetchProductsApi();
      set({
        products,
        totalProducts: total
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Неизвестная ошибка при fetchProducts';
      set({ error: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchProductById: async (id: ProductId) => {
    set({ isLoading: true, error: null, currentProduct: null });
    const { products } = get();
    const productFromState = products.find(p => p.id === id);

    if (productFromState) {
      set({ currentProduct: productFromState, isLoading: false });
      return;
    }

    try {
      const product = await fetchProductByIdApi(id);
      set({ currentProduct: product });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Неизвестная ошибка при fetchProductById';
      set({ error: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },

  addProduct: (productData: ProductCore) => {
    set(state => {
      const newProduct: Product = {
        ...productData,
        id: Date.now() as ProductId,
        rating: 0,
        reviews: [],
        dimensions: { width: 0, height: 0, depth: 0 },
        meta: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          barcode: '',
          qrCode: ''
        }
      };

      return { products: [newProduct, ...state.products] };
    });
  },

  updateProduct: (updatedProduct: Product) => {
    set(state => ({
      products: state.products.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    }));
  },

  deleteProduct: (id: ProductId) => {
    set(state => ({
      products: state.products.filter(product => product.id !== id)
    }));
  },

  toggleLike: (id: ProductId) => {
    set(state => {
      const newLikedIds = new Set(state.likedProductIds);

      if (newLikedIds.has(id)) {
        newLikedIds.delete(id);
      } else {
        newLikedIds.add(id);
      }

      return { likedProductIds: newLikedIds };
    });
  },

  setFilter: filter => set({ filter }),
  setSearchQuery: query => set({ searchQuery: query })
}));
