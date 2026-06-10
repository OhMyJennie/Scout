import { HTMLAttributes } from "react";

type Tone = "neutral" | "film" | "music" | "book" | "scout";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const toneStyles: Record<Tone, string> = {
  neutral: "bg-rule/50 text-ink-muted",
  film: "bg-film/10 text-film",
  music: "bg-music/10 text-music",
  book: "bg-book/10 text-book",
  scout: "bg-scout-50 text-scout-700",
};

export function Tag({ tone = "neutral", className = "", children, ...props }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full ${toneStyles[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
