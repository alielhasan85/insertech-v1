"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Globe, Smartphone, Code, Database, BarChart3, ShoppingBag, Video } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  imageSrc: string
}

export default function AnimatedServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)
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
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      imageSrc: "/services/web-development-detailed.png",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users on any device",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      imageSrc: "/services/mobile-development-detailed.png",
    },
    {
      id: "custom-software",
      title: "Custom Software & AI",
      description: "Tailored software solutions with cutting-edge AI capabilities for your unique challenges",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      imageSrc: "/services/custom-software-detailed.png",
    },
    {
      id: "erp-systems",
      title: "ERP Systems & Odoo",
      description: "Comprehensive enterprise solutions that streamline operations and boost efficiency",
      icon: <Database className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      imageSrc: "/services/erp-systems-detailed.png",
    },
    {
      id: "digital-marketing",
      title: "Digital Media & SEO",
      description: "Strategic digital marketing that increases visibility and drives qualified traffic",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      imageSrc: "/services/digital-marketing-detailed.png",
    },
    {
      id: "shopify",
      title: "Shopify Development",
      description: "Custom e-commerce solutions that drive sales and enhance customer experience",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      imageSrc: "/services/shopify-detailed.png",
    },
    {
      id: "video-production",
      title: "Video & Motion Graphics",
      description: "Compelling visual content that tells your story and captivates your audience",
      icon: <Video className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      imageSrc: "/services/video-production-detailed.png",
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

  const detailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Floating animation for icons
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-gradient-to-b from-[#0a0e29] to-[#111540] text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute w-full h-full bg-[url('/grid-pattern.png')] bg-center opacity-5"></div>
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block px-4 py-1 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We transform ideas into <span className="text-blue-400">digital reality</span>
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Our comprehensive range of services is designed to help businesses thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          {/* Service Navigation - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-4 space-y-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setActiveService(service.id === activeService ? null : service.id)}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 group ${
                  activeService === service.id
                    ? `bg-gradient-to-r ${service.color} shadow-lg`
                    : "bg-[#1a1f50] hover:bg-[#232a6c]"
                }`}
              >
                {/* Animated background pattern */}
                <div
                  className={`absolute inset-0 bg-[url('/pattern-dots.png')] bg-repeat opacity-10 
                  ${activeService === service.id ? "animate-slide-slow" : ""}`}
                ></div>

                <div className="relative p-6 flex items-start gap-4">
                  <motion.div
                    animate={hoveredService === service.id || activeService === service.id ? floatingAnimation : {}}
                    className={`p-3 rounded-lg ${
                      activeService === service.id ? "bg-white/20" : "bg-gradient-to-br from-blue-600 to-blue-800"
                    }`}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p
                      className={`text-sm transition-all duration-300 ${
                        activeService === service.id ? "text-white/90" : "text-blue-100/70"
                      }`}
                    >
                      {service.description}
                    </p>
                    <div
                      className={`mt-3 flex items-center text-sm font-medium transition-all duration-300 ${
                        activeService === service.id ? "text-white" : "text-blue-400"
                      }`}
                    >
                      <span>Learn more</span>
                      <ArrowRight
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
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
          <div className="lg:col-span-8 relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeService ? (
                <motion.div
                  key={activeService}
                  variants={detailVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full h-full"
                >
                  {services
                    .filter((service) => service.id === activeService)
                    .map((service) => (
                      <div key={service.id} className="bg-[#232a6c] rounded-xl overflow-hidden shadow-2xl h-full">
                        <div className="relative h-64 w-full">
                          <Image
                            src={service.imageSrc || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-[#232a6c] to-transparent opacity-90`}
                          ></div>
                          <div className="absolute bottom-0 left-0 w-full p-6">
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-blue-100/90">{service.description}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3">Key Features</h4>
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
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                  </div>
                                  <span className="text-blue-100/80">
                                    {service.id === "web-development" &&
                                      item === 1 &&
                                      "Responsive, user-centered design"}
                                    {service.id === "web-development" &&
                                      item === 2 &&
                                      "Modern frameworks like React & Next.js"}
                                    {service.id === "web-development" && item === 3 && "Performance optimization & SEO"}

                                    {service.id === "mobile-development" &&
                                      item === 1 &&
                                      "Native iOS & Android development"}
                                    {service.id === "mobile-development" &&
                                      item === 2 &&
                                      "Cross-platform with React Native & Flutter"}
                                    {service.id === "mobile-development" && item === 3 && "Seamless API integration"}

                                    {service.id === "custom-software" &&
                                      item === 1 &&
                                      "AI & machine learning integration"}
                                    {service.id === "custom-software" && item === 2 && "Custom business applications"}
                                    {service.id === "custom-software" && item === 3 && "Data analytics & visualization"}

                                    {service.id === "erp-systems" &&
                                      item === 1 &&
                                      "Odoo implementation & customization"}
                                    {service.id === "erp-systems" && item === 2 && "Business process automation"}
                                    {service.id === "erp-systems" && item === 3 && "Integration with existing systems"}

                                    {service.id === "digital-marketing" &&
                                      item === 1 &&
                                      "Search engine optimization (SEO)"}
                                    {service.id === "digital-marketing" && item === 2 && "Content marketing & strategy"}
                                    {service.id === "digital-marketing" &&
                                      item === 3 &&
                                      "Analytics & performance tracking"}

                                    {service.id === "shopify" && item === 1 && "Custom Shopify theme development"}
                                    {service.id === "shopify" && item === 2 && "E-commerce strategy & optimization"}
                                    {service.id === "shopify" && item === 3 && "Payment gateway integration"}

                                    {service.id === "video-production" && item === 1 && "Professional video production"}
                                    {service.id === "video-production" && item === 2 && "Motion graphics & animation"}
                                    {service.id === "video-production" &&
                                      item === 3 &&
                                      "Explainer videos & product demos"}
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
                              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium transition-transform hover:scale-105`}
                            >
                              Explore {service.title}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 bg-[#1a1f50]/50 rounded-xl border border-blue-900/30 h-full"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="mb-6 text-blue-400"
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Select a service</h3>
                  <p className="text-blue-100/70 max-w-md">
                    Click on any of our services on the left to see more details and discover how we can help your
                    business grow.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center relative z-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all hover:scale-105"
          >
            View all our services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
