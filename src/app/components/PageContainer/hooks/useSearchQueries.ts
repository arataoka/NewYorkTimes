import { useState } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';

export const useSearchQueries = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);

  return {
    searchQuery,
    setSearchQuery,
    filterQuery,
    setFilterQuery,
    debouncedSearchQuery,
  };
};
