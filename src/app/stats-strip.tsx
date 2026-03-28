"use client";

import { CountUp } from "@/components/count-up";

export function StatsStrip() {
  return (
    <section className="bg-accent px-4 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-accent-foreground lg:px-8">
        <span>
          <CountUp end={38} suffix="+" className="tabular-nums" /> Students
          Passed
        </span>
        <span className="hidden text-accent-foreground/30 sm:inline">
          |
        </span>
        <span>DVSA Approved</span>
        <span className="hidden text-accent-foreground/30 sm:inline">
          |
        </span>
        <span>First-Time Pass Specialists</span>
        <span className="hidden text-accent-foreground/30 sm:inline">
          |
        </span>
        <span>
          <CountUp end={7} className="tabular-nums" /> Days a Week
        </span>
      </div>
    </section>
  );
}
