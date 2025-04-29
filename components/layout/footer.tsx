"use client"

import { useRouter, usePathname } from "next/navigation"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

interface FooterProps {
  contactEmail?: string
  contactAddress?: string
  contactPhone?: string
  forceCompact?: boolean
}

export default function Footer({
  contactEmail = "info@insertech.com",
  contactAddress = "123 Tech Hub, Silicon Valley, CA 94025",
  contactPhone = "+1 (555) 123-4567",
  forceCompact,
}: FooterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const [isExpanded, setIsExpanded] = useState(false)

  // Determine if we should show the compact footer based on the current page
  // Pages like blog posts, service details, etc. should have compact footers
  const shouldUseCompactFooter = () => {
    if (forceCompact !== undefined) return forceCompact

    // Pages that should have the full footer
    const fullFooterPages = ["/", "/contact", "/about"]

    // Use compact footer for deeper pages (blog posts, service details, etc.)
    const isDeepPage = pathname.split("/").length > 2

    return !fullFooterPages.includes(pathname) || isDeepPage
  }

  const [isCompact, setIsCompact] = useState(true) // Default to compact until we can check

  useEffect(() => {
    setIsCompact(shouldUseCompactFooter())
  }, [pathname])

  // Function to handle navigation with scroll to top
  const handleNavigation = (path: string) => {
    // Navigate to the path
    router.push(path)

    // Scroll to the top of the page with smooth animation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#0a0e29] text-white relative overflow-hidden">
      {/* Decorative gradient circle */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 opacity-20 -translate-x-1/2 translate-y-1/2" />

      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 grid grid-cols-5 gap-2 p-4 opacity-20">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {isCompact && !isExpanded ? (
        // Compact Footer
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="text-xl font-bold">Insertech</div>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-blue-400 transition-colors text-sm flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">{contactEmail}</span>
                </a>
                <a
                  href="tel:+97474716942"
                  className="hover:text-blue-400 transition-colors text-sm flex items-center gap-1"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">+974 7471 6942</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setIsExpanded(true)}
                className="text-sm flex items-center gap-1 hover:text-blue-400 transition-colors border border-blue-900 rounded-full px-3 py-1"
              >
                More Info
                <ChevronUp className="w-4 h-4 transform rotate-180" />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-blue-900/50 flex flex-col items-center">
            <p className="text-center text-gray-400 text-sm">© {currentYear} Insertech. All rights reserved.</p>
          </div>
        </div>
      ) : (
        // Full Footer
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16">
          {isCompact && (
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setIsExpanded(false)}
                className="text-sm flex items-center gap-1 hover:text-blue-400 transition-colors border border-blue-900 rounded-full px-3 py-1"
              >
                Collapse Footer
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's build tomorrow, today.</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                      <a href={`mailto:${contactEmail}`} className="hover:text-blue-400 transition-colors">
                        {contactEmail}
                      </a>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                      <div className="flex flex-col">
                        <span className="font-medium">Qatar Office:</span>
                        <span>Doha, UDC tower, 28th floor, Pearl</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                      <a href="tel:+97474716942" className="hover:text-blue-400 transition-colors">
                        +974 7471 6942
                      </a>
                    </li>
                    <li className="flex items-start mt-4">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                      <div className="flex flex-col">
                        <span className="font-medium">Lebanon Office:</span>
                        <span>Beirut, Ghobeiry Center, 7th floor, Mesharafiye</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                      <a href="tel:+9613513968" className="hover:text-blue-400 transition-colors">
                        +961 3 513 968
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation("/services/web-development")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Web Design & Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/services/mobile-development")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Mobile App Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/services/custom-software")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Custom Software & AI
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/services/erp-systems")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    ERP Systems & Odoo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/services/digital-marketing")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Digital Media & SEO
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/services/shopify")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Shopify Development
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/about")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/services")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/blog")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/contact?service=quote")}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    Request a Quote
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Insertech</h3>
              <p className="text-gray-300 mb-6">
                Insertech is a leading software engineering and digital media agency specializing in web development,
                mobile apps, ERP solutions, and Odoo integration. We've proudly served clients worldwide for over a
                decade, delivering reliable IT and digital services of the highest quality.
              </p>
              <div className="flex flex-wrap gap-3 sm:space-x-4 mb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-blue-900/50 flex flex-col items-center">
            <p className="text-center text-gray-400">© {currentYear} Insertech. All rights reserved.</p>
          </div>
        </div>
      )}
    </footer>
  )
}
