import styles from './ProductForm.module.css';
import type { Product } from '@entities/Product';
import { Button } from '@shared/view/Button';
import { useProductForm } from '../model/useProductForm';
import { FormField } from './FormField';

type ProductFormProps = {
  product?: Product;
};

export const ProductForm = (props: ProductFormProps) => {
  const { product } = props;
  const { register, handleSubmit, errors, isSubmitting } =
    useProductForm(product);

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <FormField
        label="Название"
        error={errors.title}
        registration={register('title', {
          required: 'Название обязательно'
        })}
      />
      <FormField
        label="Описание"
        as="textarea"
        error={errors.description}
        registration={register('description', {
          required: 'Описание обязательно'
        })}
      />
      <FormField
        label="Цена"
        type="number"
        error={errors.price}
        registration={register('price', {
          required: 'Цена обязательна',
          valueAsNumber: true,
          min: {
            value: 0.01,
            message: 'Цена должна быть больше нуля'
          }
        })}
      />
      <FormField
        label="Бренд"
        error={errors.brand}
        registration={register('brand', {
          required: 'Бренд обязателен'
        })}
      />
      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {product ? 'Сохранить' : 'Создать'}
      </Button>
    </form>
  );
};
