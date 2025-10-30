import { useMemo, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  useFilteredProducts,
  useProductLoader,
  PRODUCTS_PER_PAGE
} from '@entities/Product';
import { FilterProducts } from '@features/FilterProducts';
import { ProductSearch } from '@features/ProductSearch';
import { Pagination as PaginationControl } from '@features/Pagination';
import { ProductCatalog } from '@widgets/ProductCatalog';
import { Button } from '@shared/view/Button';
import { usePageConfig } from '@shared/view/PageLayout';

export const ProductListPage = () => {
  const { isLoading, error } = useProductLoader();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const filteredProducts = useFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = useCallback(
    (page: number) => {
      setSearchParams(prev => {
        prev.set('page', String(page));
        return prev;
      });
    },
    [setSearchParams]
  );

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const headerActions = useMemo(
    () => (
      <>
        <ProductSearch />
        <FilterProducts />
        <Link to="/create-product">
          <Button variant="primary">Создать</Button>
        </Link>
      </>
    ),
    []
  );

  usePageConfig({
    title: 'Каталог товаров',
    headerActions
  });

  return (
    <>
      <ProductCatalog
        isLoading={isLoading}
        error={error}
        products={paginatedProducts}
      />
      <PaginationControl
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
