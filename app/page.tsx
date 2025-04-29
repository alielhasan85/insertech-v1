import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero/hero-section";
import CompactServicesSection from "@/components/sections/compact-services-section";
import HomeAboutSection from "@/components/sections/home-about-section";
import BlogPreview from "@/components/previews/blog-preview";
import {
  OgeroLogo,
  CarrefourLogo,
  MaliksLogo,
  VirginLogo,
} from "@/components/logos/client-logos";

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
  const trustedLogos = [
    { name: "Ogero", logo: <OgeroLogo /> },
    { name: "Carrefour", logo: <CarrefourLogo /> },
    { name: "Malik's", logo: <MaliksLogo /> },
    { name: "Virgin", logo: <VirginLogo /> },
  ];

  return (
    <>
      <HeroSection
        title="Innovative Digital Solutions for Middle East Businesses"
        description="We transform your vision into powerful digital experiences. Specializing in custom software, web development, mobile apps, and ERP solutions tailored for the MENA region's unique market needs."
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Get a Quote"
        secondaryButtonLink="/contact?service=quote"
        images={[
          {
            src: "/agency-image-1.png",
            alt: "Insertech professional team working on digital solutions for Middle East businesses",
          },
          {
            src: "/agency-image-2.png",
            alt: "Insertech team meeting in modern office discussing software development strategy",
          },
          {
            src: "/agency-image-3.png",
            alt: "Insertech modern workspace with developers creating custom software solutions",
          },
        ]}
        trustedLogos={trustedLogos}
      />

      {/* Compact Services Section */}
      <CompactServicesSection />

      {/* Combined About & Technologies Section */}
      <HomeAboutSection />

      {/* Blog Preview */}
      <BlogPreview />

      {/* Contact CTA */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our services can help you achieve your
            business goals.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
