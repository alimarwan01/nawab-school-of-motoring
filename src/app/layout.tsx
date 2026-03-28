import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { business } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Driving Lessons in ${business.address.city}`,
    template: `%s | ${business.name}`,
  },
  description: `DVSA approved driving lessons in ${business.address.city}. Friendly, patient, professional instruction. High first-time pass rate. Lessons from \u00a328/hr. Call ${business.phone.display}.`,
  keywords: [
    `driving lessons ${business.address.city}`,
    `driving instructor ${business.address.city}`,
    `learn to drive ${business.address.city}`,
    "DVSA approved instructor",
    `Pass Plus ${business.address.city}`,
    "automatic driving lessons",
    `intensive driving course ${business.address.city}`,
  ],
  openGraph: {
    title: `${business.name} | Driving Lessons in ${business.address.city}`,
    description: `DVSA approved driving lessons in ${business.address.city}. Friendly, patient, professional instruction. High first-time pass rate.`,
    type: "website",
    locale: "en_GB",
    siteName: business.name,
  },
};

/** Structured data for Google — tells search engines this is a driving school */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: business.name,
  description: `DVSA approved driving lessons in ${business.address.city}. Patient, professional instruction with a high first-time pass rate.`,
  url: business.website,
  telephone: business.phone.international,
  priceRange: "\u00a328-\u00a345/hr",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postcode,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(business.reviews.google.rating),
    reviewCount: String(business.reviews.google.count),
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
  },
  sameAs: [business.social.facebook, business.social.twitter, business.social.freeindex],
  areaServed: { "@type": "City", name: business.address.city },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
