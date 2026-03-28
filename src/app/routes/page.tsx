import type { Metadata } from "next";
import { MapPin, Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/cta-banner";
import { testRoutes } from "@/data/routes";

export const metadata: Metadata = {
  title: "Test Routes",
  description:
    "16 Leicester driving test routes from the Cannock Street test centre. Know the routes before your test day.",
};

export default function RoutesPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Leicester Test Routes
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            16 driving test routes from the Cannock Street test centre. Familiarise
            yourself with the routes before your test day.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 sm:px-6 lg:px-8">
          {testRoutes.map((route) => (
            <Card key={route.number}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {route.number}
                  </div>
                  Route {route.number}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {route.summary}
                </p>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Key Roads
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {route.keyRoads.map((road) => (
                      <Badge
                        key={road}
                        variant="secondary"
                        className="text-xs"
                      >
                        {road}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Route className="h-3.5 w-3.5" />
                    Manoeuvres
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {route.manoeuvres.map((m) => (
                      <li
                        key={m}
                        className="text-sm text-muted-foreground"
                      >
                        &bull; {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTABanner
        title="Want to Practice These Routes?"
        subtitle="We cover all test routes during your lessons so you feel confident on test day."
      />
    </>
  );
}
