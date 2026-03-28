import type { Metadata } from "next";
import {
  Car,
  Zap,
  RefreshCw,
  BookOpen,
  Route,
  Award,
  CreditCard,
  DoorOpen,
  Thermometer,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/cta-banner";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Driving lesson services in Leicester & Luton. Beginner lessons, intensive courses, refresher training, theory test prep, motorway tuition, and Pass Plus.",
};

const services = [
  {
    icon: Car,
    title: "Beginner Lessons",
    description:
      "Starting from scratch? Our structured beginner programme takes you from your very first time behind the wheel through to test-ready confidence. Patient, step-by-step instruction tailored to your pace.",
  },
  {
    icon: Zap,
    title: "Intensive Courses",
    description:
      "Need to pass quickly? Our intensive driving courses condense your learning into a focused block of lessons. Ideal if you already have some experience or need your licence fast.",
  },
  {
    icon: RefreshCw,
    title: "Refresher Training",
    description:
      "Already have your licence but feeling rusty? Our refresher courses help you rebuild confidence on the road. Perfect after a long break from driving.",
  },
  {
    icon: BookOpen,
    title: "Theory Test Preparation",
    description:
      "We provide guidance and support with your theory test preparation, including hazard perception practice. Be fully prepared before booking your practical test.",
  },
  {
    icon: Route,
    title: "Motorway Instruction",
    description:
      "Learn to drive safely at higher speeds with professional motorway tuition. Build confidence for dual carriageway and motorway driving with expert guidance.",
  },
  {
    icon: Award,
    title: "Pass Plus",
    description:
      "The Pass Plus scheme helps newly qualified drivers gain experience in conditions not covered in the standard test. This can also reduce your insurance premiums. Minimum 6 hours.",
  },
];

const features = [
  {
    icon: CreditCard,
    title: "Block Booking Discounts",
    description: "Save money when you book 5, 10 or 20 hours in advance. Student rates also available.",
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Service",
    description: "Collected from your home, work, or university and dropped back afterwards. No need to travel to us.",
  },
  {
    icon: Thermometer,
    title: "Air-Conditioned Car",
    description: "Learn in comfort with a modern, dual-controlled, fully air-conditioned vehicle.",
  },
  {
    icon: Clock,
    title: "No Extra Cost for Evenings & Weekends",
    description: "The same competitive rate whether you book a Monday morning or Saturday evening lesson.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Comprehensive driving instruction for every level of experience.
            Male and female instructors available.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-0 bg-secondary/50 transition-colors hover:bg-secondary">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Why Learn With Us
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing">
              <Button size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
