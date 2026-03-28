import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ContactForm } from "./contact-form";
import { FacebookIcon, TwitterIcon } from "@/components/icons";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${business.name}. Call ${business.phone.display} or send us a message. Based in Leicester.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-6xl lg:px-8">
          <AnimateIn from="left">
            <h1 className="text-3xl font-bold sm:text-4xl">Get in Touch</h1>
            <p className="mt-3 text-primary-foreground/70">
              The quickest way to book is by phone. Or send a message and
              we&apos;ll get back to you.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:px-8">
          <div>
            <AnimateIn from="left">
              <a
                href={business.phone.href}
                className="group inline-flex items-center gap-3 text-3xl font-bold text-primary transition-colors hover:text-primary/80 sm:text-4xl animate-[subtle-pulse_3s_ease-in-out_infinite]"
                style={{ borderRadius: "0.5rem", padding: "0.5rem 1rem", margin: "-0.5rem -1rem" }}
              >
                <Phone className="h-7 w-7 transition-transform duration-200 group-hover:rotate-12 sm:h-8" />
                {business.phone.display}
              </a>
              <p className="mt-3 text-muted-foreground">
                Available 7 days a week, including evenings &amp; weekends
              </p>
            </AnimateIn>

            <AnimateIn from="left" delay={150}>
              <div className="mt-10 space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">{business.address.full}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Areas covered</p>
                  <p className="text-muted-foreground">{business.address.city}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Credentials</p>
                  <p className="text-muted-foreground">
                    {business.credentials.join(" \u00b7 ")}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn from="up" delay={300}>
              <div className="mt-8 flex gap-4">
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href={business.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </AnimateIn>

            <AnimateIn from="up" delay={400}>
              <div className="mt-10 overflow-hidden rounded-lg border">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.5!2d${business.geo.lng}!3d${business.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877612345678901%3A0x1234567890abcdef!2s201+Sandhills+Ave%2C+Leicester+LE5+1QL!5e0!3m2!1sen!2suk!4v1234567890`}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${business.name} location`}
                />
              </div>
            </AnimateIn>
          </div>

          <AnimateIn from="right" delay={200}>
            <div>
              <h2 className="text-xl font-bold">Send a Message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
