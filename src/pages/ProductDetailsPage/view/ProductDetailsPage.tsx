import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductDetails } from '@entities/Product';
import { ProductDetails } from '@widgets/ProductDetails';
import { GoBackButton } from '@features/GoBackButton';
import { Spinner } from '@shared/view/Spinner';
import { Button } from '@shared/view/Button';
import styles from './ProductDetailsPage.module.css';
import { usePageConfig } from '@shared/view/PageLayout';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useProductDetails(id);

  const headerActions = useMemo(() => {
    if (!product) {
      return <GoBackButton />;
    }
    return (
      <>
        <Link to={`/products/${product.id}/edit`}>
          <Button variant="outline">Редактировать</Button>
        </Link>
        <GoBackButton />
      </>
    );
  }, [product]);

  usePageConfig({
    title: isLoading
      ? 'Загрузка...'
      : error || !product
        ? 'Ошибка'
        : product.title,
    headerActions
  });

  if (isLoading) {
    return (
      <div className={styles.centered}>
        <Spinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.notFound}>
        <h2>{error || 'Продукт не найден'}</h2>
        <GoBackButton />
      </div>
    );
  }

  return <ProductDetails product={product} />;
};
