"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientBoundary } from "@/lib/client-boundary"
import { Mic, Play, StopCircle } from "lucide-react"

export default function SpeakingExerciseContent() {
  const [isRecording, setIsRecording] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState<string>("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [score, setScore] = useState<number | null>(null)

  // Sample phrases for pronunciation practice
  const phrases = [
    { french: "Bonjour", arabic: "مرحبا" },
    { french: "Comment ça va?", arabic: "كيف حالك؟" },
    { french: "Je m'appelle", arabic: "اسمي" },
    { french: "Merci beaucoup", arabic: "شكرا جزيلا" },
    { french: "Au revoir", arabic: "إلى اللقاء" },
  ]

  useEffect(() => {
    // Set initial phrase
    const randomIndex = Math.floor(Math.random() * phrases.length)
    setCurrentPhrase(phrases[randomIndex].french)
  }, [])

  const startRecording = () => {
    setIsRecording(true)
    setFeedback(null)
    setScore(null)

    // Simulate recording for 3 seconds
    setTimeout(() => {
      stopRecording()
    }, 3000)
  }

  const stopRecording = () => {
    setIsRecording(false)

    // Simulate pronunciation feedback
    const randomScore = Math.floor(Math.random() * 100) + 1
    setScore(randomScore)

    if (randomScore > 80) {
      setFeedback("ممتاز! نطقك جيد جدًا")
    } else if (randomScore > 50) {
      setFeedback("جيد! استمر في التمرين")
    } else {
      setFeedback("حاول مرة أخرى مع التركيز على نطق الحروف بشكل صحيح")
    }
  }

  const playAudio = () => {
    // In a real app, this would play the audio for the current phrase
    console.log("Playing audio for:", currentPhrase)
  }

  const getNextPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    setCurrentPhrase(phrases[randomIndex].french)
    setFeedback(null)
    setScore(null)
  }

  const getCurrentPhraseTranslation = () => {
    const phrase = phrases.find((p) => p.french === currentPhrase)
    return phrase ? phrase.arabic : ""
  }

  return (
    <ClientBoundary>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">تمارين النطق</h1>

        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-center">استمع ثم كرر الجملة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <p className="text-2xl font-bold mb-2 text-primary">{currentPhrase}</p>
                <p className="text-lg text-muted-foreground">{getCurrentPhraseTranslation()}</p>
              </div>

              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button variant="outline" size="icon" onClick={playAudio} className="h-12 w-12">
                  <Play className="h-6 w-6" />
                </Button>

                <Button
                  variant={isRecording ? "destructive" : "default"}
                  size="icon"
                  onClick={isRecording ? stopRecording : startRecording}
                  className="h-12 w-12"
                >
                  {isRecording ? <StopCircle className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                </Button>
              </div>

              {isRecording && <div className="text-center text-primary animate-pulse">جاري الاستماع...</div>}

              {feedback && (
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">{feedback}</p>
                  {score !== null && (
                    <div className="flex items-center justify-center">
                      <div
                        className={`text-xl font-bold rounded-full h-16 w-16 flex items-center justify-center ${
                          score > 80
                            ? "bg-green-100 text-green-800"
                            : score > 50
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {score}%
                      </div>
                    </div>
                  )}
                </div>
              )}

              <Button onClick={getNextPhrase}>الجملة التالية</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">نصائح لتحسين النطق</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-right">
              <li>استمع جيدًا قبل محاولة النطق</li>
              <li>ركز على مخارج الحروف الفرنسية الخاصة مثل R و U</li>
              <li>تدرب على النطق بصوت عالٍ يوميًا</li>
              <li>سجل صوتك واستمع إليه لتحديد مجالات التحسين</li>
              <li>شاهد مقاطع فيديو باللغة الفرنسية مع الترجمة</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ClientBoundary>
  )
}

