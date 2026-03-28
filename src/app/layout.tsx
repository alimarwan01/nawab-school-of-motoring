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
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
