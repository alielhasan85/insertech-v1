import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { LoadingIndicator } from "@/components/ui/loading-indicator";
import { RouterEvents } from "@/app/router-events";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Insertech - Software Engineering & Digital Media Agency",
    default: "Insertech - Software Engineering & Digital Media Agency",
  },
  description:
    "Leading software engineering and digital media agency specializing in web development, mobile apps, ERP solutions, and Odoo integration for businesses in the Middle East.",
  keywords: [
    "software engineering",
    "web development",
    "digital media",
    "ERP",
    "Odoo",
    "mobile app development",
    "Middle East software agency",
    "Qatar software company",
    "Lebanon software company",
  ],
  authors: [{ name: "Insertech Team" }],
  creator: "Insertech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insertech.io",
    title: "Insertech - Software Engineering & Digital Media Agency",
    description:
      "Leading software engineering and digital media agency specializing in web development, mobile apps, ERP solutions, and Odoo integration for businesses in the Middle East.",
    siteName: "Insertech",
    images: [
      {
        url: "https://insertech.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insertech - Software Engineering & Digital Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insertech - Software Engineering & Digital Media Agency",
    description:
      "Leading software engineering and digital media agency specializing in web development, mobile apps, ERP solutions, and Odoo integration for businesses in the Middle East.",
    creator: "@insertech",
    images: ["https://insertech.io/og-image.jpg"],
  },
  alternates: {
    canonical: "https://insertech.io",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth light"
      style={{ colorScheme: "light" }}
    >
      <head>
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/agency-image-1.png" as="image" />
      </head>
      <body className={inter.className}>
        <LoadingIndicator />
        <ThemeProvider attribute="class" defaultTheme="light">
          <RouterEvents />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer
            contactEmail="info@insertech.io"
            contactAddress="123 Tech Street, Silicon Valley, CA"
            contactPhone="+1 (555) 123-4567"
          />
        </ThemeProvider>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Insertech",
              url: "https://insertech.io",
              logo: "https://insertech.io/logo.png",
              description:
                "Leading software engineering and digital media agency specializing in web development, mobile apps, ERP solutions, and Odoo integration for businesses in the Middle East.",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Doha",
                  addressRegion: "Qatar",
                  streetAddress: "UDC tower, 28th floor, Pearl",
                  addressCountry: "QA",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Beirut",
                  addressRegion: "Lebanon",
                  streetAddress: "Ghobeiry Center, 7th floor, Mesharafiye",
                  addressCountry: "LB",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+97474716942",
                  contactType: "customer service",
                  areaServed: "Qatar",
                  availableLanguage: ["English", "Arabic"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+9613513968",
                  contactType: "customer service",
                  areaServed: "Lebanon",
                  availableLanguage: ["English", "Arabic"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/insertech",
                "https://www.twitter.com/insertech",
                "https://www.linkedin.com/company/insertech",
                "https://www.instagram.com/insertech",
                "https://g.page/insertech", // Google Business Profile link
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Web Development",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Website Design & Development",
                          url: "https://insertech.io/services/web-development",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Mobile Development",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Mobile App Development",
                          url: "https://insertech.io/services/mobile-development",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
