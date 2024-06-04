import { useMemo } from 'react';
import { NYTResponse } from '@/interface/nyt';
import { useSearchArticlesQuery } from '@/lib/api/articleApi';

interface UseArticlesApiProps {
  debouncedSearchQuery: string;
  filterQuery: string;
  initialResponse: NYTResponse;
}

export const useArticlesApi = ({
  debouncedSearchQuery,
  filterQuery,
  initialResponse,
}: UseArticlesApiProps) => {
  const searchParams = useMemo(
    () => ({
      q: debouncedSearchQuery,
      fq: filterQuery,
    }),
    [debouncedSearchQuery, filterQuery]
  );

  const shouldSkip = useMemo(
    () => !debouncedSearchQuery && !filterQuery,
    [debouncedSearchQuery, filterQuery]
  );

  const { data, error, isFetching } = useSearchArticlesQuery(searchParams, {
    skip: shouldSkip,
  });
  const displayDocs = shouldSkip
    ? initialResponse.docs
    : data?.response.docs || [];
  const isLoaded = (!data?.response.docs && shouldSkip) || !isFetching;
  const errorMessage =
    typeof error === 'object' && 'message' in error ? error.message : '';

  return { displayDocs, errorMessage, isLoaded };
};
