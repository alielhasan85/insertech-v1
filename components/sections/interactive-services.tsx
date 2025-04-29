"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ServiceContent {
  id: string
  title: string
  description: string
  details: React.ReactNode
  imageSrc: string
  imageAlt?: string
  ctaText?: string
  ctaLink?: string
}

interface InteractiveServicesProps {
  title?: string
  heading?: string
  services: ServiceContent[]
}

export default function InteractiveServices({
  title = "WHAT WE DO",
  heading = "We help to build clients their dream projects",
  services,
}: InteractiveServicesProps) {
  const [activeService, setActiveService] = useState<string>(services[0]?.id || "")

  const activeServiceData = services.find((service) => service.id === activeService)

  return (
    <section className="w-full py-20 bg-[#0a0e29] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h3 className="text-blue-400 font-medium mb-4">{title}</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Service Navigation */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {services.map((service) => (
              <div key={service.id} className="relative">
                <button
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    "text-left text-xl md:text-2xl font-semibold transition-colors duration-300 hover:text-blue-400 w-full",
                    activeService === service.id ? "text-blue-400" : "text-white",
                  )}
                >
                  {service.title}
                </button>
                {activeService === service.id && (
                  <div className="absolute right-0 top-1/2 w-16 h-0.5 bg-blue-400 transform -translate-y-1/2 hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Service Content */}
          <div className="lg:col-span-7 bg-[#111540] rounded-lg overflow-hidden">
            {activeServiceData && (
              <div className="animate-fadeIn">
                <div className="relative h-56 md:h-64 w-full">
                  <Image
                    src={
                      activeServiceData.imageSrc ||
                      `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(activeServiceData.title)}`
                    }
                    alt={activeServiceData.imageAlt || activeServiceData.title || "Service image"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">{activeServiceData.title}</h3>
                  <p className="text-gray-300">{activeServiceData.description}</p>
                  <div className="text-gray-300 space-y-4">{activeServiceData.details}</div>
                  {activeServiceData.ctaLink && (
                    <div className="pt-4">
                      <Link
                        href={activeServiceData.ctaLink}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                      >
                        {activeServiceData.ctaText || "View Work"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
