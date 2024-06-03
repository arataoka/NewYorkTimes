'use client';
import { Box, Container, Heading, Skeleton, Text } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { MemorizedArticleList } from '@/app/components/ArticleList';
import { MemorizedFilterTagList } from '@/app/components/FilterTagList';
import { MemorizedSearchBar } from '@/components/SearchBar';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { NYTResponse } from '@/interface/nyt';
import { useSearchArticlesQuery } from '@/lib/api/articleApi';

interface PageContainerProps {
  response: NYTResponse;
}

const PageContainer: React.FC<PageContainerProps> = ({ response }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);
  const debouncedFilterQuery = useDebouncedValue(filterQuery, 300);

  const searchParams = useMemo(
    () => ({
      q: debouncedSearchQuery,
      fq: debouncedFilterQuery,
    }),
    [debouncedSearchQuery, debouncedFilterQuery]
  );

  const shouldSkip = useMemo(
    () => !debouncedSearchQuery && !debouncedFilterQuery,
    [debouncedSearchQuery, debouncedFilterQuery]
  );

  const { data, error, isFetching } = useSearchArticlesQuery(searchParams, {
    skip: shouldSkip,
  });
  const displayDocs = data?.response.docs ?? response.docs;
  const isLoaded = !data?.response.docs || !isFetching || !error;
  return (
    <Container maxW="4xl" py={5}>
      <Heading textAlign="center">The New York Times</Heading>
      <MemorizedFilterTagList
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
      />
      <Box>
        <MemorizedSearchBar
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </Box>
      {typeof error === 'object' && 'message' in error ? (
        <Text color="red">{error.message}</Text>
      ) : (
        <Box>
          <Skeleton isLoaded={isLoaded} h="300px" mb={5}>
            <MemorizedArticleList docs={displayDocs} />
          </Skeleton>
          <Skeleton isLoaded={isLoaded} h="100px" mb={5} />
          <Skeleton isLoaded={isLoaded} h="100px" />
        </Box>
      )}
    </Container>
  );
};

export const MemorizedPageContainer = React.memo(PageContainer);
