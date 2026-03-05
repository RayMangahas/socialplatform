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
// Updated: top 3 are Stress, Breakup, History

export const ACTIVE_ROOMS: LiveRoom[] = [
  { id: 1, name: "Stress Relief Room", people: 7, icon: "😮‍💨", community: "Stress" },
  { id: 2, name: "Breakup Support", people: 5, icon: "💔", community: "Breakup" },
  { id: 3, name: "History Talk", people: 4, icon: "📜", community: "History" },
  { id: 4, name: "Late Night Chill", people: 3, icon: "🎵", community: "Music" },
];

// ─── Community Posts ─────────────────────────────────────

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 1,
    community: "Cats",
    memberCount: "87",
    icon: "🐱",
    color: "#4A3070",
    post: {
      prompt: "Show us your cat's sleeping position right now",
      responseCount: 12,
      activeNow: 4,
      topResponses: [
        "Mine is literally sleeping on my keyboard as I type this",
        "Full loaf mode on top of the fridge 😂",
      ],
    },
  },
  {
    id: 2,
    community: "Dogs",
    memberCount: "64",
    icon: "🐶",
    color: "#2D4A30",
    post: {
      prompt: "What's the weirdest thing your dog is afraid of?",
      responseCount: 18,
      activeNow: 3,
      topResponses: [
        "The Roomba. Every single time.",
        "His own reflection in the oven door 💀",
      ],
    },
  },
  {
    id: 3,
    community: "Photos",
    memberCount: "52",
    icon: "📸",
    color: "#4A3040",
    post: {
      prompt: "Best photo you took this week?",
      responseCount: 9,
      activeNow: 2,
      topResponses: [
        "Golden hour at the lake — finally nailed the reflection shot",
        "Street photography downtown, the rain made everything glow",
      ],
    },
  },
  {
    id: 4,
    community: "Music",
    memberCount: "41",
    icon: "🎵",
    color: "#3A2E1E",
    post: {
      prompt: "Song that's been on repeat this week?",
      responseCount: 22,
      activeNow: 5,
      topResponses: [
        "Can't stop playing that new Tyler track",
        "Rediscovered Radiohead and now I'm in a whole phase",
      ],
    },
  },
  {
    id: 5,
    community: "Jokes",
    memberCount: "28",
    icon: "😂",
    color: "#8B6914",
    post: {
      prompt: "Drop your best joke 😂",
      responseCount: 7,
      activeNow: 2,
      topResponses: [
        "A man walked into his house and was delighted when he discovered that someone had stolen all of his lamps.",
        "Check out this standup clip 😂👇",
      ],
    },
  },
];
