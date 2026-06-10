"use client";

import { useState } from "react";
import { Share2, Quote } from "lucide-react";
import type { JournalStyle } from "@/types";
import { sampleJournal } from "@/lib/sample-journal";

const STYLES: { id: JournalStyle; label: string }[] = [
  { id: "diary", label: "Diary" },
  { id: "essay", label: "Essay" },
  { id: "letter", label: "Letter" },
];

export function JournalScreen() {
  const [style, setStyle] = useState<JournalStyle>(sampleJournal.style);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-paper">
      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-rule">
        <p className="text-[11px] text-ink-muted uppercase tracking-wider">
          One day in Paris · Journal
        </p>
        <h2 className="text-xl font-serif italic leading-tight">A Moveable Day</h2>
      </div>

      {/* Style picker */}
      <div className="px-4 pt-3">
        <div className="bg-rule/50 rounded-xl p-1 flex">
          {STYLES.map((s) => (
            <button
              key={s.id}
              onClick={() => setStyle(s.id)}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition ${
                style === s.id
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <div className="px-4 py-4 space-y-5">
        {sampleJournal.chapters.map((c, i) => (
          <article key={i} className="space-y-2">
            <header className="flex items-baseline gap-2">
              <span className="font-mono text-[11px] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif italic text-lg leading-tight text-ink">
                {c.title}
              </h3>
            </header>
            {c.scoutCallout && (
              <div className="border-l-2 border-scout-500 pl-3 my-2">
                <div className="flex items-start gap-1.5">
                  <Quote size={11} className="text-scout-600 mt-1 shrink-0" />
                  <p className="text-[11px] italic text-ink-muted leading-relaxed">
                    {c.scoutCallout}
                  </p>
                </div>
                <p className="text-[10px] text-ink-muted/70 mt-0.5 ml-4">— Scout</p>
              </div>
            )}
            <p className="text-sm text-ink leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>

      {/* Share */}
      <div className="px-4 pb-4 mt-auto">
        <button className="w-full inline-flex items-center justify-center gap-2 h-11 bg-ink text-white rounded-xl text-sm font-medium hover:bg-ink/90">
          <Share2 size={15} /> Share journal
        </button>
        <p className="text-[10px] text-center text-ink-muted mt-2">
          Style: {style} · Edit any chapter before sharing
        </p>
      </div>
    </div>
  );
}
