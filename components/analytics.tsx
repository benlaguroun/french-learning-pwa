"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would normally add your analytics tracking code
    // For example, Google Analytics or a custom analytics solution
    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`

    // Example of tracking page views
    console.log(`Page view: ${url}`)

    // You can add your actual analytics implementation here
    // For example:
    // if (window.gtag) {
    //   window.gtag("config", "YOUR-GA-ID", {
    //     page_path: url,
    //   })
    // }
  }, [pathname, searchParams])

  return null
}

