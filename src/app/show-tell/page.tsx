import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/cta-banner";
import { showTellCombinations } from "@/data/show-tell";

export const metadata: Metadata = {
  title: "Show Me / Tell Me Questions",
  description:
    "All 13 show me tell me question combinations for the UK practical driving test. Study these before your test day.",
};

export default function ShowTellPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Show Me / Tell Me Questions
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            The 13 question combinations you may be asked during your practical
            driving test. Study these to be fully prepared.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Accordion className="space-y-3">
            {showTellCombinations.map((combo) => (
              <AccordionItem
                key={combo.number}
                value={`combo-${combo.number}`}
                className="rounded-lg border bg-white px-4"
              >
                <AccordionTrigger className="py-4 text-left hover:no-underline">
                  <span className="font-semibold">
                    Combination {combo.number}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-6">
                    {combo.questions.map((q, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              q.type === "Show" ? "default" : "secondary"
                            }
                            className={
                              q.type === "Show"
                                ? "bg-accent text-accent-foreground"
                                : ""
                            }
                          >
                            {q.type} — {q.code}
                          </Badge>
                        </div>
                        <p className="mt-2 font-medium">{q.question}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {q.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner
        title="Feel Prepared for Your Test?"
        subtitle="Book a lesson and we'll go through these together in the car."
      />
    </>
  );
}
