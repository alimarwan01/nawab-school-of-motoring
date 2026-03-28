import type { Metadata } from "next";
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

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-12 lg:px-8">
          {/* Hourly Rates */}
          <div>
            <h2 className="text-xl font-bold">Lesson Rates</h2>
            <table className="mt-4 w-full text-sm">
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 text-muted-foreground">Standard Lesson (Leicester)</td>
                  <td className="py-3 text-right font-semibold">&pound;30/hr</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Standard Lesson (Outside Leicester)</td>
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

          {/* Block Bookings */}
          <div>
            <h2 className="text-xl font-bold">Block Booking Discounts</h2>
            <table className="mt-4 w-full text-sm">
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 text-muted-foreground">5 Hour Block</td>
                  <td className="py-3 text-right">
                    <span className="font-semibold">&pound;150</span>
                    <span className="ml-2 text-muted-foreground">(&pound;30/hr)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">10 Hour Block</td>
                  <td className="py-3 text-right">
                    <span className="font-semibold">&pound;290</span>
                    <span className="ml-2 text-muted-foreground">(&pound;29/hr)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">20 Hour Block</td>
                  <td className="py-3 text-right">
                    <span className="font-semibold">&pound;560</span>
                    <span className="ml-2 text-muted-foreground">(&pound;28/hr)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Student Rates */}
          <div>
            <h2 className="text-xl font-bold">Student Rates</h2>
            <table className="mt-4 w-full text-sm">
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 text-muted-foreground">Student First 10 Hour Block</td>
                  <td className="py-3 text-right font-semibold">&pound;280</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Standard First 10 Hour Block</td>
                  <td className="py-3 text-right font-semibold">&pound;290</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pass Plus */}
          <div>
            <h2 className="text-xl font-bold">Pass Plus Course</h2>
            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-3 text-muted-foreground">Minimum 6 Hours</td>
                  <td className="py-3 text-right">
                    <span className="font-semibold">&pound;225</span>
                    <span className="ml-2 text-muted-foreground">(&pound;37.50/hr)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Test Day Hire */}
          <div>
            <h2 className="text-xl font-bold">
              Test Day Car Hire + 1-Hour Pre-Test Lesson
            </h2>
            <div className="mt-4 space-y-6">
              {testDayHire.map((location) => (
                <div key={location.location}>
                  <h3 className="text-sm font-semibold">{location.location}</h3>
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
              <p className="text-xs text-muted-foreground">
                * Terms &amp; conditions apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Book?"
        subtitle="Call now to discuss the best package for you."
      />
    </>
  );
}
