import { OnlineUser, LiveRoom, CommunityPost } from "@/types";

// ─── Online Users ─────────────────────────────────────────

export const ONLINE_USERS: OnlineUser[] = [
  {
    id: 1,
    name: "Maya",
    vibe: "into late-night philosophy",
    interest: "Philosophy",
    color: "#B87FD6",
    initials: "M",
    online: true,
    inCircle: true,
  },
  {
    id: 2,
    name: "Jordan",
    vibe: "stressed about midterms",
    interest: "Study buddy",
    color: "#7FB8D6",
    initials: "J",
    online: true,
    inCircle: true,
  },
  {
    id: 3,
    name: "Sam",
    vibe: "can't sleep again",
    interest: "Night owl",
    color: "#D6A87F",
    initials: "S",
    online: true,
    inCircle: false,
  },
  {
    id: 4,
    name: "Alex",
    vibe: "new in town, looking for friends",
    interest: "Newcomer",
    color: "#7FD6A8",
    initials: "A",
    online: true,
    inCircle: true,
  },
  {
    id: 5,
    name: "Rin",
    vibe: "needs someone to vent to",
    interest: "Listener needed",
    color: "#D67FA8",
    initials: "R",
    online: true,
    inCircle: false,
  },
  {
    id: 6,
    name: "Drew",
    vibe: "making music at 2am",
    interest: "Music",
    color: "#A87FD6",
    initials: "D",
    online: true,
    inCircle: false,
  },
];

// ─── Ping Prompts ────────────────────────────────────────

export const PING_PROMPTS = [
  "Want to talk?",
  "Same vibe ✨",
  "Let's chat about music",
  "Need a study buddy?",
  "Can't sleep either?",
];

// ─── Active Rooms ────────────────────────────────────────

export const ACTIVE_ROOMS: LiveRoom[] = [
  { id: 1, name: "Cat Lovers Lounge", people: 7, icon: "🐱", community: "Cats" },
  { id: 2, name: "Study Together", people: 4, icon: "📚", community: "Study Buddies" },
  { id: 3, name: "Photo Walk Chat", people: 5, icon: "📸", community: "Photos" },
  { id: 4, name: "Late Night Chill", people: 3, icon: "🎵", community: "Music" },
];

// ─── Community Posts ─────────────────────────────────────

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 1,
    community: "Cats",
    memberCount: "5.2K",
    icon: "🐱",
    color: "#4A3070",
    post: {
      prompt: "Show us your cat's sleeping position right now",
      responseCount: 64,
      activeNow: 14,
      topResponses: [
        "Mine is literally sleeping on my keyboard as I type this",
        "Full loaf mode on top of the fridge 😂",
      ],
    },
  },
  {
    id: 2,
    community: "Dogs",
    memberCount: "4.7K",
    icon: "🐶",
    color: "#2D4A30",
    post: {
      prompt: "What's the weirdest thing your dog is afraid of?",
      responseCount: 83,
      activeNow: 11,
      topResponses: [
        "The Roomba. Every single time.",
        "His own reflection in the oven door 💀",
      ],
    },
  },
  {
    id: 3,
    community: "Photos",
    memberCount: "4.1K",
    icon: "📸",
    color: "#4A3040",
    post: {
      prompt: "Best photo you took this week?",
      responseCount: 47,
      activeNow: 8,
      topResponses: [
        "Golden hour at the lake — finally nailed the reflection shot",
        "Street photography downtown, the rain made everything glow",
      ],
    },
  },
  {
    id: 4,
    community: "Music",
    memberCount: "3.8K",
    icon: "🎵",
    color: "#3A2E1E",
    post: {
      prompt: "Song that's been on repeat this week?",
      responseCount: 112,
      activeNow: 19,
      topResponses: [
        "Can't stop playing that new Tyler track",
        "Rediscovered Radiohead and now I'm in a whole phase",
      ],
    },
  },
];
