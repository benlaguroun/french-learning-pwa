import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

interface LessonLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  currentLesson: number
  totalLessons: number
  progress: number
}

export default function LessonLayout({
  title,
  description,
  children,
  currentLesson,
  totalLessons,
  progress,
}: LessonLayoutProps) {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <Link href="/lessons">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span>العودة إلى الدروس</span>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>الرئيسية</span>
            </Button>
          </Link>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            الدرس {currentLesson} من {totalLessons}
          </div>
          <div className="w-1/2">
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm p-4 md:p-6">{children}</div>

        <div className="flex justify-between pt-4">
          {currentLesson > 1 ? (
            <Link href={`/lessons/${currentLesson - 1}`}>
              <Button variant="outline" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                <span>الدرس السابق</span>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {currentLesson < totalLessons && (
            <Link href={`/lessons/${currentLesson + 1}`}>
              <Button className="flex items-center gap-1">
                <span>الدرس التالي</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

