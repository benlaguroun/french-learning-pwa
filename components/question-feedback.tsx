"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function QuestionFeedback({
  score,
  total,
  passingScore,
}: {
  score: number
  total: number
  passingScore: number
}) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  const passed = score >= passingScore

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-2">
        {passed ? <CheckCircle className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
        <span className="text-lg font-medium">{passed ? "لقد اجتزت الاختبار!" : "لم تجتز الاختبار"}</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>النتيجة: {percentage}%</span>
          <span>
            {score} / {total}
          </span>
        </div>
        <Progress value={percentage} className="h-3" indicatorClassName={passed ? "bg-green-500" : "bg-red-500"} />
      </div>

      <p className="text-center text-sm text-muted-foreground">
        {passed
          ? "أحسنت! يمكنك الانتقال إلى المستوى التالي."
          : `تحتاج إلى ${passingScore} نقطة على الأقل لاجتياز هذا المستوى.`}
      </p>
    </div>
  )
}

