"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Palette, Code, Rocket, Repeat, Users, CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProcessStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<string>("discovery")
  const [autoAnimate, setAutoAnimate] = useState<boolean>(true)
  const [lastInteraction, setLastInteraction] = useState<number>(Date.now())
  const processSteps = useRef<ProcessStep[]>([
    {
      id: "discovery",
      title: "Discovery & Ideation",
      description:
        "We start by understanding your business goals, target audience, and project requirements. Through collaborative workshops, we generate innovative ideas and define the project scope.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      id: "design",
      title: "UX/UI Design",
      description:
        "Our design team creates intuitive user experiences and stunning visual designs. We develop wireframes, prototypes, and high-fidelity mockups that align with your brand identity.",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      id: "development",
      title: "Development",
      description:
        "Our skilled developers bring designs to life using cutting-edge technologies. We follow best practices for clean, efficient, and scalable code that meets your specific requirements.",
      icon: <Code className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      id: "testing",
      title: "Testing & QA",
      description:
        "We rigorously test all aspects of your project to ensure quality, performance, and security. Our comprehensive QA process identifies and resolves issues before launch.",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      id: "launch",
      title: "Deployment",
      description:
        "We handle the smooth deployment of your project, ensuring everything runs perfectly in the production environment. Our launch process minimizes downtime and maximizes impact.",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-red-500",
    },
    {
      id: "support",
      title: "Ongoing Support",
      description:
        "Our relationship doesn't end at launch. We provide continuous support, maintenance, and updates to keep your digital products running smoothly and evolving with your business needs.",
      icon: <Repeat className="h-6 w-6" />,
      color: "bg-teal-500",
    },
    {
      id: "growth",
      title: "Growth & Optimization",
      description:
        "We continuously analyze performance data and user feedback to identify opportunities for improvement and growth, helping your digital products evolve and succeed over time.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-indigo-500",
    },
  ]).current

  useEffect(() => {
    // Auto-cycle through steps
    if (!autoAnimate) return

    const interval = setInterval(() => {
      // Only auto-cycle if user hasn't interacted recently (5 seconds)
      if (Date.now() - lastInteraction > 5000) {
        const currentIndex = processSteps.findIndex((step) => step.id === activeStep)
        const nextIndex = (currentIndex + 1) % processSteps.length
        setActiveStep(processSteps[nextIndex].id)
      }
    }, 4000) // Change step every 4 seconds

    return () => clearInterval(interval)
  }, [activeStep, autoAnimate, lastInteraction, processSteps])

  const activeStepData = processSteps.find((step) => step.id === activeStep)

  return (
    <section className="w-full py-20 bg-gray-50" id="process">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our proven development process ensures high-quality results and a smooth experience from idea to launch and
            beyond
          </p>
        </div>

        {/* Process Flow Diagram - Desktop */}
        <div className="hidden md:block relative mb-16">
          <div className="h-1 bg-gray-200 absolute top-10 left-0 right-0 z-0"></div>
          <div className="flex justify-between relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  onClick={() => {
                    setActiveStep(step.id)
                    setLastInteraction(Date.now())
                  }}
                  className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center text-white transition-all duration-300 relative",
                    activeStep === step.id ? step.color : "bg-gray-300 hover:bg-gray-400",
                  )}
                >
                  {step.icon}
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  )}
                </button>
                <span
                  className={cn(
                    "mt-3 font-medium text-sm transition-colors duration-300",
                    activeStep === step.id ? "text-gray-900" : "text-gray-500",
                  )}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto pb-6 space-x-3 sm:space-x-4 scrollbar-hide px-2">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id)
                  setLastInteraction(Date.now())
                }}
                className={cn(
                  "flex flex-col items-center shrink-0",
                  activeStep === step.id ? "opacity-100" : "opacity-60",
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white",
                    step.color,
                  )}
                >
                  {step.icon}
                </div>
                <span className="mt-2 text-xs font-medium whitespace-nowrap">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        {activeStepData && (
          <motion.div
            key={activeStepData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "p-5 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto",
              "border-l-4",
              `border-l-[${activeStepData.color.split("-")[1]}]`,
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn("p-3 rounded-full text-white shrink-0", activeStepData.color)}>
                {activeStepData.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{activeStepData.title}</h3>
                <p className="text-gray-600">{activeStepData.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
