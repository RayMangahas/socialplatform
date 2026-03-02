// =============================================
// src/app/layout.tsx
// Root layout — wraps ALL pages with ClientWrapper
// =============================================

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientWrapper } from '@/components/layout/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoftSpace',
  description: 'Less lonely tonight',
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
