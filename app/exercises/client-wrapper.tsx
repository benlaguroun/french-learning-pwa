"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Import the content component with dynamic import
const ExercisesContent = dynamic(() => import("./exercises-content"), {
  loading: () => <div className="p-8 text-center">جاري تحميل التمارين...</div>,
  ssr: false,
})

export default function ExercisesClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <ExercisesContent />
    </Suspense>
  )
}

