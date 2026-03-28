"use client";

import { Phone } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { business } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Book Your First Lesson",
  subtitle = "Friendly, patient instruction from a DVSA approved instructor. Call now to get started.",
}: CTABannerProps) {
  return (
    <section className="bg-primary px-4 py-16 text-center text-primary-foreground">
      <div className="mx-auto max-w-xl">
        <AnimateIn from="up">
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-primary-foreground/70">{subtitle}</p>
        </AnimateIn>
        <AnimateIn from="up" delay={200}>
          <a
            href={business.phone.href}
            className="group mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-lg font-medium text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 animate-[subtle-pulse_3s_ease-in-out_infinite]"
          >
            <Phone className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
            {business.phone.display}
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
