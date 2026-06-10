import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* warm paper backdrop with subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper to-amber-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(79,70,229,0.06),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-scout-500 to-scout-700 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <span className="font-serif italic text-lg">Scout</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-ink max-w-4xl">
          Read a city through the{" "}
          <span className="italic text-film">films</span>,{" "}
          <span className="italic text-music">music</span>, and{" "}
          <span className="italic text-book">books</span> that shaped it.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
          Scout is the AI companion who gets your taste. It plans with you, walks
          with you, and writes the trip down so you don&apos;t have to.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/app"
            className="inline-flex items-center gap-2 h-12 px-6 bg-scout-600 text-white rounded-xl font-medium hover:bg-scout-700 transition-colors"
          >
            Try the demo
            <ArrowRight size={16} />
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 h-12 px-6 bg-white border border-rule text-ink rounded-xl font-medium hover:bg-paper transition-colors"
          >
            How it works
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-muted">
          <span>Paris · Midnight in Paris route</span>
          <span className="hidden md:inline">·</span>
          <span>Plan, walk, and journal in one place</span>
          <span className="hidden md:inline">·</span>
          <span>No bookings. No SEO. Just taste.</span>
        </div>
      </div>
    </section>
  );
}
