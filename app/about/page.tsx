import type { Metadata } from "next"
import AboutConnectSection from "@/components/sections/about-connect-section"
import ProcessFlow from "@/components/sections/process-flow"
import TeamShowcaseSection from "@/components/sections/team-showcase-section"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Insertech - our story, values, and approach to digital solutions",
  openGraph: {
    title: "About Insertech - Software Engineering & Digital Media Agency",
    description: "Learn about our team, our values, and our approach to creating exceptional digital experiences",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutConnectSection />
      <ProcessFlow />
      <TeamShowcaseSection />
    </>
  )
}
