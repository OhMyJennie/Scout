// Scout core types — kept intentionally lean for the demo.

export type AnchorType = "film" | "music" | "book";

export interface CulturalPersona {
  film: number; // 0-100
  music: number;
  book: number;
  genres: string[];
  pace: "relaxed" | "moderate" | "packed";
}

export interface FilmAnchor {
  type: "film";
  id: string;
  title: string;
  director: string;
  year: number;
  imdbRating: number;
  reviewExcerpt: string;
  reviewSource: "Letterboxd" | "IMDb";
  sceneNote: string;
  posterTone: string; // tailwind gradient utility, since we don't ship real posters
}

export interface MusicAnchor {
  type: "music";
  id: string;
  title: string;
  artist: string;
  album: string;
  durationPreview: number; // seconds
  spotifyUrl: string;
  posterTone: string;
}

export interface BookAnchor {
  type: "book";
  id: string;
  title: string;
  author: string;
  excerpt: string;
  goodreadsUrl: string;
  posterTone: string;
}

export type Anchor = FilmAnchor | MusicAnchor | BookAnchor;

export interface Stop {
  id: string;
  time: string; // "09:30"
  name: string;
  neighborhood: string;
  brief: string; // 1-line summary
  deepDive: string; // longer narrative
  anchors: Anchor[];
}

export interface Itinerary {
  id: string;
  city: string;
  title: string;
  subtitle: string;
  stops: Stop[];
}

export type ChatRole = "user" | "scout";

export interface ChatTurn {
  role: ChatRole;
  text: string;
  // Optional: attach an itinerary preview to the message
  itineraryPreview?: boolean;
}

export type JournalStyle = "diary" | "essay" | "letter";

export interface Chapter {
  title: string;
  body: string;
  scoutCallout?: string; // a line Scout said that the user kept verbatim
}

export interface Journal {
  style: JournalStyle;
  chapters: Chapter[];
}
