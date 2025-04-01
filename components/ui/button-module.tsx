"use client"

import type React from "react"
import styles from "@/app/styles.module.css"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  onClick?: () => void
  className?: string
}

export function ButtonModule({ children, variant = "primary", onClick, className = "" }: ButtonProps) {
  const buttonClass = variant === "primary" ? styles.primaryButton : styles.secondaryButton

  return (
    <button className={`${buttonClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

