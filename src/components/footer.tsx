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
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-medium text-foreground">Nawab School of Motoring</span>
          <a href="tel:07977589345" className="text-primary hover:underline">07977 589 345</a>
          <span>201 Sandhills Avenue, Hamilton, Leicester LE5 1QL</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <a href="https://facebook.com/NawabMotoring" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/NawabMotoring" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Twitter / X">
              <TwitterIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
