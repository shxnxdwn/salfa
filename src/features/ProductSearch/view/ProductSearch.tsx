import { Input } from '@shared/view/Input';
import { useProductSearch } from '../model/useProductSearch';
import styles from './ProductSearch.module.css';

export const ProductSearch = () => {
  const { searchValue, handleSearchChange } = useProductSearch();

  return (
    <div className={styles.searchWrapper}>
      <Input
        type="search"
        placeholder="Поиск"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};
