"use client"

import { CardFooter } from "@/components/ui/card"

import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, BookOpen, PenTool, Headphones, Star } from "lucide-react"

interface Exercise {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  level: string
  completionRate: number
}

const ExercisesGrid = () => {
  const exercises: Exercise[] = [
    {
      id: "speaking",
      title: "تمارين النطق",
      description: "تحسين نطقك الفرنسي من خلال تمارين التحدث التفاعلية",
      icon: <Mic className="h-8 w-8 text-primary" />,
      color: "bg-red-100 dark:bg-red-950/30",
      level: "متوسط",
      completionRate: 45,
    },
    {
      id: "reading",
      title: "تمارين القراءة",
      description: "تطوير مهارات القراءة والفهم باللغة الفرنسية",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      color: "bg-blue-100 dark:bg-blue-950/30",
      level: "مبتدئ",
      completionRate: 70,
    },
    {
      id: "writing",
      title: "تمارين الكتابة",
      description: "تحسين مهارات الكتابة باللغة الفرنسية",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      color: "bg-green-100 dark:bg-green-950/30",
      level: "متقدم",
      completionRate: 30,
    },
    {
      id: "listening",
      title: "تمارين الاستماع",
      description: "تطوير مهارات الاستماع والفهم الشفهي",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      color: "bg-purple-100 dark:bg-purple-950/30",
      level: "مبتدئ",
      completionRate: 60,
    },
    {
      id: "vocabulary",
      title: "تمارين المفردات",
      description: "توسيع مفرداتك الفرنسية من خلال تمارين تفاعلية",
      icon: <Star className="h-8 w-8 text-primary" />,
      color: "bg-yellow-100 dark:bg-yellow-950/30",
      level: "متوسط",
      completionRate: 50,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {exercises.map((exercise) => (
        <Link href={`/exercises/${exercise.id}`} key={exercise.id} className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className={`flex flex-row items-center gap-4 p-6 ${exercise.color}`}>
              {exercise.icon}
              <div>
                <CardTitle className="text-xl">{exercise.title}</CardTitle>
                <CardDescription className="text-sm mt-1.5">مستوى: {exercise.level}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-4">
              <p className="text-muted-foreground">{exercise.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col items-start">
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${exercise.completionRate}%` }} />
              </div>
              <div className="flex justify-between w-full text-sm text-muted-foreground">
                <span>اكتمال: {exercise.completionRate}%</span>
                <Button variant="link" className="p-0 h-auto text-primary">
                  ابدأ التمرين
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ExercisesGrid

