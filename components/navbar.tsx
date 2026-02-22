"use client"

import { useState, useEffect } from "react"
import { ThemeDots } from "@/components/theme-dots"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Left: theme dots (mobile) + logo */}
        <div className="flex items-center gap-3">
          <div className="flex md:hidden" aria-label="Theme">
            <ThemeDots layout="horizontal" />
          </div>
          <a
            href="#"
            className="text-xl font-bold text-primary font-mono tracking-tight hover:opacity-80 transition-opacity"
          >
            T
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">0{i + 1}. </span>
              {link.name}
            </a>
          ))}
          <a
            href="/TigerMcdanielResume.pdf"
            download="TigerMcdanielResume.pdf"
            className="rounded border border-primary px-4 py-2 font-mono text-sm text-primary hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-50 md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-lg text-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">0{i + 1}. </span>
                  {link.name}
                </a>
              ))}
              <a
                href="/TigerMcdanielResume.pdf"
                download="TigerMcdanielResume.pdf"
                className="rounded border border-primary px-6 py-3 font-mono text-primary hover:bg-primary/10 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
