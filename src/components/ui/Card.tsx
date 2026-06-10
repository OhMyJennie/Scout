import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional accent rail on the left edge — anchor type or "scout" */
  accent?: "film" | "music" | "book" | "scout";
  padding?: "none" | "sm" | "md" | "lg";
}

const accentStyles = {
  film: "before:bg-film",
  music: "before:bg-music",
  book: "before:bg-book",
  scout: "before:bg-scout-600",
} as const;

const paddingStyles = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
} as const;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ accent, padding = "md", className = "", children, ...props }, ref) => {
    const accentRail = accent
      ? `relative before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-l-2xl ${accentStyles[accent]}`
      : "";
    return (
      <div
        ref={ref}
        className={`bg-white border border-rule rounded-2xl shadow-card ${accentRail} ${paddingStyles[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
