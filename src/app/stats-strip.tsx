"use client";

import { CountUp } from "@/components/count-up";
import { business } from "@/lib/constants";

const totalReviews = business.reviews.google.count + business.reviews.freeindex.count;

export function StatsStrip() {
  return (
    <section className="bg-accent px-4 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-accent-foreground lg:px-8">
        <span>
          <CountUp end={totalReviews} suffix="+" className="tabular-nums" /> Reviews
        </span>
        <span className="hidden text-accent-foreground/30 sm:inline">|</span>
        <span>
          <CountUp end={business.reviews.google.rating} suffix=".0" className="tabular-nums" /> Stars on Google
        </span>
        <span className="hidden text-accent-foreground/30 sm:inline">|</span>
        <span>{business.credentials[0]}</span>
        <span className="hidden text-accent-foreground/30 sm:inline">|</span>
        <span>First-Time Pass Specialists</span>
      </div>
    </section>
  );
}
