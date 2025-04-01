"use client"

import type React from "react"

import Link from "next/link"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface LessonAccessGateProps {
  isUnlocked: boolean
  lessonTitle: string
  previousLessonPath: string
  children: React.ReactNode
}

export function LessonAccessGate({ isUnlocked, lessonTitle, previousLessonPath, children }: LessonAccessGateProps) {
  // If the lesson is unlocked, render the children
  if (isUnlocked) {
    return <>{children}</>
  }

  // If the lesson is locked, render the gate UI
  return (
    <div className="container py-20 md:py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center pb-4">
            <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
              <Lock className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>
          <CardTitle>هذا الدرس غير متاح بعد</CardTitle>
          <CardDescription>يجب عليك اجتياز الدروس السابقة قبل الوصول إلى درس "{lessonTitle}"</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            أكمل الدرس السابق بنجاح للمتابعة. تحتاج إلى الحصول على نتيجة 70% على الأقل لفتح هذا الدرس.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href={previousLessonPath}>الذهاب إلى الدرس السابق</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

