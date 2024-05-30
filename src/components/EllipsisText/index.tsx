import { Text } from '@chakra-ui/react';

interface EllipsisTextProps {
  text: string;
  line: number;
}

export const EllipsisText: React.FC<EllipsisTextProps> = ({ text, line }) => {
  return (
    <Text
      overflow="hidden"
      textOverflow="ellipsis"
      display="-webkit-box"
      css={{
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: line,
      }}
      whiteSpace="normal"
    >
      {text}
    </Text>
  );
};
