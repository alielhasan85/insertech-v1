"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll events to update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle scroll to top on route changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  // Ensure we start at the top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={cn(
        "w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent",
        mobileMenuOpen ? "bg-white" : "",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-500 flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 9L21 9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xl font-bold">Insertech</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={true}
              onClick={(e) => {
                // If already on this page, prevent default navigation and just scroll to top
                if (isActive(link.href)) {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
              className={cn(
                "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all",
                isActive(link.href) ? "text-blue-500 after:w-full" : "hover:text-blue-500",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Get a Quote Button - Enhanced */}
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 hidden md:flex items-center gap-2 px-5 py-2 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Link href="/contact?service=quote">
              <Quote className="h-4 w-4 mr-1" />
              Get a Quote
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-5 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={true}
                onClick={(e) => {
                  // If already on this page, prevent default navigation and just scroll to top
                  if (isActive(link.href)) {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  setMobileMenuOpen(false)
                }}
                className={cn(
                  "block py-3 text-base sm:text-lg font-medium",
                  isActive(link.href) ? "text-blue-500" : "text-gray-900 hover:text-blue-500",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 w-full mt-4 flex items-center justify-center gap-2"
            >
              <Link href="/contact?service=quote">
                <Quote className="h-4 w-4 mr-1" />
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
