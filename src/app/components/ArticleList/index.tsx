'use client';
import { Box, Grid, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { LargeArticleCard } from '@/components/AricleCard/Large';
import { MediumArticleCard } from '@/components/AricleCard/Medium';
import { SmallArticleCard } from '@/components/AricleCard/Small';
import { WideArticleCard } from '@/components/AricleCard/Wide';
import { NYTResponse } from '@/interface/nyt';

const DUMMY_IMAGE_URL =
  'https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface ArticleListProps {
  docs: NYTResponse['docs'];
}

export const ArticleList: React.FC<ArticleListProps> = ({ docs }) => {
  const [firstDoc, secondDoc, thirdDoc, forthDoc, ...restDocs] = docs.filter(
    ({ abstract, lead_paragraph, web_url }) =>
      Boolean(abstract && lead_paragraph && web_url)
  );
  const getImageUrl = (url: string) =>
    url ? `https://nytimes.com/` + url : DUMMY_IMAGE_URL;

  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={2}
        mb={4}
      >
        {firstDoc && (
          <Box gridRow="1 / 3" gridColumn="1 / 8">
            <LargeArticleCard
              url={firstDoc.web_url}
              title={firstDoc.abstract}
              description={firstDoc.lead_paragraph}
              imageUrl={getImageUrl(firstDoc.multimedia[0]?.url)}
            ></LargeArticleCard>
          </Box>
        )}

        {secondDoc && (
          <Box gridRow="3 / 4" gridColumn="1 / 6">
            <MediumArticleCard
              url={secondDoc.web_url}
              title={secondDoc.abstract}
              description={secondDoc.lead_paragraph}
              imageUrl={getImageUrl(secondDoc.multimedia[0]?.url)}
            ></MediumArticleCard>
          </Box>
        )}

        {thirdDoc && (
          <Box gridRow="4 / 5" gridColumn="1 / 6">
            <MediumArticleCard
              url={thirdDoc.web_url}
              title={thirdDoc.abstract}
              description={thirdDoc.lead_paragraph}
              imageUrl={getImageUrl(thirdDoc.multimedia[0]?.url)}
            ></MediumArticleCard>
          </Box>
        )}

        {forthDoc && (
          <Box gridRow="3 / 5" gridColumn="6 / 8">
            <SmallArticleCard
              url={forthDoc.web_url}
              title={forthDoc.abstract}
              description={forthDoc.lead_paragraph}
              imageUrl={getImageUrl(forthDoc.multimedia[0]?.url)}
            ></SmallArticleCard>
          </Box>
        )}
      </Grid>
      <List>
        {restDocs.map((doc, index) => (
          <ListItem key={index} mb={2}>
            <WideArticleCard
              url={doc.web_url}
              title={doc.abstract}
              description={doc.lead_paragraph}
              imageUrl={getImageUrl(doc.multimedia[0]?.url)}
            ></WideArticleCard>
          </ListItem>
        ))}
      </List>
    </>
  );
};
