"use client"

import { Suspense } from "react"
import { createClientComponent } from "@/lib/client-boundary"

// Use client-side wrapper for dynamic imports
const ReadingExerciseContent = createClientComponent(
  () => import("./reading-exercise-content"),
  <div className="p-8 text-center">جاري تحميل تمارين القراءة...</div>,
)

export default function ReadingClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <ReadingExerciseContent />
    </Suspense>
  )
}

