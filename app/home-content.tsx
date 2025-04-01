"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  BookOpen,
  MessageSquare,
  Puzzle,
  Award,
  TrendingUp,
  Headphones,
  PenTool,
  Clock,
  Star,
} from "lucide-react"

export default function HomeContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [stats, setStats] = useState({
    users: 0,
    lessons: 0,
    exercises: 0,
    reviews: 0,
  })

  useEffect(() => {
    setMounted(true)
    // Check if user is logged in
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)

    // Animate stats
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users >= 5000 ? 5000 : prev.users + 50,
        lessons: prev.lessons >= 120 ? 120 : prev.lessons + 1,
        exercises: prev.exercises >= 500 ? 500 : prev.exercises + 5,
        reviews: prev.reviews >= 4.8 ? 4.8 : +(prev.reviews + 0.1).toFixed(1),
      }))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
        <div className="max-w-xl">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="ml-1 h-3 w-3" />
            الطريقة الأفضل لتعلم الفرنسية
          </Badge>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            تعلم اللغة الفرنسية <span className="text-primary">بطريقة تفاعلية</span>
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            منصة متكاملة لتعلم اللغة الفرنسية من الصفر إلى الاحتراف مع تمارين تفاعلية ودروس مبسطة
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/lessons">ابدأ التعلم مجاناً</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">تعرف علينا</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 w-full max-w-md md:h-80">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-lg bg-primary/10"></div>
          <div className="absolute -left-4 -bottom-4 h-full w-full rounded-lg border"></div>
          <div className="relative h-full w-full overflow-hidden rounded-lg border bg-background shadow-lg">
            <Image
              src="/placeholder.svg?height=320&width=400"
              alt="تعلم اللغة الفرنسية"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16 grid grid-cols-2 gap-4 rounded-xl border bg-card p-6 shadow-sm md:grid-cols-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary">{stats.users.toLocaleString()}+</h3>
          <p className="text-sm text-muted-foreground">متعلم نشط</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary">{stats.lessons}+</h3>
          <p className="text-sm text-muted-foreground">درس تفاعلي</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary">{stats.exercises}+</h3>
          <p className="text-sm text-muted-foreground">تمرين متنوع</p>
        </div>
        <div className="text-center">
          <h3 className="flex items-center justify-center text-3xl font-bold text-primary">
            {stats.reviews}
            <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
          </h3>
          <p className="text-sm text-muted-foreground">تقييم المستخدمين</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-2">
            <Sparkles className="ml-1 h-3 w-3" />
            ميزاتنا
          </Badge>
          <h2 className="text-3xl font-bold">طريقة تعلم فريدة ومميزة</h2>
          <p className="mt-2 text-muted-foreground">
            نقدم لك تجربة تعليمية متكاملة لإتقان اللغة الفرنسية بسهولة وفعالية
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <BookOpen className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>دروس مبسطة</CardTitle>
              <CardDescription>تعلم بطريقة منظمة ومنهجية</CardDescription>
            </CardHeader>
            <CardContent>
              <p>دروس مصممة بطريقة سهلة وبسيطة تناسب جميع المستويات من المبتدئين إلى المتقدمين</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/lessons">استكشف الدروس</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Puzzle className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>تمارين تفاعلية</CardTitle>
              <CardDescription>طبق ما تعلمته بشكل عملي</CardDescription>
            </CardHeader>
            <CardContent>
              <p>تمارين متنوعة للاستماع والقراءة والكتابة والتحدث لتطوير جميع مهاراتك اللغوية</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/exercises">ابدأ التمارين</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Headphones className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>محتوى صوتي</CardTitle>
              <CardDescription>استمع للنطق الصحيح</CardDescription>
            </CardHeader>
            <CardContent>
              <p>استمع إلى نطق الكلمات والجمل بلهجة فرنسية أصلية لتحسين مهارات الاستماع والنطق</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/audio">استمع الآن</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>محادثة تفاعلية</CardTitle>
              <CardDescription>تحدث وتدرب على المحادثة</CardDescription>
            </CardHeader>
            <CardContent>
              <p>تدرب على المحادثة مع روبوت ذكي يساعدك على تطوير مهارات المحادثة بشكل طبيعي</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/conversation">ابدأ محادثة</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Award className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>شهادات وإنجازات</CardTitle>
              <CardDescription>تتبع تقدمك وإنجازاتك</CardDescription>
            </CardHeader>
            <CardContent>
              <p>احصل على شهادات وإنجازات عند إكمال الدروس والمستويات لتحفيزك على الاستمرار</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/achievements">استعرض الإنجازات</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>تعلم مخصص</CardTitle>
              <CardDescription>مسار تعليمي يناسب احتياجاتك</CardDescription>
            </CardHeader>
            <CardContent>
              <p>مسار تعليمي مخصص حسب مستواك واهتماماتك لتحقيق أقصى استفادة من وقت التعلم</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/personalized">خصص مسارك</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="mb-16">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-2">
            <BookOpen className="ml-1 h-3 w-3" />
            مسارات التعلم
          </Badge>
          <h2 className="text-3xl font-bold">اختر المسار المناسب لك</h2>
          <p className="mt-2 text-muted-foreground">مسارات تعليمية مصممة لتناسب مختلف الاحتياجات والأهداف</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Badge className="mb-2 mr-2">مبتدئ</Badge>
                المستوى الأساسي
              </CardTitle>
              <CardDescription>مناسب للمبتدئين تمامًا</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>3-4 أشهر</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>40 درس</span>
              </div>
              <div className="flex items-center">
                <PenTool className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>160 تمرين</span>
              </div>
              <p className="pt-2">
                تعلم أساسيات اللغة الفرنسية من الصفر، بما في ذلك النطق والمفردات الأساسية والقواعد البسيطة
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/paths/beginner">ابدأ المسار</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary">
            <CardHeader className="bg-primary/10">
              <div className="absolute -right-3 -top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                الأكثر شيوعًا
              </div>
              <CardTitle className="flex items-center">
                <Badge variant="secondary" className="mb-2 mr-2">
                  متوسط
                </Badge>
                المستوى المتوسط
              </CardTitle>
              <CardDescription>لمن لديهم معرفة أساسية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>4-6 أشهر</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>50 درس</span>
              </div>
              <div className="flex items-center">
                <PenTool className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>200 تمرين</span>
              </div>
              <p className="pt-2">
                تطوير مهارات المحادثة والكتابة وفهم النصوص المتوسطة والتعبير عن الأفكار بشكل أكثر تعقيدًا
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/paths/intermediate">ابدأ المسار</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Badge variant="destructive" className="mb-2 mr-2">
                  متقدم
                </Badge>
                المستوى المتقدم
              </CardTitle>
              <CardDescription>للمتحدثين ذوي الخبرة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>6-8 أشهر</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>30 درس</span>
              </div>
              <div className="flex items-center">
                <PenTool className="ml-2 h-4 w-4 text-muted-foreground" />
                <span>140 تمرين</span>
              </div>
              <p className="pt-2">
                إتقان اللغة الفرنسية بمستوى متقدم، والتعامل مع النصوص المعقدة والمصطلحات المتخصصة والثقافة الفرنسية
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/paths/advanced">ابدأ المسار</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-2">
            <Star className="ml-1 h-3 w-3" />
            آراء المستخدمين
          </Badge>
          <h2 className="text-3xl font-bold">ماذا يقول المتعلمون عنا</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "أحمد محمد",
              role: "طالب جامعي",
              content: "ساعدتني المنصة على تعلم الفرنسية بسرعة كبيرة. الدروس مبسطة والتمارين متنوعة ومفيدة جدًا.",
              rating: 5,
            },
            {
              name: "سارة أحمد",
              role: "مهندسة برمجيات",
              content: "أفضل منصة لتعلم الفرنسية جربتها حتى الآن. التطبيق سهل الاستخدام والمحتوى ممتاز.",
              rating: 5,
            },
            {
              name: "محمد علي",
              role: "رجل أعمال",
              content: "تعلمت الفرنسية في وقت قصير بفضل هذه المنصة. أنصح بها بشدة لمن يريد تعلم اللغة بسرعة وإتقان.",
              rating: 4,
            },
          ].map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {!isLoggedIn && (
        <section className="rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">ابدأ رحلتك في تعلم اللغة الفرنسية اليوم</h2>
          <p className="mb-6 text-lg">سجل حسابًا مجانيًا واحصل على وصول كامل إلى جميع الدروس والتمارين والميزات</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/register">إنشاء حساب مجاني</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">تسجيل الدخول</Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  )
}

