"use client"

import { useSearchParams } from "@/lib/client-utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, BookOpen, Calendar, ChevronRight, Clock, Settings, User } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProfileContent() {
  // Safe usage of useSearchParams through our custom hook
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "progress"
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate checking auth status
    const checkAuth = setTimeout(() => {
      // For demo purposes, check if there's a demo login parameter
      const demoLogin = searchParams.get("demo-login")
      setIsLoggedIn(demoLogin === "true")
      setLoading(false)
    }, 1000)

    return () => clearTimeout(checkAuth)
  }, [searchParams])

  if (loading) {
    return <ProfileLoadingState />
  }

  if (!isLoggedIn) {
    return <LoginPrompt />
  }

  return (
    <div className="space-y-6">
      <UserInfoCard />

      <Tabs defaultValue={tab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <Link href="/profile?tab=progress" passHref>
            <TabsTrigger value="progress">التقدم</TabsTrigger>
          </Link>
          <Link href="/profile?tab=achievements" passHref>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
          </Link>
          <Link href="/profile?tab=settings" passHref>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </Link>
        </TabsList>

        <TabsContent value="progress" className="mt-6">
          <ProgressTab />
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <AchievementsTab />
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <SettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProfileLoadingState() {
  return (
    <div className="space-y-4">
      <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
      <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
    </div>
  )
}

function LoginPrompt() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>تسجيل الدخول مطلوب</CardTitle>
        <CardDescription>يرجى تسجيل الدخول لعرض ملفك الشخصي ومتابعة تقدمك</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link href="/login" passHref>
          <Button className="w-full">تسجيل الدخول</Button>
        </Link>
        <Link href="/signup" passHref>
          <Button variant="outline" className="w-full">
            إنشاء حساب جديد
          </Button>
        </Link>
        <Link href="/profile?demo-login=true" passHref>
          <Button variant="link" className="w-full">
            تجربة الملف الشخصي (عرض توضيحي)
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

function UserInfoCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Avatar className="h-24 w-24 border-4 border-primary">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="صورة المستخدم" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center md:text-right">
            <h3 className="text-2xl font-bold">أحمد محمد</h3>
            <p className="text-muted-foreground">مستوى المبتدئ</p>

            <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span className="text-sm">انضم منذ 30 يوم</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm">120 دقيقة من التعلم</span>
              </div>
            </div>
          </div>

          <Button variant="outline" size="sm" className="md:self-start">
            <Settings className="h-4 w-4 mr-2" />
            تعديل الملف
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProgressTab() {
  const progressData = [
    { category: "الحروف الأبجدية", progress: 90 },
    { category: "المفردات الأساسية", progress: 65 },
    { category: "القواعد", progress: 40 },
    { category: "المحادثة", progress: 25 },
    { category: "الاستماع", progress: 50 },
  ]

  const recentActivities = [
    { title: "أكملت درس التحية والتعارف", time: "منذ ساعتين" },
    { title: "أكملت تمرين الاستماع", time: "منذ يوم واحد" },
    { title: "بدأت درس الأرقام والعد", time: "منذ يومين" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>تقدمك في التعلم</CardTitle>
          <CardDescription>متابعة تقدمك في مختلف جوانب اللغة الفرنسية</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressData.map((item) => (
              <div key={item.category} className="space-y-1">
                <div className="flex justify-between">
                  <span>{item.category}</span>
                  <span>{item.progress}%</span>
                </div>
                <Progress value={item.progress} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>النشاطات الأخيرة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                <div>
                  <p>{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AchievementsTab() {
  const achievements = [
    {
      title: "بداية الرحلة",
      description: "أكمل أول درس في اللغة الفرنسية",
      earned: true,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "متعلم مثابر",
      description: "تعلم لمدة 7 أيام متتالية",
      earned: true,
      icon: <Award className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "إتقان الأبجدية",
      description: "أكمل جميع دروس الأبجدية الفرنسية",
      earned: true,
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
    },
    {
      title: "محادث واثق",
      description: "أكمل 10 تمارين محادثة",
      earned: false,
      icon: <Award className="h-8 w-8 text-gray-400" />,
    },
    {
      title: "متقن المفردات",
      description: "تعلم 100 كلمة فرنسية",
      earned: false,
      icon: <BookOpen className="h-8 w-8 text-gray-400" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          className={`border-2 ${achievement.earned ? "border-primary" : "border-gray-200 dark:border-gray-700 opacity-70"}`}
        >
          <CardContent className="p-6 flex gap-4">
            <div
              className={`rounded-full p-3 ${achievement.earned ? "bg-primary/10" : "bg-gray-100 dark:bg-gray-800"}`}
            >
              {achievement.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
              <p className="text-sm mt-2">
                {achievement.earned ? (
                  <span className="text-green-500">تم الحصول عليه</span>
                ) : (
                  <span className="text-muted-foreground">لم يتم الحصول عليه بعد</span>
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function SettingsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>إعدادات الحساب</CardTitle>
        <CardDescription>تخصيص إعدادات حسابك وتجربة التعلم</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">اللغة والعرض</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-between w-full">
              <span>لغة الواجهة</span>
              <span className="text-muted-foreground">العربية</span>
            </Button>
            <Button variant="outline" className="justify-between w-full">
              <span>الوضع المظلم</span>
              <span className="text-muted-foreground">تلقائي</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">إعدادات التعلم</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-between w-full">
              <span>مستوى الصعوبة</span>
              <span className="text-muted-foreground">مبتدئ</span>
            </Button>
            <Button variant="outline" className="justify-between w-full">
              <span>هدف التعلم اليومي</span>
              <span className="text-muted-foreground">15 دقيقة</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">الإشعارات</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-between w-full">
              <span>تذكيرات التعلم</span>
              <span className="text-muted-foreground">مفعلة</span>
            </Button>
            <Button variant="outline" className="justify-between w-full">
              <span>إشعارات الإنجازات</span>
              <span className="text-muted-foreground">مفعلة</span>
            </Button>
          </div>
        </div>

        <Button className="w-full mt-6">حفظ الإعدادات</Button>
      </CardContent>
    </Card>
  )
}

