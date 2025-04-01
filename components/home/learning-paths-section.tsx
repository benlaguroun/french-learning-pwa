import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, PenTool, CheckCircle, ChevronLeftIcon } from "lucide-react"

export function LearningPathsSection() {
  const paths = [
    {
      level: "A1",
      title: "المستوى المبتدئ",
      description: "مناسب للمبتدئين تمامًا",
      duration: "3-4 أشهر",
      lessons: 40,
      exercises: 160,
      content: "تعلم أساسيات اللغة الفرنسية من الصفر، بما في ذلك النطق والمفردات الأساسية والقواعد البسيطة",
      features: ["التحية والتعارف", "الأرقام والألوان", "العائلة والأصدقاء", "الطعام والشراب"],
      href: "/paths/beginner",
      popular: false,
      bgClass: "bg-primary/5",
      borderClass: "border-primary/20",
    },
    {
      level: "A2-B1",
      title: "المستوى المتوسط",
      description: "لمن لديهم معرفة أساسية",
      duration: "4-6 أشهر",
      lessons: 50,
      exercises: 200,
      content: "تطوير مهارات المحادثة والكتابة وفهم النصوص المتوسطة والتعبير عن الأفكار بشكل أكثر تعقيدًا",
      features: ["المحادثات اليومية", "السفر والسياحة", "العمل والدراسة", "وصف المشاعر والآراء"],
      href: "/paths/intermediate",
      popular: true,
      bgClass: "bg-primary/10",
      borderClass: "border-primary",
    },
    {
      level: "B2-C1",
      title: "المستوى المتقدم",
      description: "للمتحدثين ذوي الخبرة",
      duration: "6-8 أشهر",
      lessons: 30,
      exercises: 140,
      content: "إتقان اللغة الفرنسية بمستوى متقدم، والتعامل مع النصوص المعقدة والمصطلحات المتخصصة والثقافة الفرنسية",
      features: [
        "النقاشات والحوارات المعقدة",
        "الأدب والثقافة الفرنسية",
        "المصطلحات المتخصصة",
        "التعبير عن الرأي بدقة",
      ],
      href: "/paths/advanced",
      popular: false,
      bgClass: "",
      borderClass: "",
    },
  ]

  return (
    <section className="bg-muted/30 py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-2 inline-flex items-center">
            <BookOpen className="ml-1 h-3 w-3" />
            <span>مسارات التعلم</span>
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">اختر المسار المناسب لك</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            مسارات تعليمية مصممة لتناسب مختلف الاحتياجات والأهداف
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {paths.map((path, index) => (
            <Card key={index} className={`relative overflow-hidden hover-card ${path.bgClass} ${path.borderClass}`}>
              {path.popular && (
                <div className="absolute -right-3 -top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  الأكثر شيوعًا
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={path.popular ? "secondary" : path.level.startsWith("B") ? "destructive" : "default"}
                    className="mb-2"
                  >
                    {path.level}
                  </Badge>
                  <CardTitle>{path.title}</CardTitle>
                </div>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="ml-2 h-4 w-4 text-muted-foreground" />
                    <span>{path.lessons} درس</span>
                  </div>
                  <div className="flex items-center">
                    <PenTool className="ml-2 h-4 w-4 text-muted-foreground" />
                    <span>{path.exercises} تمرين</span>
                  </div>
                </div>

                <p>{path.content}</p>

                <div>
                  <p className="font-medium mb-2">المواضيع الرئيسية:</p>
                  <ul className="space-y-1">
                    {path.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="ml-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={path.popular ? "default" : "outline"}>
                  <Link href={path.href} className="flex items-center justify-center">
                    <span>ابدأ المسار</span>
                    <ChevronLeftIcon className="mr-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

