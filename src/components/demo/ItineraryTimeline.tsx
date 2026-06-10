import type { Itinerary } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { MapPin } from "lucide-react";

interface ItineraryTimelineProps {
  itinerary: Itinerary;
  compact?: boolean;
  onStopClick?: (stopId: string) => void;
}

export function ItineraryTimeline({
  itinerary,
  compact = false,
  onStopClick,
}: ItineraryTimelineProps) {
  return (
    <div className="bg-white border border-rule rounded-2xl shadow-card overflow-hidden">
      <div className="p-3 border-b border-rule">
        <div className="flex items-center gap-1.5 mb-1">
          <MapPin size={12} className="text-scout-600" />
          <Tag tone="scout">{itinerary.city}</Tag>
        </div>
        <h3 className="font-serif italic text-base leading-tight">{itinerary.title}</h3>
        {!compact && (
          <p className="text-xs text-ink-muted mt-1 leading-relaxed">{itinerary.subtitle}</p>
        )}
      </div>
      <div className="divide-y divide-rule">
        {itinerary.stops.map((stop) => {
          const tones = stop.anchors.map((a) => a.type);
          return (
            <button
              key={stop.id}
              onClick={() => onStopClick?.(stop.id)}
              className="w-full text-left px-3 py-2.5 hover:bg-paper transition-colors flex items-start gap-3"
            >
              <span className="font-mono text-[11px] text-ink-muted pt-0.5 w-12 shrink-0">
                {stop.time}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink leading-tight">{stop.name}</p>
                <p className="text-[11px] text-ink-muted truncate">{stop.neighborhood}</p>
                {!compact && tones.length > 0 && (
                  <div className="flex gap-1 mt-1.5">
                    {tones.map((t, i) => (
                      <Tag key={i} tone={t}>
                        {t}
                      </Tag>
                    ))}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
