'use client';
import { Box, Grid, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { LargeArticleCard } from '@/components/AricleCard/Large';
import { MediumArticleCard } from '@/components/AricleCard/Medium';
import { SmallArticleCard } from '@/components/AricleCard/Small';
import { WideArticleCard } from '@/components/AricleCard/Wide';
import { NYTResponse } from '@/interface/nyt';

interface ArticleListProps {
  docs: NYTResponse['docs'];
}

export const ArticleList: React.FC<ArticleListProps> = ({ docs }) => {
  const [firstDoc, secondDoc, thirdDoc, forthDoc, ...restDocs] = docs;
  const imageUrl = (url: string) =>
    url
      ? `https://nytimes.com/` + url
      : 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={2}
        mb={4}
      >
        <Box gridRow="1 / 3" gridColumn="1 / 8">
          <LargeArticleCard
            title={firstDoc?.abstract}
            description={firstDoc.lead_paragraph}
            imageUrl={imageUrl(firstDoc.multimedia[0]?.url)}
          ></LargeArticleCard>
        </Box>

        <Box gridRow="3 / 4" gridColumn="1 / 6">
          <MediumArticleCard
            title={secondDoc?.abstract}
            description={secondDoc.lead_paragraph}
            imageUrl={imageUrl(secondDoc.multimedia[0]?.url)}
          ></MediumArticleCard>
        </Box>

        <Box gridRow="4 / 5" gridColumn="1 / 6">
          <MediumArticleCard
            title={thirdDoc?.abstract}
            description={thirdDoc.lead_paragraph}
            imageUrl={imageUrl(thirdDoc.multimedia[0]?.url)}
          ></MediumArticleCard>
        </Box>

        <Box gridRow="3 / 5" gridColumn="6 / 8">
          <SmallArticleCard
            title={forthDoc?.abstract}
            description={forthDoc.lead_paragraph}
            imageUrl={imageUrl(forthDoc.multimedia[0]?.url)}
          ></SmallArticleCard>
        </Box>
      </Grid>
      <List>
        {restDocs.map((doc, index) => (
          <ListItem key={index} mb={2}>
            <WideArticleCard
              title={doc?.abstract}
              description={doc.lead_paragraph}
              imageUrl={imageUrl(doc.multimedia[0]?.url)}
            ></WideArticleCard>
          </ListItem>
        ))}
      </List>
    </>
  );
};
