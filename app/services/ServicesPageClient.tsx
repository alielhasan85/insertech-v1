"use client"

import ServicesSection from "@/components/sections/services-section"
import EnhancedTechnologiesSection from "@/components/sections/enhanced-technologies-section"
import ServicesCTA from "@/components/sections/services-cta"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Code, Smartphone, Database, BarChart3 } from "lucide-react"

export default function ServicesPageClient() {
  // Technology data with improved logos and descriptions
  const technologies = [
    {
      name: "Next.js",
      description:
        "React framework for production-grade web applications with server-side rendering and static site generation",
      icon: "/technologies/nextjs-logo.png",
      category: "Web Development",
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces with reusable components and virtual DOM",
      icon: "/technologies/react-logo.png",
      category: "Web Development",
    },
    {
      name: "Flutter",
      description:
        "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase",
      icon: "/technologies/flutter-logo.png",
      category: "Mobile",
    },
    {
      name: "React Native",
      description: "Framework for building native mobile apps using React and JavaScript with near-native performance",
      icon: "/technologies/react-native-logo.png",
      category: "Mobile",
    },
    {
      name: "Node.js",
      description:
        "JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications",
      icon: "/technologies/nodejs-logo.png",
      category: "Backend",
    },
    {
      name: "TypeScript",
      description: "Strongly typed programming language that builds on JavaScript with static type definitions",
      icon: "/technologies/typescript-logo.png",
      category: "Web Development",
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript with type-safety and auto-generated queries",
      icon: "/technologies/prisma-logo.png",
      category: "Backend",
    },
    {
      name: "Firebase",
      description: "Google's platform for app development with authentication, databases, storage, and hosting",
      icon: "/technologies/firebase-logo.png",
      category: "Backend",
    },
    {
      name: "Odoo",
      description:
        "Open source ERP and CRM business management software with integrated modules for all business needs",
      icon: "/technologies/odoo-logo.png",
      category: "ERP & CRM",
    },
    {
      name: "WordPress",
      description:
        "World's most popular content management system for websites and blogs with extensive plugin ecosystem",
      icon: "/technologies/wordpress-logo.png",
      category: "Web Development",
    },
    {
      name: "Shopify",
      description: "Leading e-commerce platform for online stores with customizable themes and app marketplace",
      icon: "/technologies/shopify-logo.png",
      category: "Web Development",
    },
    {
      name: "Figma",
      description: "Collaborative interface design tool for digital products with real-time collaboration features",
      icon: "/technologies/figma-logo.png",
      category: "Design",
    },
    {
      name: "TailwindCSS",
      description: "Utility-first CSS framework for rapidly building custom user interfaces with minimal CSS",
      icon: "/technologies/tailwind-logo.png",
      category: "Web Development",
    },
    {
      name: "PostgreSQL",
      description: "Powerful, open source object-relational database system with strong reputation for reliability",
      icon: "/technologies/postgresql-logo.png",
      category: "Backend",
    },
    {
      name: "MongoDB",
      description: "Document-oriented NoSQL database used for high volume data storage with flexible schema",
      icon: "/technologies/mongodb-logo.png",
      category: "Backend",
    },
    {
      name: "AWS",
      description: "Amazon's comprehensive cloud computing platform with over 200 fully featured services",
      icon: "/technologies/aws-logo.png",
      category: "Backend",
    },
  ]

  const solutionCards = [
    {
      icon: <Code className="w-5 h-5 text-blue-300" />,
      title: "Custom Solutions",
      description: "Tailored to your unique business requirements",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-green-300" />,
      title: "Mobile Apps",
      description: "Native and cross-platform development",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Database className="w-5 h-5 text-amber-300" />,
      title: "ERP Systems",
      description: "Streamline your business operations",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-purple-300" />,
      title: "Digital Marketing",
      description: "Increase visibility and drive growth",
      color: "from-purple-500 to-pink-500",
    },
  ]

  function AnimatedSolutionCards({ solutionCards }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % solutionCards.length)
      }, 3000) // Change card every 3 seconds

      return () => clearInterval(interval)
    }, [solutionCards.length])

    return (
      <div className="absolute right-20 top-20 w-80 h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCardIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                {solutionCards[currentCardIndex].icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{solutionCards[currentCardIndex].title}</h3>
              <p className="text-blue-100/80 text-sm">{solutionCards[currentCardIndex].description}</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 bg-gradient-to-r ${solutionCards[currentCardIndex].color} rounded-full opacity-70`}
                ></div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Card Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {solutionCards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentCardIndex ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Enhanced Page Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[800px] h-[800px] border-2 border-blue-500/10 rounded-full"></div>
            <div className="absolute inset-0 w-[600px] h-[600px] border-2 border-blue-500/10 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute inset-0 w-[400px] h-[400px] border-2 border-blue-500/10 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/pattern-dots.png')] bg-repeat opacity-5"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-800/50 mb-6">
                <Briefcase className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services & Expertise</h1>
              <p className="text-xl text-blue-100 max-w-xl mb-8">
                Comprehensive digital solutions tailored to help your business thrive in today's competitive landscape
              </p>
              <div className="flex flex-wrap gap-4">
                {["Web Development", "Mobile Apps", "ERP Systems", "Digital Media"].map((service, index) => (
                  <div key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="relative h-96 w-full">
                <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl transform rotate-6"></div>
                <div className="absolute right-10 top-10 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl transform -rotate-3"></div>

                {/* Animated Solution Cards */}
                <AnimatedSolutionCards solutionCards={solutionCards} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Technologies Section */}
      <EnhancedTechnologiesSection technologies={technologies} darkMode={true} />

      {/* Call to Action Section */}
      <ServicesCTA />
    </>
  )
}
