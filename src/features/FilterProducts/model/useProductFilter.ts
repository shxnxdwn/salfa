import { useSearchParams } from 'react-router-dom';
import { useProductStore, type ProductFilter } from '@entities/Product';

export const useProductFilter = () => {
  const activeFilter = useProductStore(state => state.filter);
  const setFilter = useProductStore(state => state.setFilter);
  const [, setSearchParams] = useSearchParams();

  const handleFilterChange = (filter: ProductFilter) => {
    setFilter(filter);
    setSearchParams(prev => {
      prev.set('page', '1');
      return prev;
    });
  };

  return {
    activeFilter,
    handleFilterChange
  };
};
