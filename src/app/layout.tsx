import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from 'next';
import StoreProvider from '@/app/StoreProvider';
import { DUMMY_IMAGE_URL } from '@/constants';
import { theme } from '@/theme';

export const metadata: Metadata = {
  title: 'The New York Times API Demo',
  description: 'This is the demo page of New York Times API',
  openGraph: {
    title: 'The New York Times API Demo',
    description: 'This is the demo page of New York Times API',
    images: [
      {
        url: DUMMY_IMAGE_URL,
        width: 800,
        height: 600,
        alt: 'NEW YORK TIMES API DEMO',
      },
    ],
  },
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
