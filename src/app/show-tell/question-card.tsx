"use client";

import { useState } from "react";

interface QuestionCardProps {
  number: number;
  question: string;
  answer: string;
  variant: "green" | "amber";
}

export function QuestionCard({ number, question, answer, variant }: QuestionCardProps) {
  const [revealed, setRevealed] = useState(false);

  const badgeColor = variant === "green"
    ? "bg-primary text-primary-foreground"
    : "bg-accent text-accent-foreground";

  return (
    <div
      className="group cursor-pointer select-none py-5"
      onClick={() => setRevealed(!revealed)}
    >
      <div className="flex gap-4">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${badgeColor}`}>
          {number}
        </span>
        <div className="flex-1">
          <p className="font-medium">{question}</p>

          {/* Tap to reveal hint */}
          <div
            className="mt-3 overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: revealed ? "200px" : "0",
              opacity: revealed ? 1 : 0,
            }}
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </div>

          {!revealed && (
            <p className="mt-2 text-xs text-primary/60 transition-colors group-hover:text-primary">
              Tap to reveal answer
            </p>
          )}
          {revealed && (
            <p className="mt-2 text-xs text-muted-foreground">
              Tap to hide
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
