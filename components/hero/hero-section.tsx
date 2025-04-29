import type React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import ImageCarousel from "@/components/hero/image-carousel";
import FloatingShapesBackground from "./floating-shapes-background";

interface HeroSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  trustedLogos?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
}

export default function HeroSection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  images,
  trustedLogos,
}: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>

      {/* Floating shapes background */}
      <FloatingShapesBackground color="#3b82f6" count={40} speed={1.2} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="text-lg text-gray-500 max-w-lg">{description}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <Link href={secondaryButtonLink}>
                  <Download className="h-4 w-4" />
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>

            {trustedLogos && (
              <div className="pt-8 border-t">
                <p className="text-sm text-gray-500 mb-4">
                  Trusted by leading brands
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  {trustedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {logo.logo}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-lg z-0 hidden md:block" />
            <ImageCarousel images={images} />
            <div className="absolute -z-10 bottom-12 right-12 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-500" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
