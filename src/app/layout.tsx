// =============================================
// src/app/layout.tsx
// Root layout — wraps ALL pages with ClientWrapper
// (TopNav, BottomNav, and ProfileProvider live there)
// =============================================

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientWrapper } from '@/components/layout/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rausche',
  description: 'You don\'t have to feel alone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
