import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Bring your taste.{" "}
          <span className="italic text-scout-600">Scout brings the city.</span>
        </h2>
        <p className="mt-5 text-ink-muted leading-relaxed">
          The demo is a one-day Paris route built around{" "}
          <em>Midnight in Paris</em>, a Hemingway café, and a 16th-century jazz
          cellar. Plan, walk, and journal — all three stages in your pocket.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/app"
            className="inline-flex items-center gap-2 h-12 px-7 bg-ink text-white rounded-xl font-medium hover:bg-scout-900 transition-colors"
          >
            Open the demo
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Mock data only · No login · Mobile-shaped on purpose
        </p>
      </div>
    </section>
  );
}
