'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const socials = [
  { icon: GitHubIcon, href: "https://github.com/tigermcdaniel", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/tiger-mcdaniel", label: "LinkedIn" },
]

export function SocialSidebar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark' | 'pink'>('dark')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || theme === undefined) return
    setEffectiveTheme(theme === 'light' ? 'light' : theme === 'pink' ? 'pink' : 'dark')
  }, [mounted, theme])

  return (
    <>
      {/* Left - Social Links */}
      <div className="fixed bottom-0 left-6 z-40 hidden md:flex flex-col items-center gap-5 lg:left-10">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="mt-2 h-24 w-px bg-muted-foreground" />
      </div>

      {/* Right - Email + theme dots */}
      <div className="fixed bottom-0 right-6 z-40 hidden md:flex flex-col items-center gap-5 lg:right-10">
        <div className="flex flex-col items-center gap-1.5">
          {/* Theme selection dots: white = light, black = dark, pink = pink */}
          <div className="flex flex-col gap-1.5" role="group" aria-label="Theme">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-white dark:bg-neutral-500 pink:bg-white ring-neutral-600 dark:ring-white pink:ring-pink-300
                ${effectiveTheme === 'light' ? 'scale-125' : ''}`}
              aria-label="Light theme"
              aria-pressed={effectiveTheme === 'light'}
              title="Light theme"
            />
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-neutral-600 dark:bg-white pink:bg-neutral-500 ring-neutral-700 dark:ring-black pink:ring-pink-300
                ${effectiveTheme === 'dark' ? 'scale-125' : ''}`}
              aria-label="Dark theme"
              aria-pressed={effectiveTheme === 'dark'}
              title="Dark theme"
            />
            <button
              type="button"
              onClick={() => setTheme('pink')}
              className={`h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-pink-500 dark:bg-pink-500 ring-pink-300 dark:ring-pink-300
                ${effectiveTheme === 'pink' ? 'scale-125' : ''}`}
              aria-label="Pink theme"
              aria-pressed={effectiveTheme === 'pink'}
              title="Pink theme"
            />
          </div>
          <a
            href="mailto:tiger.mcdaniel@me.com"
            className="font-mono text-xs text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
          >
            tiger.mcdaniel@me.com
          </a>
        </div>
        <div className="mt-2 h-24 w-px bg-muted-foreground" />
      </div>
    </>
  )
}
