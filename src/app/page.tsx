import { Phone } from "lucide-react";
import Image from "next/image";
import { CTABanner } from "@/components/cta-banner";
import { AnimateIn } from "@/components/animate-in";
import { WallOfPasses } from "@/components/wall-of-passes";
import { GoogleRating } from "@/components/google-rating";
import { StatsStrip } from "./stats-strip";
import { blockBookings, hourlyRates } from "@/data/pricing";
import { business } from "@/lib/constants";
import Link from "next/link";

/** The 3 pricing tiers shown on the home page — derived from the pricing data file */
const singleLesson = hourlyRates.items[0]; // Standard Lesson (Leicester)
const tenHourBlock = blockBookings.items[1]; // 10 Hour Block
const twentyHourBlock = blockBookings.items[2]; // 20 Hour Block

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:px-8">
          <div>
            <AnimateIn from="none" delay={0} duration={500}>
              <p className="text-sm font-medium tracking-wide text-primary-foreground/60 uppercase">
                {business.credentials[0]} Instructor &middot; {business.address.city}
              </p>
            </AnimateIn>
            <AnimateIn from="left" delay={150} duration={700}>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Driving Lessons in {business.address.city}
              </h1>
            </AnimateIn>
            <AnimateIn from="left" delay={300} duration={700}>
              <p className="mt-4 max-w-xl text-lg text-primary-foreground/70">
                Patient, friendly instruction that gets you on the road. High
                first-time pass rate with lessons from {twentyHourBlock.note}.
              </p>
            </AnimateIn>
            <AnimateIn from="up" delay={450} duration={600}>
              <div className="mt-8 inline-flex items-center gap-4">
                <Image
                  src="/first-time-pass-badge.png"
                  alt={`${business.name} First Time Pass badge`}
                  width={96}
                  height={96}
                  className="h-20 w-20 sm:h-24 sm:w-24"
                />
                <div>
                  <p className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                    200+
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    first-time passes
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn from="up" delay={600} duration={600}>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={business.phone.href}
                  className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  {business.phone.display}
                </a>
                <Link
                  href="/pricing"
                  className="text-sm text-primary-foreground/60 underline underline-offset-4 transition-colors hover:text-primary-foreground"
                >
                  View all prices
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Stacked student photos — 4 overlapping at different angles */}
          <div className="relative hidden h-80 lg:block">
            {[
              { src: "/students/halima-diriye.jpeg", alt: "Student who passed first time", className: "right-12 top-0 rotate-3" },
              { src: "/students/gurbaj-singh.jpeg", alt: "Student who passed with 2 minors", className: "right-40 top-8 -rotate-3" },
              { src: "/students/artur-lidzer.jpeg", alt: "Student who passed first attempt", className: "right-0 top-20 rotate-6" },
              { src: "/students/sandeep-kumar.jpeg", alt: "Student who passed first attempt", className: "right-28 top-28 -rotate-6" },
            ].map((photo) => (
              <div
                key={photo.src}
                className={`absolute h-56 w-44 overflow-hidden rounded-xl shadow-2xl shadow-black/30 transition-transform duration-500 hover:rotate-0 hover:scale-105 ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={176}
                  height={224}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <StatsStrip />

      {/* Google rating + How it works */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <div className="mb-16">
            <GoogleRating />
          </div>

          <AnimateIn>
            <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
          </AnimateIn>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Call to book", text: "Give us a ring and we\u2019ll find a time that suits you. First lesson available within days." },
              { step: "2", title: "Learn at your pace", text: "Patient, structured lessons tailored to you. We pick you up from home, work, or university." },
              { step: "3", title: "Pass your test", text: "Thorough test preparation on real Leicester routes. Many students pass first time." },
            ].map((item, i) => (
              <AnimateIn key={item.step} from="up" delay={i * 150}>
                <div>
                  <span className="text-5xl font-bold text-primary/15">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* About / quote split with credential badges */}
      <section className="border-y bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:px-8">
          <AnimateIn from="left">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Learn from someone who cares
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Nawab is a DVSA approved instructor who&apos;s helped dozens of
                  learners pass their test in Leicester. His approach is simple:
                  be patient, be thorough, and make sure every student feels
                  confident before test day.
                </p>
                <p>
                  Lessons are structured around the real test routes from the
                  Cannock Street test centre. You&apos;ll practise the actual roads,
                  roundabouts, and junctions you&apos;ll face on the day.
                </p>
                <p>
                  Whether you&apos;re a complete beginner or need a refresher,
                  the lessons adapt to you — not the other way around.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Image src="/dsa-badge.jpg" alt="DVSA Approved Driving Instructor badge" width={60} height={60} className="h-14 w-14 rounded object-contain sm:h-16 sm:w-16" />
                <Image src="/pass-plus.jpg" alt="Pass Plus Certified logo" width={80} height={40} className="h-10 object-contain sm:h-12" />
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={200}>
            <div className="flex flex-col justify-center">
              <blockquote className="border-l-4 border-primary pl-6">
                <p className="text-xl italic leading-relaxed text-foreground/80 sm:text-2xl">
                  &ldquo;PASS AT FIRST ATTEMPT. Alhamdulillah, I&apos;m so
                  grateful to have learned car with Irfan Bhai at Nawab Driving
                  School.&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-semibold">Vajidali Saiyed</p>
                  <p className="text-sm text-primary">Passed first attempt</p>
                </footer>
              </blockquote>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Wall of passes */}
      <WallOfPasses />

      {/* Pricing snapshot — values from data/pricing.ts */}
      <section className="border-t px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl font-bold sm:text-3xl">Lesson prices</h2>
            <p className="mt-2 text-muted-foreground">
              No hidden fees. No extra charge for evenings or weekends.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <AnimateIn from="up" delay={0}>
              <div className="rounded-lg border bg-white p-6 transition-shadow duration-300 hover:shadow-md">
                <p className="text-sm text-muted-foreground">{singleLesson.label}</p>
                <p className="mt-1 text-3xl font-bold">{singleLesson.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Standard lesson in Leicester. Pay as you go.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn from="up" delay={150}>
              <div className="rounded-lg bg-primary/5 p-6 ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-md">
                <p className="text-sm font-medium text-primary">Most popular</p>
                <p className="mt-1 text-3xl font-bold">{tenHourBlock.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tenHourBlock.label} &middot; {tenHourBlock.note}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Save &pound;10 compared to single lessons.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn from="up" delay={300}>
              <div className="rounded-lg border bg-white p-6 transition-shadow duration-300 hover:shadow-md">
                <p className="text-sm text-muted-foreground">{twentyHourBlock.label}</p>
                <p className="mt-1 text-3xl font-bold">{twentyHourBlock.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {twentyHourBlock.note} &middot; Best value
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Save &pound;40. Ideal for beginners.
                </p>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={400}>
            <div className="mt-6">
              <Link
                href="/pricing"
                className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Student rates, Pass Plus, and test day hire &rarr;
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
