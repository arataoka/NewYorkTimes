'use client';
import { Box, Grid, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { LargeArticleCard } from '@/components/AricleCard/Large';
import { MediumArticleCard } from '@/components/AricleCard/Medium';
import { SmallArticleCard } from '@/components/AricleCard/Small';
import { WideArticleCard } from '@/components/AricleCard/Wide';
import { NYTResponse } from '@/interface/nyt';

const MotionBox = motion(Box);
const DUMMY_IMAGE_URL =
  'https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface ArticleListProps {
  docs: NYTResponse['docs'];
}

const ArticleList: React.FC<ArticleListProps> = ({ docs }) => {
  const [firstDoc, secondDoc, thirdDoc, forthDoc, ...restDocs] = docs.filter(
    ({ headline: { main }, web_url }) => Boolean(main && web_url)
  );
  const getImageUrl = (url: string) =>
    url ? `https://nytimes.com/` + url : DUMMY_IMAGE_URL;

  const fadeInOut = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.3 * (index + 1) },
    viewport: { once: true },
  });

  if (!firstDoc) return <Text>No Article is Founded</Text>;

  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={2}
        mb={4}
      >
        {firstDoc && (
          <MotionBox {...fadeInOut(0)} gridRow="1 / 3" gridColumn="1 / 8">
            <LargeArticleCard
              url={firstDoc.web_url}
              title={firstDoc.headline.main}
              description={firstDoc.lead_paragraph}
              imageUrl={getImageUrl(firstDoc.multimedia[0]?.url)}
            ></LargeArticleCard>
          </MotionBox>
        )}

        {secondDoc && (
          <MotionBox {...fadeInOut(1)} gridRow="3 / 4" gridColumn="1 / 6">
            <MediumArticleCard
              url={secondDoc.web_url}
              title={secondDoc.headline.main}
              description={secondDoc.lead_paragraph}
              imageUrl={getImageUrl(secondDoc.multimedia[0]?.url)}
            ></MediumArticleCard>
          </MotionBox>
        )}

        {thirdDoc && (
          <MotionBox {...fadeInOut(2)} gridRow="4 / 5" gridColumn="1 / 6">
            <MediumArticleCard
              url={thirdDoc.web_url}
              title={thirdDoc.headline.main}
              description={thirdDoc.lead_paragraph}
              imageUrl={getImageUrl(thirdDoc.multimedia[0]?.url)}
            ></MediumArticleCard>
          </MotionBox>
        )}

        {forthDoc && (
          <MotionBox {...fadeInOut(3)} gridRow="3 / 5" gridColumn="6 / 8">
            <SmallArticleCard
              url={forthDoc.web_url}
              title={forthDoc.headline.main}
              description={forthDoc.lead_paragraph}
              imageUrl={getImageUrl(forthDoc.multimedia[0]?.url)}
            ></SmallArticleCard>
          </MotionBox>
        )}
      </Grid>
      <List>
        {restDocs.map((doc, index) => (
          <ListItem key={index} mb={2}>
            <MotionBox {...fadeInOut(3 + index)}>
              <WideArticleCard
                url={doc.web_url}
                title={doc.headline.main}
                description={doc.lead_paragraph}
                imageUrl={getImageUrl(doc.multimedia[0]?.url)}
              ></WideArticleCard>
            </MotionBox>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const MemorizedArticleList = React.memo(ArticleList);
