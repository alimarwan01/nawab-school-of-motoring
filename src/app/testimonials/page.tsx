import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read 38+ reviews from students who passed their driving test with Nawab School of Motoring in Leicester.",
};

export default function TestimonialsPage() {
  const passCount = testimonials.filter((t) => t.result).length;

  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Student Reviews</h1>
          <p className="mt-3 text-primary-foreground/70">
            {testimonials.length} students. {passCount} confirmed passes. Many
            on the first attempt.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl columns-1 gap-6 sm:columns-2 lg:columns-3 lg:px-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="mb-6 break-inside-avoid rounded-lg border bg-white p-5"
            >
              <p className="leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-3 border-t pt-3">
                <p className="text-sm font-semibold">{t.name}</p>
                {t.result && (
                  <p className="text-sm text-primary">{t.result}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Join Our Students"
        subtitle="Start your journey to passing your driving test."
      />
    </>
  );
}
