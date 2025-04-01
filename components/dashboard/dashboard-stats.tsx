"use client"

import { Activity, Award, BookOpen, Clock, Flame, GraduationCap, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardStats() {
  // Mock data - in a real app, this would come from an API or state
  const stats = [
    {
      title: "سلسلة التعلم",
      value: "12 يوم",
      icon: <Flame className="h-5 w-5 text-orange-500" />,
      trend: "+2 منذ الأسبوع الماضي",
      trendUp: true,
    },
    {
      title: "نقاط الخبرة",
      value: "1,245 XP",
      icon: <Sparkles className="h-5 w-5 text-yellow-500" />,
      trend: "+180 منذ الأسبوع الماضي",
      trendUp: true,
    },
    {
      title: "كلمات محفوظة",
      value: "328",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      trend: "+42 منذ الأسبوع الماضي",
      trendUp: true,
    },
    {
      title: "دروس مكتملة",
      value: "24",
      icon: <GraduationCap className="h-5 w-5 text-green-500" />,
      trend: "+3 منذ الأسبوع الماضي",
      trendUp: true,
    },
    {
      title: "وقت التعلم",
      value: "16 ساعة",
      icon: <Clock className="h-5 w-5 text-purple-500" />,
      trend: "+2 ساعة منذ الأسبوع الماضي",
      trendUp: true,
    },
    {
      title: "إكمال الدورة",
      value: "35%",
      icon: <Activity className="h-5 w-5 text-pink-500" />,
      trend: "+5% منذ الأسبوع الماضي",
      trendUp: true,
    },
    {
      title: "إنجازات",
      value: "12/30",
      icon: <Award className="h-5 w-5 text-amber-500" />,
      trend: "+2 منذ الأسبوع الماضي",
      trendUp: true,
    },
  ]

  return (
    <div className="md:col-span-4">
      <h2 className="mb-4 text-xl font-bold text-right">الإحصائيات</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-muted p-2">{stat.icon}</div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end text-sm">
                <span className={stat.trendUp ? "text-green-500" : "text-red-500"}>{stat.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Also export as default for flexibility
export default DashboardStats

