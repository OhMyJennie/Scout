"use client";

import { ReactNode } from "react";
import { TabBar, TabId } from "./TabBar";

interface PhoneFrameProps {
  children: ReactNode;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function PhoneFrame({ children, activeTab, onTabChange }: PhoneFrameProps) {
  return (
    <div className="relative w-full max-w-[390px] h-[844px] mx-auto">
      <div className="relative w-full h-full bg-black rounded-[3rem] border-[3px] border-gray-800 shadow-phone overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50" />

        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-14 z-40 flex items-end justify-between px-8 pb-1">
          <span className="text-white text-xs font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
              <rect x="0" y="4" width="3" height="8" rx="1" opacity="0.3" />
              <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.5" />
              <rect x="9" y="0" width="3" height="12" rx="1" opacity="0.7" />
              <rect x="13.5" y="0" width="3" height="12" rx="1" />
            </svg>
            <span className="text-white text-xs ml-1">5G</span>
          </div>
        </div>

        {/* Screen content */}
        <div className="absolute inset-0 pt-14 pb-20 bg-paper overflow-hidden">
          {children}
        </div>

        {/* Tab bar */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          <TabBar activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50" />
      </div>
    </div>
  );
}
