"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";

const students = [
  { name: "Raya Juma", photo: "/students/raya-saleh-ali-juma.jpeg", result: "First time" },
  { name: "Halima Diriye", photo: "/students/halima-diriye.jpeg", result: "First time" },
  { name: "Arronpreet Singh", photo: "/students/arronpreet-singh.jpeg", result: "Passed" },
  { name: "Rayhaan Lakdawala", photo: "/students/rayhaan-lakdawala.jpeg", result: "1 minor" },
  { name: "Dhanesh S.", photo: "/students/dhanesh-sedhumadhavan.jpeg", result: "Passed" },
  { name: "Sandeep Kumar", photo: "/students/sandeep-kumar.jpeg", result: "First attempt" },
  { name: "Gurbaj Singh", photo: "/students/gurbaj-singh.jpeg", result: "2 minors" },
  { name: "Akhil Roy", photo: "/students/akhil-roy.jpeg", result: "Passed" },
  { name: "Artur Lidzer", photo: "/students/artur-lidzer.jpeg", result: "First attempt" },
  { name: "Lovepreet Kaur", photo: "/students/lovepreet-kaur.jpeg", result: "Passed" },
  { name: "Srushti Patel", photo: "/students/srushti-patel.jpeg", result: "Passed" },
  { name: "Suhana Fasa", photo: "/students/suhana-ilyas-fasa.jpeg", result: "Passed" },
];

const rotations = [
  "-rotate-3", "rotate-2", "-rotate-1", "rotate-3",
  "rotate-1", "-rotate-2", "rotate-2", "-rotate-3",
  "rotate-1", "-rotate-1", "rotate-3", "-rotate-2",
];

export function WallOfPasses() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl lg:px-8">
        <AnimateIn>
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                The wall of passes
              </h2>
              <p className="mt-2 text-muted-foreground">
                Real students, real results. Every one of these learners passed
                their test with Nawab.
              </p>
            </div>
            <Link
              href="/testimonials"
              className="hidden text-sm text-primary underline underline-offset-4 hover:text-primary/80 sm:block"
            >
              Read their reviews &rarr;
            </Link>
          </div>
        </AnimateIn>
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:gap-4">
          {students.map((student, i) => (
            <AnimateIn
              key={student.name}
              from="up"
              delay={i * 80}
              duration={500}
            >
              <div
                className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:z-10 hover:scale-105 ${rotations[i]}`}
              >
                <Image
                  src={student.photo}
                  alt={`${student.name} after passing their driving test`}
                  width={200}
                  height={250}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                  <p className="text-xs font-semibold text-white sm:text-sm">
                    {student.name}
                  </p>
                  <p className="text-xs text-white/70">{student.result}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/testimonials"
            className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Read their reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
