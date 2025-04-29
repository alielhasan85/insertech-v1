import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TechnologiesPreview() {
  const technologies = [
    {
      name: "Next.js",
      icon: "/technologies/nextjs.png",
    },
    {
      name: "Flutter",
      icon: "/technologies/flutter.png",
    },
    {
      name: "Prisma",
      icon: "/technologies/prisma.png",
    },
    {
      name: "Firebase",
      icon: "/technologies/firebase.png",
    },
    {
      name: "Odoo",
      icon: "/technologies/odoo.png",
    },
    {
      name: "WordPress",
      icon: "/technologies/wordpress.png",
    },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies & Tools</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We use cutting-edge technologies to deliver exceptional results for our clients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="w-24 h-24 flex flex-col items-center justify-center">
              <div className="relative w-12 h-12 mb-2">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="/technologies" className="flex items-center gap-2">
              Explore all technologies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
