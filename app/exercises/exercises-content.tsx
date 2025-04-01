"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Headphones, BookOpen, Mic, PenTool } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "@/lib/client-utils"

export default function ExercisesContent() {
  const searchParams = useSearchParams()
  const filter = searchParams.get("type") || "all"

  const exercises = [
    {
      id: "listening",
      title: "تمارين الاستماع",
      description: "تحسين مهارات الاستماع والفهم",
      icon: <Headphones className="h-8 w-8 text-blue-500" />,
      path: "/exercises/listening",
      type: "listening",
    },
    {
      id: "reading",
      title: "تمارين القراءة",
      description: "تطوير مهارات القراءة والفهم",
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      path: "/exercises/reading",
      type: "reading",
    },
    {
      id: "speaking",
      title: "تمارين المحادثة",
      description: "تحسين النطق والتحدث",
      icon: <Mic className="h-8 w-8 text-purple-500" />,
      path: "/exercises/speaking",
      type: "speaking",
    },
    {
      id: "writing",
      title: "تمارين الكتابة",
      description: "تطوير مهارات الكتابة والتعبير",
      icon: <PenTool className="h-8 w-8 text-orange-500" />,
      path: "/exercises/writing",
      type: "writing",
    },
  ]

  const filteredExercises = filter === "all" ? exercises : exercises.filter((ex) => ex.type === filter)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/exercises?type=all" passHref>
          <Button variant={filter === "all" ? "default" : "outline"} className="rounded-full">
            الكل
          </Button>
        </Link>
        <Link href="/exercises?type=listening" passHref>
          <Button variant={filter === "listening" ? "default" : "outline"} className="rounded-full">
            الاستماع
          </Button>
        </Link>
        <Link href="/exercises?type=reading" passHref>
          <Button variant={filter === "reading" ? "default" : "outline"} className="rounded-full">
            القراءة
          </Button>
        </Link>
        <Link href="/exercises?type=speaking" passHref>
          <Button variant={filter === "speaking" ? "default" : "outline"} className="rounded-full">
            المحادثة
          </Button>
        </Link>
        <Link href="/exercises?type=writing" passHref>
          <Button variant={filter === "writing" ? "default" : "outline"} className="rounded-full">
            الكتابة
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExercises.map((exercise) => (
          <Card key={exercise.id} className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">{exercise.icon}</div>
                <div>
                  <CardTitle className="text-xl">{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm">تمارين متنوعة لمستويات مختلفة تساعدك على تحسين مهاراتك في اللغة الفرنسية.</p>
            </CardContent>
            <CardFooter>
              <Link href={exercise.path} className="w-full">
                <Button className="w-full">بدء التمارين</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

