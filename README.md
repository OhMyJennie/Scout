# Scout

> **Read a city through the films, music, and books that shaped it.**
>
> Scout is the AI companion who gets your taste — plans with you, walks with you, writes with you.

A demo for a cultural travel companion product. Three-stage flow:

1. **Plan** — Scout chats with you and drafts a route around your taste.
2. **Walk** — On the ground, Scout speaks up only when you arrive somewhere it has something to say.
3. **Write** — At the end of the trip, Scout drafts the journal — diary, essay, or letter.

The seed route is a one-day Paris itinerary built around *Midnight in Paris*, a Hemingway café, Rodin's rose garden, and a 16th-century jazz cellar.

---

## What this project is — and isn't

| Is | Isn't |
| --- | --- |
| A product-shape demo (UI + sample content) | A working AI product — there is no live LLM call yet |
| Mock data, mock IMDb / Spotify / Goodreads links | A booking platform |
| Mobile-shaped on purpose (390×844 phone frame on `/app`) | A native app — pure web demo |
| One opinionated route in Paris | A library of cities |

---

## Tech stack

- **Next.js 15** + App Router
- **React 18**
- **Tailwind CSS 3**
- **TypeScript** (strict)
- **lucide-react** for icons
- **Inter** + **Fraunces** (Google Fonts)
- Deployed on **Netlify**

---

## Getting started

> ⚠️ Requires **Node.js ≥ 18.18** (Next 15 minimum). Node 18.12.x will refuse to start.
> Netlify's build environment uses Node 20 (set in `netlify.toml`).

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run build        # production build
```

### Routes

- `/` — Marketing landing (Hero · How it works · Sample itinerary · Scout intro · CTA)
- `/app` — Interactive phone-frame demo with three tabs: **Plan · Trip · Journal**

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Inter + Fraunces fonts
│   ├── globals.css           # Tailwind + tokens
│   ├── page.tsx              # Landing (/)
│   └── app/page.tsx          # Demo (/app)
├── components/
│   ├── PhoneFrame.tsx        # 390×844 phone shell
│   ├── TabBar.tsx            # Plan / Trip / Journal
│   ├── ui/                   # Button, Card, Tag
│   ├── landing/              # Hero, HowItWorks, SampleItinerary, ScoutIntro, CTA
│   └── demo/                 # PlanScreen, TripScreen, JournalScreen + AnchorCard, ChatBubble, ItineraryTimeline
├── lib/                      # sample-persona, sample-itinerary, sample-chat, sample-journal
└── types/                    # CulturalPersona, Itinerary, Stop, Anchor, Journal
```

---

## Design tokens

| Token | Value | Usage |
| --- | --- | --- |
| `paper` | `#FAF7F2` | Background, warm paper |
| `ink` | `#0E0E10` | Headings, primary text |
| `ink-muted` | `#5C5C66` | Secondary text |
| `rule` | `#E6E1D7` | Borders, dividers |
| `scout` | `#4F46E5` (indigo-600) | Primary CTA, Scout-related UI |
| `film` | `#D97706` (amber) | Film anchors |
| `music` | `#E11D48` (rose) | Music anchors |
| `book` | `#4D7C0F` (sage) | Book anchors |

Headlines use **Fraunces italic**; body uses **Inter**.

---

## Deployment

The project is wired for **Netlify**:

1. Push to GitHub
2. In Netlify dashboard → "Import from Git" → pick this repo
3. Netlify auto-detects `netlify.toml` (uses `@netlify/plugin-nextjs`, Node 20)
4. Live URL gets attached here once deployed

> **Live demo:** _coming once Netlify connect is done_

---

## Roadmap (rough)

- [ ] Wire a real LLM call into PlanScreen (Anthropic SDK, streaming)
- [ ] Real Spotify 30-second preview SDK on music anchors
- [ ] IMDb / Letterboxd licensed pulls for film anchors
- [ ] Cultural persona onboarding flow
- [ ] London or NYC seed route

---

*Mock data only. Not a real travel-booking product.*
