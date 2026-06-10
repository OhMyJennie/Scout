"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import type { TabId } from "@/components/TabBar";
import { PlanScreen } from "@/components/demo/PlanScreen";
import { TripScreen } from "@/components/demo/TripScreen";
import { JournalScreen } from "@/components/demo/JournalScreen";

export default function DemoPage() {
  const [tab, setTab] = useState<TabId>("plan");

  return (
    <main className="min-h-screen bg-paper py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top nav */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition"
          >
            <ArrowLeft size={15} />
            Back
          </Link>
          <span className="text-xs text-ink-muted">
            Demo · {tab === "plan" ? "Plan with Scout" : tab === "trip" ? "Trip Mode" : "Journal"}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
          {/* Left rail — story */}
          <div className="hidden lg:block lg:max-w-sm lg:justify-self-end lg:text-right pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
              {tab === "plan"
                ? "01 · Before"
                : tab === "trip"
                ? "02 · During"
                : "03 · After"}
            </p>
            <h2 className="font-serif text-3xl leading-tight text-ink">
              {tab === "plan"
                ? "Plan with Scout"
                : tab === "trip"
                ? "Walk with Scout"
                : "Write with Scout"}
            </h2>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              {tab === "plan"
                ? "Voice or text. Scout asks one or two questions, then drafts a route built around the films, music, and books you actually like."
                : tab === "trip"
                ? "Your phone gets quiet. When you arrive somewhere Scout has something to say, you'll see a 30-second take or a 3-minute deep dive — your call."
                : "When the trip is done, Scout drafts the journal — diary, essay, or letter. Your captures, your photos, the lines Scout said that you wanted to keep."}
            </p>
            <p className="mt-4 text-xs text-ink-muted/70">
              Try the other tabs in the phone →
            </p>
          </div>

          {/* Phone */}
          <div className="lg:col-start-2">
            <PhoneFrame activeTab={tab} onTabChange={setTab}>
              {tab === "plan" && <PlanScreen />}
              {tab === "trip" && <TripScreen />}
              {tab === "journal" && <JournalScreen />}
            </PhoneFrame>
          </div>

          {/* Right rail — context for mobile fallback */}
          <div className="lg:hidden">
            <p className="text-xs text-center text-ink-muted leading-relaxed">
              Tap the bottom tabs to switch between{" "}
              <span className="font-semibold text-ink">Plan · Trip · Journal</span>.
              Scroll inside the phone for full content.
            </p>
          </div>

          {/* Right rail desktop — sticky note */}
          <div className="hidden lg:block lg:max-w-sm pt-8">
            <div className="bg-white border border-rule rounded-2xl p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-2">
                What's on screen
              </p>
              <ul className="text-sm text-ink-muted leading-relaxed space-y-1.5">
                {tab === "plan" && (
                  <>
                    <li>· Replayed Scout chat (typewriter pace)</li>
                    <li>· Inline itinerary preview card</li>
                    <li>· Voice + text composer (display only)</li>
                  </>
                )}
                {tab === "trip" && (
                  <>
                    <li>· Geofence "you&apos;re here" pill</li>
                    <li>· Brief / Deep dive audio toggle</li>
                    <li>· Film, music, and book anchor cards</li>
                  </>
                )}
                {tab === "journal" && (
                  <>
                    <li>· Diary / Essay / Letter style picker</li>
                    <li>· Three pre-generated chapters</li>
                    <li>· Scout's lines preserved as callouts</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
