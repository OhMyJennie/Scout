import type { ChatTurn } from "@/types";

export const sampleChat: ChatTurn[] = [
  {
    role: "scout",
    text: "Hi, I'm Scout. Where are we going, and what should the trip feel like?",
  },
  {
    role: "user",
    text: "Paris — one day. I want to walk it like Midnight in Paris. And squeeze in some jazz.",
  },
  {
    role: "scout",
    text: "Good combination. Two quick checks: full day or evening only? And open to a Left Bank book detour — Shakespeare and Co, a Hemingway café?",
  },
  {
    role: "user",
    text: "Full day. Yes to the book detour.",
  },
  {
    role: "scout",
    text: "Got it. Built a Left Bank route that picks up Hemingway's morning cafés, the Pont Neuf sequence from the film, Rodin's rose garden with Piaf, and a 16th-century jazz cellar to close. Five stops, relaxed pace.",
    itineraryPreview: true,
  },
];
