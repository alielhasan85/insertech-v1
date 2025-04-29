"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Technology {
  name: string
  description: string
  icon: string
  category: string
}

interface TechnologiesSectionProps {
  title?: string
  description?: string
  technologies: Technology[]
  categories?: string[]
}

export default function TechnologiesSection({
  title = "Technologies & Tools",
  description = "We use cutting-edge technologies to deliver exceptional results for our clients",
  technologies,
  categories = ["All", "Web Development", "Mobile", "Backend", "ERP & CRM", "Design"],
}: TechnologiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechnologies =
    activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white" id="technologies">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Showcase - Hexagon Grid */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <div className="w-[800px] h-[800px] border-[40px] border-blue-500 rounded-full"></div>
            <div className="absolute w-[600px] h-[600px] border-[30px] border-blue-300 rounded-full"></div>
            <div className="absolute w-[400px] h-[400px] border-[20px] border-blue-200 rounded-full"></div>
          </div>

          {/* Connected Lines Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Technologies */}
          <div className="relative z-10">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={cn(
                      "relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-2xl shadow-lg transition-all duration-300",
                      hoveredTech === tech.name ? "scale-110 shadow-xl" : "hover:shadow-xl",
                      hoveredTech !== null && hoveredTech !== tech.name ? "opacity-50" : "",
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                        <Image
                          src={
                            tech.icon || `/placeholder.svg?height=64&width=64&query=${encodeURIComponent(tech.name)}`
                          }
                          alt={tech.name || "Technology icon"}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div
                    className={cn(
                      "absolute z-20 w-64 p-4 bg-white rounded-lg shadow-xl transition-all duration-300",
                      hoveredTech === tech.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative shrink-0 w-10 h-10 flex items-center justify-center">
                        <Image
                          src={
                            tech.icon || `/placeholder.svg?height=40&width=40&query=${encodeURIComponent(tech.name)}`
                          }
                          alt={tech.name || "Technology icon"}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{tech.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
