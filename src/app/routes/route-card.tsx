"use client";

import { useState } from "react";
import { MapPin, Route, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TestRoute } from "@/data/routes";

export function RouteCard({ route }: { route: TestRoute }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="cursor-pointer rounded-lg border bg-white transition-all duration-300 hover:shadow-md"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {route.number}
            </div>
            <h3 className="font-semibold">Route {route.number}</h3>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {route.summary}
        </p>

        <div className="mt-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Key Roads
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {route.keyRoads.map((road) => (
              <Badge key={road} variant="secondary" className="text-xs">
                {road}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className="overflow-hidden transition-all duration-400 ease-out"
          style={{
            maxHeight: expanded ? "200px" : "0",
            opacity: expanded ? 1 : 0,
            marginTop: expanded ? "12px" : "0",
          }}
        >
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Route className="h-3.5 w-3.5" />
            Manoeuvres
          </div>
          <ul className="mt-1.5 space-y-1">
            {route.manoeuvres.map((m) => (
              <li key={m} className="text-sm text-muted-foreground">
                &bull; {m}
              </li>
            ))}
          </ul>
        </div>

        {!expanded && (
          <p className="mt-3 text-xs text-primary/60">
            Tap to see manoeuvres
          </p>
        )}
      </div>
    </div>
  );
}
