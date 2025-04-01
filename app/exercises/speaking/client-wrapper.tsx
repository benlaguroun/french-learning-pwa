"use client"

import { Suspense } from "react"
import { createClientComponent } from "@/lib/client-boundary"

// Use client-side wrapper for dynamic imports
const SpeakingExerciseContent = createClientComponent(
  () => import("./speaking-exercise-content"),
  <div className="p-8 text-center">جاري تحميل تمارين المحادثة...</div>,
)

export default function SpeakingClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <SpeakingExerciseContent />
    </Suspense>
  )
}

