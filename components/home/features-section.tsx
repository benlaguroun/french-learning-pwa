import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BookOpen, Headphones, MessageSquare, PenTool, Award, Brain, Languages, Puzzle } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "دروس تفاعلية",
      description: "دروس مصممة بطريقة مبسطة وتفاعلية تناسب جميع المستويات من المبتدئين إلى المتقدمين",
      link: "/lessons",
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "تدريبات الاستماع",
      description: "استمع إلى نطق الكلمات والجمل بلهجة فرنسية أصلية لتحسين مهارات الاستماع والنطق",
      link: "/listening",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "تمارين الكتابة",
      description: "تمارين متنوعة للكتابة لتطوير مهارات الكتابة والقواعد اللغوية",
      link: "/exercises/writing",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "محادثة ذكية",
      description: "تدرب على المحادثة مع روبوت ذكي يساعدك على تطوير مهارات المحادثة بشكل طبيعي",
      link: "/conversation",
    },
    {
      icon: <Languages className="h-10 w-10 text-primary" />,
      title: "نطق دقيق",
      description: "تعلم النطق الصحيح للكلمات والجمل الفرنسية مع أدوات تقييم النطق",
      link: "/pronunciation",
    },
    {
      icon: <Puzzle className="h-10 w-10 text-primary" />,
      title: "ألعاب تعليمية",
      description: "تعلم من خلال ألعاب تفاعلية متنوعة تجعل عملية التعلم ممتعة ومشوقة",
      link: "/games",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "شهادات وإنجازات",
      description: "احصل على شهادات وإنجازات عند إكمال الدروس والمستويات لتحفيزك على الاستمرار",
      link: "/achievements",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "تعلم ذكي",
      description: "نظام تعليمي ذكي يتكيف مع مستواك واحتياجاتك لتحقيق أقصى استفادة من وقت التعلم",
      link: "/smart-learning",
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-2 inline-flex items-center">
            <Sparkles className="ml-1 h-3 w-3" />
            <span>ميزاتنا</span>
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">طريقة تعلم فريدة ومميزة</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            نقدم لك تجربة تعليمية متكاملة لإتقان اللغة الفرنسية بسهولة وفعالية
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="hover-card">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={feature.link}>اكتشف المزيد</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

