// components/sections/contact-cta.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 text-white">
      {/* animated gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br
                   from-blue-600 via-sky-600 to-violet-600
                   animate-shimmer"
      />

      {/* dot-grid overlay */}
      <div className="absolute inset-0 -z-10 bg-grid-dot opacity-20" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Let’s turn your idea into&nbsp;reality
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">
          Talk with our engineers today and get a tailored roadmap
          in&nbsp;24&nbsp;hours.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="shadow-lg">
            <Link href="/contact">Request a proposal</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10"
          >
            <Link href="/contact?service=consultation">Book a 15-min call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
