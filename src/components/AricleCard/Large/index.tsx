import { Box, Heading, Flex } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { EllipsisText } from '../../EllipsisText';

interface LargeArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export const LargeArticleCard: React.FC<LargeArticleCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => (
  <Link href={url}>
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      height="100%"
      bgColor="black"
    >
      <Flex
        justify="center"
        position="relative"
        alignItems="center"
        height="100%"
      >
        <Img src={imageUrl} alt={title} objectFit="cover" maxHeight="600px" />
        <Box
          p="6"
          position="absolute"
          left="0"
          bottom="0"
          bgColor="rgba(0,0,0,0.5)"
          color="#fff"
          width="100%"
        >
          <Heading fontSize="xl" mb="2">
            <EllipsisText text={title} line={3}></EllipsisText>
          </Heading>
          <EllipsisText text={description} line={3}></EllipsisText>
        </Box>
      </Flex>
    </Box>
  </Link>
);
