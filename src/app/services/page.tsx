import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Driving lesson services in Leicester & Luton. Beginner lessons, intensive courses, refresher training, theory test prep, motorway tuition, and Pass Plus.",
};

const services = [
  {
    title: "Beginner Lessons",
    description:
      "Starting from scratch? Structured lessons take you from your very first time behind the wheel through to test-ready confidence, at your own pace.",
  },
  {
    title: "Intensive Courses",
    description:
      "Need your licence fast? Concentrated blocks of lessons to get you test-ready in weeks, not months. Ideal if you have some experience already.",
  },
  {
    title: "Refresher Training",
    description:
      "Already passed but haven't driven in a while? Rebuild your confidence with refresher sessions tailored to where you need the most practice.",
  },
  {
    title: "Theory Test Support",
    description:
      "Guidance and tips for your theory test and hazard perception. We make sure you're ready for both parts before booking your practical.",
  },
  {
    title: "Motorway Instruction",
    description:
      "Professional tuition for dual carriageway and motorway driving. Build confidence at higher speeds with an experienced instructor beside you.",
  },
  {
    title: "Pass Plus",
    description:
      "Six hours of advanced training covering conditions not in the standard test — night driving, motorways, and more. Can reduce your insurance premiums.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Services</h1>
          <p className="mt-3 max-w-xl text-primary-foreground/70">
            Everything from your very first lesson to advanced post-test
            training. Male and female instructors available.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <div className="divide-y">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-3 sm:gap-8"
              >
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-muted-foreground sm:col-span-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h2 className="text-2xl font-bold">What&apos;s included</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Door-to-door service</strong>{" "}
                — picked up from home, work, or university and dropped back
                afterwards
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">
                  Modern, air-conditioned car
                </strong>{" "}
                — dual-controlled for your safety and comfort
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">
                  No extra charge for evenings &amp; weekends
                </strong>{" "}
                — same rate, whenever suits you
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">
                  Block booking discounts
                </strong>{" "}
                — save when you book 5, 10, or 20 hours in advance
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              See all prices &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
