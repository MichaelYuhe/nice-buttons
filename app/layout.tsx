import './globals.css';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';

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
      <body className="flex h-screen w-screen flex-col">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
