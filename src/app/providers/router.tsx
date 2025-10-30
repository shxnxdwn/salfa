import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { ProductDetailsPage } from '@pages/ProductDetailsPage';
import { CreateProductPage } from '@pages/CreateProductPage';
import { EditProductPage } from '@pages/EditProductPage';
import { PageLayout } from '@shared/view/PageLayout';
import { ProductListPage } from '@pages/ProductListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />
      },
      {
        path: 'products',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ProductListPage />
          },
          {
            path: ':id',
            element: <ProductDetailsPage />
          },
          {
            path: ':id/edit',
            element: <EditProductPage />
          }
        ]
      },
      {
        path: 'create-product',
        element: <CreateProductPage />
      }
    ]
  }
]);
