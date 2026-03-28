import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/cta-banner";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read 38+ reviews from students who passed their driving test with Nawab School of Motoring in Leicester. High first-time pass rate.",
};

export default function TestimonialsPage() {
  const passCount = testimonials.filter((t) => t.result).length;

  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Student Reviews</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {testimonials.length} students have shared their experience.{" "}
            {passCount} confirmed passes, many on the first attempt.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:px-6 lg:px-8">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="p-6">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold">{t.name}</p>
                  {t.result && (
                    <Badge
                      variant="secondary"
                      className="mt-1 bg-accent/10 text-accent"
                    >
                      {t.result}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTABanner
        title="Join Our Successful Students"
        subtitle="Start your journey to passing your driving test first time."
      />
    </>
  );
}
