"use client"

import { Suspense } from "react"
import { createClientComponent } from "@/lib/client-boundary"

// Use lazy loading with a client-side wrapper
const ListeningExerciseContent = createClientComponent(
  () => import("./listening-exercise-content"),
  <div className="p-8 text-center">جاري تحميل تمارين الاستماع...</div>,
)

export default function ListeningClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <ListeningExerciseContent />
    </Suspense>
  )
}

