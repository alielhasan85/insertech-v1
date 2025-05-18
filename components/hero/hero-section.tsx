import ImageCarousel from "@/components/hero/image-carousel";
import FloatingShapesBackground from "@/components/hero/floating-shapes-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full relative isolate overflow-hidden py-20">
      {/* Background gradient + floating shapes */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-blue-50 to-blue-100" />
      <FloatingShapesBackground color="#3b82f6" count={25} speed={0.6} />

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT – Text Content */}
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Software. Strategy. Scale.
            <span className="block text-blue-600">
              Web, mobile, and ERP systems built for growth.
            </span>
          </h1>

          <p className="max-w-md text-lg text-gray-600">
            Insertech is a digital engineering agency helping brands and
            businesses design, develop, and deploy high-performance software
            across platforms. From custom web apps to mobile experiences and ERP
            integration—we power your next move.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/services">Explore our services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact?service=consultation">
                Request a free consultation
              </Link>
            </Button>
          </div>
        </div>

        {/* RIGHT – Image Carousel */}
        <div className="relative">
          <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-lg bg-blue-100 lg:block" />

          <ImageCarousel
            images={[
              {
                src: "/agency-image-1.png",
                alt: "Insertech team delivering software solutions for Gulf businesses",
              },
              {
                src: "/agency-image-2.png",
                alt: "Custom ERP and mobile app development discussion",
              },
              {
                src: "/agency-image-3.png",
                alt: "Insertech engineers developing scalable web platforms",
              },
            ]}
          />

          <div className="absolute -z-10 bottom-12 right-12 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-blue-500" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
