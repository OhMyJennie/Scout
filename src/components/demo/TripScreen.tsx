"use client";

import { useState } from "react";
import { Camera, MessageCircle, MapPin } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { AnchorCard } from "./AnchorCard";
import { parisItinerary } from "@/lib/sample-itinerary";

const PONT_NEUF_INDEX = 2; // index of Pont Neuf in itinerary.stops

export function TripScreen() {
  const [audioMode, setAudioMode] = useState<"brief" | "deep">("brief");
  const stop = parisItinerary.stops[PONT_NEUF_INDEX];

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header — minimal trip mode */}
      <div className="px-4 py-3 bg-white border-b border-rule">
        <div className="flex items-center justify-between mb-1">
          <Tag tone="scout">
            <MapPin size={11} /> Paris · Day 1
          </Tag>
          <span className="text-[11px] text-ink-muted font-mono">
            Stop {PONT_NEUF_INDEX + 1} of {parisItinerary.stops.length}
          </span>
        </div>
        <p className="text-[11px] text-ink-muted">Now visiting</p>
        <h2 className="text-xl font-serif italic leading-tight">{stop.name}</h2>
        <p className="text-xs text-ink-muted">{stop.neighborhood}</p>
      </div>

      {/* Geofence pill */}
      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-emerald-800 font-medium">
            You&apos;re here — audio ready
          </span>
        </div>
      </div>

      {/* Audio segmented control */}
      <div className="px-4 pt-3">
        <div className="bg-rule/50 rounded-xl p-1 flex">
          <button
            onClick={() => setAudioMode("brief")}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition ${
              audioMode === "brief"
                ? "bg-white text-ink shadow-sm"
                : "text-ink-muted"
            }`}
          >
            Brief · 30s
          </button>
          <button
            onClick={() => setAudioMode("deep")}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition ${
              audioMode === "deep"
                ? "bg-white text-ink shadow-sm"
                : "text-ink-muted"
            }`}
          >
            Deep dive · 3min
          </button>
        </div>

        <div className="mt-3 p-3 bg-white border border-rule rounded-2xl shadow-card">
          <p className="text-sm leading-relaxed text-ink">
            {audioMode === "brief" ? stop.brief : stop.deepDive}
          </p>
        </div>
      </div>

      {/* Anchors */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
            Cultural anchors
          </h3>
        </div>
        <div className="space-y-3">
          {stop.anchors.map((a) => (
            <AnchorCard key={a.id} anchor={a} />
          ))}
          {/* Show neighbors' anchors too, for richness in the demo */}
          <AnchorCard anchor={parisItinerary.stops[3].anchors[0]} />
          <AnchorCard anchor={parisItinerary.stops[1].anchors[0]} />
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="px-4 pt-4 pb-4 mt-auto flex gap-2">
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 bg-white border border-rule rounded-xl text-sm font-medium text-ink hover:bg-paper">
          <MessageCircle size={15} /> Ask Scout
        </button>
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 bg-scout-600 text-white rounded-xl text-sm font-medium hover:bg-scout-700">
          <Camera size={15} /> Capture
        </button>
      </div>
    </div>
  );
}
