"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function ContactPageClient() {
  const searchParams = useSearchParams()
  const [title, setTitle] = useState("Have a Project in Mind?")
  const [subtitle, setSubtitle] = useState(
    "Get in touch with our team to discuss your requirements and how we can help bring your vision to life.",
  )

  useEffect(() => {
    // Check if the user came from the "Get a Quote" button
    const service = searchParams.get("service")
    if (service === "quote") {
      setTitle("Request a Free Quote")
      setSubtitle(
        "Tell us about your project requirements, and we'll provide you with a detailed quote tailored to your needs.",
      )
    }
  }, [searchParams])

  return <ContactFormSection title={title} subtitle={subtitle} contactLabel="CONTACT" />
}
