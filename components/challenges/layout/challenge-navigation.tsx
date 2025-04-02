"use client"

import { ArrowLeft } from "lucide-react"

interface ChallengeNavigationProps {
  onPrevious: () => void
  onNext: () => void
}

export function ChallengeNavigation({ onPrevious, onNext }: ChallengeNavigationProps) {
  return (
    <div className="flex justify-between max-w-2xl mx-auto">
      <button
        onClick={onPrevious}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span className="mr-2">Précédent</span>
        <span lang="ar" dir="rtl">
          السابق
        </span>
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center"
      >
        <span className="mr-2">Suivant</span>
        <span lang="ar" dir="rtl">
          التالي
        </span>
        <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
      </button>
    </div>
  )
}

