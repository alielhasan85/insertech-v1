"use client"

import { useEffect, useRef } from "react"

interface FloatingShapesBackgroundProps {
  color?: string
  count?: number
  speed?: number
}

export default function FloatingShapesBackground({
  color = "#3b82f6",
  count = 15,
  speed = 1,
}: FloatingShapesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create shapes
    const shapes: HTMLDivElement[] = []
    const containerRect = container.getBoundingClientRect()

    for (let i = 0; i < count; i++) {
      const shape = document.createElement("div")

      // Randomly choose shape type
      const shapeType = Math.floor(Math.random() * 3)

      // Set common styles
      shape.style.position = "absolute"
      shape.style.opacity = (Math.random() * 0.07 + 0.03).toString() // Very subtle opacity

      // Set shape-specific styles
      if (shapeType === 0) {
        // Circle
        shape.style.borderRadius = "50%"
        shape.style.backgroundColor = color
        shape.style.width = `${Math.random() * 60 + 20}px`
        shape.style.height = shape.style.width
      } else if (shapeType === 1) {
        // Square
        shape.style.backgroundColor = color
        shape.style.width = `${Math.random() * 50 + 20}px`
        shape.style.height = shape.style.width
        shape.style.transform = `rotate(${Math.random() * 45}deg)`
      } else {
        // Triangle (using border trick)
        shape.style.width = "0"
        shape.style.height = "0"
        shape.style.borderLeft = `${Math.random() * 30 + 15}px solid transparent`
        shape.style.borderRight = `${Math.random() * 30 + 15}px solid transparent`
        shape.style.borderBottom = `${Math.random() * 50 + 25}px solid ${color}`
        shape.style.backgroundColor = "transparent"
      }

      // Set initial position
      shape.style.left = `${Math.random() * containerRect.width}px`
      shape.style.top = `${Math.random() * containerRect.height}px`

      // Set animation properties
      shape.dataset.vx = ((Math.random() - 0.5) * speed).toString()
      shape.dataset.vy = ((Math.random() - 0.5) * speed).toString()

      container.appendChild(shape)
      shapes.push(shape)
    }

    // Animate shapes
    let animationFrameId: number

    const animate = () => {
      const containerRect = container.getBoundingClientRect()

      shapes.forEach((shape) => {
        // Get current position and velocity
        const x = Number.parseFloat(shape.style.left)
        const y = Number.parseFloat(shape.style.top)
        const vx = Number.parseFloat(shape.dataset.vx || "0")
        const vy = Number.parseFloat(shape.dataset.vy || "0")

        // Calculate new position
        let newX = x + vx
        let newY = y + vy

        // Handle boundary collision
        const width = Number.parseFloat(shape.style.width || "0")
        const height = Number.parseFloat(shape.style.height || "0")

        if (newX <= 0 || newX + width >= containerRect.width) {
          shape.dataset.vx = (-vx).toString()
          newX = x
        }

        if (newY <= 0 || newY + height >= containerRect.height) {
          shape.dataset.vy = (-vy).toString()
          newY = y
        }

        // Update position
        shape.style.left = `${newX}px`
        shape.style.top = `${newY}px`
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      shapes.forEach((shape) => container.removeChild(shape))
    }
  }, [color, count, speed])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true" />
}
