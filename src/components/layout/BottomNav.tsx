// =============================================
// src/components/layout/BottomNav.tsx
// Footer navigation — 4 tabs
//   1. Community
//   2. Folder
//   3. Live Rooms
//   4. Profile
// =============================================
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Users, FolderOpen, Mic, User } from 'lucide-react';

const NAV_ITEMS = [
  { key: 'community',  href: '/community',   icon: Users,      label: 'Community' },
  { key: 'folder',     href: '/folder',      icon: FolderOpen,  label: 'Folder' },
  { key: 'liverooms',  href: '/Liverooms',   icon: Mic,         label: 'Live Rooms' },
  { key: 'profile',    href: '/profile',     icon: User,        label: 'Profile' },
];

export function BottomNav() {
  const pathname = usePathname();

  const getIsActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100">
      <div className="max-w-[470px] mx-auto flex items-center justify-around py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
        {NAV_ITEMS.map((item) => {
          const isActive = getIsActive(item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                isActive
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <item.icon
                size={24}
                strokeWidth={isActive ? 2.2 : 1.6}
                fill={isActive ? 'currentColor' : 'none'}
              />
              <span className={`text-[10px] ${isActive ? 'font-semibold' : 'font-normal'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
