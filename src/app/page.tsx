import { Phone, Car, Clock, Award, MapPin, Users, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/cta-banner";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Award,
    title: "DVSA Approved",
    description: "Fully qualified and DVSA approved driving instructor with years of experience.",
  },
  {
    icon: Star,
    title: "High Pass Rate",
    description: "Proven track record of first-time passes. Many students pass with zero faults.",
  },
  {
    icon: Car,
    title: "Modern Vehicle",
    description: "Learn in a modern, dual-controlled, air-conditioned car for maximum comfort.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Evenings and weekends available at no extra cost. Lessons that fit your schedule.",
  },
  {
    icon: MapPin,
    title: "Door-to-Door",
    description: "Convenient pick-up and drop-off from your home, work or university.",
  },
  {
    icon: Users,
    title: "Patient Instruction",
    description: "Friendly, calm and patient approach. Learn at your own pace without pressure.",
  },
];

const featuredTestimonials = testimonials.filter((t) => t.result).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary px-4 py-20 text-primary-foreground sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm">
              <Shield className="h-4 w-4" />
              DVSA Approved &amp; Pass Plus Certified
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Learn to Drive with{" "}
              <span className="text-accent">Confidence</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Friendly, punctual, patient and professional driving instruction
              in Leicester &amp; Luton. High first-time pass rate with lessons
              starting from just &pound;28 per hour.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:07977589345">
                <Button
                  size="lg"
                  className="gap-2 bg-accent px-8 text-lg text-accent-foreground hover:bg-accent/90"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: 07977 589 345
                </Button>
              </a>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 px-8 text-lg text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Prices
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Block booking discounts available &middot; No extra charge for
              evenings &amp; weekends
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Choose Nawab School of Motoring?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to pass your test first time
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 bg-secondary/50 transition-colors hover:bg-secondary"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="border-y bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 text-muted-foreground">
              Competitive rates with discounts for block bookings
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-sm font-medium text-muted-foreground">
                  Single Lesson
                </p>
                <p className="mt-2 text-4xl font-bold">&pound;30</p>
                <p className="mt-1 text-sm text-muted-foreground">per hour</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Standard lesson in Leicester
                </p>
              </CardContent>
            </Card>
            <Card className="relative border-accent text-center shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                Most Popular
              </div>
              <CardContent className="p-8">
                <p className="text-sm font-medium text-muted-foreground">
                  10 Hour Block
                </p>
                <p className="mt-2 text-4xl font-bold">&pound;290</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  &pound;29/hour
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Save &pound;10 vs single lessons
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-sm font-medium text-muted-foreground">
                  20 Hour Block
                </p>
                <p className="mt-2 text-4xl font-bold">&pound;560</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  &pound;28/hour
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Best value &middot; Save &pound;40
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View All Prices
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What Students Say
            </h2>
            <p className="mt-3 text-muted-foreground">
              38+ students have shared their experience
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="p-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 border-t pt-4">
                    <p className="font-semibold">{t.name}</p>
                    {t.result && (
                      <p className="text-sm text-accent">{t.result}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
