import { Search2Icon } from '@chakra-ui/icons';
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from '@chakra-ui/react';
export const SearchBar = () => {
  return (
    <InputGroup size="lg" width="full" my={5}>
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Search The New York Times"
        variant="filled"
        _placeholder={{ opacity: 1, color: 'gray.500' }}
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
