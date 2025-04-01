"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/page-header"
import { Volume2, ChevronLeft, ChevronRight, Mic, MicOff } from "lucide-react"

export default function GreetingsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isListening, setIsListening] = useState(false)
  const [speechResult, setSpeechResult] = useState("")
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)

  const handleNext = () => {
    if (currentIndex < greetings.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowFeedback(false)
      setSpeechResult("")
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setShowFeedback(false)
      setSpeechResult("")
    }
  }

  const handlePlayAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl)
    audio.play()
  }

  const handleStartListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      setFeedbackMessage("عذراً، متصفحك لا يدعم خاصية التعرف على الكلام")
      setShowFeedback(true)
      return
    }

    setIsListening(true)
    setSpeechResult("")
    setShowFeedback(false)

    // This is a mock implementation since we can't actually use the Web Speech API in this environment
    // In a real app, you would use the Web Speech API
    setTimeout(() => {
      setIsListening(false)
      // Simulate a speech recognition result
      const currentPhrase = greetings[currentIndex]
      const isCorrect = Math.random() > 0.5 // Randomly determine if pronunciation is correct

      if (isCorrect) {
        setSpeechResult(currentPhrase.french)
        setFeedbackMessage("أحسنت! نطقك صحيح")
        setShowFeedback(true)
      } else {
        setSpeechResult(currentPhrase.french.slice(0, -2) + "...")
        setFeedbackMessage("حاول مرة أخرى مع التركيز على النطق الصحيح")
        setShowFeedback(true)
      }
    }, 2000)
  }

  const handleStopListening = () => {
    setIsListening(false)
  }

  const currentGreeting = greetings[currentIndex]

  return (
    <div className="container px-4 py-6 md:py-10">
      <PageHeader
        title="التحيات بالفرنسية"
        description="تعلم عبارات التحية والوداع والمجاملات باللغة الفرنسية"
        icon="👋"
      />

      <Tabs defaultValue="learn" className="mb-8">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="learn">تعلم</TabsTrigger>
          <TabsTrigger value="practice">تدرب</TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="mt-0">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex min-h-64 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 p-8 text-white">
                  <div className="text-center">
                    <span className="mb-4 block text-6xl">{currentGreeting.emoji}</span>
                    <h2 className="text-3xl font-bold">{currentGreeting.french}</h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6 space-y-2">
                    <p className="text-xl">{currentGreeting.arabic}</p>
                    <p className="text-sm text-muted-foreground">{currentGreeting.pronunciation}</p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2"
                      onClick={() => handlePlayAudio(currentGreeting.audioUrl)}
                    >
                      <Volume2 className="mr-2 h-4 w-4" />
                      استمع إلى النطق
                    </Button>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 font-medium">متى تستخدم:</h3>
                    <p className="text-sm text-muted-foreground">{currentGreeting.usage}</p>
                  </div>

                  {currentGreeting.examples && (
                    <div className="mb-6">
                      <h3 className="mb-2 font-medium">أمثلة:</h3>
                      <ul className="space-y-1">
                        {currentGreeting.examples.map((example, index) => (
                          <li key={index} className="text-sm">
                            <span className="font-medium">{example.french}</span>
                            <span className="text-muted-foreground"> - {example.arabic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
                      <ChevronRight className="mr-2 h-4 w-4" />
                      السابق
                    </Button>

                    <span className="text-sm text-muted-foreground">
                      {currentIndex + 1} من {greetings.length}
                    </span>

                    <Button onClick={handleNext} disabled={currentIndex === greetings.length - 1}>
                      التالي
                      <ChevronLeft className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="mb-8 text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-6xl">{currentGreeting.emoji}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold">{currentGreeting.arabic}</h2>
                <p className="text-sm text-muted-foreground">{currentGreeting.pronunciation}</p>

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => handlePlayAudio(currentGreeting.audioUrl)}
                >
                  <Volume2 className="mr-2 h-4 w-4" />
                  استمع إلى النطق
                </Button>
              </div>

              <div className="mb-6 rounded-lg border bg-muted/30 p-4 text-center">
                <p className="mb-2 text-sm text-muted-foreground">انقر على زر الميكروفون وانطق العبارة بالفرنسية</p>

                {isListening ? (
                  <Button variant="destructive" className="animate-pulse" onClick={handleStopListening}>
                    <MicOff className="mr-2 h-4 w-4" />
                    إيقاف التسجيل
                  </Button>
                ) : (
                  <Button onClick={handleStartListening}>
                    <Mic className="mr-2 h-4 w-4" />
                    ابدأ التسجيل
                  </Button>
                )}
              </div>

              {speechResult && (
                <div className="mb-6 rounded-lg border p-4 text-center">
                  <h3 className="mb-2 font-medium">ما قلته:</h3>
                  <p className="text-lg font-bold">{speechResult}</p>
                </div>
              )}

              {showFeedback && (
                <div
                  className={`mb-6 rounded-lg p-4 text-center ${
                    feedbackMessage.includes("أحسنت")
                      ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                      : "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                  }`}
                >
                  <p>{feedbackMessage}</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
                  <ChevronRight className="mr-2 h-4 w-4" />
                  السابق
                </Button>

                <Button onClick={handleNext} disabled={currentIndex === greetings.length - 1}>
                  التالي
                  <ChevronLeft className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Link href="/phrases">
          <Button variant="outline">
            <ChevronRight className="mr-2 h-4 w-4" />
            العودة للعبارات
          </Button>
        </Link>

        <Link href="/phrases/school">
          <Button>
            الانتقال لعبارات المدرسة
            <ChevronLeft className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

const greetings = [
  {
    french: "Bonjour",
    arabic: "مرحباً / صباح الخير",
    pronunciation: "بونجور",
    emoji: "👋",
    audioUrl: "/audio/phrases/bonjour.mp3",
    usage: "تستخدم للتحية في النهار، من الصباح حتى المساء",
    examples: [
      { french: "Bonjour, comment ça va?", arabic: "مرحباً، كيف حالك؟" },
      { french: "Bonjour tout le monde!", arabic: "مرحباً بالجميع!" },
    ],
  },
  {
    french: "Bonsoir",
    arabic: "مساء الخير",
    pronunciation: "بونسوار",
    emoji: "🌙",
    audioUrl: "/audio/phrases/bonsoir.mp3",
    usage: "تستخدم للتحية في المساء والليل",
    examples: [
      { french: "Bonsoir, comment allez-vous?", arabic: "مساء الخير، كيف حالك؟" },
      { french: "Bonsoir Madame", arabic: "مساء الخير سيدتي" },
    ],
  },
  {
    french: "Salut",
    arabic: "أهلاً / مرحباً",
    pronunciation: "سالو",
    emoji: "✌️",
    audioUrl: "/audio/phrases/salut.mp3",
    usage: "تحية غير رسمية تستخدم مع الأصدقاء والعائلة",
    examples: [
      { french: "Salut, ça va?", arabic: "أهلاً، كيف حالك؟" },
      { french: "Salut tout le monde!", arabic: "أهلاً بالجميع!" },
    ],
  },
  {
    french: "Au revoir",
    arabic: "إلى اللقاء",
    pronunciation: "أو روفوار",
    emoji: "👋",
    audioUrl: "/audio/phrases/au-revoir.mp3",
    usage: "تستخدم عند المغادرة أو الوداع",
    examples: [
      { french: "Au revoir, à demain!", arabic: "إلى اللقاء، أراك غداً!" },
      { french: "Au revoir, à bientôt!", arabic: "إلى اللقاء، أراك قريباً!" },
    ],
  },
  {
    french: "À bientôt",
    arabic: "إلى اللقاء قريباً",
    pronunciation: "آ بيانتو",
    emoji: "🔜",
    audioUrl: "/audio/phrases/a-bientot.mp3",
    usage: "تستخدم عند الوداع عندما تتوقع رؤية الشخص مرة أخرى قريباً",
    examples: [
      { french: "À bientôt, mon ami!", arabic: "إلى اللقاء قريباً يا صديقي!" },
      { french: "À bientôt, j'espère", arabic: "أراك قريباً، آمل ذلك" },
    ],
  },
  {
    french: "Comment ça va?",
    arabic: "كيف حالك؟",
    pronunciation: "كومون سا فا",
    emoji: "🤔",
    audioUrl: "/audio/phrases/comment-ca-va.mp3",
    usage: "تستخدم للسؤال عن حال شخص ما",
    examples: [
      { french: "Bonjour, comment ça va?", arabic: "مرحباً، كيف حالك؟" },
      { french: "Comment ça va aujourd'hui?", arabic: "كيف حالك اليوم؟" },
    ],
  },
  {
    french: "Ça va bien, merci",
    arabic: "أنا بخير، شكراً",
    pronunciation: "سا فا بيان، ميرسي",
    emoji: "👍",
    audioUrl: "/audio/phrases/ca-va-bien.mp3",
    usage: "تستخدم للرد على سؤال 'كيف حالك؟' بشكل إيجابي",
    examples: [
      { french: "Comment ça va? - Ça va bien, merci!", arabic: "كيف حالك؟ - أنا بخير، شكراً!" },
      { french: "Ça va bien, et toi?", arabic: "أنا بخير، وأنت؟" },
    ],
  },
  {
    french: "Merci",
    arabic: "شكراً",
    pronunciation: "ميرسي",
    emoji: "🙏",
    audioUrl: "/audio/phrases/merci.mp3",
    usage: "تستخدم للتعبير عن الشكر والامتنان",
    examples: [
      { french: "Merci beaucoup!", arabic: "شكراً جزيلاً!" },
      { french: "Merci pour votre aide", arabic: "شكراً على مساعدتك" },
    ],
  },
  {
    french: "S'il vous plaît",
    arabic: "من فضلك (رسمي)",
    pronunciation: "سيل فو بليه",
    emoji: "🙏",
    audioUrl: "/audio/phrases/sil-vous-plait.mp3",
    usage: "تستخدم عند طلب شيء ما بشكل مؤدب (صيغة رسمية)",
    examples: [
      { french: "Un café, s'il vous plaît", arabic: "قهوة، من فضلك" },
      { french: "Parlez lentement, s'il vous plaît", arabic: "تحدث ببطء، من فضلك" },
    ],
  },
  {
    french: "S'il te plaît",
    arabic: "من فضلك (غير رسمي)",
    pronunciation: "سيل تو بليه",
    emoji: "🙏",
    audioUrl: "/audio/phrases/sil-te-plait.mp3",
    usage: "تستخدم عند طلب شيء ما بشكل مؤدب (صيغة غير رسمية للأصدقاء والعائلة)",
    examples: [
      { french: "Aide-moi, s'il te plaît", arabic: "ساعدني، من فضلك" },
      { french: "Passe-moi le sel, s'il te plaît", arabic: "مرر لي الملح، من فضلك" },
    ],
  },
]

