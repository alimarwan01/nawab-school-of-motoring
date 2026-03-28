import { Phone } from "lucide-react";

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
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm text-primary-foreground/70">{subtitle}</p>
        <a
          href="tel:07977589345"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Phone className="h-4 w-4" />
          07977 589 345
        </a>
      </div>
    </section>
  );
}
