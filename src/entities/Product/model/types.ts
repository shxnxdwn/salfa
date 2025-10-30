export type ProductId = number & { _type: 'ProductId' };

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type ProductCore = {
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  stock: number;
  thumbnail: string;
  images: string[];
};

export type ProductGenerated = {
  id: ProductId;
  rating: number;
  reviews: Review[];
  dimensions: Dimensions;
  meta: Meta;
};

export type Product = ProductCore & ProductGenerated;

export type ProductFilter = 'all' | 'liked';

export type ProductStoreState = {
  products: Product[];
  currentProduct: Product | null;
  likedProductIds: Set<ProductId>;
  isLoading: boolean;
  error: string | null;
  filter: ProductFilter;
  searchQuery: string;
  totalProducts: number;
};

export type ProductStoreActions = {
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: ProductId) => Promise<void>;
  addProduct: (productData: ProductCore) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (id: ProductId) => void;
  toggleLike: (id: ProductId) => void;
  setFilter: (filter: ProductFilter) => void;
  setSearchQuery: (query: string) => void;
};

export type ProductStore = ProductStoreState & ProductStoreActions;
