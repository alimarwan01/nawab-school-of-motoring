import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nawab School of Motoring | Driving Lessons in Leicester",
    template: "%s | Nawab School of Motoring",
  },
  description:
    "DVSA approved driving lessons in Leicester. Friendly, patient, professional instruction. High first-time pass rate. Lessons from \u00a328/hr. Call 07977 589 345.",
  keywords: [
    "driving lessons Leicester",
    "driving instructor Leicester",
    "learn to drive Leicester",
    "DVSA approved instructor",
    "Pass Plus Leicester",
    "automatic driving lessons",
    "intensive driving course Leicester",
  ],
  openGraph: {
    title: "Nawab School of Motoring | Driving Lessons in Leicester",
    description:
      "DVSA approved driving lessons in Leicester. Friendly, patient, professional instruction. High first-time pass rate.",
    type: "website",
    locale: "en_GB",
    siteName: "Nawab School of Motoring",
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DrivingSchool",
              name: "Nawab School of Motoring",
              description:
                "DVSA approved driving lessons in Leicester. Patient, professional instruction with a high first-time pass rate. Lessons from £28/hr.",
              url: "https://nawabmotoring.co.uk",
              telephone: "+447977589345",
              priceRange: "£28-£45/hr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "201 Sandhills Avenue, Hamilton",
                addressLocality: "Leicester",
                postalCode: "LE5 1QL",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.6569,
                longitude: -1.0728,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "199",
                bestRating: "5",
                worstRating: "1",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "21:00",
              },
              sameAs: [
                "https://www.facebook.com/NawabMotoring",
                "https://twitter.com/NawabMotoring",
                "https://www.freeindex.co.uk/profile(nawab-school-of-motoring)_536371.htm",
              ],
              areaServed: {
                "@type": "City",
                name: "Leicester",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Driving Lessons",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Standard Driving Lesson",
                    },
                    price: "30",
                    priceCurrency: "GBP",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "10 Hour Block Booking",
                    },
                    price: "290",
                    priceCurrency: "GBP",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pass Plus Course",
                    },
                    price: "225",
                    priceCurrency: "GBP",
                  },
                ],
              },
            }),
          }}
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
