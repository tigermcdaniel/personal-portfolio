'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const dotClasses = {
  light: `h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-white dark:bg-neutral-500 pink:bg-white ring-neutral-600 dark:ring-white pink:ring-pink-300`,
  dark: `h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-neutral-600 dark:bg-white pink:bg-neutral-500 ring-neutral-700 dark:ring-black pink:ring-pink-300`,
  pink: `h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-pink-500 dark:bg-pink-500 ring-pink-300 dark:ring-pink-300`,
}

export function ThemeDots({ layout = 'vertical' }: { layout?: 'vertical' | 'horizontal' }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark' | 'pink'>('dark')

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (!mounted || theme === undefined) return
    setEffectiveTheme(theme === 'light' ? 'light' : theme === 'pink' ? 'pink' : 'dark')
  }, [mounted, theme])

  const containerClass = layout === 'horizontal'
    ? 'flex flex-row gap-1.5 items-center'
    : 'flex flex-col gap-1.5'

  return (
    <div className={containerClass} role="group" aria-label="Theme">
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`${dotClasses.light} ${effectiveTheme === 'light' ? 'scale-125' : ''}`}
        aria-label="Light theme"
        aria-pressed={effectiveTheme === 'light'}
        title="Light theme"
      />
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`${dotClasses.dark} ${effectiveTheme === 'dark' ? 'scale-125' : ''}`}
        aria-label="Dark theme"
        aria-pressed={effectiveTheme === 'dark'}
        title="Dark theme"
      />
      <button
        type="button"
        onClick={() => setTheme('pink')}
        className={`${dotClasses.pink} ${effectiveTheme === 'pink' ? 'scale-125' : ''}`}
        aria-label="Pink theme"
        aria-pressed={effectiveTheme === 'pink'}
        title="Pink theme"
      />
    </div>
  )
}
