import Link from "next/link";
import { FacebookIcon, TwitterIcon } from "@/components/icons";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/show-tell", label: "Show/Tell" },
  { href: "/routes", label: "Routes" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-foreground">
              Nawab School of Motoring
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Friendly, patient &amp; professional driving instruction in
              Leicester.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              201 Sandhills Avenue, Hamilton, Leicester LE5 1QL
            </p>
            <a
              href="tel:07977589345"
              className="mt-1 block text-sm font-medium text-primary hover:underline"
            >
              07977 589 345
            </a>
          </div>

          <div className="flex gap-12">
            <nav>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-3 self-start">
              <a
                href="https://facebook.com/NawabMotoring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/NawabMotoring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Nawab School of Motoring. DVSA
          Approved &middot; Pass Plus Certified.
        </div>
      </div>
    </footer>
  );
}
