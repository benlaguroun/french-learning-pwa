"use client"

import { Suspense } from "react"
import { createClientComponent } from "@/lib/client-boundary"

// Use client-side wrapper for dynamic imports
const WritingExerciseContent = createClientComponent(
  () => import("./writing-exercise-content"),
  <div className="p-8 text-center">جاري تحميل تمارين الكتابة...</div>,
)

export default function WritingClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <WritingExerciseContent />
    </Suspense>
  )
}

