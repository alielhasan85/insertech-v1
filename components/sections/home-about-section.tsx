"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Users, Zap, Globe, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomeAboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Core values that represent the company
  const coreValues = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Technical Excellence",
      description: "We combine deep expertise with cutting-edge technologies to deliver superior solutions",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Innovation",
      description: "We constantly explore new approaches to solve complex business challenges",
    },
  ]

  // Key technologies used
  const technologies = [
    { name: "Next.js", icon: "/technologies/nextjs-logo.png" },
    { name: "React", icon: "/technologies/react-logo.png" },
    { name: "Flutter", icon: "/technologies/flutter-logo.png" },
    { name: "Node.js", icon: "/technologies/nodejs-logo.png" },
    { name: "Odoo", icon: "/technologies/odoo-logo.png" },
    { name: "AWS", icon: "/technologies/aws-logo.png" },
  ]

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section ref={sectionRef} className="w-full py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                ABOUT INSERTECH
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We transform ideas into <span className="text-blue-600">digital reality</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Insertech is a full-service digital agency specializing in software engineering, web development,
                digital media, ERP solutions, and mobile applications for the Middle East market.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience, our team of experts combines technical excellence with creative
                problem-solving to deliver exceptional digital experiences that drive business growth.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="space-y-4 mb-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUpVariants}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="/about" className="flex items-center gap-2">
                  Learn more about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image and Technologies */}
          <div>
            {/* Company Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative mb-10"
            >
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/middle-east-team.png"
                  alt="Insertech Team"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex items-center">
                  <div className="p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">10+ Years</h3>
                    <p className="text-blue-100">Delivering excellence in the Middle East</p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-8 right-8 flex gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-xl p-4 w-24 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-xl p-4 w-24 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-xs text-gray-600">Clients</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Our Tech Stack</h3>
                <Link
                  href="/technologies"
                  className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 justify-between">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-10 h-10 mb-2">
                      <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                    </div>
                    <span className="text-xs text-gray-600">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Middle East Focus",
              description: "Specialized expertise in the unique requirements of the MENA region market",
            },
            {
              icon: <Database className="h-6 w-6" />,
              title: "End-to-End Solutions",
              description: "From strategy and design to development and ongoing support",
            },
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: "Proven Results",
              description: "Helping businesses achieve measurable growth and digital transformation",
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:bg-blue-100 transition-colors"
            >
              <div className="p-3 bg-blue-500 text-white rounded-lg inline-block mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
