import { Box, Heading, Flex } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';
import { BaseCard } from '@/components/AricleCard/Base';
import { BaseArticleCardProps } from '@/components/AricleCard/interface';

export interface WideArticleCardProps extends BaseArticleCardProps {}

export const WideArticleCard: React.FC<WideArticleCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <BaseCard url={url} display="flex">
    <Box flex={{ base: 2, lg: 4 }} p={3}>
      <Heading
        fontSize="xl"
        mb="2"
        transition="0.2s"
        _groupHover={{ color: 'blue.400' }}
      >
        <EllipsisText text={title} line={3}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Box>
    <Flex flex={1} alignItems="center" bg="black" justifyContent="center">
      <Img
        src={imageUrl}
        alt={title}
        objectFit="cover"
        maxHeight="150px"
        width="100%"
      />
    </Flex>
  </BaseCard>
);
