import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from 'next';
import StoreProvider from '@/app/StoreProvider';
import { theme } from '@/theme';

export const metadata: Metadata = {
  title: 'The New York Times API Demo',
  description: 'This is the demo page of New York Times API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <StoreProvider>{children}</StoreProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
