import { Box, Heading } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';

interface SmallArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const SmallArticleCard: React.FC<SmallArticleCardProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <Box height="100%" borderWidth="1px" borderRadius="lg">
    <Img src={imageUrl} alt={title} objectFit="cover" />
    <Box p={2}>
      <Heading fontSize="xl" mb="2">
        <EllipsisText text={title} line={7}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Box>
  </Box>
);
