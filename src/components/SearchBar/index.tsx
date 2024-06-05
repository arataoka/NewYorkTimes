import { Search2Icon } from '@chakra-ui/icons';
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';

export interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
}
const SearchBar: React.FC<SearchBarProps> = ({
  setSearchQuery,
  searchQuery,
}) => {
  return (
    <InputGroup size="lg" width="full">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Search The New York Times"
        variant="filled"
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        _focus={{ background: 'white' }}
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
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

export const MemorizedSearchBar = React.memo(SearchBar);
