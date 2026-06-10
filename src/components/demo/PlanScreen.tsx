"use client";

import { useEffect, useState } from "react";
import { Mic, Send, Sparkles } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { ItineraryTimeline } from "./ItineraryTimeline";
import { sampleChat } from "@/lib/sample-chat";
import { parisItinerary } from "@/lib/sample-itinerary";

export function PlanScreen() {
  const [revealed, setRevealed] = useState(1);

  useEffect(() => {
    if (revealed >= sampleChat.length) return;
    const t = setTimeout(() => setRevealed((r) => r + 1), 1400);
    return () => clearTimeout(t);
  }, [revealed]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-rule bg-white/80 backdrop-blur-sm flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-scout-500 to-scout-700 flex items-center justify-center">
          <Sparkles size={15} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-tight">Scout</p>
          <p className="text-[11px] text-ink-muted leading-tight">Paris · planning</p>
        </div>
        <button
          onClick={() => setRevealed(1)}
          className="text-[11px] text-scout-600 font-medium px-2 py-1 hover:bg-scout-50 rounded-md"
        >
          Replay
        </button>
      </div>

      {/* Thread */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {sampleChat.slice(0, revealed).map((turn, i) => (
          <ChatBubble key={i} turn={turn}>
            {turn.itineraryPreview && (
              <ItineraryTimeline itinerary={parisItinerary} compact />
            )}
          </ChatBubble>
        ))}
      </div>

      {/* Composer (display-only) */}
      <div className="px-3 py-2 border-t border-rule bg-white">
        <div className="flex items-center gap-2 bg-paper border border-rule rounded-full px-3 py-2">
          <Mic size={16} className="text-ink-muted shrink-0" />
          <span className="flex-1 text-xs text-ink-muted">Tap to talk, or type…</span>
          <button className="w-7 h-7 rounded-full bg-scout-600 flex items-center justify-center">
            <Send size={13} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
