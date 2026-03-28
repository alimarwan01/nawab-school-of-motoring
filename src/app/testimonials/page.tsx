import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/cta-banner";
import { AnimateIn } from "@/components/animate-in";
import { GoogleIcon, FreeIndexIcon } from "@/components/icons";
import { testimonials } from "@/data/testimonials";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Real reviews from Google, FreeIndex, and students who passed their driving test with Nawab School of Motoring in Leicester.",
};

export default function TestimonialsPage() {
  const passCount = testimonials.filter((t) => t.result).length;

  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl lg:px-8">
          <AnimateIn from="left">
            <h1 className="text-3xl font-bold sm:text-4xl">Student Reviews</h1>
            <p className="mt-3 text-primary-foreground/70">
              {testimonials.length} verified reviews from Google, FreeIndex, and
              our students. {passCount} confirmed passes.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/50">
              {business.reviews.google.rating}/5 on Google ({business.reviews.google.count} reviews) &middot; {business.reviews.freeindex.rating}/5 on FreeIndex ({business.reviews.freeindex.count} reviews)
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={business.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
              >
                <GoogleIcon className="h-4 w-4" />
                Google Reviews
              </a>
              <a
                href={business.social.freeindex}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <FreeIndexIcon className="h-4 w-4" />
                FreeIndex Reviews
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl columns-1 gap-5 sm:columns-2 lg:columns-3 lg:px-8">
          {testimonials.map((t, i) => (
            <AnimateIn
              key={`${t.name}-${i}`}
              from="up"
              delay={Math.min(i * 60, 400)}
              duration={500}
            >
              <a
                href={t.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 block break-inside-avoid overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {t.photo && (
                  <Image
                    src={t.photo}
                    alt={`${t.name} after passing their driving test`}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    {!t.photo && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{t.name}</p>
                      {t.result && (
                        <p className="text-xs text-primary">{t.result}</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t.date && <>{t.date} &middot; </>}
                    View on {t.source === "google" ? "Google" : t.source === "freeindex" ? "FreeIndex" : "Website"} &rarr;
                  </p>
                </div>
              </a>
            </AnimateIn>
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
