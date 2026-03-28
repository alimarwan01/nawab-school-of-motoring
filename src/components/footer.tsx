import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FacebookIcon, TwitterIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Nawab School of Motoring</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Friendly, Punctual, Patient &amp; Professional Instruction
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                DVSA Approved
              </span>
              <span className="rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                Pass Plus
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="transition-colors hover:text-primary-foreground">Services</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-primary-foreground">Pricing</Link></li>
              <li><Link href="/testimonials" className="transition-colors hover:text-primary-foreground">Testimonials</Link></li>
              <li><Link href="/show-tell" className="transition-colors hover:text-primary-foreground">Show Me / Tell Me</Link></li>
              <li><Link href="/routes" className="transition-colors hover:text-primary-foreground">Test Routes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:07977589345" className="transition-colors hover:text-primary-foreground">
                  07977 589 345
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>201 Sandhills Avenue, Hamilton, Leicester LE5 1QL</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="mt-3 flex gap-3">
              <a
                href="https://facebook.com/NawabMotoring"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/NawabMotoring"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Serving Leicester &amp; Luton
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Nawab School of Motoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
