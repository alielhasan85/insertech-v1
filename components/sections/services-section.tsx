"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  Database,
  BarChart3,
  ShoppingBag,
  Video,
  CheckCircle2,
  ChevronRight,
  Layers,
  Cpu,
  PenTool,
  Search,
  LineChart,
  Users,
  Zap,
} from "lucide-react"

interface ServiceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

interface ServiceDetails {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: React.ReactNode
  imageSrc: string
  imageAlt: string
  features: ServiceFeature[]
  technologies?: string[]
  caseStudyLink?: string
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string>("web-development")
  const [hoverService, setHoverService] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const services: ServiceDetails[] = [
    {
      id: "web-development",
      title: "Website Design & Development",
      shortDescription: "Creating stunning, responsive websites that deliver exceptional user experiences",
      fullDescription:
        "We design and develop custom websites that not only look beautiful but also drive results. Our approach combines strategic thinking, creative design, and technical expertise to create digital experiences that engage your audience and achieve your business goals.",
      icon: <Globe className="w-6 h-6" />,
      imageSrc: "/services/web-development-detailed.png",
      imageAlt: "Website design and development",
      features: [
        {
          icon: <PenTool />,
          title: "UI/UX Design",
          description: "User-centered design that creates intuitive, engaging experiences across all devices",
        },
        {
          icon: <Layers />,
          title: "Frontend Development",
          description: "Clean, efficient code using modern frameworks like React, Next.js, and Vue",
        },
        {
          icon: <Database />,
          title: "Backend Development",
          description: "Robust, scalable backend systems that power your digital products",
        },
        {
          icon: <Zap />,
          title: "Performance Optimization",
          description: "Lightning-fast loading times and smooth interactions for optimal user experience",
        },
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL", "PostgreSQL", "MongoDB"],
      caseStudyLink: "/case-studies/web-development",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      shortDescription: "Native and cross-platform mobile applications that engage users on any device",
      fullDescription:
        "Our mobile development team creates powerful, feature-rich applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we deliver mobile experiences that users love.",
      icon: <Smartphone className="w-6 h-6" />,
      imageSrc: "/services/mobile-development-detailed.png",
      imageAlt: "Mobile app development",
      features: [
        {
          icon: <Smartphone />,
          title: "Native Development",
          description: "High-performance iOS and Android apps using Swift, Kotlin, and Java",
        },
        {
          icon: <Globe />,
          title: "Cross-Platform Solutions",
          description: "Efficient development with React Native and Flutter for multiple platforms",
        },
        {
          icon: <Users />,
          title: "User-Centered Design",
          description: "Intuitive interfaces that follow platform-specific design guidelines",
        },
        {
          icon: <CheckCircle2 />,
          title: "Quality Assurance",
          description: "Rigorous testing across devices to ensure flawless performance",
        },
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "MobX"],
      caseStudyLink: "/case-studies/mobile-development",
    },
    {
      id: "custom-software",
      title: "Custom Software & AI",
      shortDescription: "Tailored software solutions with cutting-edge AI capabilities for your unique challenges",
      fullDescription:
        "We develop custom software solutions that address your specific business challenges. By integrating artificial intelligence and machine learning capabilities, we create intelligent systems that automate processes, provide valuable insights, and drive innovation.",
      icon: <Code className="w-6 h-6" />,
      imageSrc: "/services/custom-software-detailed.png",
      imageAlt: "Custom software development with AI",
      features: [
        {
          icon: <Cpu />,
          title: "AI Integration",
          description: "Implementing machine learning, natural language processing, and computer vision",
        },
        {
          icon: <Code />,
          title: "Custom Development",
          description: "Bespoke software solutions tailored to your unique business requirements",
        },
        {
          icon: <Database />,
          title: "Data Engineering",
          description: "Building robust data pipelines and analytics infrastructure",
        },
        {
          icon: <LineChart />,
          title: "Predictive Analytics",
          description: "Leveraging data to forecast trends and inform business decisions",
        },
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "AWS", "Google Cloud", "Azure"],
      caseStudyLink: "/case-studies/custom-software",
    },
    {
      id: "erp-systems",
      title: "ERP Systems & Odoo",
      shortDescription: "Comprehensive enterprise solutions that streamline operations and boost efficiency",
      fullDescription:
        "We specialize in implementing and customizing Odoo ERP systems that integrate all aspects of your business. Our solutions streamline operations, improve collaboration, and provide real-time insights that help you make better decisions and drive growth.",
      icon: <Database className="w-6 h-6" />,
      imageSrc: "/services/erp-systems-detailed.png",
      imageAlt: "ERP systems and Odoo implementation",
      features: [
        {
          icon: <Database />,
          title: "Odoo Implementation",
          description: "Full-service setup, configuration, and deployment of Odoo ERP",
        },
        {
          icon: <Code />,
          title: "Custom Modules",
          description: "Developing tailored modules to address your specific business needs",
        },
        {
          icon: <Layers />,
          title: "System Integration",
          description: "Connecting Odoo with your existing software ecosystem",
        },
        {
          icon: <Users />,
          title: "Training & Support",
          description: "Comprehensive training and ongoing support for your team",
        },
      ],
      technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript", "QWeb", "REST API"],
      caseStudyLink: "/case-studies/erp-systems",
    },
    {
      id: "digital-marketing",
      title: "Digital Media & SEO",
      shortDescription: "Strategic digital marketing that increases visibility and drives qualified traffic",
      fullDescription:
        "Our digital marketing services help you reach and engage your target audience effectively. From search engine optimization to content marketing and social media management, we develop comprehensive strategies that increase your online visibility and drive meaningful results.",
      icon: <BarChart3 className="w-6 h-6" />,
      imageSrc: "/services/digital-marketing-detailed.png",
      imageAlt: "Digital media and SEO services",
      features: [
        {
          icon: <Search />,
          title: "Search Engine Optimization",
          description: "Technical SEO, content optimization, and link building strategies",
        },
        {
          icon: <BarChart3 />,
          title: "Performance Marketing",
          description: "Data-driven campaigns across search, social, and display channels",
        },
        {
          icon: <PenTool />,
          title: "Content Strategy",
          description: "Engaging, valuable content that resonates with your target audience",
        },
        {
          icon: <LineChart />,
          title: "Analytics & Reporting",
          description: "Comprehensive tracking and insights to measure campaign effectiveness",
        },
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Meta Ads", "Mailchimp", "HubSpot"],
      caseStudyLink: "/case-studies/digital-marketing",
    },
    {
      id: "shopify",
      title: "Shopify Development",
      shortDescription: "Custom e-commerce solutions that drive sales and enhance customer experience",
      fullDescription:
        "We create custom Shopify stores that stand out from the competition and drive conversions. Our e-commerce expertise ensures your online store not only looks great but also provides a seamless shopping experience that keeps customers coming back.",
      icon: <ShoppingBag className="w-6 h-6" />,
      imageSrc: "/services/shopify-detailed.png",
      imageAlt: "Shopify website development",
      features: [
        {
          icon: <PenTool />,
          title: "Custom Theme Development",
          description: "Unique, branded designs that reflect your business identity",
        },
        {
          icon: <Layers />,
          title: "App Integration",
          description: "Extending functionality with custom apps and third-party integrations",
        },
        {
          icon: <ShoppingBag />,
          title: "E-commerce Strategy",
          description: "Optimizing the customer journey to maximize conversions",
        },
        {
          icon: <LineChart />,
          title: "Performance Optimization",
          description: "Speed and conversion optimization for better results",
        },
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "React", "Shopify API", "Shopify Plus", "Shopify Apps"],
      caseStudyLink: "/case-studies/shopify",
    },
    {
      id: "video-production",
      title: "Video & Motion Graphics",
      shortDescription: "Compelling visual content that tells your story and captivates your audience",
      fullDescription:
        "Our video production and motion graphics services bring your brand to life through compelling visual storytelling. From promotional videos to animated explainers and product demonstrations, we create high-quality content that engages viewers and communicates your message effectively.",
      icon: <Video className="w-6 h-6" />,
      imageSrc: "/services/video-production-detailed.png",
      imageAlt: "Video and motion graphics production",
      features: [
        {
          icon: <Video />,
          title: "Video Production",
          description: "Full-service production from concept to final delivery",
        },
        {
          icon: <PenTool />,
          title: "Motion Graphics",
          description: "Animated elements that enhance visual storytelling",
        },
        {
          icon: <Layers />,
          title: "3D Animation",
          description: "Immersive 3D visuals that showcase products and concepts",
        },
        {
          icon: <Users />,
          title: "Explainer Videos",
          description: "Clear, engaging explanations of complex products or services",
        },
      ],
      technologies: ["Adobe Premiere Pro", "After Effects", "Cinema 4D", "Blender", "DaVinci Resolve", "Final Cut Pro"],
      caseStudyLink: "/case-studies/video-production",
    },
  ]

  const activeServiceData = services.find((service) => service.id === activeService)

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
    <section className="w-full py-24 bg-[#0a0e29] text-white" id="services" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4"
          >
            OUR SERVICES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What We <span className="text-blue-400">Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100/80 max-w-3xl mx-auto"
          >
            We offer comprehensive digital solutions to help businesses thrive in the digital age. From web and mobile
            development to AI integration and digital marketing, we have the expertise to bring your vision to life.
          </motion.p>
        </div>

        {/* Service Navigation - Improved with better spacing and visual hierarchy */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              onClick={() => setActiveService(service.id)}
              onMouseEnter={() => setHoverService(service.id)}
              onMouseLeave={() => setHoverService(null)}
              className={`relative p-6 rounded-xl transition-all duration-300 overflow-hidden ${
                activeService === service.id ? "bg-blue-600 text-white" : "bg-[#111540] text-white hover:bg-[#1a1f50]"
              }`}
            >
              {/* Animated background on hover */}
              {hoverService === service.id && activeService !== service.id && (
                <motion.div
                  className="absolute inset-0 bg-blue-600/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`p-3 rounded-full mb-4 ${activeService === service.id ? "bg-white/20" : "bg-blue-900"}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Service Content - Enhanced with better animations and layout */}
        <AnimatePresence mode="wait">
          {activeServiceData && (
            <motion.div
              key={activeServiceData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Service Image - Improved with better error handling */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={activeServiceData.imageSrc || "/placeholder.svg"}
                    alt={activeServiceData.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e29]/80 to-transparent" />
                </div>

                {/* Technologies Used - Enhanced with better styling */}
                {activeServiceData.technologies && (
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-sm font-medium text-blue-300 mb-3">Technologies & Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {activeServiceData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-900/70 text-blue-100 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Service Details - Enhanced with better typography and spacing */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{activeServiceData.title}</h3>
                  <p className="text-xl text-blue-100/80 mb-6">{activeServiceData.fullDescription}</p>

                  {activeServiceData.caseStudyLink && (
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Link
                        href={activeServiceData.caseStudyLink}
                        className="inline-flex items-center gap-2 text-blue-400 font-medium"
                      >
                        View case studies
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Service Features - Enhanced with better animations and styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeServiceData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="bg-[#111540] p-5 rounded-lg hover:bg-[#1a1f50] transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-900/50 text-blue-400 rounded-lg shrink-0">{feature.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                          <p className="text-blue-100/70 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button - Enhanced with better animation */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-block"
                >
                  <Link
                    href={`/services/${activeServiceData.id}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Learn more about {activeServiceData.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Process Steps - Enhanced with better styling and animations */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4">Our Process</h3>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements through collaborative workshops and research.",
              },
              {
                number: "02",
                title: "Strategy & Design",
                description:
                  "Based on our findings, we develop a comprehensive strategy and create intuitive designs that align with your brand and user needs.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our expert team brings the designs to life using cutting-edge technologies and following industry best practices.",
              },
              {
                number: "04",
                title: "Launch & Support",
                description:
                  "After thorough testing, we deploy your solution and provide ongoing support to ensure continued success.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-[#111540] p-8 rounded-xl relative overflow-hidden group hover:bg-[#1a1f50] transition-colors duration-300"
              >
                {/* Large step number in background */}
                <div className="absolute -right-4 -top-8 text-[120px] font-bold text-blue-900/30 group-hover:text-blue-800/30 transition-colors">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-blue-100/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
