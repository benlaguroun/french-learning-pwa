"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Import the content component with dynamic import
const ProfileContent = dynamic(() => import("./profile-content"), {
  loading: () => <div className="p-8 text-center">جاري تحميل الملف الشخصي...</div>,
  ssr: false,
})

export default function ProfileClientWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">جاري التحميل...</div>}>
      <ProfileContent />
    </Suspense>
  )
}

