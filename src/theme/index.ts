'use client';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    base: '0em',
    lg: '62em',
  },
  styles: {
    global: {
      '@media (max-width: 62em)': {
        '*': {
          _hover: {
            transform: 'none !important',
          },
        },
      },
    },
  },
  fonts: {
    heading: `Georgia, serif`,
    body: `"Gill Sans", sans-serif`,
  },
});
