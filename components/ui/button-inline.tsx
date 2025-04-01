"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  onClick?: () => void
}

export function ButtonInline({ children, variant = "primary", onClick }: ButtonProps) {
  const baseStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    fontWeight: 500,
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  }

  const primaryStyle = {
    ...baseStyle,
    backgroundColor: "#3b82f6",
    color: "white",
  }

  const secondaryStyle = {
    ...baseStyle,
    backgroundColor: "transparent",
    border: "1px solid #3b82f6",
    color: "#3b82f6",
  }

  const style = variant === "primary" ? primaryStyle : secondaryStyle

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  )
}

