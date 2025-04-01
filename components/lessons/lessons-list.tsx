"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Award, ChevronRight } from "lucide-react"
import Link from "next/link"

// Sample lesson data - in a real app, this would come from an API or database
const lessonData = [
  {
    id: 1,
    title: "مقدمة في اللغة الفرنسية",
    description: "تعرف على أساسيات اللغة الفرنسية والنطق الصحيح",
    level: "مبتدئ",
    duration: "20 دقيقة",
    category: "أساسيات",
    progress: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "التحية والتعارف",
    description: "تعلم كيفية تقديم نفسك والترحيب بالآخرين باللغة الفرنسية",
    level: "مبتدئ",
    duration: "25 دقيقة",
    category: "محادثة",
    progress: 30,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "الأرقام والعد",
    description: "تعلم الأرقام من 1 إلى 100 وكيفية استخدامها في المحادثات اليومية",
    level: "مبتدئ",
    duration: "15 دقيقة",
    category: "أساسيات",
    progress: 100,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "الأفعال الأساسية",
    description: "تعلم الأفعال الأكثر استخداماً في اللغة الفرنسية وتصريفاتها",
    level: "متوسط",
    duration: "30 دقيقة",
    category: "قواعد",
    progress: 60,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "في المطعم",
    description: "تعلم المفردات والعبارات المفيدة عند زيارة المطعم",
    level: "متوسط",
    duration: "25 دقيقة",
    category: "محادثة",
    progress: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "زمن الماضي البسيط",
    description: "تعلم كيفية التحدث عن أحداث الماضي باستخدام زمن الماضي البسيط",
    level: "متقدم",
    duration: "35 دقيقة",
    category: "قواعد",
    progress: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Helper function to get badge color based on level
const getLevelColor = (level: string) => {
  switch (level) {
    case "مبتدئ":
      return "bg-green-500 hover:bg-green-600"
    case "متوسط":
      return "bg-blue-500 hover:bg-blue-600"
    case "متقدم":
      return "bg-purple-500 hover:bg-purple-600"
    default:
      return "bg-gray-500 hover:bg-gray-600"
  }
}

export function LessonsList() {
  const [lessons, setLessons] = useState(lessonData)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">جميع الدروس ({lessons.length})</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 w-full">
              <img src={lesson.image || "/placeholder.svg"} alt={lesson.title} className="h-full w-full object-cover" />
              <Badge className={`absolute top-3 right-3 ${getLevelColor(lesson.level)}`}>{lesson.level}</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{lesson.category}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>التقدم</span>
                  <span>{lesson.progress}%</span>
                </div>
                <Progress value={lesson.progress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/lessons/${lesson.id}`} className="w-full">
                <Button variant="default" className="w-full">
                  {lesson.progress === 100 ? (
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      مراجعة الدرس
                    </span>
                  ) : lesson.progress > 0 ? (
                    <span className="flex items-center">
                      متابعة الدرس
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      ابدأ الدرس
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </span>
                  )}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

