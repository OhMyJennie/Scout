import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SampleItinerary } from "@/components/landing/SampleItinerary";
import { ScoutIntro } from "@/components/landing/ScoutIntro";
import { CTA } from "@/components/landing/CTA";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <SampleItinerary />
      <ScoutIntro />
      <CTA />
      <footer className="py-10 bg-paper border-t border-rule">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted">
          <span>Scout · A cultural travel companion demo</span>
          <span>Built with Next.js · Mock data · Paris seed</span>
        </div>
      </footer>
    </main>
  );
}
