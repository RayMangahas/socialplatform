// =============================================
// src/components/layout/TopNav.tsx
// Top navigation bar
// Left: SoftSpace + logo (home link)
// Right: Search + Settings
// =============================================
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Settings, X } from 'lucide-react';

export function TopNav() {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (pathname.startsWith('/profile/')) return null;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-4 h-12">
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
            {/* ── Left: SoftSpace + Logo (home link) ───── */}
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                SoftSpace
              </span>
              <Image
                src="/logo.png"
                alt="SoftSpace"
                width={28}
                height={28}
                className="object-contain"
              />
            </Link>

            {/* ── Right: Search + Settings ─────────────── */}
            <div className="flex items-center gap-0.5">
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
