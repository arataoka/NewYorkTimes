'use client';
import { Container, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ArticleList } from '@/app/components/ArticleList';
import { SearchBar } from '@/components/SearchBar';
import { TagButton } from '@/components/TagButton';
import { NYTResponse } from '@/interface/nyt';
import { useSearchArticlesQuery } from '@/lib/api/articleApi';

const TAG_LIST = ['sports', 'news', 'japan'];

interface PageContainerProps {
  response: NYTResponse;
}

const PageContainer: React.FC<PageContainerProps> = ({ response }) => {
  const [searchQuery, setSearchQuery] = useState({ q: '' });
  const [filterQuery, setFilterQuery] = useState({ fq: '' });
  const { data, error } = useSearchArticlesQuery(
    { ...searchQuery, ...filterQuery },
    {
      skip: Boolean(!searchQuery && !filterQuery),
    }
  );
  // const router = useRouter();
  // NOTE: next/navigation では shallow routingができない
  // const params = Object.fromEntries(useSearchParams().entries());
  // const pathname = usePathname();
  // useEffect(() => {
  //   const updatedQuery = {
  //     ...params,
  //     ...(searchQuery.q && { q: searchQuery.q }),
  //     ...(filterQuery.fq && { fq: filterQuery.fq }),
  //   };
  // const queryString = new URLSearchParams(updatedQuery).toString();
  // router.push(`${pathname}?${queryString}`);
  // }, [searchQuery, filterQuery]);

  const displayDocs = data?.response.docs ?? response.docs;
  // NOTE isLoadingが常にfalseになる
  // console.log(isLoading);
  return (
    <Container maxW="4xl" py={5}>
      <Heading textAlign="center">The New York Times</Heading>
      <div>
        {TAG_LIST.map((label) => (
          <TagButton
            key={label}
            label={label}
            selected={label === filterQuery.fq}
            onClick={() => setFilterQuery({ fq: `${label}` })}
          />
        ))}
      </div>
      <div>
        <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </div>
      {displayDocs && <ArticleList docs={displayDocs} />}
      {error && JSON.stringify(error)}
    </Container>
  );
};

export default PageContainer;
