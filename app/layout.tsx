import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nice Buttons',
  description: 'Create and Share Nice Buttons!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
