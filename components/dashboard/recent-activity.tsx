"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Award, Gamepad2, Dumbbell, Star } from "lucide-react"

// Mock data for recent activities
const activities = [
  {
    id: 1,
    type: "lesson",
    title: "الدرس: التحيات والمجاملات",
    time: "منذ ساعة واحدة",
    result: "اكتمل بنجاح",
    score: "45/50 نقطة",
    icon: BookOpen,
  },
  {
    id: 2,
    type: "exercise",
    title: "تمرين: تصريف الأفعال",
    time: "منذ 3 ساعات",
    result: "اكتمل بنجاح",
    score: "8/10 إجابات صحيحة",
    icon: Dumbbell,
  },
  {
    id: 3,
    type: "game",
    title: "لعبة: تطابق الكلمات",
    time: "منذ 5 ساعات",
    result: "اكتمل بنجاح",
    score: "320 نقطة",
    icon: Gamepad2,
  },
  {
    id: 4,
    type: "achievement",
    title: "إنجاز: متعلم مثابر",
    time: "منذ يوم واحد",
    result: "مكتسب",
    score: "+50 نقطة خبرة",
    icon: Award,
  },
  {
    id: 5,
    type: "lesson",
    title: "الدرس: الأرقام من 1 إلى 20",
    time: "منذ يوم واحد",
    result: "اكتمل بنجاح",
    score: "48/50 نقطة",
    icon: BookOpen,
  },
  {
    id: 6,
    type: "exercise",
    title: "تمرين: الاستماع والنطق",
    time: "منذ يومين",
    result: "اكتمل بنجاح",
    score: "7/10 إجابات صحيحة",
    icon: Dumbbell,
  },
  {
    id: 7,
    type: "game",
    title: "لعبة: سباق الكلمات",
    time: "منذ 3 أيام",
    result: "اكتمل بنجاح",
    score: "280 نقطة",
    icon: Gamepad2,
  },
  {
    id: 8,
    type: "achievement",
    title: "إنجاز: متقن المفردات",
    time: "منذ 4 أيام",
    result: "مكتسب",
    score: "+100 نقطة خبرة",
    icon: Award,
  },
]

export function RecentActivity() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredActivities =
    activeTab === "all" ? activities : activities.filter((activity) => activity.type === activeTab)

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-right">
          <Clock className="h-5 w-5" />
          <span>النشاط الأخير</span>
        </CardTitle>
        <CardDescription className="text-right">تتبع تقدمك في الأيام الأخيرة</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full" dir="rtl" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">الكل</TabsTrigger>
            <TabsTrigger value="lesson">الدروس</TabsTrigger>
            <TabsTrigger value="exercise">التمارين</TabsTrigger>
            <TabsTrigger value="game">الألعاب</TabsTrigger>
            <TabsTrigger value="achievement">الإنجازات</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-4">
            <div className="space-y-4">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 rounded-lg border p-3 text-right hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            activity.type === "lesson"
                              ? "default"
                              : activity.type === "exercise"
                                ? "secondary"
                                : activity.type === "game"
                                  ? "outline"
                                  : "destructive"
                          }
                          className="ml-2"
                        >
                          {activity.type === "lesson"
                            ? "درس"
                            : activity.type === "exercise"
                              ? "تمرين"
                              : activity.type === "game"
                                ? "لعبة"
                                : "إنجاز"}
                        </Badge>
                        <h4 className="font-medium">{activity.title}</h4>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{activity.score}</span>
                        </div>
                        <span>{activity.time}</span>
                      </div>
                      <div className="mt-1 text-sm">
                        <span
                          className={
                            activity.result.includes("بنجاح")
                              ? "text-green-600 dark:text-green-400"
                              : activity.result === "مكتسب"
                                ? "text-purple-600 dark:text-purple-400"
                                : "text-amber-600 dark:text-amber-400"
                          }
                        >
                          {activity.result}
                        </span>
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <activity.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Clock className="h-12 w-12 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">لا توجد أنشطة حديثة من هذا النوع</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default RecentActivity

