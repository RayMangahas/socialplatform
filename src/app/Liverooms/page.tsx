// =============================================
// src/app/liverooms/page.tsx
// Live Rooms — volunteer-powered safe spaces
// Replaces the old /marketplace page
// =============================================
'use client';

import { useState } from 'react';
import { Mic, Radio, Users, Heart, ChevronRight, Clock, Star } from 'lucide-react';

interface Volunteer {
  id: string;
  name: string;
  initial: string;
  specialty: string;
  status: 'available' | 'in-session' | 'away';
  rating: number;
  sessionsCompleted: number;
}

interface LiveRoom {
  id: string;
  title: string;
  emoji: string;
  description: string;
  volunteers: Volunteer[];
  listeners: number;
  maxCapacity: number;
  tags: string[];
  isLive: boolean;
}

const mockVolunteers: Volunteer[] = [
  { id: 'v1', name: 'Ari', initial: 'A', specialty: 'Anxiety & Stress', status: 'available', rating: 4.9, sessionsCompleted: 127 },
  { id: 'v2', name: 'Jules', initial: 'J', specialty: 'Homesickness', status: 'available', rating: 4.8, sessionsCompleted: 84 },
  { id: 'v3', name: 'Sam', initial: 'S', specialty: 'Just Listening', status: 'in-session', rating: 4.9, sessionsCompleted: 203 },
  { id: 'v4', name: 'Morgan', initial: 'M', specialty: 'Late Night Talks', status: 'available', rating: 4.7, sessionsCompleted: 56 },
  { id: 'v5', name: 'Taylor', initial: 'T', specialty: 'First-Gen Support', status: 'available', rating: 4.9, sessionsCompleted: 91 },
  { id: 'v6', name: 'Ren', initial: 'R', specialty: 'Breakups & Loss', status: 'in-session', rating: 4.8, sessionsCompleted: 145 },
  { id: 'v7', name: 'Casey', initial: 'C', specialty: 'Academic Pressure', status: 'available', rating: 4.6, sessionsCompleted: 38 },
];

const mockRooms: LiveRoom[] = [
  {
    id: 'r1',
    title: "Can't Sleep? Come Talk",
    emoji: '🌙',
    description: 'A quiet space for when your brain won\'t shut off. Volunteers here to listen, no judgment.',
    volunteers: [mockVolunteers[0], mockVolunteers[3]],
    listeners: 5,
    maxCapacity: 8,
    tags: ['anxiety', 'insomnia', 'late night'],
    isLive: true,
  },
  {
    id: 'r2',
    title: 'Just Need to Vent',
    emoji: '💨',
    description: 'Get it off your chest. Trained listeners ready to hear you out.',
    volunteers: [mockVolunteers[2]],
    listeners: 3,
    maxCapacity: 6,
    tags: ['venting', 'stress', 'support'],
    isLive: true,
  },
  {
    id: 'r3',
    title: 'First-Gen Check In',
    emoji: '🎓',
    description: "For first-generation students navigating the unwritten rules. You're not alone.",
    volunteers: [mockVolunteers[4], mockVolunteers[6]],
    listeners: 7,
    maxCapacity: 12,
    tags: ['first-gen', 'college', 'guidance'],
    isLive: true,
  },
  {
    id: 'r4',
    title: 'Heartbreak Hotel',
    emoji: '💔',
    description: 'Going through it? So are we. A safe space for processing loss and breakups.',
    volunteers: [mockVolunteers[5]],
    listeners: 4,
    maxCapacity: 8,
    tags: ['breakups', 'loss', 'healing'],
    isLive: true,
  },
  {
    id: 'r5',
    title: 'Morning Motivation',
    emoji: '☀️',
    description: 'Start your day with a pep talk. Volunteers helping you find your momentum.',
    volunteers: [mockVolunteers[1]],
    listeners: 0,
    maxCapacity: 10,
    tags: ['motivation', 'morning', 'energy'],
    isLive: false,
  },
];

export default function LiveRoomsPage() {
  const [filter, setFilter] = useState<'all' | 'available'>('all');

  const availableVolunteers = mockVolunteers.filter((v) => v.status === 'available');
  const liveRooms = mockRooms.filter((r) => r.isLive);
  const upcomingRooms = mockRooms.filter((r) => !r.isLive);

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="max-w-[470px] mx-auto px-4 py-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Live Rooms</h1>
          <p className="text-sm text-gray-400">
            Drop in anytime. Trained volunteers are here to listen.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[11px] text-gray-400">Online</span>
            </div>
            <span className="text-lg font-bold text-gray-900">{availableVolunteers.length}</span>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Radio size={12} className="text-gray-400" />
              <span className="text-[11px] text-gray-400">Live Rooms</span>
            </div>
            <span className="text-lg font-bold text-gray-900">{liveRooms.length}</span>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Users size={12} className="text-gray-400" />
              <span className="text-[11px] text-gray-400">Listening</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              {liveRooms.reduce((acc, r) => acc + r.listeners, 0)}
            </span>
          </div>
        </div>

        {/* Need Someone Now */}
        <button className="w-full mb-6 p-4 bg-gray-900 rounded-2xl text-left transition-all active:scale-[0.99]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm mb-0.5">Need someone to talk to?</p>
              <p className="text-gray-400 text-xs">Match with an available volunteer now</p>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>
        </button>

        {/* Available Volunteers */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-gray-900">Available Volunteers</h2>
            <button
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                filter === 'available'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setFilter(filter === 'available' ? 'all' : 'available')}
            >
              {filter === 'available' ? 'Available ✓' : 'Show available'}
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {(filter === 'available' ? availableVolunteers : mockVolunteers).map((volunteer) => (
              <div
                key={volunteer.id}
                className="flex-shrink-0 bg-white border border-gray-100 rounded-2xl p-3 w-[130px]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{volunteer.initial}</span>
                    </div>
                    {volunteer.status === 'available' && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
                    )}
                    {volunteer.status === 'in-session' && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 mb-0.5">{volunteer.name}</span>
                  <span className="text-[10px] text-gray-400 leading-tight">{volunteer.specialty}</span>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star size={10} className="text-amber-400" fill="currentColor" />
                    <span className="text-[10px] text-gray-400">{volunteer.rating} · {volunteer.sessionsCompleted}</span>
                  </div>
                  {volunteer.status === 'available' ? (
                    <button className="mt-2 w-full text-[10px] font-semibold py-1.5 rounded-full bg-gray-900 text-white transition-all active:scale-95">
                      Talk Now
                    </button>
                  ) : volunteer.status === 'in-session' ? (
                    <span className="mt-2 text-[10px] text-amber-500 font-medium">In session</span>
                  ) : (
                    <span className="mt-2 text-[10px] text-gray-300 font-medium">Away</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Rooms */}
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 mb-3">🔴 Live Now</h2>
          <div className="flex flex-col gap-3">
            {liveRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 transition-all active:scale-[0.99]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{room.emoji}</span>
                    <h3 className="text-sm font-bold text-gray-900">{room.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-red-50 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-red-500 font-medium">LIVE</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{room.description}</p>

                {/* Volunteers in room */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    {room.volunteers.map((v) => (
                      <div
                        key={v.id}
                        className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center border-2 border-white"
                      >
                        <span className="text-white text-[9px] font-bold">{v.initial}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">
                    {room.volunteers.length} volunteer{room.volunteers.length > 1 ? 's' : ''} · {room.listeners} listening
                  </span>
                </div>

                {/* Tags + Join */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {room.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-xs font-semibold px-4 py-2 rounded-full bg-gray-900 text-white transition-all active:scale-95">
                    Drop In
                  </button>
                </div>

                {/* Capacity */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-300">
                      {room.listeners + room.volunteers.length}/{room.maxCapacity} in room
                    </span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-300 rounded-full transition-all"
                      style={{
                        width: `${((room.listeners + room.volunteers.length) / room.maxCapacity) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Rooms */}
        {upcomingRooms.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-900 mb-3">
              <Clock size={14} className="inline mr-1" />
              Opening Soon
            </h2>
            {upcomingRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 opacity-70"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{room.emoji}</span>
                  <h3 className="text-sm font-bold text-gray-900">{room.title}</h3>
                </div>
                <p className="text-xs text-gray-400 mb-2">{room.description}</p>
                <button className="text-[10px] font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Become a Volunteer */}
        <div className="bg-gray-50 rounded-2xl p-5 text-center">
          <Heart size={28} className="text-gray-300 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-gray-900 mb-1">Want to help?</h3>
          <p className="text-xs text-gray-400 mb-3 leading-relaxed">
            Become a volunteer listener. Get trained, show up when you can, and make someone&apos;s day better.
          </p>
          <button className="text-xs font-semibold px-5 py-2.5 rounded-full bg-gray-900 text-white transition-all active:scale-95">
            Apply to Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}
