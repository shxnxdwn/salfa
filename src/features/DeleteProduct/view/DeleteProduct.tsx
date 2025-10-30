import styles from './DeleteProduct.module.css';
import React from 'react';
import { Button } from '@shared/view/Button';
import { Icon } from '@shared/view/Icon';
import { useDeleteProduct } from '../model/useDeleteProduct';

type DeleteProductProps = {
  productId: number;
};

export const DeleteProduct = (props: DeleteProductProps) => {
  const { productId } = props;
  const { deleteProduct } = useDeleteProduct();

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteProduct(productId);
  };

  return (
    <Button
      variant="ghost"
      className={styles.actionButton}
      onClick={handleDelete}
      aria-label="Удалить продукт"
    >
      <Icon name="trash" className={styles.icon} />
    </Button>
  );
};
