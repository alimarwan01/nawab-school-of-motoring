"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "none";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  from?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimateIn({
  children,
  className = "",
  from = "up",
  delay = 0,
  duration = 600,
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const translate = {
    up: "translate3d(0, 32px, 0)",
    left: "translate3d(-32px, 0, 0)",
    right: "translate3d(32px, 0, 0)",
    none: "translate3d(0, 0, 0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : translate[from],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
