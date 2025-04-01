"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"

interface ClientBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ClientBoundary({
  children,
  fallback = <div className="p-8 text-center">جاري التحميل...</div>,
}: ClientBoundaryProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <Suspense fallback={fallback}>{children}</Suspense>
}

export function createClientComponent<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback: React.ReactNode = <div className="p-8 text-center">جاري التحميل...</div>,
) {
  function ClientWrapper(props: React.ComponentProps<T>) {
    const [Component, setComponent] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
      let isMounted = true

      importFn()
        .then((module) => {
          if (isMounted) {
            setComponent(() => module.default)
          }
        })
        .catch((err) => {
          console.error("Error loading component:", err)
          if (isMounted) {
            setError(err)
          }
        })

      return () => {
        isMounted = false
      }
    }, [])

    if (error) {
      return <div>Error loading component: {error.message}</div>
    }

    if (!Component) {
      return <>{fallback}</>
    }

    return <Component {...props} />
  }

  return ClientWrapper
}

