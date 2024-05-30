import { Box, Heading, Flex } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';

export interface MediumArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const MediumArticleCard: React.FC<MediumArticleCardProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <Flex height="100%" borderWidth="1px" borderRadius="lg">
    <Box flex={3} p={3}>
      <Heading fontSize="xl" mb="2">
        <EllipsisText text={title} line={3}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Box>
    <Box flex={2}>
      <Img src={imageUrl} alt={title} objectFit="cover" />
    </Box>
  </Flex>
);
