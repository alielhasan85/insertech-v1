import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team at Insertech to discuss your project requirements or learn more about our software engineering and digital media services in Qatar and Lebanon.",
  alternates: {
    canonical: "https://insertech.io/contact",
  },
  openGraph: {
    title: "Contact Us | Insertech - Software Engineering & Digital Media Agency",
    description:
      "Reach out to discuss your project requirements or learn more about our services in Qatar, Lebanon, and across the Middle East.",
    url: "https://insertech.io/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactPageClient />

      {/* LocalBusiness Schema for Qatar Office */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Insertech - Qatar Office",
            image: "https://insertech.io/logo.png",
            url: "https://insertech.io",
            telephone: "+97474716942",
            address: {
              "@type": "PostalAddress",
              streetAddress: "UDC tower, 28th floor, Pearl",
              addressLocality: "Doha",
              addressRegion: "Qatar",
              addressCountry: "QA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.3548, // Replace with actual coordinates
              longitude: 51.1839, // Replace with actual coordinates
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/insertech",
              "https://www.twitter.com/insertech",
              "https://www.linkedin.com/company/insertech",
              "https://g.page/insertech",
            ],
          }),
        }}
      />

      {/* LocalBusiness Schema for Lebanon Office */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Insertech - Lebanon Office",
            image: "https://insertech.io/logo.png",
            url: "https://insertech.io",
            telephone: "+9613513968",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ghobeiry Center, 7th floor, Mesharafiye",
              addressLocality: "Beirut",
              addressRegion: "Lebanon",
              addressCountry: "LB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.8938, // Replace with actual coordinates
              longitude: 35.5018, // Replace with actual coordinates
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/insertech",
              "https://www.twitter.com/insertech",
              "https://www.linkedin.com/company/insertech",
              "https://g.page/insertech",
            ],
          }),
        }}
      />
    </>
  )
}
