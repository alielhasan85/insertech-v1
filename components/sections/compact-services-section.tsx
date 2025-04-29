"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Globe, Smartphone, Code, Database } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  imageSrc: string
}

export default function CompactServicesSection() {
  const [activeService, setActiveService] = useState<string>("web-development") // Set default active service
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const services: Service[] = [
    {
      id: "web-development",
      title: "Website Design & Development",
      description: "Creating stunning, responsive websites that deliver exceptional user experiences",
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      imageSrc: "/services/web-dev-bg.png",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users on any device",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      imageSrc: "/services/mobile-dev-bg.png",
    },
    {
      id: "custom-software",
      title: "Custom Software & AI",
      description: "Tailored software solutions with cutting-edge AI capabilities for your unique challenges",
      icon: <Code className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      imageSrc: "/services/software-bg.png",
    },
    {
      id: "erp-systems",
      title: "ERP Systems & Odoo",
      description: "Comprehensive enterprise solutions that streamline operations and boost efficiency",
      icon: <Database className="w-5 h-5" />,
      color: "from-amber-500 to-amber-600",
      imageSrc: "/services/erp-bg.png",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Floating animation for icons
  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 bg-gradient-to-b from-[#0a0e29] to-[#111540] text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 relative z-10"
        >
          <div className="inline-block px-4 py-1 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help businesses thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 relative z-10">
          {/* Service Navigation - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="md:col-span-5 lg:col-span-4 space-y-2 sm:space-y-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setActiveService(service.id)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 group ${
                  activeService === service.id
                    ? `bg-gradient-to-r ${service.color} shadow-lg`
                    : "bg-[#1a1f50] hover:bg-[#232a6c]"
                }`}
              >
                <div className="relative p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <motion.div
                    animate={hoveredService === service.id || activeService === service.id ? floatingAnimation : {}}
                    className={`p-2 rounded-lg ${
                      activeService === service.id ? "bg-white/20" : "bg-gradient-to-br from-blue-600 to-blue-800"
                    }`}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-base font-bold">{service.title}</h3>
                    <div
                      className={`mt-1 flex items-center text-xs font-medium transition-all duration-300 ${
                        activeService === service.id ? "text-white" : "text-blue-400"
                      }`}
                    >
                      <span>Learn more</span>
                      <ArrowRight
                        className={`ml-1 h-3 w-3 transition-transform duration-300 ${
                          hoveredService === service.id || activeService === service.id ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details - Right Side */}
          <div className="md:col-span-7 lg:col-span-8 relative">
            {services
              .filter((service) => service.id === activeService)
              .map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#232a6c] rounded-xl overflow-hidden shadow-2xl h-full"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.imageSrc || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#232a6c] to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 w-full p-5">
                      <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                      <p className="text-blue-100/90 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <h4 className="text-base font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: item * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="rounded-full bg-blue-500/20 p-1 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            </div>
                            <span className="text-blue-100/80 text-sm">
                              {service.id === "web-development" && item === 1 && "Responsive, user-centered design"}
                              {service.id === "web-development" &&
                                item === 2 &&
                                "Modern frameworks like React & Next.js"}
                              {service.id === "web-development" && item === 3 && "Performance optimization & SEO"}

                              {service.id === "mobile-development" && item === 1 && "Native iOS & Android development"}
                              {service.id === "mobile-development" &&
                                item === 2 &&
                                "Cross-platform with React Native & Flutter"}
                              {service.id === "mobile-development" && item === 3 && "Seamless API integration"}

                              {service.id === "custom-software" && item === 1 && "AI & machine learning integration"}
                              {service.id === "custom-software" && item === 2 && "Custom business applications"}
                              {service.id === "custom-software" && item === 3 && "Data analytics & visualization"}

                              {service.id === "erp-systems" && item === 1 && "Odoo implementation & customization"}
                              {service.id === "erp-systems" && item === 2 && "Business process automation"}
                              {service.id === "erp-systems" && item === 3 && "Integration with existing systems"}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href={`/services/${service.id}`}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white text-sm font-medium transition-transform hover:scale-105`}
                      >
                        Explore {service.title}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center relative z-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all hover:scale-105 text-sm"
          >
            View all our services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
