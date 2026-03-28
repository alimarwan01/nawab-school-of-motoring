import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { CTABanner } from "@/components/cta-banner";
import { testDayHire } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Driving lesson prices in Leicester. From \u00a328/hr with block booking discounts. Student rates, Pass Plus, and test day car hire available.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Pricing</h1>
          <p className="mt-3 max-w-xl text-primary-foreground/70">
            No hidden fees. No premium for evenings or weekends. What you see is
            what you pay.
          </p>
        </div>
      </section>

      {/* Main 3 options */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl font-bold">Choose your package</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Most learners go with the 10 hour block.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <AnimateIn from="up" delay={0}>
              <div className="flex h-full flex-col rounded-xl border bg-white p-6">
                <p className="text-sm text-muted-foreground">Pay as you go</p>
                <p className="mt-3 text-4xl font-bold">
                  &pound;30<span className="text-lg font-normal text-muted-foreground">/hr</span>
                </p>
                <div className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                  <p>Standard lesson in Leicester</p>
                  <p>No commitment</p>
                  <p>Great for trying a first lesson</p>
                </div>
                <a
                  href="tel:07977589345"
                  className="mt-8 flex items-center justify-center gap-2 rounded-md border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Book now
                </a>
              </div>
            </AnimateIn>

            <AnimateIn from="up" delay={150}>
              <div className="relative flex h-full flex-col rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                  Most popular
                </div>
                <p className="text-sm text-primary-foreground/70">10 Hour Block</p>
                <p className="mt-3 text-4xl font-bold">
                  &pound;290
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">&pound;29/hr</p>
                <div className="mt-6 flex-1 space-y-3 text-sm text-primary-foreground/70">
                  <p>Save &pound;10 vs single lessons</p>
                  <p>Most popular with learners</p>
                  <p>Enough to build real confidence</p>
                </div>
                <a
                  href="tel:07977589345"
                  className="mt-8 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Book now
                </a>
              </div>
            </AnimateIn>

            <AnimateIn from="up" delay={300}>
              <div className="flex h-full flex-col rounded-xl border bg-white p-6">
                <p className="text-sm text-muted-foreground">20 Hour Block</p>
                <p className="mt-3 text-4xl font-bold">
                  &pound;560
                </p>
                <p className="mt-1 text-sm text-muted-foreground">&pound;28/hr</p>
                <div className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                  <p className="font-medium text-primary">Save &pound;40 vs single lessons</p>
                  <p>Best value per hour</p>
                  <p>Ideal for complete beginners</p>
                </div>
                <a
                  href="tel:07977589345"
                  className="mt-8 flex items-center justify-center gap-2 rounded-md border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Book now
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Other rates */}
      <section className="border-t bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-12 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl font-bold">Other rates</h2>
          </AnimateIn>

          <AnimateIn from="up" delay={100}>
            <div>
              <h3 className="font-semibold">Specialist Lessons</h3>
              <table className="mt-3 w-full text-sm">
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 text-muted-foreground">Outside Leicester</td>
                    <td className="py-3 text-right font-semibold">&pound;35/hr</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">Motorway Tuition</td>
                    <td className="py-3 text-right font-semibold">&pound;45/hr</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">Refresher Course</td>
                    <td className="py-3 text-right font-semibold">&pound;37/hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn from="up" delay={100}>
            <div>
              <h3 className="font-semibold">Student Rates</h3>
              <table className="mt-3 w-full text-sm">
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 text-muted-foreground">Student First 10 Hour Block</td>
                    <td className="py-3 text-right">
                      <span className="font-semibold">&pound;280</span>
                      <span className="ml-2 text-xs text-primary">Save &pound;10</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">Standard First 10 Hour Block</td>
                    <td className="py-3 text-right font-semibold">&pound;290</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-muted-foreground">5 Hour Block</td>
                    <td className="py-3 text-right font-semibold">&pound;150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn from="up" delay={100}>
            <div>
              <h3 className="font-semibold">Pass Plus Course</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Advanced training that can reduce your insurance. Minimum 6 hours.
              </p>
              <table className="mt-3 w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-3 text-muted-foreground">6 Hours</td>
                    <td className="py-3 text-right">
                      <span className="font-semibold">&pound;225</span>
                      <span className="ml-2 text-muted-foreground">(&pound;37.50/hr)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn from="up" delay={100}>
            <div>
              <h3 className="font-semibold">Test Day Car Hire</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Includes a 1-hour pre-test warm-up lesson and use of the car for your test.
              </p>
              <div className="mt-4 space-y-6">
                {testDayHire.map((location) => (
                  <div key={location.location}>
                    <p className="text-sm font-medium">{location.location}</p>
                    <table className="mt-2 w-full text-sm">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="pb-2 font-medium text-muted-foreground">Day</th>
                          <th className="pb-2 text-right font-medium text-muted-foreground">Standard</th>
                          <th className="pb-2 text-right font-medium text-muted-foreground">Early (7:03am)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {location.rows.map((row) => (
                          <tr key={row.day}>
                            <td className="py-2.5 text-muted-foreground">{row.day}</td>
                            <td className="py-2.5 text-right font-semibold">{row.standard}</td>
                            <td className="py-2.5 text-right font-semibold">{row.early}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        title="Ready to Book?"
        subtitle="Call now to discuss the best package for you."
      />
    </>
  );
}
