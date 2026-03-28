import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/cta-banner";
import { testimonials } from "@/data/testimonials";

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
          <h1 className="text-3xl font-bold sm:text-4xl">Student Reviews</h1>
          <p className="mt-3 text-primary-foreground/70">
            {testimonials.length} verified reviews from Google, FreeIndex, and
            our students. {passCount} confirmed passes.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-primary-foreground/50">
            <span>5.0/5 on Google (199 reviews)</span>
            <span>&middot;</span>
            <span>5.0/5 on FreeIndex (457 reviews)</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl columns-1 gap-5 sm:columns-2 lg:columns-3 lg:px-8">
          {testimonials.map((t, i) => (
            <a
              key={`${t.name}-${i}`}
              href={t.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 block break-inside-avoid overflow-hidden rounded-lg border bg-white transition-shadow duration-200 hover:shadow-md"
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
