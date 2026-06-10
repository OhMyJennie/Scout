import type { Anchor } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Play, Star, BookOpen, Film } from "lucide-react";

interface AnchorCardProps {
  anchor: Anchor;
  compact?: boolean;
}

export function AnchorCard({ anchor, compact = false }: AnchorCardProps) {
  if (anchor.type === "film") {
    return (
      <div className="rounded-2xl overflow-hidden border border-rule bg-white shadow-card">
        <div
          className={`aspect-[16/9] bg-gradient-to-br ${anchor.posterTone} relative flex items-end p-3`}
        >
          <div className="absolute top-3 left-3">
            <Tag tone="film">
              <Film size={11} /> Film
            </Tag>
          </div>
          <div className="text-ink">
            <p className="font-serif italic text-lg leading-tight">{anchor.title}</p>
            <p className="text-xs text-ink/70">
              {anchor.director} · {anchor.year}
            </p>
          </div>
        </div>
        {!compact && (
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-film font-semibold">
                <Star size={12} fill="currentColor" /> {anchor.imdbRating}
              </span>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-muted">{anchor.sceneNote}</span>
            </div>
            <p className="text-xs italic text-ink-muted leading-relaxed">
              "{anchor.reviewExcerpt}"
            </p>
            <p className="text-[10px] text-ink-muted">— via {anchor.reviewSource}</p>
          </div>
        )}
      </div>
    );
  }

  if (anchor.type === "music") {
    return (
      <div className="rounded-2xl overflow-hidden border border-rule bg-white shadow-card">
        <div className="flex">
          <div
            className={`w-20 h-20 bg-gradient-to-br ${anchor.posterTone} shrink-0`}
          />
          <div className="flex-1 p-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="min-w-0">
                <p className="font-serif italic text-base leading-tight truncate">
                  {anchor.title}
                </p>
                <p className="text-xs text-ink-muted truncate">{anchor.artist}</p>
              </div>
              <Tag tone="music">Music</Tag>
            </div>
            {!compact && (
              <button className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-music text-white text-xs font-medium rounded-full hover:opacity-90">
                <Play size={11} fill="white" />
                {anchor.durationPreview}s preview
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // book
  return (
    <div className="rounded-2xl overflow-hidden border border-rule bg-white shadow-card">
      <div className="flex gap-3 p-3">
        <div
          className={`w-14 h-20 bg-gradient-to-br ${anchor.posterTone} rounded shrink-0 shadow-sm`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="min-w-0">
              <p className="font-serif italic text-base leading-tight">{anchor.title}</p>
              <p className="text-xs text-ink-muted">{anchor.author}</p>
            </div>
            <Tag tone="book">
              <BookOpen size={11} /> Book
            </Tag>
          </div>
          {!compact && (
            <p className="mt-2 text-xs italic text-ink-muted leading-relaxed border-l-2 border-book/40 pl-2">
              "{anchor.excerpt}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
