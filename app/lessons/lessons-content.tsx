"use client"

import { useSearchParams } from "@/lib/client-utils"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, CheckCircle, Clock, Star } from "lucide-react"

export default function LessonsContent() {
  // Safe usage of useSearchParams through our custom hook
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter") || "all"

  const lessons = [
    {
      id: 1,
      title: "مقدمة في اللغة الفرنسية",
      description: "تعرف على أساسيات اللغة الفرنسية والنطق الصحيح",
      level: "مبتدئ",
      duration: "20 دقيقة",
      completed: true,
      path: "/lessons/introduction",
    },
    {
      id: 2,
      title: "التحية والتعارف",
      description: "تعلم كيفية تحية الآخرين والتعريف بنفسك باللغة الفرنسية",
      level: "مبتدئ",
      duration: "25 دقيقة",
      completed: true,
      path: "/lessons/greetings",
    },
    {
      id: 3,
      title: "الأرقام والعد",
      description: "تعلم الأرقام من 1 إلى 100 وكيفية استخدامها",
      level: "مبتدئ",
      duration: "30 دقيقة",
      completed: false,
      path: "/lessons/numbers",
    },
    {
      id: 4,
      title: "الألوان والأشكال",
      description: "تعلم أسماء الألوان والأشكال الأساسية",
      level: "مبتدئ",
      duration: "25 دقيقة",
      completed: false,
      path: "/lessons/colors-shapes",
    },
    {
      id: 5,
      title: "العائلة والأقارب",
      description: "تعلم المفردات المتعلقة بالعائلة والعلاقات",
      level: "متوسط",
      duration: "35 دقيقة",
      completed: false,
      path: "/lessons/family",
    },
    {
      id: 6,
      title: "الطعام والمشروبات",
      description: "تعلم أسماء الأطعمة والمشروبات وكيفية طلبها",
      level: "متوسط",
      duration: "40 دقيقة",
      completed: false,
      path: "/lessons/food-drinks",
    },
  ]

  const filteredLessons =
    filter === "completed"
      ? lessons.filter((lesson) => lesson.completed)
      : filter === "incomplete"
        ? lessons.filter((lesson) => !lesson.completed)
        : lessons

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/lessons?filter=all" passHref>
          <Button variant={filter === "all" ? "default" : "outline"} className="rounded-full">
            الكل
          </Button>
        </Link>
        <Link href="/lessons?filter=completed" passHref>
          <Button variant={filter === "completed" ? "default" : "outline"} className="rounded-full">
            المكتملة
          </Button>
        </Link>
        <Link href="/lessons?filter=incomplete" passHref>
          <Button variant={filter === "incomplete" ? "default" : "outline"} className="rounded-full">
            غير المكتملة
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <Card key={lesson.id} className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{lesson.title}</CardTitle>
                {lesson.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
              </div>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{lesson.level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>{lesson.duration}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={lesson.path} className="w-full">
                <Button className="w-full gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{lesson.completed ? "مراجعة الدرس" : "بدء الدرس"}</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

