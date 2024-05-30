import { Button } from '@chakra-ui/react';

interface TagButtonProps {
  label: string;
  onClick: (label: string) => void;
  selected: boolean;
}

export const TagButton: React.FC<TagButtonProps> = ({
  label,
  onClick,
  selected,
}) => {
  return (
    <Button
      as="button"
      px={2}
      py={1}
      fontSize="sm"
      colorScheme={selected ? 'green' : 'gray'}
      onClick={() => onClick(label)}
      size="sm"
      m={1}
    >
      {label}
    </Button>
  );
};
