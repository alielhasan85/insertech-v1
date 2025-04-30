import type { Metadata } from "next";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero/hero-section";
import CompactServicesSection from "@/components/sections/compact-services-section";
import HomeAboutSection from "@/components/sections/home-about-section";
import BlogPreview from "@/components/previews/blog-preview";
import ContactCTA from "@/components/sections/contact-cta";
// import GradientCard from "@/components/sections/contact-cta";
import { Suspense } from "react";
// import {
//   OgeroLogo,
//   CarrefourLogo,
//   MaliksLogo,
//   VirginLogo,
// } from "@/components/logos/client-logos";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Insertech - Leading software engineering agency specializing in web development, mobile apps, ERP solutions, and digital media for businesses in the Middle East.",
  alternates: {
    canonical: "https://insertech.io",
  },
  openGraph: {
    url: "https://insertech.io",
  },
};

export default function Home() {
  // const trustedLogos = [
  //   { name: "Ogero", logo: <OgeroLogo /> },
  //   { name: "Carrefour", logo: <CarrefourLogo /> },
  //   { name: "Malik's", logo: <MaliksLogo /> },
  //   { name: "Virgin", logo: <VirginLogo /> },
  // ];

  return (
    <>
      <HeroSection
      // title="Software Engineering That Accelerates Your Growth"
      // description="From mobile apps and AI-powered e-commerce to secure fintech platforms, Insertech turns bold ideas into revenue-driving digital products for businesses across the GCC & Levant."
      // primaryButtonText="Explore Our Services"
      // primaryButtonLink="/services"
      // secondaryButtonText="Book a Free Discovery Call"
      // secondaryButtonLink="/contact?service=consultation"
      // images={[
      //   {
      //     src: "/agency-image-1.png",
      //     alt: "Insertech professional team working on digital solutions for Middle East businesses",
      //   },
      //   {
      //     src: "/agency-image-2.avif",
      //     alt: "Insertech team meeting in modern office discussing software development strategy",
      //   },
      //   {
      //     src: "/agency-image-3.png",
      //     alt: "Insertech modern workspace with developers creating custom software solutions",
      //   },
      // ]}
      // trustedLogos={trustedLogos}
      />

      {/* Compact Services Section */}
      <Suspense fallback={null}>
        <CompactServicesSection />
      </Suspense>

      {/* Combined About & Technologies Section */}
      <HomeAboutSection />

      {/* Blog Preview */}
      <BlogPreview />

      {/* <div className="mx-auto max-w-3xl px-6 py-16">
        <GradientCard
          imageSrc="/agency-image-cta.jpg"
          imageAlt="Developers collaborating on a project"
          title="Let’s Build Something Amazing"
          blurb="Share your idea and we’ll craft a tailored roadmap within 24 hours."
          primaryText="Request a proposal"
          primaryHref="/contact"
          secondaryText="Book a 15-min call"
          secondaryHref="/contact?service=consultation"
        />
      </div> */}

      {/* Client Logos Section */}
      {/* <ClientLogos logos={trustedLogos} /> */}

      {/* Contact CTA */}

      <ContactCTA />
    </>
  );
}
