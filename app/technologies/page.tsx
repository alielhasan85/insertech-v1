import type { Metadata } from "next"
import TechnologiesSection from "@/components/sections/technologies-section"

export const metadata: Metadata = {
  title: "Technologies",
  description: "Explore the cutting-edge technologies and tools we use to deliver exceptional digital solutions",
  openGraph: {
    title: "Technologies | Insertech - Software Engineering & Digital Media Agency",
    description: "Learn about the technologies and tools we use to build innovative digital solutions",
  },
}

export default function TechnologiesPage() {
  const technologies = [
    {
      name: "Next.js",
      description: "React framework for production-grade web applications",
      icon: "/technologies/nextjs.png",
      category: "Web Development",
    },
    {
      name: "Flutter",
      description: "Google's UI toolkit for building natively compiled applications",
      icon: "/technologies/flutter.png",
      category: "Mobile",
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript",
      icon: "/technologies/prisma.png",
      category: "Backend",
    },
    {
      name: "Firebase",
      description: "Google's platform for app development and cloud services",
      icon: "/technologies/firebase.png",
      category: "Backend",
    },
    {
      name: "Odoo",
      description: "Open source ERP and CRM business management software",
      icon: "/technologies/odoo.png",
      category: "ERP & CRM",
    },
    {
      name: "WordPress",
      description: "World's most popular website content management system",
      icon: "/technologies/wordpress.png",
      category: "Web Development",
    },
    {
      name: "Shopify",
      description: "Leading e-commerce platform for online stores",
      icon: "/technologies/shopify.png",
      category: "Web Development",
    },
    {
      name: "React Native",
      description: "Framework for building native mobile apps using React",
      icon: "/technologies/react-native.png",
      category: "Mobile",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for building server-side applications",
      icon: "/technologies/nodejs.png",
      category: "Backend",
    },
    {
      name: "Figma",
      description: "Collaborative interface design tool for digital products",
      icon: "/technologies/figma.png",
      category: "Design",
    },
  ]

  return <TechnologiesSection technologies={technologies} />
}
