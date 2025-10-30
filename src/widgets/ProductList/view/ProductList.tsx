import styles from './ProductList.module.css';
import { Link } from 'react-router-dom';
import { type Product, ProductCard } from '@entities/Product';
import { ToggleLike } from '@features/ToggleLike';
import { DeleteProduct } from '@features/DeleteProduct';

type ProductListProps = {
  products: Product[];
};

export const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <div className={styles.list}>
      {products.map(product => (
        <ProductCard key={product.id} product={product}>
          <Link to={`/products/${product.id}`} className={styles.overlayLink} />
          <div className={styles.buttonsGroup}>
            <ToggleLike productId={product.id} />
            <DeleteProduct productId={product.id} />
          </div>
        </ProductCard>
      ))}
    </div>
  );
};
