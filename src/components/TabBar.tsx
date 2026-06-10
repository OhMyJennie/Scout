"use client";

import { Compass, Map, BookOpen } from "lucide-react";

export type TabId = "plan" | "trip" | "journal";

interface TabBarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: typeof Compass }[] = [
  { id: "plan", label: "Plan", icon: Compass },
  { id: "trip", label: "Trip", icon: Map },
  { id: "journal", label: "Journal", icon: BookOpen },
];

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="bg-white/95 backdrop-blur-md border-t border-rule px-4 pt-2 pb-6">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
                isActive ? "text-scout-600" : "text-ink-muted/60"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.4 : 1.6} />
              <span className={`text-[10px] ${isActive ? "font-semibold" : "font-normal"}`}>
                {tab.label}
              </span>
              {isActive && <div className="w-1 h-1 rounded-full bg-scout-500 mt-0.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
