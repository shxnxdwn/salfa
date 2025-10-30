import styles from './ProductCard.module.css';
import type { ReactNode } from 'react';
import type { Product } from '@entities/Product/model/types';

type ProductCardProps = {
  product: Product;
  children?: ReactNode;
};

export const ProductCard = (props: ProductCardProps) => {
  const { product, children } = props;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title} title={product.title}>
          {product.title}
        </h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
        </div>
      </div>
      {children}
    </article>
  );
};
