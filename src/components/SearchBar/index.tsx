import { Search2Icon } from '@chakra-ui/icons';
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from '@chakra-ui/react';

export interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<{ q: string }>>;
  searchQuery: { q: string };
}
export const SearchBar: React.FC<SearchBarProps> = ({
  setSearchQuery,
  searchQuery,
}) => {
  return (
    <InputGroup size="lg" width="full" my={5}>
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Search The New York Times"
        variant="filled"
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        value={searchQuery.q}
        onChange={(event) => setSearchQuery({ q: event.target.value })}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="sm"
          aria-label="Search"
          icon={<Search2Icon />}
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};
