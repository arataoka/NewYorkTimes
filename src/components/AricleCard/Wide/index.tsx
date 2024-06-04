import { Box, Heading, Flex } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';
import { BaseArticleCardProps } from '@/components/AricleCard/interface';

export interface WideArticleCardProps extends BaseArticleCardProps {}

export const WideArticleCard: React.FC<WideArticleCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <Link href={url}>
    <Flex height="100%" borderWidth="1px" borderRadius="lg">
      <Box flex={4} p={3}>
        <Heading fontSize="xl" mb="2">
          <EllipsisText text={title} line={3}></EllipsisText>
        </Heading>
        <EllipsisText text={description} line={3}></EllipsisText>
      </Box>
      <Flex flex={1} alignItems="center" bg="black">
        <Img src={imageUrl} alt={title} objectFit="cover" />
      </Flex>
    </Flex>
  </Link>
);
