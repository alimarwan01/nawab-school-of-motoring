import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { AnimateIn } from "@/components/animate-in";
import { RouteCard } from "./route-card";
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
        <div className="mx-auto max-w-6xl lg:px-8">
          <AnimateIn from="left">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Leicester Test Routes
            </h1>
            <p className="mt-3 text-primary-foreground/70">
              16 driving test routes from the Cannock Street test centre.
              Familiarise yourself with the routes before your test day. Tap a
              route to see the manoeuvres.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 sm:px-6 lg:px-8">
          {testRoutes.map((route, i) => (
            <AnimateIn
              key={route.number}
              from={i % 2 === 0 ? "left" : "right"}
              delay={Math.min(i * 60, 300)}
              duration={500}
            >
              <RouteCard route={route} />
            </AnimateIn>
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
