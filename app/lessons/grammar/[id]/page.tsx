"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen, PenLine, GraduationCap, Award } from "lucide-react"
import { useProgress } from "@/components/progress-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { QuizQuestion } from "@/components/quiz-question"
import { CompletionQuestion } from "@/components/completion-question"
import { ScoreDisplay } from "@/components/score-display"
import { LessonAccessGate } from "@/components/lesson-access-gate"
import { personalPronounsExercises } from "@/components/grammar-exercises-data"
import type { LessonScore } from "@/lib/types"
import { grammarLessonService, PASSING_SCORE } from "@/lib/lesson-service"
import { motion } from "framer-motion"
import { toast } from "@/components/ui/use-toast"
import confetti from "canvas-confetti"

export default function GrammarLessonPage() {
  const params = useParams()
  const router = useRouter()
  const { progress, updateProgress } = useProgress()
  const [activeTab, setActiveTab] = useState("learn")
  const [lessonProgress, setLessonProgress] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({})
  const [quizPoints, setQuizPoints] = useState<Record<string, number>>({})
  const [completionAnswers, setCompletionAnswers] = useState<Record<string, boolean>>({})
  const [completionPoints, setCompletionPoints] = useState<Record<string, number>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [existingScore, setExistingScore] = useState<LessonScore | null>(null)
  const [isLessonUnlocked, setIsLessonUnlocked] = useState(true)

  const id = Number(params.id)

  // Function to calculate the score percentage
  const calculateScore = () => {
    const totalEarnedPoints =
      Object.values(quizPoints).reduce((sum, points) => sum + points, 0) +
      Object.values(completionPoints).reduce((sum, points) => sum + points, 0)

    // We need to access currentLesson which isn't defined yet, so we'll find it directly
    const lesson = grammarLessons.find((lesson) => lesson.id === id) || grammarLessons[0]

    const totalPossiblePoints =
      lesson.exercises.quiz.reduce((sum, q) => sum + q.points, 0) +
      lesson.exercises.completion.reduce((sum, q) => sum + q.blanks.reduce((bSum, b) => bSum + b.points, 0), 0)

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
        Object.values(quizAnswers).filter(Boolean).length + Object.values(completionAnswers).filter(Boolean).length,
      total: Object.keys(quizAnswers).length + Object.keys(completionAnswers).length,
      percentage: score,
      passed: score >= PASSING_SCORE,
      completed: true,
      attempts: (existingScore?.attempts || 0) + 1,
      lastAttempt: new Date().toISOString(),
    }

    grammarLessonService.saveScore(id, lessonScore)

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

  // Grammar lessons data
  const grammarLessons = [
    {
      id: 1,
      title: "الضمائر الشخصية",
      description: "تعلم الضمائر الشخصية في اللغة الفرنسية",
      exercises: personalPronounsExercises.lesson1,
      content: {
        learn: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-medium">الضمائر الشخصية في اللغة الفرنسية</h3>
              <p className="mb-4 text-muted-foreground">
                الضمائر الشخصية هي كلمات تستخدم للإشارة إلى الأشخاص أو الأشياء دون ذكر أسمائهم. في اللغة الفرنسية، تختلف
                الضمائر حسب الشخص والعدد.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-right">الشخص</th>
                      <th className="p-2 text-right">المفرد</th>
                      <th className="p-2 text-right">الجمع</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">المتكلم</td>
                      <td className="p-2">je (أنا)</td>
                      <td className="p-2">nous (نحن)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">المخاطب</td>
                      <td className="p-2">tu (أنت)</td>
                      <td className="p-2">vous (أنتم)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">الغائب</td>
                      <td className="p-2">il (هو) / elle (هي)</td>
                      <td className="p-2">ils (هم) / elles (هن)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <h4 className="font-medium">ملاحظات مهمة:</h4>
                <ul className="list-inside list-disc space-y-2">
                  <li>يستخدم "vous" أيضًا للتحدث بشكل رسمي مع شخص واحد.</li>
                  <li>يستخدم "ils" للإشارة إلى مجموعة مختلطة من الذكور والإناث.</li>
                  <li>يستخدم "elles" فقط عندما تكون المجموعة بأكملها من الإناث.</li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg border bg-primary/5 p-4">
                <h4 className="mb-2 font-medium flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  كيفية نطق الضمائر الشخصية
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <b>Je</b> - ينطق "جو" مع نطق الـ "ج" كما في الفرنسية
                  </li>
                  <li>
                    <b>Tu</b> - ينطق "تو" مع نطق الـ "ت" أقرب للثاء
                  </li>
                  <li>
                    <b>Il</b> - ينطق "إيل" مع عدم نطق الـ "l" الأخيرة
                  </li>
                  <li>
                    <b>Elle</b> - ينطق "إل" مع نطق "ل" مضعفة
                  </li>
                  <li>
                    <b>Nous</b> - ينطق "نو" مع عدم نطق الـ "s" الأخيرة
                  </li>
                  <li>
                    <b>Vous</b> - ينطق "فو" مع عدم نطق الـ "s" الأخيرة
                  </li>
                  <li>
                    <b>Ils</b> - ينطق "إيل" مع عدم نطق الـ "ls" الأخيرة
                  </li>
                  <li>
                    <b>Elles</b> - ينطق "إل" مع عدم نطق الـ "les" الأخيرة
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-medium">أمثلة على استخدام الضمائر الشخصية</h3>

              <div className="space-y-4">
                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Je suis étudiant. (أنا طالب)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير المتكلم المفرد</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Tu parles français. (أنت تتحدث الفرنسية)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير المخاطب المفرد</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Il aime la musique. (هو يحب الموسيقى)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير الغائب المفرد المذكر</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Elle lit un livre. (هي تقرأ كتابًا)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير الغائب المفرد المؤنث</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Nous étudions le français. (نحن ندرس الفرنسية)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير المتكلم الجمع</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Vous êtes professeur. (أنتم مدرسون / أنت مدرس - صيغة رسمية)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير المخاطب الجمع أو المفرد الرسمي</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Ils vont au cinéma. (هم يذهبون إلى السينما)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير الغائب الجمع المذكر</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">Elles parlent anglais. (هن يتحدثن الإنجليزية)</p>
                  <p className="text-sm text-muted-foreground">استخدام ضمير الغائب الجمع المؤنث</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border-l-4 border-l-primary p-4 bg-primary/5">
              <h4 className="mb-2 text-lg font-medium flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                نصائح للتعلم
              </h4>
              <ul className="list-inside list-disc space-y-2 text-sm">
                <li>حاول تكوين جمل بسيطة باستخدام كل ضمير شخصي.</li>
                <li>استخدم بطاقات تعليمية لتذكر الضمائر الشخصية ومعانيها.</li>
                <li>استمع إلى الطريقة الصحيحة لنطق الضمائر وكررها بصوت عالٍ.</li>
                <li>انتبه إلى الفرق بين "tu" و "vous" واستخدمهما في السياقات المناسبة.</li>
                <li>تدرب على تصريف الأفعال مع الضمائر المختلفة.</li>
              </ul>
            </div>
          </div>
        ),
        practice: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-medium">تمارين على الضمائر الشخصية</h3>

              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center text-lg">
                      <PenLine className="mr-2 h-5 w-5 text-primary" />
                      تمرين 1: اختر الضمير المناسب
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {personalPronounsExercises.lesson1.quiz.slice(0, 4).map((question, index) => (
                        <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                          <QuizQuestion
                            question={question}
                            onAnswer={(id, isCorrect, points) => {
                              setQuizAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                              setQuizPoints((prev) => ({ ...prev, [id]: points }))
                              setLessonProgress((prev) => Math.min(prev + 5, 100))
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
                    <CardTitle className="flex items-center text-lg">
                      <PenLine className="mr-2 h-5 w-5 text-primary" />
                      تمرين 2: أكمل الجمل بالضمير المناسب
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {personalPronounsExercises.lesson1.completion.slice(0, 3).map((question, index) => (
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
              </div>
            </div>
          </div>
        ),
        test: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-medium flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                اختبار الضمائر الشخصية
              </h3>

              {isSubmitted ? (
                <div className="space-y-8">
                  <ScoreDisplay
                    score={{
                      correct:
                        Object.values(quizAnswers).filter(Boolean).length +
                        Object.values(completionAnswers).filter(Boolean).length,
                      total: Object.keys(quizAnswers).length + Object.keys(completionAnswers).length,
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
                      setLessonProgress(50)
                      setActiveTab("practice")
                    }}
                    onNext={() => {
                      if (id < grammarLessons.length) {
                        router.push(`/lessons/grammar/${id + 1}`)
                      } else {
                        router.push("/lessons/grammar")
                      }
                    }}
                    onToDashboard={() => router.push("/dashboard")}
                  />
                </div>
              ) : (
                <div className="space-y-8">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="text-lg">أسئلة الاختيار من متعدد</CardTitle>
                      <CardDescription>اختر الإجابة الصحيحة لكل سؤال</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {personalPronounsExercises.lesson1.quiz.slice(4, 8).map((question, index) => (
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
                      <CardTitle className="text-lg">أكمل الجمل التالية</CardTitle>
                      <CardDescription>اكتب الضمير المناسب في كل فراغ</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {personalPronounsExercises.lesson1.completion.slice(3, 5).map((question, index) => (
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

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={handleSubmitTest}
                      disabled={Object.keys(quizAnswers).length + Object.keys(completionAnswers).length < 7}
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
    {
      id: 2,
      title: "المذكر والمؤنث",
      description: "تعلم قواعد المذكر والمؤنث في اللغة الفرنسية",
      exercises: personalPronounsExercises.lesson2,
      content: {
        learn: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-medium">المذكر والمؤنث في اللغة الفرنسية</h3>
              <p className="mb-4 text-muted-foreground">
                في اللغة الفرنسية، تنقسم الأسماء إلى مذكر ومؤنث. هذا التقسيم يؤثر على الصفات والضمائر وأدوات التعريف.
              </p>

              <div className="space-y-4">
                <h4 className="font-medium">قواعد عامة لتحويل الاسم من المذكر إلى المؤنث:</h4>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">1. إضافة حرف "e" في نهاية الكلمة</p>
                  <p className="text-sm">un étudiant (طالب) → une étudiante (طالبة)</p>
                  <p className="text-sm">un ami (صديق) → une amie (صديقة)</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">2. تحويل النهاية "eur" إلى "euse"</p>
                  <p className="text-sm">un vendeur (بائع) → une vendeuse (بائعة)</p>
                  <p className="text-sm">un chanteur (مغني) → une chanteuse (مغنية)</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">3. تحويل النهاية "teur" إلى "trice"</p>
                  <p className="text-sm">un acteur (ممثل) → une actrice (ممثلة)</p>
                  <p className="text-sm">un directeur (مدير) → une directrice (مديرة)</p>
                </div>

                <div className="rounded-md border p-3">
                  <p className="mb-1 font-medium">4. حالات خاصة</p>
                  <p className="text-sm">un homme (رجل) → une femme (امرأة)</p>
                  <p className="text-sm">un garçon (ولد) → une fille (بنت)</p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border bg-primary/5 p-4">
                <h4 className="mb-2 font-medium flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  حالات إضافية للتحويل من المذكر إلى المؤنث
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <b>un boulanger → une boulangère</b> - الأسماء المنتهية بـ "er" تتحول إلى "ère"
                  </li>
                  <li>
                    <b>un coiffeur → une coiffeuse</b> - معظم الكلمات المنتهية بـ "eur" تتحول إلى "euse"
                  </li>
                  <li>
                    <b>un sportif → une sportive</b> - الأسماء المنتهية بـ "f" تتحول إلى "ve"
                  </li>
                  <li>
                    <b>un musicien → une musicienne</b> - الأسماء المنتهية بـ "ien" تتحول إلى "ienne"
                  </li>
                  <li>
                    <b>un prince → une princesse</b> - بعض الكلمات لها صيغ خاصة للمؤنث
                  </li>
                  <li>
                    <b>un héros → une héroïne</b> - بعض الكلمات تتغير بشكل كبير في صيغة المؤنث
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-medium">أدوات التعريف مع المذكر والمؤنث</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-right"></th>
                      <th className="p-2 text-right">المفرد</th>
                      <th className="p-2 text-right">الجمع</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">المذكر</td>
                      <td className="p-2">le / un</td>
                      <td className="p-2">les / des</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">المؤنث</td>
                      <td className="p-2">la / une</td>
                      <td className="p-2">les / des</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm">le livre (الكتاب) - un livre (كتاب)</p>
                <p className="text-sm">la table (الطاولة) - une table (طاولة)</p>
                <p className="text-sm">les livres (الكتب) - des livres (كتب)</p>
                <p className="text-sm">les tables (الطاولات) - des tables (طاولات)</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border-l-4 border-l-primary p-4 bg-primary/5">
              <h4 className="mb-2 text-lg font-medium flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                نصائح للتعلم
              </h4>
              <ul className="list-inside list-disc space-y-2 text-sm">
                <li>تعلم جنس الاسم (مذكر/مؤنث) مع الاسم نفسه لتسهيل تذكره.</li>
                <li>انتبه إلى أن بعض الكلمات قد لا تتبع القواعد العامة للتحويل من المذكر إلى المؤنث.</li>
                <li>تدرب على استخدام أدوات التعريف المناسبة مع الأسماء المذكرة والمؤنثة.</li>
                <li>لاحظ أن الصفات أيضًا تتغير حسب جنس الاسم (مذكر/مؤنث).</li>
                <li>استخدم القاموس للتحقق من جنس الكلمات عندما تكون غير متأكد.</li>
              </ul>
            </div>
          </div>
        ),
        practice: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-medium">تمارين على المذكر والمؤنث</h3>

              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center text-lg">
                      <PenLine className="mr-2 h-5 w-5 text-primary" />
                      تمرين 1: حول الكلمات التالية من المذكر إلى المؤنث
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {personalPronounsExercises.lesson2.quiz.slice(0, 4).map((question, index) => (
                        <div key={question.id} className="pb-6 border-b last:border-b-0 last:pb-0">
                          <QuizQuestion
                            question={question}
                            onAnswer={(id, isCorrect, points) => {
                              setQuizAnswers((prev) => ({ ...prev, [id]: isCorrect }))
                              setQuizPoints((prev) => ({ ...prev, [id]: points }))
                              setLessonProgress((prev) => Math.min(prev + 5, 100))
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
                    <CardTitle className="flex items-center text-lg">
                      <PenLine className="mr-2 h-5 w-5 text-primary" />
                      تمرين 2: اختر أداة التعريف المناسبة
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8">
                      {personalPronounsExercises.lesson2.completion.slice(0, 3).map((question, index) => (
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
              </div>
            </div>
          </div>
        ),
        test: (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-medium flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                اختبار المذكر والمؤنث
              </h3>

              {isSubmitted ? (
                <div className="space-y-8">
                  <ScoreDisplay
                    score={{
                      correct:
                        Object.values(quizAnswers).filter(Boolean).length +
                        Object.values(completionAnswers).filter(Boolean).length,
                      total: Object.keys(quizAnswers).length + Object.keys(completionAnswers).length,
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
                      setLessonProgress(50)
                      setActiveTab("practice")
                    }}
                    onNext={() => {
                      if (id < grammarLessons.length) {
                        router.push(`/lessons/grammar/${id + 1}`)
                      } else {
                        router.push("/lessons/grammar")
                      }
                    }}
                    onToDashboard={() => router.push("/dashboard")}
                  />
                </div>
              ) : (
                <div className="space-y-8">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="text-lg">أسئلة الاختيار من متعدد</CardTitle>
                      <CardDescription>اختر الإجابة الصحيحة لكل سؤال</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {personalPronounsExercises.lesson2.quiz.slice(4, 8).map((question, index) => (
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
                      <CardTitle className="text-lg">أكمل الجمل التالية</CardTitle>
                      <CardDescription>اكتب أداة التعريف المناسبة في كل فراغ</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-8">
                        {personalPronounsExercises.lesson2.completion.slice(3, 5).map((question, index) => (
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

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={handleSubmitTest}
                      disabled={Object.keys(quizAnswers).length + Object.keys(completionAnswers).length < 7}
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

  const currentLesson = grammarLessons.find((lesson) => lesson.id === id) || grammarLessons[0]

  // Check if lesson is unlocked on component mount
  useEffect(() => {
    // Get existing score if any
    const score = grammarLessonService.getScore(id)
    if (score) {
      setExistingScore(score)
    }

    // Check if the lesson is unlocked
    const unlocked = grammarLessonService.isLessonUnlocked(id)
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

  // Access gate - check if user can access this lesson
  return (
    <LessonAccessGate
      isUnlocked={isLessonUnlocked}
      lessonTitle={currentLesson.title}
      previousLessonPath={`/lessons/grammar/${id - 1}`}
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
              onClick={() => router.push(`/lessons/grammar/${id - 1}`)}
              disabled={id <= 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.push(`/lessons/grammar/${id + 1}`)}
              disabled={id >= grammarLessons.length || (!existingScore?.passed && id < grammarLessons.length)}
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
            <TabsTrigger value="learn" onClick={() => setLessonProgress((prev) => Math.min(prev + 5, 100))}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                تعلم
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="practice" onClick={() => setLessonProgress((prev) => Math.min(prev + 5, 100))}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                <PenLine className="mr-2 h-4 w-4" />
                تدرب
              </motion.div>
            </TabsTrigger>
            <TabsTrigger value="test" onClick={() => setLessonProgress((prev) => Math.min(prev + 5, 100))}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                اختبر
              </motion.div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>تعلم {currentLesson.title}</CardTitle>
                  <CardDescription>اقرأ وتعلم قواعد {currentLesson.title} في اللغة الفرنسية</CardDescription>
                </CardHeader>
                <CardContent>{currentLesson.content.learn}</CardContent>
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
                  <Button onClick={() => setActiveTab("test")} className="w-full">
                    انتقل إلى الاختبار
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="test">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>اختبر معرفتك</CardTitle>
                  <CardDescription>اختبر فهمك لقواعد {currentLesson.title}</CardDescription>
                </CardHeader>
                <CardContent>{currentLesson.content.test}</CardContent>
                {!isSubmitted && (
                  <CardFooter>
                    <Button
                      onClick={handleSubmitTest}
                      className="w-full"
                      disabled={Object.keys(quizAnswers).length + Object.keys(completionAnswers).length < 7}
                    >
                      إنهاء الاختبار
                    </Button>
                  </CardFooter>
                )}
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
                if (id < grammarLessons.length) {
                  router.push(`/lessons/grammar/${id + 1}`)
                } else {
                  router.push("/lessons/grammar")
                }
              }}
              disabled={id >= grammarLessons.length || (!existingScore?.passed && id < grammarLessons.length)}
            >
              الدرس التالي
            </Button>
          </div>
        )}
      </div>
    </LessonAccessGate>
  )
}

