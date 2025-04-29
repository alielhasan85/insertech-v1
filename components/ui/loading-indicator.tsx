"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export function LoadingIndicator() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(() => {
      if (loading) setLoading(false)
    })

    // Start observing the document body for DOM changes
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener("beforeunload", handleStart)
    window.addEventListener("load", handleComplete)

    return () => {
      window.removeEventListener("beforeunload", handleStart)
      window.removeEventListener("load", handleComplete)
      observer.disconnect()
    }
  }, [loading])

  // Reset loading state when the route changes
  useEffect(() => {
    setLoading(false)
  }, [pathname, searchParams])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100] transition-all duration-300",
        loading ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="h-full w-full bg-blue-500 animate-progress" />
    </div>
  )
}
