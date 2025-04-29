import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "Our Services & Technologies",
  description:
    "Explore our comprehensive range of digital services and technologies including web development, mobile apps, ERP solutions, and more",
  openGraph: {
    title: "Services & Technologies | Insertech - Software Engineering & Digital Media Agency",
    description:
      "Discover our full range of digital services and technologies designed to help your business thrive in the digital age",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
