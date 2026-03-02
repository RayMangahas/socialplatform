// =============================================
// src/components/layout/TopNav.tsx
// Top navigation bar
// Left: Home + Profile
// Center: Rausche logo
// Right: Search + Settings
// =============================================
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, Settings, X, Home, Inbox } from 'lucide-react';

export function TopNav() {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (pathname.startsWith('/profile/')) return null;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-[470px] mx-auto flex items-center justify-between px-4 h-12">
        {showSearch ? (
          <>
            <div className="flex-1 flex items-center gap-2">
              <Search size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search people, rooms, communities..."
                className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder:text-gray-400"
                autoFocus
              />
            </div>
            <button
              onClick={() => {
                setShowSearch(false);
                setSearchQuery('');
              }}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </>
        ) : (
          <>
            {/* ── Left: Home + Inbox + Profile ─────────── */}
            <div className="flex items-center gap-1 min-w-[96px]">
              <Link
                href="/"
                className={`p-1.5 rounded-full transition-colors ${
                  pathname === '/'
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Home size={22} strokeWidth={pathname === '/' ? 2.2 : 1.6} />
              </Link>
              <Link
                href="/inbox"
                className={`p-1.5 rounded-full transition-colors ${
                  pathname === '/inbox'
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Inbox size={22} strokeWidth={pathname === '/inbox' ? 2.2 : 1.6} />
              </Link>
              <Link
                href="/profile/me"
                className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-[11px] font-bold hover:opacity-80 transition-opacity"
              >
                R
              </Link>
            </div>

            {/* ── Center: Logo ─────────────────────────── */}
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
              Rausche
            </Link>

            {/* ── Right: Search + Settings ─────────────── */}
            <div className="flex items-center gap-0.5 min-w-[96px] justify-end">
              <button
                onClick={() => setShowSearch(true)}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search size={22} className="text-gray-900" />
              </button>
              <Link
                href="/settings"
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Settings size={22} className="text-gray-900" />
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
