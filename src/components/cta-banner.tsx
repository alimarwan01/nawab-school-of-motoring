import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready to Start Driving?",
  subtitle = "Book your first lesson today. Friendly, patient instruction from a DVSA approved instructor.",
}: CTABannerProps) {
  return (
    <section className="bg-primary px-4 py-16 text-center text-primary-foreground">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-primary-foreground/70">{subtitle}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="tel:07977589345">
            <Button
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Phone className="h-5 w-5" />
              Call 07977 589 345
            </Button>
          </a>
          <a href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Send a Message
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
