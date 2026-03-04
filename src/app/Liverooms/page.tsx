// =============================================
// src/app/Liverooms/page.tsx
// Live Rooms — 5 volunteers available to talk
// Marketplace-style layout with SoftSpace theme
// =============================================
'use client';

import { useState } from 'react';

interface Volunteer {
  id: string;
  name: string;
  emoji: string;
  color: string;
  specialty: string;
  bio: string;
  status: 'available' | 'in-session';
  sessionsCompleted: number;
}

const volunteers: Volunteer[] = [
  {
    id: 'v1',
    name: 'Mia',
    emoji: '😮‍💨',
    color: '#9B6BC2',
    specialty: 'Stress',
    bio: "Deadlines, overthinking, the 2am spiral — I get it. Let's talk it out.",
    status: 'available',
    sessionsCompleted: 127,
  },
  {
    id: 'v2',
    name: 'Tarini',
    emoji: '💔',
    color: '#D67FA8',
    specialty: 'Breakup',
    bio: "Heartbreak is heavy. I won't try to fix it — I'll just sit with you in it.",
    status: 'available',
    sessionsCompleted: 84,
  },
  {
    id: 'v3',
    name: 'Krithi',
    emoji: '📜',
    color: '#7FB8D6',
    specialty: 'History',
    bio: "Let's geek out about the past and make sense of the present. From ancient Rome to last century.",
    status: 'available',
    sessionsCompleted: 56,
  },
  {
    id: 'v4',
    name: 'Jessalin',
    emoji: '👂',
    color: '#D6A87F',
    specialty: 'Just Listening',
    bio: "Sometimes you don't need advice, you just need someone to hear you. That's me.",
    status: 'available',
    sessionsCompleted: 203,
  },
  {
    id: 'v5',
    name: 'Haoyi',
    emoji: '☕',
    color: '#7FD6A8',
    specialty: 'Late Night Talks',
    bio: "Can't sleep? Me neither. Let's grab a virtual coffee and just talk about whatever.",
    status: 'in-session',
    sessionsCompleted: 91,
  },
  {
    id: 'v6',
    name: 'Hongyu',
    emoji: '🏠',
    color: '#B87FD6',
    specialty: 'Homesickness',
    bio: "Moved thousands of miles for school. Missing home is real — I'm here for it.",
    status: 'available',
    sessionsCompleted: 68,
  },
  {
    id: 'v7',
    name: 'Meg',
    emoji: '🌙',
    color: '#6B8FD6',
    specialty: 'Anxiety',
    bio: "The racing thoughts at 3am? I've been there. Let's slow it down together.",
    status: 'available',
    sessionsCompleted: 145,
  },
  {
    id: 'v8',
    name: 'Eshan',
    emoji: '💪',
    color: '#D6A87F',
    specialty: 'Motivation',
    bio: "Feeling stuck or lost? Sometimes you just need someone in your corner. I got you.",
    status: 'available',
    sessionsCompleted: 73,
  },
  {
    id: 'v9',
    name: 'Luis',
    emoji: '🎵',
    color: '#7FD6A8',
    specialty: 'Music & Vibes',
    bio: "Music heals. Let's talk about what you're listening to or just vibe together.",
    status: 'in-session',
    sessionsCompleted: 112,
  },
  {
    id: 'v10',
    name: 'Aaron',
    emoji: '🧠',
    color: '#D67FA8',
    specialty: 'Overthinking',
    bio: "I'm a recovering overthinker. Let's untangle whatever's looping in your head.",
    status: 'available',
    sessionsCompleted: 97,
  },
  {
    id: 'v11',
    name: 'Leonardo',
    emoji: '🌍',
    color: '#8B6BC2',
    specialty: 'Culture & Identity',
    bio: "Navigating cultures, languages, and identities — I love these conversations.",
    status: 'available',
    sessionsCompleted: 64,
  },
];

export default function LiveRoomsPage() {
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
  const available = volunteers.filter((v) => v.status === 'available');

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F0ECF6' }}>
      <div className="max-w-[470px] mx-auto px-4 py-6">

        {/* Header */}
        <div className="mb-5">
          <h1 className="font-display text-xl font-bold text-soft-purple-deeper mb-1">
            Live Rooms
          </h1>
          <p className="text-sm text-soft-muted font-body">
            Someone&apos;s always here. Drop in and talk.
          </p>
        </div>

        {/* Status bar */}
        <div className="bg-white rounded-[18px] p-4 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-soft-online rounded-full animate-pulse-online" />
            <span className="text-sm font-semibold text-soft-purple-deeper font-body">
              {available.length} volunteers available
            </span>
          </div>
          <span className="text-[11px] text-soft-muted font-body">
            {volunteers.filter((v) => v.status === 'in-session').length} in session
          </span>
        </div>

        {/* Volunteer Cards */}
        <div className="flex flex-col gap-3">
          {volunteers.map((v) => (
            <button
              key={v.id}
              onClick={() => v.status === 'available' && setSelectedVolunteer(v)}
              className={`bg-white rounded-[18px] p-4 text-left transition-all ${
                v.status === 'available'
                  ? 'active:scale-[0.98] cursor-pointer'
                  : 'opacity-60 cursor-default'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: v.color + '25' }}
                >
                  {v.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-display font-bold text-soft-purple-deeper text-[15px]">
                      {v.name}
                    </h3>
                    {v.status === 'available' ? (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-soft-online rounded-full" />
                        <span className="text-[10px] text-soft-online font-semibold font-body">Available</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-soft-gold-warm font-semibold font-body">In session</span>
                    )}
                  </div>
                  <p className="text-[12px] font-semibold text-soft-purple font-body mb-1">
                    {v.specialty}
                  </p>
                  <p className="text-[12px] text-soft-muted font-body leading-relaxed">
                    {v.bio}
                  </p>
                  <p className="text-[10px] text-soft-muted-light font-body mt-1.5">
                    {v.sessionsCompleted} conversations
                  </p>
                </div>
              </div>

              {/* Talk button for available */}
              {v.status === 'available' && (
                <div className="mt-3 flex justify-end">
                  <span
                    className="text-[12px] font-semibold px-5 py-2 rounded-full text-white font-body"
                    style={{ backgroundColor: v.color }}
                  >
                    🎙️ Talk Now
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Become a Volunteer */}
        <div className="bg-white rounded-[18px] p-5 mt-5 text-center">
          <span className="text-3xl block mb-2">🤝</span>
          <h3 className="font-display font-bold text-soft-purple-deeper text-sm mb-1">
            Want to help?
          </h3>
          <p className="text-[12px] text-soft-muted font-body mb-3 leading-relaxed">
            Become a volunteer listener. Get trained, show up when you can, and make someone&apos;s day better.
          </p>
          <button className="text-[12px] font-semibold px-5 py-2.5 rounded-full bg-soft-purple text-white font-body hover:bg-soft-purple-dark transition-colors">
            Apply to Volunteer
          </button>
        </div>

      </div>

      {/* ── Connect Modal ── */}
      {selectedVolunteer && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center"
          style={{ background: 'rgba(45, 34, 84, 0.6)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedVolunteer(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[470px] px-5 pt-6 pb-8 animate-slideUp"
            style={{ borderRadius: '24px 24px 0 0' }}
          >
            <div className="w-10 h-1 bg-soft-lavender-border rounded-full mx-auto mb-5" />

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-[16px] flex items-center justify-center text-3xl"
                style={{ backgroundColor: selectedVolunteer.color + '25' }}
              >
                {selectedVolunteer.emoji}
              </div>
              <div>
                <h3 className="font-display font-bold text-soft-purple-deeper text-lg">
                  {selectedVolunteer.name}
                </h3>
                <p className="text-[12px] text-soft-purple font-semibold font-body">
                  {selectedVolunteer.specialty}
                </p>
              </div>
            </div>

            <p className="text-sm text-soft-muted font-body mb-5 leading-relaxed">
              {selectedVolunteer.bio}
            </p>

            <div className="flex flex-col gap-2">
              <button
                className="w-full py-3.5 rounded-[14px] text-white text-[14px] font-semibold font-body transition-all active:scale-[0.98]"
                style={{ backgroundColor: selectedVolunteer.color }}
              >
                🎙️ Start Voice Call
              </button>
              <button className="w-full py-3.5 rounded-[14px] bg-soft-lavender-bg text-soft-purple text-[14px] font-semibold font-body transition-all active:scale-[0.98]">
                💬 Send a Message First
              </button>
              <button
                onClick={() => setSelectedVolunteer(null)}
                className="w-full py-3 text-[13px] text-soft-muted font-body"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
