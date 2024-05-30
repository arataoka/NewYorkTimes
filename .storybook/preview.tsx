import { ChakraProvider } from '@chakra-ui/react';

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: React.ComponentType) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
