interface ChallengeProgressProps {
  progress: number
  colorClass?: string
}

export function ChallengeProgress({ progress, colorClass = "bg-blue-600" }: ChallengeProgressProps) {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className={`${colorClass} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        <span className="mr-2">Progression: {progress}%</span>
        <span lang="ar" dir="rtl">
          التقدم: {progress}%
        </span>
      </p>
    </>
  )
}

