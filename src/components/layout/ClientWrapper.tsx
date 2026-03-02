// =============================================
// src/components/layout/ClientWrapper.tsx
// Client-side providers wrapper
// =============================================
'use client';

import { ReactNode } from 'react';
import { ProfileProvider } from '@/lib/ProfileContext';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';

export function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <ProfileProvider>
      <TopNav />
      <main className="pb-20">
        {children}
      </main>
      <BottomNav />
    </ProfileProvider>
  );
}
