import { useState, useEffect } from 'react';
import { useProductStore } from '@entities/Product';
import { useDebounce } from '@shared/hooks/useDebounce';

export const useProductSearch = () => {
  const initialQuery = useProductStore(state => state.searchQuery);
  const [value, setValue] = useState(initialQuery);
  const debouncedValue = useDebounce(value, 500);
  const setSearchQuery = useProductStore(state => state.setSearchQuery);

  useEffect(() => {
    setSearchQuery(debouncedValue);
  }, [debouncedValue, setSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    searchValue: value,
    handleSearchChange
  };
};
