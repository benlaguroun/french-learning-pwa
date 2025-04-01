"use client"

import { Badge } from "@/components/ui/badge"

export function ScoreDisplay({
  score,
  total,
}: {
  score: number
  total: number
}) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  let color = "bg-yellow-500"
  if (percentage >= 80) {
    color = "bg-green-500"
  } else if (percentage < 50) {
    color = "bg-red-500"
  }

  return (
    <Badge variant="outline" className="flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span>
        {score} / {total}
      </span>
    </Badge>
  )
}

