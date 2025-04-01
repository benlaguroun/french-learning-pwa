"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Clock, Target, Award, Medal } from "lucide-react"

// Mock data for achievements
const achievementsData = [
  {
    id: 1,
    title: "بداية الرحلة",
    description: "أكمل أول درس في اللغة الفرنسية",
    category: "beginner",
    type: "completion",
    icon: <Trophy className="h-5 w-5" />,
    points: 10,
    unlocked: true,
    date: "2023-12-15",
    rarity: "common",
  },
  {
    id: 2,
    title: "المثابر",
    description: "تعلم لمدة 7 أيام متتالية",
    category: "beginner",
    type: "streak",
    icon: <Clock className="h-5 w-5" />,
    points: 20,
    unlocked: true,
    date: "2023-12-20",
    rarity: "common",
  },
  {
    id: 3,
    title: "متقن المفردات",
    description: "تعلم 100 كلمة فرنسية",
    category: "intermediate",
    type: "mastery",
    icon: <Star className="h-5 w-5" />,
    points: 50,
    unlocked: false,
    progress: 65,
    requirement: "تعلم 100 كلمة",
    rarity: "uncommon",
  },
  {
    id: 4,
    title: "محادث بارع",
    description: "أكمل 10 تمارين محادثة بنجاح",
    category: "intermediate",
    type: "mastery",
    icon: <Target className="h-5 w-5" />,
    points: 75,
    unlocked: false,
    progress: 30,
    requirement: "أكمل 10 تمارين محادثة",
    rarity: "rare",
  },
  {
    id: 5,
    title: "بطل القواعد",
    description: "أتقن جميع قواعد المستوى الأول",
    category: "advanced",
    type: "mastery",
    icon: <Award className="h-5 w-5" />,
    points: 100,
    unlocked: false,
    progress: 10,
    requirement: "أتقن جميع قواعد المستوى الأول",
    rarity: "epic",
  },
  {
    id: 6,
    title: "متحدث طليق",
    description: "أكمل محادثة كاملة بالفرنسية بدون أخطاء",
    category: "advanced",
    type: "performance",
    icon: <Medal className="h-5 w-5" />,
    points: 150,
    unlocked: false,
    progress: 0,
    requirement: "أكمل محادثة كاملة بدون أخطاء",
    rarity: "legendary",
  },
]

function AchievementsList() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter achievements based on active tab
  const filteredAchievements =
    activeTab === "all"
      ? achievementsData
      : achievementsData.filter((achievement) => achievement.category === activeTab)

  // Calculate statistics
  const totalAchievements = achievementsData.length
  const unlockedAchievements = achievementsData.filter((a) => a.unlocked).length
  const completionPercentage = Math.round((unlockedAchievements / totalAchievements) * 100)

  // Get rarity color
  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "bg-gray-200 text-gray-800"
      case "uncommon":
        return "bg-green-200 text-green-800"
      case "rare":
        return "bg-blue-200 text-blue-800"
      case "epic":
        return "bg-purple-200 text-purple-800"
      case "legendary":
        return "bg-amber-200 text-amber-800"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">الإنجازات</CardTitle>
        <CardDescription>اكتشف إنجازاتك وتقدمك في رحلة تعلم اللغة الفرنسية</CardDescription>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {unlockedAchievements} من {totalAchievements} مكتملة
          </span>
          <span>{completionPercentage}%</span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">الكل</TabsTrigger>
            <TabsTrigger value="beginner">مبتدئ</TabsTrigger>
            <TabsTrigger value="intermediate">متوسط</TabsTrigger>
            <TabsTrigger value="advanced">متقدم</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="space-y-4">
              {filteredAchievements.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">لا توجد إنجازات في هذه الفئة بعد</div>
              ) : (
                filteredAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border ${achievement.unlocked ? "bg-muted/50" : "bg-background"} transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-2 rounded-full ${achievement.unlocked ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}
                      >
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <Badge variant="outline" className={`${getRarityColor(achievement.rarity)}`}>
                            {achievement.points} نقطة
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>

                        {achievement.unlocked ? (
                          <div className="mt-2 text-xs text-muted-foreground">
                            تم الإنجاز في {new Date(achievement.date).toLocaleDateString("ar-EG")}
                          </div>
                        ) : (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs">
                              <span>{achievement.requirement}</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-1 mt-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

// Fix: Export the component as both default and named export
export default AchievementsList
export { AchievementsList }

