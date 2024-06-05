import { Box, Heading } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';
import { BaseCard } from '@/components/AricleCard/Base';
import { BaseArticleCardProps } from '@/components/AricleCard/interface';

interface LargeArticleCardProps extends BaseArticleCardProps {}

export const LargeArticleCard: React.FC<LargeArticleCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <BaseCard
    url={url}
    display="flex"
    justifyContent="center"
    position="relative"
    alignItems="center"
    height="100%"
    min-height="400px"
  >
    <Img
      src={imageUrl}
      alt={title}
      objectFit="cover"
      maxHeight="600px"
      loading="eager"
    />
    <Box
      p="6"
      position="absolute"
      left="0"
      bottom="0"
      bgColor="rgba(0,0,0,0.6)"
      color="#fff"
      width="100%"
      transition="0.2s"
      _groupHover={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
    >
      <Heading fontSize="3xl" mb="2">
        <EllipsisText text={title} line={3}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Box>
  </BaseCard>
);
