import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, Home } from "lucide-react"

export default function LessonsPage() {
  const lessons = [
    {
      id: 1,
      title: "التحيات الأساسية",
      description: "تعلم كيفية تحية الناس وتقديم نفسك باللغة الفرنسية",
      progress: 0,
    },
    {
      id: 2,
      title: "الأرقام",
      description: "تعلم الأرقام من 1 إلى 100 باللغة الفرنسية",
      progress: 0,
    },
    {
      id: 3,
      title: "العبارات الشائعة",
      description: "تعلم العبارات الفرنسية الشائعة للمحادثات اليومية",
      progress: 0,
    },
    {
      id: 4,
      title: "مفردات الطعام",
      description: "تعلم المفردات الفرنسية المتعلقة بالطعام والشراب",
      progress: 0,
    },
    {
      id: 5,
      title: "عبارات السفر",
      description: "تعلم العبارات الفرنسية المفيدة للسفر",
      progress: 0,
    },
    {
      id: 6,
      title: "أساسيات القواعد",
      description: "تعلم أساسيات قواعد اللغة الفرنسية",
      progress: 0,
    },
  ]

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">الدروس</h1>
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>الرئيسية</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="border border-border">
              <CardHeader>
                <CardTitle>{lesson.title}</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>الدرس {lesson.id}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/lessons/${lesson.id}`}>
                  <Button className="flex items-center gap-1">
                    <span>ابدأ الدرس</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

