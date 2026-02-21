"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "hi, i'm tiger"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="flex min-h-screen items-center px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-2 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl opacity-0 animate-fade-in-up delay-200 text-balance">
          {text}
          <span
            className={`inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle transition-opacity ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </h1>
        <h2 className="mb-6 text-4xl font-bold text-muted-foreground sm:text-5xl lg:text-6xl opacity-0 animate-fade-in-up delay-300 text-balance">
          I build systems at scale.
        </h2>
        <p className="mb-10 max-w-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up delay-400">
          {"I'm a software engineer based in Seattle. I'm fascinated by large-scale, complex systems in AI and ML deveopment that drives industry leading products and research."}
        </p>
        <div className="opacity-0 animate-fade-in-up delay-500">
          <a
            href="mailto:tiger.mcdaniel@me.com"
            className="inline-block rounded border border-primary px-7 py-4 font-mono text-sm text-primary hover:bg-primary/10 transition-colors"
          >
            Say hi!
          </a>
        </div>
      </div>
    </section>
  )
}
