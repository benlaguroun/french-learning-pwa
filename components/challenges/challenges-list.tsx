"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Trophy, Flame, Users, Star, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface Challenge {
  id: string
  title: string
  description: string
  type: "daily" | "weekly" | "achievement" | "community"
  difficulty: "easy" | "medium" | "hard"
  points: number
  progress: number
  deadline?: string
  participants?: number
  isNew?: boolean
  isCompleted?: boolean
}

export function ChallengesList() {
  const [activeTab, setActiveTab] = useState<string>("all")

  const challenges: Challenge[] = [
    {
      id: "daily-1",
      title: "تحدي الكلمات اليومي",
      description: "تعلم 10 كلمات فرنسية جديدة اليوم",
      type: "daily",
      difficulty: "easy",
      points: 50,
      progress: 30,
      deadline: "اليوم",
      isNew: true,
    },
    {
      id: "daily-2",
      title: "تمرين النطق",
      description: "أكمل 5 تمارين نطق بدقة 80٪ على الأقل",
      type: "daily",
      difficulty: "medium",
      points: 75,
      progress: 60,
      deadline: "اليوم",
    },
    {
      id: "weekly-1",
      title: "تحدي الأسبوع",
      description: "أكمل 7 دروس متتالية هذا الأسبوع",
      type: "weekly",
      difficulty: "medium",
      points: 200,
      progress: 40,
      deadline: "5 أيام متبقية",
    },
    {
      id: "achievement-1",
      title: "إتقان الأبجدية",
      description: "أكمل جميع تمارين الأبجدية الفرنسية بنجاح",
      type: "achievement",
      difficulty: "hard",
      points: 300,
      progress: 75,
    },
    {
      id: "achievement-2",
      title: "متحدث واثق",
      description: "سجل 50 جملة فرنسية بنطق صحيح",
      type: "achievement",
      difficulty: "hard",
      points: 500,
      progress: 10,
    },
    {
      id: "community-1",
      title: "تحدي المجتمع الأسبوعي",
      description: "تنافس مع متعلمين آخرين لكسب أكبر عدد من النقاط هذا الأسبوع",
      type: "community",
      difficulty: "medium",
      points: 250,
      progress: 20,
      participants: 128,
      deadline: "4 أيام متبقية",
    },
    {
      id: "daily-3",
      title: "مراجعة المفردات",
      description: "راجع 20 كلمة تعلمتها سابقاً",
      type: "daily",
      difficulty: "easy",
      points: 40,
      progress: 100,
      deadline: "اليوم",
      isCompleted: true,
    },
    {
      id: "community-2",
      title: "تحدي الترجمة الجماعي",
      description: "ترجم نصاً قصيراً بالتعاون مع متعلمين آخرين",
      type: "community",
      difficulty: "hard",
      points: 350,
      progress: 0,
      participants: 64,
      deadline: "يبدأ غداً",
      isNew: true,
    },
  ]

  const filteredChallenges =
    activeTab === "all" ? challenges : challenges.filter((challenge) => challenge.type === activeTab)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "daily":
        return <Clock className="h-5 w-5 ml-2" />
      case "weekly":
        return <Calendar className="h-5 w-5 ml-2" />
      case "achievement":
        return <Trophy className="h-5 w-5 ml-2" />
      case "community":
        return <Users className="h-5 w-5 ml-2" />
      default:
        return <Star className="h-5 w-5 ml-2" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "daily":
        return "يومي"
      case "weekly":
        return "أسبوعي"
      case "achievement":
        return "إنجاز"
      case "community":
        return "مجتمع"
      default:
        return type
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-6 rtl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">التحديات</h1>
          <p className="text-muted-foreground mt-1">أكمل التحديات لكسب النقاط والمكافآت</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Flame className="h-5 w-5 text-orange-500 ml-1" />
            <span className="font-semibold">سلسلة: 5 أيام</span>
          </div>
          <div className="flex items-center mr-4">
            <Trophy className="h-5 w-5 text-yellow-500 ml-1" />
            <span className="font-semibold">1,250 نقطة</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="all">الكل</TabsTrigger>
          <TabsTrigger value="daily">يومي</TabsTrigger>
          <TabsTrigger value="weekly">أسبوعي</TabsTrigger>
          <TabsTrigger value="achievement">إنجازات</TabsTrigger>
          <TabsTrigger value="community">مجتمع</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <Card
                key={challenge.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${challenge.isCompleted ? "border-green-500 dark:border-green-700" : ""}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      {getTypeIcon(challenge.type)}
                      <Badge variant="outline" className="mr-2">
                        {getTypeLabel(challenge.type)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {challenge.isNew && <Badge className="bg-blue-500 hover:bg-blue-600">جديد</Badge>}
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty === "easy" ? "سهل" : challenge.difficulty === "medium" ? "متوسط" : "صعب"}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2">{challenge.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-yellow-500 ml-1" />
                      <span className="font-medium">{challenge.points} نقطة</span>
                    </div>
                    {challenge.deadline && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 ml-1" />
                        <span className="text-sm text-muted-foreground">{challenge.deadline}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {challenge.isCompleted ? "مكتمل" : `${challenge.progress}% مكتمل`}
                      </span>
                      {challenge.participants && (
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Users className="h-3 w-3 ml-1" />
                          {challenge.participants} مشارك
                        </span>
                      )}
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Link href={`/challenges/${challenge.id}`} className="w-full">
                    <Button className="w-full" variant={challenge.isCompleted ? "outline" : "default"}>
                      {challenge.isCompleted ? (
                        <span className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />
                          تم الإكمال
                        </span>
                      ) : challenge.progress > 0 ? (
                        "متابعة التحدي"
                      ) : (
                        "ابدأ التحدي"
                      )}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ChallengesList

