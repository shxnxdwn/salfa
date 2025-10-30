import { Button } from '@shared/view/Button';
import type { ProductFilter } from '@entities/Product';
import { useProductFilter } from '../model/useProductFilter';
import styles from './FilterProducts.module.css';

type FilterButton = {
  id: ProductFilter;
  label: string;
};

const filterButtons: FilterButton[] = [
  { id: 'all', label: 'Все' },
  { id: 'liked', label: 'Избранные' }
];

export const FilterProducts = () => {
  const { activeFilter, handleFilterChange } = useProductFilter();

  return (
    <div className={styles.filterGroup}>
      {filterButtons.map(({ id, label }) => (
        <Button
          key={id}
          variant={activeFilter === id ? 'primary' : 'outline'}
          onClick={() => handleFilterChange(id)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
