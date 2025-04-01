"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ProgressContextType = {
  progress: {
    lessons: number
    exercises: number
    overall: number
  }
  updateProgress: (type: "lessons" | "exercises", value: number) => void
}

const defaultProgress = {
  lessons: 0,
  exercises: 0,
  overall: 0,
}

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  updateProgress: () => {},
})

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(defaultProgress)

  // Load progress from localStorage on client side
  useEffect(() => {
    const savedProgress = localStorage.getItem("userProgress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const updateProgress = (type: "lessons" | "exercises", value: number) => {
    setProgress((prev) => {
      const newProgress = {
        ...prev,
        [type]: value,
        overall: (prev.lessons + prev.exercises) / 2,
      }

      // Save to localStorage
      localStorage.setItem("userProgress", JSON.stringify(newProgress))
      return newProgress
    })
  }

  return <ProgressContext.Provider value={{ progress, updateProgress }}>{children}</ProgressContext.Provider>
}

export const useProgress = () => useContext(ProgressContext)

