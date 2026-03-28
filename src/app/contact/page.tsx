import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { FacebookIcon, TwitterIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nawab School of Motoring. Call 07977 589 345 or send us a message. Based in Leicester, serving Leicester & Luton.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Ready to start learning? Get in touch to book your first lesson.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 sm:px-6 lg:px-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                The quickest way to book is by phone. Alternatively, send us a
                message and we will get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:07977589345"
                      className="text-lg font-semibold hover:text-accent"
                    >
                      07977 589 345
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold">
                      201 Sandhills Avenue, Hamilton
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Leicester LE5 1QL
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Availability
                    </p>
                    <p className="font-semibold">7 Days a Week</p>
                    <p className="text-sm text-muted-foreground">
                      Including evenings &amp; weekends
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-3">
              <a
                href="https://facebook.com/NawabMotoring"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
                aria-label="Visit Facebook page"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://twitter.com/NawabMotoring"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
                aria-label="Visit Twitter page"
              >
                <TwitterIcon className="h-4 w-4" />
                Twitter
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.5!2d-1.07!3d52.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877612345678901%3A0x1234567890abcdef!2s201+Sandhills+Ave%2C+Leicester+LE5+1QL!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nawab School of Motoring location on Google Maps"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill in the form below and we will get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
