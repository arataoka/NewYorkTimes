'use client';
import {
  Box,
  Container,
  Flex,
  Heading,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MemorizedArticleList } from '@/app/components/ArticleList';
import { MemorizedFilterTagList } from '@/app/components/FilterTagList';
import { useArticlesApi } from '@/app/components/PageContainer/hooks/useArticlesApi';
import { useSearchQueries } from '@/app/components/PageContainer/hooks/useSearchQueries';
import { MemorizedSearchBar } from '@/components/SearchBar';
import { NYTResponse } from '@/interface/nyt';

interface PageContainerProps {
  response: NYTResponse;
}

const PageContainer: React.FC<PageContainerProps> = ({ response }) => {
  const {
    searchQuery,
    setSearchQuery,
    filterQuery,
    setFilterQuery,
    debouncedSearchQuery,
  } = useSearchQueries();
  const { displayDocs, errorMessage, isLoaded } = useArticlesApi({
    debouncedSearchQuery,
    filterQuery,
    initialResponse: response,
  });
  return (
    <Container maxW="4xl" py={5}>
      <Heading textAlign="center">The New York Times</Heading>
      <Flex overflowX="scroll" flexWrap="wrap" justifyContent="center">
        <MemorizedFilterTagList
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />
      </Flex>
      <Box my={5}>
        <MemorizedSearchBar
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </Box>
      {errorMessage ? (
        <Text color="red">{errorMessage}</Text>
      ) : (
        <Box>
          <Skeleton isLoaded={isLoaded} fitContent minHeight="300px" mb={5}>
            <MemorizedArticleList docs={displayDocs} />
          </Skeleton>
        </Box>
      )}
    </Container>
  );
};

export const MemorizedPageContainer = React.memo(PageContainer);
