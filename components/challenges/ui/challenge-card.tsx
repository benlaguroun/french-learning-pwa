import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ChallengeCardProps {
  href: string
  icon: LucideIcon
  iconColorClass: string
  bgColorClass: string
  arabicTitle: string
  frenchTitle: string
  arabicDescription: string
  frenchDescription: string
}

export function ChallengeCard({
  href,
  icon: Icon,
  iconColorClass,
  bgColorClass,
  arabicTitle,
  frenchTitle,
  arabicDescription,
  frenchDescription,
}: ChallengeCardProps) {
  return (
    <Link href={href} className="block p-3 rounded-md hover:bg-opacity-80 hover:bg-gray-50 transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">
            <span className="block text-right" lang="ar" dir="rtl">
              {arabicTitle}
            </span>
            <span className="block">{frenchTitle}</span>
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            <span className="block text-right" lang="ar" dir="rtl">
              {arabicDescription}
            </span>
            <span className="block">{frenchDescription}</span>
          </p>
        </div>
        <ArrowRight className={`h-5 w-5 ${iconColorClass}`} />
      </div>
    </Link>
  )
}

