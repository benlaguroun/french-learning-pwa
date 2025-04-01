"use client"

import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Brain, Puzzle, Clock, Award, Zap } from "lucide-react"

interface Game {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  difficulty: "سهل" | "متوسط" | "صعب"
  category: string
  isNew?: boolean
}

const games: Game[] = [
  {
    id: "word-match",
    title: "مطابقة الكلمات",
    description: "قم بمطابقة الكلمات الفرنسية مع معانيها العربية",
    icon: <Puzzle className="h-8 w-8 text-indigo-500" />,
    difficulty: "سهل",
    category: "المفردات",
    isNew: true,
  },
  {
    id: "memory",
    title: "لعبة الذاكرة",
    description: "تذكر وطابق بطاقات الكلمات الفرنسية",
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    difficulty: "متوسط",
    category: "المفردات",
  },
  {
    id: "hangman",
    title: "لعبة الرجل المشنوق",
    description: "خمن الكلمة الفرنسية قبل نفاد المحاولات",
    icon: <Gamepad2 className="h-8 w-8 text-emerald-500" />,
    difficulty: "متوسط",
    category: "المفردات",
  },
  {
    id: "quiz",
    title: "اختبار سريع",
    description: "أجب على أسئلة متعددة الخيارات حول اللغة الفرنسية",
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    difficulty: "متنوع",
    category: "قواعد",
  },
  {
    id: "time-challenge",
    title: "تحدي الوقت",
    description: "ترجم أكبر عدد ممكن من الكلمات قبل انتهاء الوقت",
    icon: <Clock className="h-8 w-8 text-rose-500" />,
    difficulty: "صعب",
    category: "المفردات",
  },
  {
    id: "achievements",
    title: "الإنجازات",
    description: "أكمل التحديات لكسب الشارات والجوائز",
    icon: <Award className="h-8 w-8 text-blue-500" />,
    difficulty: "متنوع",
    category: "متنوع",
  },
]

export function GamesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {games.map((game) => (
        <Link href={`/games/${game.id}`} key={game.id} className="block">
          <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-primary/10 rounded-lg">{game.icon}</div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-primary/5">
                    {game.category}
                  </Badge>
                  <Badge
                    variant={
                      game.difficulty === "سهل" ? "default" : game.difficulty === "متوسط" ? "secondary" : "destructive"
                    }
                    className="text-xs"
                  >
                    {game.difficulty}
                  </Badge>
                </div>
              </div>
              <CardTitle className="mt-4 text-xl">{game.title}</CardTitle>
              <CardDescription className="text-md">{game.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">
                آخر لعب: {Math.floor(Math.random() * 7) + 1} أيام مضت
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className="w-full">{game.isNew ? "جرب الآن!" : "العب"}</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default GamesGrid

