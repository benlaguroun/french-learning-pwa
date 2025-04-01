"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/page-header"
import { Volume2, ChevronLeft, ChevronRight, Trophy } from "lucide-react"

export default function ColorsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleNext = () => {
    if (currentIndex < colors.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleStartQuiz = () => {
    setShowQuiz(true)
    setScore(0)
    setQuizCompleted(false)
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentIndex < colors.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePlayAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl)
    audio.play()
  }

  const currentColor = colors[currentIndex]

  return (
    <div className="container px-4 py-6 md:py-10">
      <PageHeader title="الألوان بالفرنسية" description="تعلم أسماء الألوان الأساسية باللغة الفرنسية" icon="🎨" />

      <Tabs defaultValue="learn" className="mb-8">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="learn" onClick={() => setShowQuiz(false)}>
            تعلم
          </TabsTrigger>
          <TabsTrigger value="quiz" onClick={handleStartQuiz}>
            اختبر نفسك
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="mt-0">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="flex min-h-64 items-center justify-center p-8"
                  style={{ backgroundColor: currentColor.hex }}
                >
                  <span className="text-6xl">{currentColor.emoji}</span>
                </div>

                <div className="p-6">
                  <div className="mb-6 space-y-2">
                    <h2 className="text-3xl font-bold">{currentColor.french}</h2>
                    <p className="text-xl text-muted-foreground">{currentColor.arabic}</p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                      onClick={() => handlePlayAudio(currentColor.audioUrl)}
                    >
                      <Volume2 className="mr-2 h-4 w-4" />
                      استمع إلى النطق
                    </Button>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 font-medium">أمثلة:</h3>
                    <ul className="space-y-1">
                      {currentColor.examples.map((example, index) => (
                        <li key={index} className="text-sm">
                          <span className="font-medium">{example.french}</span>
                          <span className="text-muted-foreground"> - {example.arabic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
                      <ChevronRight className="mr-2 h-4 w-4" />
                      السابق
                    </Button>

                    <span className="text-sm text-muted-foreground">
                      {currentIndex + 1} من {colors.length}
                    </span>

                    <Button onClick={handleNext} disabled={currentIndex === colors.length - 1}>
                      التالي
                      <ChevronLeft className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz" className="mt-0">
          {!quizCompleted ? (
            <Card>
              <CardContent className="pt-6">
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-2xl font-bold">ما هو اسم هذا اللون بالفرنسية؟</h2>
                  <div
                    className="mx-auto mb-6 h-32 w-32 rounded-full"
                    style={{ backgroundColor: currentColor.hex }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {generateQuizOptions(colors, currentColor).map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="h-auto py-4 text-lg"
                      onClick={() => handleAnswer(option.french === currentColor.french)}
                    >
                      {option.french}
                    </Button>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    السؤال {currentIndex + 1} من {colors.length}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Trophy className="mb-4 h-16 w-16 text-yellow-500" />
                <h2 className="mb-2 text-2xl font-bold">أحسنت!</h2>
                <p className="mb-6 text-xl">
                  لقد أكملت الاختبار بنتيجة {score} من {colors.length}
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setShowQuiz(false)
                      setCurrentIndex(0)
                    }}
                  >
                    العودة للتعلم
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentIndex(0)
                      setScore(0)
                      setQuizCompleted(false)
                    }}
                  >
                    إعادة الاختبار
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Link href="/vocabulary">
          <Button variant="outline">
            <ChevronRight className="mr-2 h-4 w-4" />
            العودة للمفردات
          </Button>
        </Link>

        <Link href="/vocabulary/numbers">
          <Button>
            الانتقال للأرقام
            <ChevronLeft className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Helper function to generate quiz options
function generateQuizOptions(allColors: typeof colors, currentColor: (typeof colors)[0]) {
  const options = [currentColor]

  // Add 3 random unique colors
  while (options.length < 4) {
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)]
    if (!options.some((option) => option.french === randomColor.french)) {
      options.push(randomColor)
    }
  }

  // Shuffle the options
  return options.sort(() => Math.random() - 0.5)
}

const colors = [
  {
    french: "Rouge",
    arabic: "أحمر",
    hex: "#e53e3e",
    emoji: "🔴",
    audioUrl: "/audio/colors/rouge.mp3",
    examples: [
      { french: "Une pomme rouge", arabic: "تفاحة حمراء" },
      { french: "Un ballon rouge", arabic: "بالون أحمر" },
    ],
  },
  {
    french: "Bleu",
    arabic: "أزرق",
    hex: "#3182ce",
    emoji: "🔵",
    audioUrl: "/audio/colors/bleu.mp3",
    examples: [
      { french: "Le ciel bleu", arabic: "السماء الزرقاء" },
      { french: "Une voiture bleue", arabic: "سيارة زرقاء" },
    ],
  },
  {
    french: "Jaune",
    arabic: "أصفر",
    hex: "#ecc94b",
    emoji: "🟡",
    audioUrl: "/audio/colors/jaune.mp3",
    examples: [
      { french: "Un citron jaune", arabic: "ليمونة صفراء" },
      { french: "Le soleil jaune", arabic: "الشمس الصفراء" },
    ],
  },
  {
    french: "Vert",
    arabic: "أخضر",
    hex: "#38a169",
    emoji: "🟢",
    audioUrl: "/audio/colors/vert.mp3",
    examples: [
      { french: "Une feuille verte", arabic: "ورقة خضراء" },
      { french: "Une pomme verte", arabic: "تفاحة خضراء" },
    ],
  },
  {
    french: "Noir",
    arabic: "أسود",
    hex: "#1a202c",
    emoji: "⚫",
    audioUrl: "/audio/colors/noir.mp3",
    examples: [
      { french: "Un chat noir", arabic: "قط أسود" },
      { french: "Une voiture noire", arabic: "سيارة سوداء" },
    ],
  },
  {
    french: "Blanc",
    arabic: "أبيض",
    hex: "#f7fafc",
    emoji: "⚪",
    audioUrl: "/audio/colors/blanc.mp3",
    examples: [
      { french: "Un lapin blanc", arabic: "أرنب أبيض" },
      { french: "Une chemise blanche", arabic: "قميص أبيض" },
    ],
  },
  {
    french: "Orange",
    arabic: "برتقالي",
    hex: "#ed8936",
    emoji: "🟠",
    audioUrl: "/audio/colors/orange.mp3",
    examples: [
      { french: "Une orange", arabic: "برتقالة" },
      { french: "Un poisson orange", arabic: "سمكة برتقالية" },
    ],
  },
  {
    french: "Rose",
    arabic: "وردي",
    hex: "#ed64a6",
    emoji: "🌸",
    audioUrl: "/audio/colors/rose.mp3",
    examples: [
      { french: "Une fleur rose", arabic: "زهرة وردية" },
      { french: "Un cochon rose", arabic: "خنزير وردي" },
    ],
  },
  {
    french: "Violet",
    arabic: "بنفسجي",
    hex: "#805ad5",
    emoji: "🟣",
    audioUrl: "/audio/colors/violet.mp3",
    examples: [
      { french: "Une fleur violette", arabic: "زهرة بنفسجية" },
      { french: "Un raisin violet", arabic: "عنب بنفسجي" },
    ],
  },
  {
    french: "Marron",
    arabic: "بني",
    hex: "#8b4513",
    emoji: "🟤",
    audioUrl: "/audio/colors/marron.mp3",
    examples: [
      { french: "Un ours marron", arabic: "دب بني" },
      { french: "Une table marron", arabic: "طاولة بنية" },
    ],
  },
  {
    french: "Gris",
    arabic: "رمادي",
    hex: "#718096",
    emoji: "⚪",
    audioUrl: "/audio/colors/gris.mp3",
    examples: [
      { french: "Un éléphant gris", arabic: "فيل رمادي" },
      { french: "Un nuage gris", arabic: "سحابة رمادية" },
    ],
  },
  {
    french: "Doré",
    arabic: "ذهبي",
    hex: "#d4af37",
    emoji: "🌟",
    audioUrl: "/audio/colors/dore.mp3",
    examples: [
      { french: "Une médaille dorée", arabic: "ميدالية ذهبية" },
      { french: "Une étoile dorée", arabic: "نجمة ذهبية" },
    ],
  },
]

