import type { ChatTurn } from "@/types";
import { Sparkles } from "lucide-react";

interface ChatBubbleProps {
  turn: ChatTurn;
  children?: React.ReactNode; // for inline previews
}

export function ChatBubble({ turn, children }: ChatBubbleProps) {
  if (turn.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-scout-600 text-white px-4 py-2.5 rounded-2xl rounded-br-md text-sm leading-relaxed">
          {turn.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start gap-2">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-scout-500 to-scout-700 flex items-center justify-center shrink-0 mt-0.5">
        <Sparkles size={14} className="text-white" />
      </div>
      <div className="max-w-[80%] flex flex-col gap-2">
        <div className="bg-white border border-rule text-ink px-4 py-2.5 rounded-2xl rounded-bl-md text-sm leading-relaxed shadow-card">
          {turn.text}
        </div>
        {children}
      </div>
    </div>
  );
}
