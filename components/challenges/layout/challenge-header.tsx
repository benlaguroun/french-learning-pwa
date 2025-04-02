import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ChallengeHeaderProps {
  arabicTitle: string
  frenchTitle: string
  arabicDescription: string
  frenchDescription: string
}

export function ChallengeHeader({
  arabicTitle,
  frenchTitle,
  arabicDescription,
  frenchDescription,
}: ChallengeHeaderProps) {
  return (
    <div className="mb-6">
      <Link href="/challenges" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span className="mr-2">Retour aux défis</span>
        <span className="text-right" lang="ar" dir="rtl">
          العودة إلى التحديات
        </span>
      </Link>

      <h1 className="text-3xl font-bold mb-2">
        <span className="block mb-1 text-right" lang="ar" dir="rtl">
          {arabicTitle}
        </span>
        <span className="block">{frenchTitle}</span>
      </h1>

      <p className="text-gray-600 max-w-2xl">
        <span className="block mb-2 text-right" lang="ar" dir="rtl">
          {arabicDescription}
        </span>
        <span className="block">{frenchDescription}</span>
      </p>
    </div>
  )
}

