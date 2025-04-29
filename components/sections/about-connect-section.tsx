"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Code, Lightbulb, Users, Zap, CheckCircle, BarChart } from "lucide-react"

export default function AboutConnectSection() {
  const [activeValue, setActiveValue] = useState("innovation")
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { once: false, amount: 0.2 })

  const coreValues = [
    {
      id: "innovation",
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    },
    {
      id: "expertise",
      icon: <Code className="w-5 h-5" />,
      title: "Expertise",
      description:
        "Our team combines deep technical knowledge with creative problem-solving skills to tackle complex challenges with confidence and precision.",
    },
    {
      id: "collaboration",
      icon: <Users className="w-5 h-5" />,
      title: "Collaboration",
      description:
        "We believe in the power of partnership, working closely with our clients to understand their needs and deliver solutions that exceed expectations.",
    },
    {
      id: "agility",
      icon: <Zap className="w-5 h-5" />,
      title: "Agility",
      description:
        "In a rapidly evolving digital landscape, we stay nimble and adaptable, quickly responding to changes and opportunities with strategic thinking.",
    },
    {
      id: "quality",
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Quality",
      description:
        "We're committed to excellence in everything we do, maintaining the highest standards of quality and attention to detail in every project.",
    },
    {
      id: "results",
      icon: <BarChart className="w-5 h-5" />,
      title: "Results",
      description:
        "We measure our success by the tangible outcomes we create for our clients—increased efficiency, enhanced user experiences, and sustainable growth.",
    },
  ]

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
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white" id="about" ref={aboutRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Enhanced Section Header with better visual hierarchy */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4"
          >
            ABOUT INSERTECH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            We transform ideas into <span className="text-blue-600">digital reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Insertech is a full-service digital agency specializing in software engineering, web development, digital
            media, ERP solutions, and mobile applications. We combine technical expertise with creative thinking to
            deliver exceptional results.
          </motion.p>
        </div>

        {/* Improved Team Image Section with better visual balance */}
        <div className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="aspect-[21/9] relative">
              <Image
                src="/middle-east-team.png"
                alt="Insertech Middle East Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="ml-12 md:ml-20 text-white max-w-xl"
                >
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    WHO <br />
                    WE ARE
                  </h2>
                  <p className="text-xl text-blue-50 mb-8">
                    A team of passionate technologists, designers, and strategists dedicated to crafting exceptional
                    digital experiences that drive business growth.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="inline-block"
                  >
                    <Link
                      href="/team"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors"
                    >
                      Meet our team
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Floating stats cards with better positioning and animation */}
          <div className="absolute -bottom-10 right-10 md:right-20 flex gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg shadow-xl p-6 w-32 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg shadow-xl p-6 w-32 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg shadow-xl p-6 w-32 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>
          </div>
        </div>

        {/* Improved Our Story Section with better spacing and visual elements */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative element */}
            <div className="absolute -left-6 top-0 w-1 h-24 bg-blue-500 rounded-full"></div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Founded in 2015, Insertech began with a simple mission: to bridge the gap between complex technology and
                real business needs. What started as a small team of passionate developers has grown into a
                comprehensive digital agency serving clients across industries.
              </p>
              <p>
                We&apos;ve built our reputation on technical excellence, creative problem-solving, and an unwavering
                commitment to client success. Our team combines diverse backgrounds and expertise to deliver innovative
                solutions that drive measurable results.
              </p>
              <p>
                Today, we continue to evolve and adapt to the changing digital landscape, embracing new technologies and
                methodologies to help our clients stay ahead in an increasingly competitive market.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative element */}
            <div className="absolute -left-6 top-0 w-1 h-24 bg-blue-500 rounded-full"></div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                We believe that successful digital solutions start with a deep understanding of your business goals,
                challenges, and users. Our collaborative approach ensures that we&apos;re not just building products, but
                creating strategic assets that drive your business forward.
              </p>
              <p>
                Every project begins with thorough discovery and planning, followed by iterative design and development
                processes that keep you involved every step of the way. We emphasize transparency, communication, and
                flexibility, adapting our methods to suit your specific needs.
              </p>
              <p>
                After launch, we remain committed to your success, providing ongoing support, maintenance, and
                optimization to ensure your digital solutions continue to deliver value over time.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Core Values Section with better interaction */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we work with clients to how we develop our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.id}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`p-8 rounded-xl border-2 cursor-pointer transition-all ${
                  activeValue === value.id
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/30"
                }`}
                onClick={() => setActiveValue(value.id)}
              >
                <div
                  className={`p-3 rounded-full inline-block mb-4 ${
                    activeValue === value.id ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>

                {/* Add a subtle indicator for active state */}
                {activeValue === value.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 flex items-center text-blue-500 text-sm font-medium"
                  >
                    <span className="mr-1">Core principle</span>
                    <CheckCircle className="h-4 w-4" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section with better visual appeal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-blue-600 opacity-90">
            <div className="absolute inset-0 bg-[url('/pattern-dots.png')] bg-repeat opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let&apos;s collaborate to create digital solutions that drive your business forward. Our team is ready to turn
              your vision into reality.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-medium rounded-full text-lg hover:bg-blue-50 transition-colors"
              >
                Start a Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
