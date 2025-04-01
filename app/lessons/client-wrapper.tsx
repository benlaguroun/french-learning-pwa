"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Import the content component with dynamic import
const LessonsContent = dynamic(() => import("./lessons-content"), {
  loading: () => <div className="p-8 text-center">جاري تحميل الدروس...</div>,
  ssr: false,
})

export default function LessonsClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <LessonsContent />
    </Suspense>
  )
}

