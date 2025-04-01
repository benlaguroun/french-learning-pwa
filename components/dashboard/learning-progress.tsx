"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen } from "lucide-react"

export function LearningProgress() {
  // Mock data for learning progress
  const learningProgress = [
    { category: "المفردات", progress: 75 },
    { category: "القواعد", progress: 40 },
    { category: "الاستماع", progress: 60 },
    { category: "القراءة", progress: 90 },
    { category: "المحادثة", progress: 25 },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-right">
          <BookOpen className="h-5 w-5" />
          <span>تقدم التعلم</span>
        </CardTitle>
        <CardDescription className="text-right">متابعة تقدمك في مختلف جوانب اللغة الفرنسية</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {learningProgress.map((item) => (
          <div key={item.category} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.category}</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default LearningProgress

