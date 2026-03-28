import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTABanner } from "@/components/cta-banner";
import {
  hourlyRates,
  blockBookings,
  studentRates,
  passPlusCourse,
  testDayHire,
} from "@/data/pricing";
import type { PricingCategory } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Driving lesson prices in Leicester. From \u00a328/hr with block booking discounts. Student rates, Pass Plus, and test day car hire available.",
};

function PricingTable({ category }: { category: PricingCategory }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {category.items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between py-3"
            >
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <div className="text-right">
                <span className="font-semibold">{item.price}</span>
                {item.note && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({item.note})
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Pricing</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Competitive rates with discounts for block bookings. No hidden fees,
            no extra charge for evenings or weekends.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-4xl gap-8">
          <PricingTable category={hourlyRates} />
          <PricingTable category={blockBookings} />
          <PricingTable category={studentRates} />
          <PricingTable category={passPlusCourse} />

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Test Day Car Hire + 1-Hour Pre-Test Lesson
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {testDayHire.map((location) => (
                <div key={location.location}>
                  <h3 className="mb-3 font-semibold">{location.location}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="pb-2 pr-4 font-medium text-muted-foreground">
                            Day
                          </th>
                          <th className="pb-2 pr-4 font-medium text-muted-foreground">
                            Standard
                          </th>
                          <th className="pb-2 font-medium text-muted-foreground">
                            Early (7:03am)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {location.rows.map((row) => (
                          <tr key={row.day} className="border-b last:border-0">
                            <td className="py-2.5 pr-4 text-muted-foreground">
                              {row.day}
                            </td>
                            <td className="py-2.5 pr-4 font-semibold">
                              {row.standard}
                            </td>
                            <td className="py-2.5 font-semibold">{row.early}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground">
                * Terms &amp; conditions apply. Prices include a 1-hour
                pre-test warm-up lesson and use of the car for your test.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTABanner
        title="Ready to Book?"
        subtitle="Call now to discuss the best package for you."
      />
    </>
  );
}
