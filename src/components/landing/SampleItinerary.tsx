import { parisItinerary } from "@/lib/sample-itinerary";
import { Tag } from "@/components/ui/Tag";
import { MapPin } from "lucide-react";

export function SampleItinerary() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
              Sample route
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink">
              {parisItinerary.title}
            </h2>
            <p className="mt-3 text-ink-muted leading-relaxed">{parisItinerary.subtitle}</p>
          </div>
          <Tag tone="scout" className="hidden md:inline-flex">
            <MapPin size={11} />
            {parisItinerary.city}
          </Tag>
        </div>

        <div className="overflow-x-auto -mx-6 px-6 scrollbar-hide">
          <ol className="flex gap-4 min-w-max pb-2">
            {parisItinerary.stops.map((stop, i) => {
              const tone = stop.anchors[0]?.type ?? "neutral";
              const accentBorder =
                tone === "film"
                  ? "border-l-film"
                  : tone === "music"
                  ? "border-l-music"
                  : tone === "book"
                  ? "border-l-book"
                  : "border-l-rule";
              return (
                <li
                  key={stop.id}
                  className={`w-[260px] shrink-0 bg-white border border-rule border-l-4 ${accentBorder} rounded-2xl p-4 shadow-card`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-[11px] text-ink-muted">
                      {stop.time}
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted">
                      {String(i + 1).padStart(2, "0")} / {parisItinerary.stops.length}
                    </span>
                  </div>
                  <h3 className="font-serif italic text-lg leading-tight">{stop.name}</h3>
                  <p className="text-[11px] text-ink-muted mb-3">{stop.neighborhood}</p>
                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
                    {stop.brief}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {stop.anchors.map((a) => (
                      <Tag key={a.id} tone={a.type}>
                        {a.type === "film"
                          ? `🎬 ${a.title}`
                          : a.type === "music"
                          ? `🎵 ${a.title}`
                          : `📖 ${a.title}`}
                      </Tag>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
