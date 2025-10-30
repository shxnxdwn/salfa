import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  type Product,
  type ProductCore,
  useProductStore
} from '@entities/Product';

type ProductFormData = Pick<
  ProductCore,
  'title' | 'description' | 'price' | 'brand'
>;

export const useProductForm = (product?: Product) => {
  const navigate = useNavigate();
  const addProduct = useProductStore(state => state.addProduct);
  const updateProduct = useProductStore(state => state.updateProduct);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProductFormData>({
    defaultValues: {
      title: product?.title ?? '',
      description: product?.description ?? '',
      price: product?.price ?? 0,
      brand: product?.brand ?? ''
    }
  });

  const onSubmit: SubmitHandler<ProductFormData> = formData => {
    const productData: ProductCore = {
      ...formData,
      category: product?.category ?? 'uncategorized',
      stock: product?.stock ?? 50,
      thumbnail:
        product?.thumbnail ??
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: product?.images ?? [
        'https://i.dummyjson.com/data/products/1/1.jpg'
      ]
    };

    if (product) {
      updateProduct({ ...product, ...productData });
    } else {
      addProduct(productData);
    }
    navigate('/products');
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting
  };
};
