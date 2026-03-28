"use client";

import { useEffect, useRef, useState } from "react";
import { animation } from "@/lib/constants";

type Direction = "up" | "left" | "right" | "none";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  /** Direction the element slides in from */
  from?: Direction;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Total animation duration (ms) */
  duration?: number;
  /** If true (default), only animates once per page load */
  once?: boolean;
}

/**
 * Scroll-triggered animation wrapper.
 * Elements start invisible and slide in when they enter the viewport.
 * Uses IntersectionObserver — no animation library needed.
 */
export function AnimateIn({
  children,
  className = "",
  from = "up",
  delay = 0,
  duration = animation.defaultDuration,
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: animation.intersectionThreshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const px = `${animation.slideDistance}px`;
  const translate = {
    up: `translate3d(0, ${px}, 0)`,
    left: `translate3d(-${px}, 0, 0)`,
    right: `translate3d(${px}, 0, 0)`,
    none: "translate3d(0, 0, 0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : translate[from],
        transition: `opacity ${duration}ms ${animation.easing} ${delay}ms, transform ${duration}ms ${animation.easing} ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
