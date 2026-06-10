import { Sparkles } from "lucide-react";
import { samplePersona } from "@/lib/sample-persona";

const dimensions = [
  { key: "film" as const, label: "Film", color: "bg-film" },
  { key: "music" as const, label: "Music", color: "bg-music" },
  { key: "book" as const, label: "Books", color: "bg-book" },
];

export function ScoutIntro() {
  return (
    <section className="py-20 md:py-28 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.15),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-scout-400 to-scout-600 flex items-center justify-center">
              <Sparkles size={15} className="text-white" />
            </div>
            <span className="font-serif italic text-xl">Meet Scout</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1]">
            Curious. Warm. Well-read.
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
            Scout has the patience of a librarian and the playlist of a film
            student. It won&apos;t push you toward what&apos;s popular — it pushes you
            toward what&apos;s yours.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed max-w-lg">
            No bookings. No commissions. No fake top-tens. Every fact has a
            source, every quote a citation. If Scout doesn&apos;t know, it says so.
          </p>
        </div>

        {/* Persona card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-4">
            Cultural persona — sample
          </p>
          <div className="space-y-5">
            {dimensions.map((d) => (
              <div key={d.key}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="font-serif italic text-lg">{d.label}</span>
                  <span className="font-mono text-xs text-white/60">
                    {samplePersona[d.key]}
                  </span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${d.color} rounded-full`}
                    style={{ width: `${samplePersona[d.key]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-white/50 mb-2">
              Genres
            </p>
            <div className="flex flex-wrap gap-1.5">
              {samplePersona.genres.map((g) => (
                <span
                  key={g}
                  className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-white/80"
                >
                  {g}
                </span>
              ))}
              <span className="text-xs px-2.5 py-1 bg-scout-600/30 border border-scout-500/30 rounded-full text-scout-100">
                pace · {samplePersona.pace}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
