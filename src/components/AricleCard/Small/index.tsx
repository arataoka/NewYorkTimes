import { Box, Heading } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';
import { BaseCard } from '@/components/AricleCard/Base';
import { BaseArticleCardProps } from '@/components/AricleCard/interface';

interface SmallArticleCardProps extends BaseArticleCardProps {}

export const SmallArticleCard: React.FC<SmallArticleCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <BaseCard url={url} display="flex" flexDirection="column">
    <Img src={imageUrl} alt={title} objectFit="cover" mb={2} />
    <Box p={2}>
      <Heading
        fontSize="xl"
        mb="2"
        transition="0.2s"
        _groupHover={{ color: 'blue.400' }}
      >
        <EllipsisText text={title} line={7}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Box>
  </BaseCard>
);
