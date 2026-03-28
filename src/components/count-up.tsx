"use client";

import { useEffect, useRef, useState } from "react";
import { animation } from "@/lib/constants";

interface CountUpProps {
  /** Target number to count up to */
  end: number;
  /** Text appended after the number (e.g. "+" or ".0") */
  suffix?: string;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
}

/**
 * Animated number counter.
 * Counts from 0 to `end` when scrolled into view.
 * Uses ease-out cubic for a natural deceleration feel.
 */
export function CountUp({
  end,
  suffix = "",
  duration = 1500,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: animation.countUpThreshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * end));

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
