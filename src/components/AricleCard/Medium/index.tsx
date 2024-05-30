import { Heading, Flex } from '@chakra-ui/react';
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
    <Flex flex={3} p={3} justifyContent="center" flexDirection="column">
      <Heading fontSize="xl" mb="2">
        <EllipsisText text={title} line={3}></EllipsisText>
      </Heading>
      <EllipsisText text={description} line={3}></EllipsisText>
    </Flex>
    <Flex flex={2} alignItems="center" bg="black">
      <Img src={imageUrl} alt={title} objectFit="cover" />
    </Flex>
  </Flex>
);
