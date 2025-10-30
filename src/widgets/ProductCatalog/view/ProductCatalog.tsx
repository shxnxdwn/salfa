import styles from './ProductCatalog.module.css';
import { ProductList } from '@widgets/ProductList';
import { Spinner } from '@shared/view/Spinner';
import type { Product } from '@entities/Product';

type ProductCatalogProps = {
  isLoading: boolean;
  error: string | null;
  products: Product[];
};

export const ProductCatalog = (props: ProductCatalogProps) => {
  const { isLoading, error, products } = props;

  if (isLoading) {
    return (
      <div className={styles.centered}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.centered}>
        <p className={styles.errorText}>Ошибка при загрузке: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.centered}>
        <p>Продукты не найдены</p>
      </div>
    );
  }

  return <ProductList products={products} />;
};
