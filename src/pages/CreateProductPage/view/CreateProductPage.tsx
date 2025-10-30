import { useMemo } from 'react';
import { ProductForm } from '@features/ProductForm';
import { GoBackButton } from '@features/GoBackButton';
import { usePageConfig } from '@shared/view/PageLayout';

export const CreateProductPage = () => {
  const headerActions = useMemo(() => <GoBackButton />, []);

  usePageConfig({
    title: 'Создание нового продукта',
    headerActions
  });

  return <ProductForm />;
};
