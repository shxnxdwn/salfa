import styles from './ProductDetails.module.css';
import type { Product } from '@entities/Product';

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = (props: ProductDetailsProps) => {
  const { product } = props;

  return (
    <article className={styles.details}>
      <figure className={styles.imageWrapper}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </figure>
      <div className={styles.info}>
        <p className={styles.description}>{product.description}</p>
        <dl className={styles.specs}>
          <div className={styles.specItem}>
            <dt>Рейтинг</dt>
            <dd>{product.rating} / 5</dd>
          </div>
          <div className={styles.specItem}>
            <dt>Бренд</dt>
            <dd>{product.brand}</dd>
          </div>
          <div className={styles.specItem}>
            <dt>В наличии</dt>
            <dd>{product.stock} шт.</dd>
          </div>
        </dl>
        <p className={styles.price}>${product.price}</p>
      </div>
    </article>
  );
};
