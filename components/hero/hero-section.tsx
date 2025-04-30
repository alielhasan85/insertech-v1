import TypeLoop from "@/components/hero/type-loop";
import ImageCarousel from "@/components/hero/image-carousel";
import FloatingShapesBackground from "@/components/hero/floating-shapes-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="W-full relative isolate overflow-hidden py-20">
      {/* gradient + subtle shapes */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-blue-50 to-blue-100" />
      <FloatingShapesBackground color="#3b82f6" count={25} speed={0.6} />

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT – copy */}
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold text- leading-tight sm:text-5xl">
            Digital transformation
            {/* typed list on its own line */}
            <span className="block">
              built&nbsp;for&nbsp;
              <TypeLoop />
            </span>
          </h1>

          <p className="max-w-md text-lg text-gray-600">
            Insertech turns raw ideas into shipped products—fast. Our lean,
            cross-functional squads design, build and launch software that
            levels up your startup.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/services">See what we build</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact?service=consultation">
                Get a free roadmap
              </Link>
            </Button>
          </div>
        </div>

        {/* RIGHT – visual */}
        <div className="relative">
          {/* decorative blob */}
          <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-lg bg-blue-100 lg:block" />
          <ImageCarousel
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
