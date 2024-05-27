import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
