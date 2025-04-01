import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Puzzle, Brain, AlignJustify, HelpCircle, Clock, Trophy } from "lucide-react"

export default function GamesPage() {
  const games = [
    {
      id: "word-match",
      title: "مطابقة الكلمات",
      description: "اربط الكلمات الفرنسية بترجماتها العربية",
      icon: <Puzzle className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "memory",
      title: "لعبة الذاكرة",
      description: "تذكر وطابق أزواج الكلمات الفرنسية والعربية",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "hangman",
      title: "لعبة الشنق",
      description: "خمن الكلمة الفرنسية قبل اكتمال الرسم",
      icon: <AlignJustify className="h-8 w-8" />,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "quiz",
      title: "اختبار معلومات",
      description: "اختبر معرفتك باللغة الفرنسية",
      icon: <HelpCircle className="h-8 w-8" />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "time-challenge",
      title: "تحدي الوقت",
      description: "أجب على أكبر عدد من الأسئلة في وقت محدد",
      icon: <Clock className="h-8 w-8" />,
      color: "bg-red-100 text-red-700",
    },
    {
      id: "achievements",
      title: "الإنجازات",
      description: "تتبع تقدمك وإنجازاتك في تعلم اللغة",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-orange-100 text-orange-700",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">ألعاب تعلم الفرنسية</h1>
        <p className="text-muted-foreground">العب وتعلم اللغة الفرنسية بطريقة ممتعة وتفاعلية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game) => (
          <Link key={game.id} href={`/games/${game.id}`}>
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
              <div className="flex items-start gap-4 rtl">
                <div className={`p-3 rounded-full ${game.color}`}>{game.icon}</div>
                <div className="flex-1 text-right">
                  <h2 className="text-xl font-semibold mb-1">{game.title}</h2>
                  <p className="text-muted-foreground">{game.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

