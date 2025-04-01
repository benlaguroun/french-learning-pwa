"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { useState, useEffect } from "react"

// This component centralizes all client-side providers to avoid context conflicts
export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  // Only render providers after component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR or before hydration, render children without providers
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

