"use client";

import { AnimateIn } from "@/components/animate-in";
import { CountUp } from "@/components/count-up";

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-amber-400">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function GoogleRating() {
  return (
    <AnimateIn from="up">
      <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6 shadow-sm sm:flex-row sm:gap-6 sm:p-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold tabular-nums">
            <CountUp end={5} suffix=".0" />
          </span>
        </div>
        <div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            <a
              href="https://www.google.com/maps/place/Nawab+School+Of+Motoring/@52.6569,-1.0728,17z/data=!4m8!3m7!1s0x4877613682d1a7e9:0x7a2e5be5cc0c8e0!8m2!3d52.6569!4d-1.0728!9m1!1b1!16s%2Fg%2F11c5r7_9zz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              <CountUp end={199} /> reviews on Google
            </a>
            {" "}&middot;{" "}
            <a
              href="https://www.freeindex.co.uk/profile(nawab-school-of-motoring)_536371.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              <CountUp end={457} /> on FreeIndex
            </a>
          </p>
        </div>
      </div>
    </AnimateIn>
  );
}
