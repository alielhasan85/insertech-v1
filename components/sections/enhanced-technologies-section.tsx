"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface Technology {
  name: string
  description: string
  icon: string
  category: string
}

interface EnhancedTechnologiesSectionProps {
  title?: string
  description?: string
  technologies: Technology[]
  categories?: string[]
  darkMode?: boolean
}

export default function EnhancedTechnologiesSection({
  title = "Technologies & Tools",
  description = "We use cutting-edge technologies to deliver exceptional results for our clients",
  technologies,
  categories = ["All", "Web Development", "Mobile", "Backend", "ERP & CRM", "Design"],
  darkMode = false,
}: EnhancedTechnologiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const filteredTechnologies =
    activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full py-24 relative overflow-hidden",
        darkMode ? "bg-[#0a0e29] text-white" : "bg-gradient-to-b from-gray-50 to-white text-gray-900",
      )}
      id="technologies"
    >
      {/* Background Elements */}
      {darkMode && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-900/5 to-purple-900/5 bg-center opacity-30"></div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Section Header with gradient text */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          className="text-center mb-16"
        >
          <div
            className={cn(
              "inline-block px-4 py-1 text-sm font-medium rounded-full mb-4",
              darkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-600",
            )}
          >
            OUR TECH STACK
          </div>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              darkMode ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text" : "",
            )}
          >
            {title}
          </h2>
          <p className={cn("max-w-3xl mx-auto", darkMode ? "text-blue-100/80" : "text-gray-600")}>{description}</p>
        </motion.div>

        {/* Improved Category Filter with better visual feedback */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? darkMode
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  : darkMode
                    ? "bg-[#1a1f50] text-blue-100 hover:bg-[#232a6c]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Showcase with improved layout and visual elements */}
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="relative">
          {/* Background pattern with parallax effect */}
          <div className={cn("absolute inset-0 pointer-events-none", darkMode ? "opacity-10" : "opacity-5")}>
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-30"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>
          </div>

          {/* Technologies with improved card design */}
          <div className="relative z-10">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="group"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div
                    className={cn(
                      "relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl transition-all duration-300",
                      darkMode
                        ? "bg-gradient-to-br from-[#1a1f50] to-[#111540] shadow-lg shadow-blue-900/20"
                        : "bg-white shadow-lg shadow-blue-100/50",
                      hoveredTech !== null && hoveredTech !== tech.name ? "opacity-50" : "",
                    )}
                  >
                    {/* Decorative corner elements */}
                    <div
                      className={cn(
                        "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg",
                        darkMode ? "border-blue-500/30" : "border-blue-200",
                      )}
                    ></div>
                    <div
                      className={cn(
                        "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg",
                        darkMode ? "border-blue-500/30" : "border-blue-200",
                      )}
                    ></div>

                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl",
                        darkMode
                          ? "bg-gradient-to-br from-[#232a6c]/50 to-[#1a1f50]/50"
                          : "bg-gradient-to-br from-blue-50/50 to-white/50",
                      )}
                    ></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                        animate={
                          hoveredTech === tech.name
                            ? {
                                y: [0, -5, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "reverse",
                                },
                              }
                            : {}
                        }
                      >
                        <Image
                          src={
                            tech.icon || `/placeholder.svg?height=64&width=64&query=${encodeURIComponent(tech.name)}`
                          }
                          alt={tech.name || "Technology icon"}
                          width={64}
                          height={64}
                          className="object-contain drop-shadow-md"
                        />
                      </motion.div>
                      <span
                        className={cn(
                          "mt-2 text-sm font-medium text-center",
                          darkMode ? "text-blue-100" : "",
                          hoveredTech === tech.name ? "text-blue-500" : "",
                        )}
                      >
                        {tech.name}
                      </span>
                    </div>

                    {/* Subtle glow effect on hover */}
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={cn(
                          "absolute inset-0 rounded-2xl",
                          darkMode
                            ? "bg-blue-500/5 shadow-lg shadow-blue-500/10"
                            : "bg-blue-50/50 shadow-lg shadow-blue-200/50",
                        )}
                      ></motion.div>
                    )}
                  </div>

                  {/* Enhanced Tooltip with better styling and animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={
                      hoveredTech === tech.name ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 10 }
                    }
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute z-20 w-64 p-5 rounded-lg shadow-xl mt-3",
                      darkMode
                        ? "bg-[#1a1f50] text-white border border-blue-500/20"
                        : "bg-white text-gray-900 border border-blue-100",
                    )}
                    style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
                  >
                    <div
                      className="flex items-start gap-3"
                      style={{ backgroundColor: "inherit", backdropFilter: "none" }}
                    >
                      <div className="relative shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50/10 rounded-lg p-1">
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
                        <h3 className="font-bold">{tech.name}</h3>
                        <p className={cn("text-sm mt-1", darkMode ? "text-blue-100/80" : "text-gray-600")}>
                          {tech.description}
                        </p>
                        <div className="mt-2">
                          <span
                            className={cn(
                              "inline-block px-2 py-1 text-xs font-medium rounded-full",
                              darkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-50 text-blue-600",
                            )}
                          >
                            {tech.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tooltip arrow */}
                    <div
                      className={cn(
                        "absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45",
                        darkMode ? "bg-[#1a1f50]" : "bg-white",
                      )}
                      style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
                    ></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
