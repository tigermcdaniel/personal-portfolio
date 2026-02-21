"use client"

import { useEffect, useRef, useState } from "react"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  /** Fraction of element that must be visible (0–1). 0 = trigger as soon as 1px is visible. */
  threshold?: number
  /** Root margin: "0px 0px -80px 0px" = trigger when within 80px of viewport bottom. */
  rootMargin?: string
}

export function ScrollReveal({
  children,
  className = "",
  threshold = 0,
  rootMargin = "0px 0px -80px 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""} ${className}`.trim()}
      style={
        isVisible
          ? undefined
          : { opacity: 0, transform: "translateY(56px)" }
      }
    >
      {children}
    </div>
  )
}
