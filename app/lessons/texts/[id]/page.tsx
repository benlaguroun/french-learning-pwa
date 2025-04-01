"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, Volume2, BookOpen, PenLine, GraduationCap, Headphones } from "lucide-react"
import { useProgress } from "@/components/progress-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AudioPlayer } from "@/components/audio-player"
import { QuizQuestion } from "@/components/quiz-question"
import { CompletionQuestion } from "@/components/completion-question"
import { AudioQuestion } from "@/components/audio-question"
import { ScoreDisplay } from "@/components/score-display"
import { LessonAccessGate } from "@/components/lesson-access-gate"
import { introductionExercises } from "@/components/text-lesson-exercises-data"
import { textLessonService, PASSING_SCORE } from "@/lib/lesson-service"
import type { LessonScore } from "@/lib/types"
import { motion } from "framer-motion"
import { toast } from "@/components/ui/use-toast"
import confetti from "canvas-confetti"

export default function TextLessonPage() {
  const params = useParams()
  const router = useRouter()
  const { progress, updateProgress } = useProgress()
  const [activeTab, setActiveTab] = useState("read")
  const [lessonProgress, setLessonProgress] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({})
  const [quizPoints, setQuizPoints] = useState<Record<string, number>>({})
  const [completionAnswers, setCompletionAnswers] = useState<Record<string, boolean>>({})
  const [completionPoints, setCompletionPoints] = useState<Record<string, number>>({})
  const [audioAnswers, setAudioAnswers] = useState<Record<string, boolean>>({})
  const [audioPoints, setAudioPoints] = useState<Record<string, number>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [existingScore, setExistingScore] = useState<LessonScore | null>(null)
  const [isLessonUnlocked, setIsLessonUnlocked] = useState(true)

  const id = Number(params.id)

  // Text lessons data
  const textLessons = [
    {
      id: 1,
      title: "التعارف",
      description: "نص تعليمي حول التعارف والتحية",
      exercises: introductionExercises.lesson1,
      content: {
        read: (
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-4 text-xl font-medium">الحوار</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    A
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Bonjour ! Je m'appelle Marie. Comment tu t'appelles ?</p>
                    <p className="text-sm text-muted-foreground">مرحبًا! اسمي ماري. ما اسمك؟</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    B
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">
                      - Bonjour Marie ! Je m'appelle Ahmed. Enchanté de faire ta connaissance.
                    </p>
                    <p className="text-sm text-muted-foreground">مرحبًا ماري! اسمي أحمد. سعيد بمعرفتك.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    A
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Moi aussi, Ahmed. Tu es d'où ?</p>
                    <p className="text-sm text-muted-foreground">أنا أيضًا، أحمد. من أين أنت؟</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    B
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Je suis du Maroc. Et toi, tu viens d'où ?</p>
                    <p className="text-sm text-muted-foreground">أنا من المغرب. وأنت، من أين أنت؟</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    A
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Je suis française, de Paris. Tu parles bien français !</p>
                    <p className="text-sm text-muted-foreground">أنا فرنسية، من باريس. أنت تتحدث الفرنسية جيدًا!</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    B
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Merci ! J'étudie le français depuis deux ans. Tu habites à Paris ?</p>
                    <p className="text-sm text-muted-foreground">شكرًا! أدرس الفرنسية منذ سنتين. هل تسكنين في باريس؟</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    A
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Oui, j'habite dans le centre-ville. Et toi, tu habites où ?</p>
                    <p className="text-sm text-muted-foreground">نعم، أسكن في وسط المدينة. وأنت، أين تسكن؟</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    B
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- J'habite à Rabat, mais je suis à Paris pour les vacances.</p>
                    <p className="text-sm text-muted-foreground">أسكن في الرباط، لكنني في باريس للعطلة.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    A
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- C'est super ! Tu aimes Paris ?</p>
                    <p className="text-sm text-muted-foreground">هذا رائع! هل تحب باريس؟</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    B
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">- Oui, j'adore Paris ! C'est une très belle ville.</p>
                    <p className="text-sm text-muted-foreground">نعم، أحب باريس! إنها مدينة جميلة جدًا.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-4 text-xl font-medium flex items-center">
                <Headphones className="mr-2 h-5 w-5 text-primary" />
                استمع إلى الحوار
              </h3>
              <AudioPlayer src="/audio/texts/dialogue1.mp3" />
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-4 text-xl font-medium flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                المفردات الجديدة
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Bonjour</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/bonjour.mp3")
                        audio.play()
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">مرحبًا</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Je m'appelle</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/je-mappelle.mp3")
                        audio.play()
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">اسمي</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Enchanté</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/enchante.mp3")
                        audio.play()
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">تشرفت بمعرفتك</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">D'où</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/dou.mp3")
                        audio.play()
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">من أين</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-l-primary p-4 bg-primary/5">
              <h4 className="mb-2 text-lg font-medium">قواعد لغوية مهمة في الحوار</h4>
              <ul className="list-inside list-disc space-y-2 text-sm">
                <li>
                  <b>Je m'appelle</b> - فعل انعكاسي (s'appeler) يعني "اسمي" حرفيًا: "أنا أسمي نفسي"
                </li>
                <li>
                  <b>Comment tu t'appelles ?</b> - "ما اسمك؟" في صيغة غير رسمية (tu)
                </li>
                <li>
                  <b>Tu es d'où ?</b> - "من أين أنت؟" استخدام d'où للسؤال عن المكان الأصلي
                </li>
                <li>
                  <b>Je suis du Maroc</b> - "أنا من المغرب" استخدام du مع الدول المذكرة
                </li>
                <li>
                  <b>Depuis deux ans</b> - "منذ سنتين" للتعبير عن مدة زمنية مستمرة
                </li>
                <li>
                  <b>J'habite à Rabat</b> - "أسكن في الرباط" استخدام à للتعبير عن السكن في مدينة
                </li>
                <li>
                  <b>J'adore Paris</b> - "أحب باريس" استخدام adorer للتعبير عن حب شديد
                </li>
              </ul>
            </div>
          </div>
        ),
        vocabulary: (
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-4 text-xl font-medium flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                المفردات الأساسية للتعارف
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Bonjour</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/bonjour.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">مرحبًا (نهارًا)</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Bonsoir</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/bonsoir.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">مساء الخير</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Salut</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/salut.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">مرحبًا (غير رسمي)</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Au revoir</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/au-revoir.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">إلى اللقاء</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Comment ça va ?</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/comment-ca-va.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">كيف حالك؟</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Ça va bien, merci</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/ca-va-bien.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">أنا بخير، شكرًا</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Je m'appelle...</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/je-mappelle.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">اسمي...</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Enchanté(e)</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/enchante.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">تشرفت بمعرفتك</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">D'où êtes-vous ?</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/dou-etes-vous.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">من أين أنت؟ (رسمي)</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">J'habite à...</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/jhabite.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">أسكن في...</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Je suis de...</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/je-suis-de.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">أنا من...</p>
                </div>

                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Merci</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const audio = new Audio("/audio/vocabulary/merci.mp3")
                        audio.play()
                        setLessonProgress((prev) => Math.min(prev + 2, 100))
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">شكرًا</p>
                </div>
              </div>
            </div>
          </div>
        ),
        practice: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-medium flex items-center">
                <PenLine className="mr-2 h-5 w-5 text-primary" />
                تمارين على الحوار
              </h3>

              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="text-lg">أسئلة الفهم</CardTitle>
                    <CardDescription>أجب عن الأسئلة التالية بناءً على الحوار</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {introductionExercises.lesson1.quiz.slice(0, 3).map((question, index) => (
                        <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                          <QuizQuestion
                            question={question}
                            onAnswer={(id, isCorrect, points) => {
                              setQuizAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                              setQuizPoints((prev) => ({ ...prev, [id]: points }))
                              setLessonProgress((prev) => Math.min(prev + 10, 100))
                            }}
                            disabled={isSubmitted}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="text-lg">أكمل الجمل</CardTitle>
                    <CardDescription>أكمل الجمل التالية بناءً على الحوار</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {introductionExercises.lesson1.completion.slice(0, 2).map((question, index) => (
                        <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                          <CompletionQuestion
                            question={question}
                            onAnswer={(id, isCorrect, earnedPoints) => {
                              setCompletionAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                              setCompletionPoints((prev) => ({ ...prev, [id]: earnedPoints }))
                              setLessonProgress((prev) => Math.min(prev + 10, 100))
                            }}
                            disabled={isSubmitted}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="text-lg">تمارين الاستماع</CardTitle>
                    <CardDescription>استمع إلى الكلمات وحدد معناها</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {introductionExercises.lesson1.audio.slice(0, 2).map((question, index) => (
                        <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                          <AudioQuestion
                            question={question}
                            onAnswer={(id, isCorrect, points) => {
                              setAudioAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                              setAudioPoints((prev) => ({ ...prev, [id]: points }))
                              setLessonProgress((prev) => Math.min(prev + 10, 100))
                            }}
                            disabled={isSubmitted}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ),
        test: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-medium flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                اختبار الفهم والمفردات
              </h3>

              {isSubmitted ? (
                <div className="space-y-8">
                  <ScoreDisplay
                    score={{
                      correct:
                        Object.values(quizAnswers).filter(Boolean).length +
                        Object.values(completionAnswers).filter(Boolean).length +
                        Object.values(audioAnswers).filter(Boolean).length,
                      total:
                        Object.keys(quizAnswers).length +
                        Object.keys(completionAnswers).length +
                        Object.keys(audioAnswers).length,
                      percentage: calculateScore(),
                      passed: calculateScore() >= PASSING_SCORE,
                      completed: true,
                      attempts: (existingScore?.attempts || 0) + 1,
                      lastAttempt: new Date().toISOString(),
                    }}
                    onRepeat={() => {
                      setIsSubmitted(false)
                      setQuizAnswers({})
                      setQuizPoints({})
                      setCompletionAnswers({})
                      setCompletionPoints({})
                      setAudioAnswers({})
                      setAudioPoints({})
                      setLessonProgress(50)
                      setActiveTab("practice")
                    }}
                    onNext={() => {
                      if (id < textLessons.length) {
                        router.push(`/lessons/texts/${id + 1}`)
                      } else {
                        router.push("/lessons/texts")
                      }
                    }}
                    onToDashboard={() => router.push("/dashboard")}
                  />
                </div>
              ) : (
                <div className="space-y-8">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="text-lg">أسئلة الفهم</CardTitle>
                      <CardDescription>أجب عن الأسئلة التالية بناءً على الحوار</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {introductionExercises.lesson1.quiz.slice(3, 6).map((question, index) => (
                          <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                            <QuizQuestion
                              question={question}
                              onAnswer={(id, isCorrect, points) => {
                                setQuizAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                                setQuizPoints((prev) => ({ ...prev, [id]: points }))
                              }}
                              showFeedbackImmediately={false}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="text-lg">أكمل الجمل</CardTitle>
                      <CardDescription>أكمل الجمل التالية بناءً على الحوار</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {introductionExercises.lesson1.completion.slice(2, 4).map((question, index) => (
                          <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                            <CompletionQuestion
                              question={question}
                              onAnswer={(id, isCorrect, earnedPoints) => {
                                setCompletionAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                                setCompletionPoints((prev) => ({ ...prev, [id]: earnedPoints }))
                              }}
                              showFeedbackImmediately={false}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="text-lg">تمارين الاستماع</CardTitle>
                      <CardDescription>استمع إلى الكلمات وحدد معناها</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {introductionExercises.lesson1.audio.slice(2, 3).map((question, index) => (
                          <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                            <AudioQuestion
                              question={question}
                              onAnswer={(id, isCorrect, points) => {
                                setAudioAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                                setAudioPoints((prev) => ({ ...prev, [id]: points }))
                              }}
                              showFeedbackImmediately={false}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={handleSubmitTest}
                      disabled={
                        Object.keys(quizAnswers).length +
                          Object.keys(completionAnswers).length +
                          Object.keys(audioAnswers).length <
                        6
                      }
                    >
                      تقديم الإجابات
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ),
      },
    },
  ]

  const currentLesson = textLessons.find((lesson) => lesson.id === id) || textLessons[0]

  // Function to calculate the score percentage
  const calculateScore = () => {
    const totalEarnedPoints =
      Object.values(quizPoints).reduce((sum, points) => sum + points, 0) +
      Object.values(completionPoints).reduce((sum, points) => sum + points, 0) +
      Object.values(audioPoints).reduce((sum, points) => sum + points, 0)

    const totalPossiblePoints =
      currentLesson.exercises.quiz.reduce((sum, q) => sum + q.points, 0) +
      currentLesson.exercises.completion.reduce((sum, q) => sum + q.blanks.reduce((bSum, b) => bSum + b.points, 0), 0) +
      currentLesson.exercises.audio.reduce((sum, q) => sum + q.points, 0)

    return Math.round((totalEarnedPoints / totalPossiblePoints) * 100)
  }

  // Handle submit test
  const handleSubmitTest = () => {
    const score = calculateScore()
    setLessonProgress(100)
    setIsSubmitted(true)
    setCompleted(true)

    // Save score to local storage
    const lessonScore: LessonScore = {
      correct:
        Object.values(quizAnswers).filter(Boolean).length +
        Object.values(completionAnswers).filter(Boolean).length +
        Object.values(audioAnswers).filter(Boolean).length,
      total: Object.keys(quizAnswers).length + Object.keys(completionAnswers).length + Object.keys(audioAnswers).length,
      percentage: score,
      passed: score >= PASSING_SCORE,
      completed: true,
      attempts: (existingScore?.attempts || 0) + 1,
      lastAttempt: new Date().toISOString(),
    }

    textLessonService.saveScore(id, lessonScore)

    // Update overall progress
    const newLessonProgress = progress.lessons + 0.05 // Increment by 5%
    updateProgress("lessons", Math.min(newLessonProgress, 1))

    // Show success message with confetti if passed
    if (score >= PASSING_SCORE) {
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      toast({
        title: "مبروك! 🎉",
        description: `لقد اجتزت الاختبار بنجاح بنسبة ${score}%`,
        variant: "success",
      })
    } else {
      toast({
        title: "تحتاج إلى مزيد من التدريب",
        description: `حصلت على ${score}%. حاول مرة أخرى للوصول إلى 70% على الأقل.`,
        variant: "destructive",
      })
    }
  }

  // Check if lesson is unlocked on component mount
  useEffect(() => {
    // Get existing score if any
    const score = textLessonService.getScore(id)
    if (score) {
      setExistingScore(score)
    }

    // Check if the lesson is unlocked
    const unlocked = textLessonService.isLessonUnlocked(id)
    setIsLessonUnlocked(unlocked)

    // Set completed state if already completed
    if (score?.completed) {
      setCompleted(true)
    }
  }, [id])

  // Handle lesson completion
  useEffect(() => {
    if (lessonProgress >= 100 && !completed && !isSubmitted) {
      setCompleted(true)
      // Don't update progress here, it will be updated when test is submitted
    }
  }, [lessonProgress, completed, isSubmitted])

  return (
    <LessonAccessGate
      isUnlocked={isLessonUnlocked}
      lessonTitle={currentLesson.title}
      previousLessonPath={`/lessons/texts/${id - 1}`}
    >
      <div className="container pb-20 pt-8 md:pb-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">{currentLesson.title}</h1>
            <p className="text-muted-foreground">{currentLesson.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.push(`/lessons/texts/${id - 1}`)}
              disabled={id <= 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.push(`/lessons/texts/${id + 1}`)}
              disabled={id >= textLessons.length || (!existingScore?.passed && id < textLessons.length)}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">تقدم الدرس</span>
            <span className="text-sm font-medium">{lessonProgress}%</span>
          </div>
          <Progress value={lessonProgress} className="mt-2" />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="read" onClick={() => setLessonProgress((prev) => Math.min(prev + 5, 100))}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                اقرأ
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="vocabulary" onClick={() => setLessonProgress((prev) => Math.min(prev + 5, 100))}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                المفردات
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="practice" onClick={() => setLessonProgress((prev) => Math.min(prev + 5, 100))}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                <PenLine className="mr-2 h-4 w-4" />
                تدرب
              </motion.div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="read">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>نص {currentLesson.title}</CardTitle>
                  <CardDescription>اقرأ النص واستمع إليه لتحسين مهارات القراءة والاستماع</CardDescription>
                </CardHeader>
                <CardContent>{currentLesson.content.read}</CardContent>
                <CardFooter>
                  <Button onClick={() => setActiveTab("vocabulary")} className="w-full">
                    انتقل إلى المفردات
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="vocabulary">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>مفردات {currentLesson.title}</CardTitle>
                  <CardDescription>تعلم المفردات الأساسية المتعلقة بموضوع {currentLesson.title}</CardDescription>
                </CardHeader>
                <CardContent>{currentLesson.content.vocabulary}</CardContent>
                <CardFooter>
                  <Button onClick={() => setActiveTab("practice")} className="w-full">
                    انتقل إلى التدريب
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="practice">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>تدرب على {currentLesson.title}</CardTitle>
                  <CardDescription>طبق ما تعلمته من خلال التمارين التفاعلية</CardDescription>
                </CardHeader>
                <CardContent>{currentLesson.content.practice}</CardContent>
                <CardFooter>
                  <Button onClick={() => router.push(`/lessons/texts/${id}/test`)} className="w-full">
                    انتقل إلى الاختبار
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {completed && !isSubmitted && existingScore?.passed && (
          <Alert className="mt-6 border-green-500 bg-green-500/10">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertTitle>أحسنت!</AlertTitle>
            <AlertDescription>
              لقد أكملت هذا الدرس بنجاح. يمكنك الانتقال إلى الدرس التالي أو العودة إلى لوحة التحكم.
            </AlertDescription>
          </Alert>
        )}

        {!isSubmitted && (
          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => router.push("/dashboard")}>
              العودة إلى لوحة التحكم
            </Button>
            <Button
              onClick={() => {
                if (id < textLessons.length) {
                  router.push(`/lessons/texts/${id + 1}`)
                } else {
                  router.push("/lessons/texts")
                }
              }}
              disabled={id >= textLessons.length || (!existingScore?.passed && id < textLessons.length)}
            >
              الدرس التالي
            </Button>
          </div>
        )}
      </div>
    </LessonAccessGate>
  )
}

