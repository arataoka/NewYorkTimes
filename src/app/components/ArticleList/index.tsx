'use client';
import { Box, Grid, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { createDocProps } from '@/app/components/ArticleList/logics';
import { LargeArticleCard } from '@/components/AricleCard/Large';
import { MediumArticleCard } from '@/components/AricleCard/Medium';
import { SmallArticleCard } from '@/components/AricleCard/Small';
import { WideArticleCard } from '@/components/AricleCard/Wide';
import { NYTResponse } from '@/interface/nyt';

const MotionBox = motion(Box);
const fadeInOut = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.3 * (index + 1) },
  viewport: { once: true },
});

interface ArticleListProps {
  docs: NYTResponse['docs'];
}

const ArticleList: React.FC<ArticleListProps> = ({ docs }) => {
  const [firstDoc, secondDoc, thirdDoc, forthDoc, ...restDocs] = docs.filter(
    ({ headline: { main }, web_url }) => Boolean(main && web_url)
  );
  if (!firstDoc) return <Text>No Article is Founded</Text>;

  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={2}
      >
        {firstDoc && (
          <MotionBox {...fadeInOut(0)} gridRow="1 / 3" gridColumn="1 / 8">
            <LargeArticleCard {...createDocProps(firstDoc)}></LargeArticleCard>
          </MotionBox>
        )}

        {secondDoc && (
          <MotionBox {...fadeInOut(1)} gridRow="3 / 4" gridColumn="1 / 6">
            <MediumArticleCard
              {...createDocProps(secondDoc)}
            ></MediumArticleCard>
          </MotionBox>
        )}

        {thirdDoc && (
          <MotionBox {...fadeInOut(2)} gridRow="4 / 5" gridColumn="1 / 6">
            <MediumArticleCard
              {...createDocProps(thirdDoc)}
            ></MediumArticleCard>
          </MotionBox>
        )}

        {forthDoc && (
          <MotionBox {...fadeInOut(3)} gridRow="3 / 5" gridColumn="6 / 8">
            <SmallArticleCard {...createDocProps(forthDoc)}></SmallArticleCard>
          </MotionBox>
        )}
      </Grid>
      <List>
        {restDocs.map((doc, index) => (
          <ListItem key={index} mb={2}>
            <MotionBox {...fadeInOut(3 + index)}>
              <WideArticleCard {...createDocProps(doc)}></WideArticleCard>
            </MotionBox>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const MemorizedArticleList = React.memo(ArticleList);
