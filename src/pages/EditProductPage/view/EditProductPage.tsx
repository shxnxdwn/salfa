import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '@entities/Product';
import { ProductForm } from '@features/ProductForm';
import { GoBackButton } from '@features/GoBackButton';
import { Spinner } from '@shared/view/Spinner';
import styles from './EditProductPage.module.css';
import { usePageConfig } from '@shared/view/PageLayout';

export const EditProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useProductDetails(id);

  const headerActions = useMemo(() => <GoBackButton />, []);

  usePageConfig({
    title: isLoading
      ? 'Загрузка...'
      : error || !product
        ? 'Продукт не найден'
        : `Редактирование: ${product.title}`,
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

  return <ProductForm product={product} />;
};
