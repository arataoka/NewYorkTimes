import { Heading, Flex } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';
import { BaseCard } from '@/components/AricleCard/Base';
import { BaseArticleCardProps } from '@/components/AricleCard/interface';

export interface MediumArticleCardProps extends BaseArticleCardProps {}

export const MediumArticleCard: React.FC<MediumArticleCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <BaseCard url={url} display="flex">
    <Flex flex={3} p={3} justifyContent="center" flexDirection="column">
      <Heading
        fontSize="xl"
        mb="2"
        transition="0.2s"
        _groupHover={{ color: 'blue.400' }}
      >
        <EllipsisText text={title} line={3}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Flex>
    <Flex flex={2} alignItems="center" bg="black">
      <Img src={imageUrl} alt={title} objectFit="cover" />
    </Flex>
  </BaseCard>
);
