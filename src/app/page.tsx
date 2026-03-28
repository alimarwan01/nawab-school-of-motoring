import { Phone } from "lucide-react";
import { CTABanner } from "@/components/cta-banner";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

const featuredReviews = testimonials.filter((t) => t.result).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero — left-aligned, direct, no fluff */}
      <section className="bg-primary px-4 py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl lg:px-8">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/60 uppercase">
            DVSA Approved Instructor &middot; Leicester &amp; Luton
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Driving Lessons in Leicester
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/70">
            Patient, friendly instruction that gets you on the road. High
            first-time pass rate with lessons from &pound;28/hr.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="tel:07977589345"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="h-4 w-4" />
              07977 589 345
            </a>
            <Link
              href="/pricing"
              className="text-sm text-primary-foreground/60 underline underline-offset-4 transition-colors hover:text-primary-foreground"
            >
              View all prices
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip — warm amber, just facts */}
      <section className="bg-accent px-4 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-accent-foreground lg:px-8">
          <span>38+ Students Passed</span>
          <span className="hidden text-accent-foreground/40 sm:inline">/</span>
          <span>DVSA Approved</span>
          <span className="hidden text-accent-foreground/40 sm:inline">/</span>
          <span>First-Time Pass Specialists</span>
          <span className="hidden text-accent-foreground/40 sm:inline">/</span>
          <span>Evenings &amp; Weekends</span>
        </div>
      </section>

      {/* How it works — simple numbered steps, no cards */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Call to book",
                text: "Give us a ring and we'll find a time that suits you. First lesson available within days.",
              },
              {
                step: "2",
                title: "Learn at your pace",
                text: "Patient, structured lessons tailored to you. We pick you up from home, work, or university.",
              },
              {
                step: "3",
                title: "Pass your test",
                text: "Thorough test preparation on real Leicester routes. Many students pass first time.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-4xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / quote split */}
      <section className="border-y bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:px-8">
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
          </div>
          <div className="flex flex-col justify-center">
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="text-xl italic leading-relaxed text-foreground/80 sm:text-2xl">
                &ldquo;Incredibly patient, calm, professional. Clear
                explanations and encouragement throughout. Passed first
                attempt.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="font-semibold">Vajidali Saiyed</p>
                <p className="text-sm text-primary">Passed first attempt</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing snapshot — clean typography, no card borders */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Lesson prices</h2>
          <p className="mt-2 text-muted-foreground">
            No hidden fees. No extra charge for evenings or weekends.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border bg-white p-6">
              <p className="text-sm text-muted-foreground">Single Lesson</p>
              <p className="mt-1 text-3xl font-bold">&pound;30<span className="text-base font-normal text-muted-foreground">/hr</span></p>
              <p className="mt-3 text-sm text-muted-foreground">
                Standard lesson in Leicester. Pay as you go.
              </p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6 ring-1 ring-primary/20">
              <p className="text-sm font-medium text-primary">Most popular</p>
              <p className="mt-1 text-3xl font-bold">&pound;290</p>
              <p className="mt-1 text-sm text-muted-foreground">
                10 hours &middot; &pound;29/hr
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Save &pound;10 compared to single lessons.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <p className="text-sm text-muted-foreground">20 Hour Block</p>
              <p className="mt-1 text-3xl font-bold">&pound;560</p>
              <p className="mt-1 text-sm text-muted-foreground">
                &pound;28/hr &middot; Best value
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Save &pound;40. Ideal for beginners.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Student rates, Pass Plus, and test day hire &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial strip — just quotes, no stars, no cards */}
      <section className="border-y bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl lg:px-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">
              From our students
            </h2>
            <Link
              href="/testimonials"
              className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
            >
              All 38 reviews &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {featuredReviews.map((t) => (
              <div key={t.name}>
                <p className="leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold">{t.name}</p>
                {t.result && (
                  <p className="text-sm text-primary">{t.result}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
