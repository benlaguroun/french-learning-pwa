"use client"

import type React from "react"
import { Suspense, useEffect, useState } from "react"
import { useSearchParams as useNextSearchParams } from "next/navigation"

// Function to check if we're on the client side
export const isClient = typeof window !== "undefined"

// Hook to check if the component is mounted
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return isMounted
}

// Function to safely access localStorage
export function getLocalStorage(key: string, defaultValue: any = null) {
  if (!isClient) return defaultValue

  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

// Function to safely set localStorage
export function setLocalStorage(key: string, value: any) {
  if (!isClient) return

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error)
  }
}

// Function to safely remove from localStorage
export function removeLocalStorage(key: string) {
  if (!isClient) return

  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error)
  }
}

// Safe wrapper for useSearchParams that only runs on client
export function useSearchParams() {
  // Only run on client
  const [isMounted, setIsMounted] = useState(false)
  const nextSearchParams = useNextSearchParams()
  const [searchParams, setSearchParams] = useState<URLSearchParams>(new URLSearchParams())

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      setSearchParams(nextSearchParams)
    }
  }, [nextSearchParams, isMounted])

  // Return empty URLSearchParams until client-side
  return isMounted ? searchParams : new URLSearchParams()
}

// Simple client-only wrapper component
export function ClientOnly({
  children,
  fallback = <div>Loading...</div>,
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Higher-order component that safely wraps client components with Suspense
export function SafeClientComponent<P extends object>(
  Component: React.ComponentType<P>,
  options: { fallback?: React.ReactNode } = {},
) {
  const { fallback = <div>Loading...</div> } = options

  // Create a wrapped component that handles client-side mounting
  function WrappedComponent(props: P) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    if (!isMounted) {
      return <>{fallback}</>
    }

    return <Component {...props} />
  }

  // Must be client component if using client hooks
  WrappedComponent.displayName = `SafeClient(${Component.displayName || Component.name || "Component"})`

  // Wrap in Suspense to handle any client-side data fetching
  return function SuspenseWrapped(props: P) {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }
}

