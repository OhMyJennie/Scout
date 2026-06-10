import { Compass, Map, BookOpen } from "lucide-react";

const stages = [
  {
    icon: Compass,
    title: "Plan",
    accent: "text-scout-600",
    bg: "bg-scout-50",
    body:
      "Tell Scout what you've been watching, listening to, reading. It builds a route that follows your taste — film locations, jazz cellars, the bookshop that printed Joyce.",
  },
  {
    icon: Map,
    title: "Walk",
    accent: "text-film",
    bg: "bg-film/10",
    body:
      "On the ground, Scout speaks up only when you arrive somewhere it has something to say. A 30-second take, or a 3-minute deep dive. Your call.",
  },
  {
    icon: BookOpen,
    title: "Write",
    accent: "text-book",
    bg: "bg-book/10",
    body:
      "When you're back, Scout drafts the trip into a journal — diary, essay, or letter. Your photos, your captures, the lines Scout said that you wanted to keep.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-y border-rule">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
            How it works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink">
            Three stages, one companion.
          </h2>
          <p className="mt-3 text-ink-muted leading-relaxed">
            Scout isn&apos;t a search engine for hotels and it isn&apos;t a checklist of
            top-tens. It&apos;s a friend who happens to know the filming locations
            and the right vinyl shop on the way back.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative bg-paper border border-rule rounded-2xl p-6"
              >
                <span className="absolute top-6 right-6 font-mono text-xs text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={s.accent} strokeWidth={2} />
                </div>
                <h3 className="font-serif italic text-2xl text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
