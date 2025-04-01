"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { useProgress } from "@/components/progress-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { VoiceRecorder } from "@/components/voice-recorder"
import { updateLessonProgress, updateSyllableProgress } from "@/lib/data-service"
import { getTableauById, getAllTableaux } from "@/lib/syllables-data"
import { SyllableCard } from "@/components/syllable-card"
import { WordCard } from "@/components/word-card"
import { AudioPlayer } from "@/components/audio-player"

export default function SyllableLessonPage() {
  const params = useParams()
  const router = useRouter()
  const { progress, updateProgress } = useProgress()
  const [activeTab, setActiveTab] = useState("learn")
  const [lessonProgress, setLessonProgress] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [selectedSyllable, setSelectedSyllable] = useState<string | null>(null)
  const [successfulAttempts, setSuccessfulAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)

  // Mock user ID - in a real app, this would come from authentication
  const userId = "user123"

  const id = Number(params.id)
  const tableData = getTableauById(id)
  const allTableaux = getAllTableaux()

  // Handle lesson completion
  useEffect(() => {
    if (lessonProgress >= 100 && !completed) {
      setCompleted(true)
      // Update overall progress
      const newLessonProgress = progress.lessons + 0.05 // Increment by 5%
      updateProgress("lessons", Math.min(newLessonProgress, 1))

      // Update in data service
      updateLessonProgress(userId, `syllable-${id}`, true, (successfulAttempts / Math.max(totalAttempts, 1)) * 100)
    }
  }, [lessonProgress, completed, progress.lessons, updateProgress, id, successfulAttempts, totalAttempts])

  // Simulate progress as user interacts with the lesson
  const incrementProgress = () => {
    setLessonProgress((prev) => Math.min(prev + 5, 100))
  }

  const handleNext = () => {
    const nextId = id + 1
    if (nextId <= allTableaux.length) {
      router.push(`/lessons/syllables/${nextId}`)
    } else {
      router.push("/dashboard")
    }
  }

  const handlePrevious = () => {
    const prevId = id - 1
    if (prevId > 0) {
      router.push(`/lessons/syllables/${prevId}`)
    }
  }

  const handlePronunciationResult = (success: boolean) => {
    if (selectedSyllable) {
      // Update syllable progress
      updateSyllableProgress(userId, selectedSyllable, success)

      // Update lesson progress
      setTotalAttempts((prev) => prev + 1)
      if (success) {
        setSuccessfulAttempts((prev) => prev + 1)
        incrementProgress()
      }
    }
  }

  if (!tableData) {
    return (
      <div className="container py-10">
        <Alert>
          <AlertTitle>الدرس غير موجود</AlertTitle>
          <AlertDescription>لم يتم العثور على الدرس المطلوب. يرجى العودة إلى صفحة الدروس.</AlertDescription>
        </Alert>
        <Button className="mt-4" onClick={() => router.push("/lessons")}>
          العودة إلى الدروس
        </Button>
      </div>
    )
  }

  return (
    <div className="container pb-20 pt-8 md:pb-10">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">{tableData.name}</h1>
          <p className="text-muted-foreground">{tableData.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePrevious} disabled={id <= 1}>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext} disabled={id >= allTableaux.length}>
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
          <TabsTrigger value="learn" onClick={incrementProgress}>
            تعلم
          </TabsTrigger>
          <TabsTrigger value="practice" onClick={incrementProgress}>
            تدرب
          </TabsTrigger>
          <TabsTrigger value="test" onClick={incrementProgress}>
            اختبر
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>المقاطع الصوتية</CardTitle>
              <CardDescription>تعلم نطق المقاطع الصوتية لكل حرف</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {tableData.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="mb-2 text-lg font-medium">حرف {section.letter.toUpperCase()}</h3>
                    {section.syllables.map((syllable, syllableIndex) => (
                      <SyllableCard
                        key={syllableIndex}
                        syllableData={syllable}
                        onPractice={(syllable) => {
                          setSelectedSyllable(syllable)
                          incrementProgress()
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الكلمات</CardTitle>
              <CardDescription>تطبيق المقاطع الصوتية في كلمات</CardDescription>
            </CardHeader>
            <CardContent>
              {tableData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 last:mb-0">
                  <h3 className="mb-4 text-lg font-medium">كلمات بحرف {section.letter.toUpperCase()}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {section.words.map((word, wordIndex) => (
                      <WordCard
                        key={wordIndex}
                        wordData={word}
                        onPractice={(word) => {
                          setSelectedSyllable(word)
                          incrementProgress()
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>تدرب على النطق</CardTitle>
              <CardDescription>استمع إلى المقطع ثم سجل نطقك وتحقق من صحته</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {tableData.sections.flatMap((section) =>
                  section.syllables.map((syllable, syllableIndex) => {
                    // Extract the first syllable for practice
                    const firstSyllable = syllable.syllable.split("/")[0].trim()
                    return (
                      <VoiceRecorder
                        key={`${section.letter}-${syllableIndex}`}
                        syllable={firstSyllable}
                        referenceAudioUrl={syllable.audio}
                        onResult={(success) => handlePronunciationResult(success)}
                      />
                    )
                  }),
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={incrementProgress} className="w-full">
                تحقق من تقدمك
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="test" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>اختبر معرفتك</CardTitle>
              <CardDescription>استمع إلى المقطع وحدد الإجابة الصحيحة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tableData.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">اختبار حرف {section.letter.toUpperCase()}</span>
                    </div>
                    <div className="space-y-4">
                      {section.words.slice(0, 2).map((word, wordIndex) => (
                        <div key={wordIndex} className="rounded-lg border p-4">
                          <h4 className="mb-2">استمع واختر الكلمة الصحيحة:</h4>
                          <AudioPlayer src={word.audio} className="mb-4" />
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {[...section.words]
                              .sort(() => Math.random() - 0.5)
                              .slice(0, 3)
                              .map((option, optionIndex) => (
                                <Button
                                  key={optionIndex}
                                  variant="outline"
                                  className="justify-start"
                                  onClick={() => {
                                    const isCorrect = option.word === word.word
                                    handlePronunciationResult(isCorrect)
                                    incrementProgress()
                                  }}
                                >
                                  {option.word}
                                </Button>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={incrementProgress} className="w-full">
                تحقق من إجاباتك
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {completed && (
        <Alert className="mt-6 border-green-500 bg-green-500/10">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>أحسنت!</AlertTitle>
          <AlertDescription>
            لقد أكملت هذا الدرس بنجاح. يمكنك الانتقال إلى الدرس التالي أو العودة إلى لوحة التحكم.
          </AlertDescription>
        </Alert>
      )}

      <div className="mt-6 flex justify-between">
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          العودة إلى لوحة التحكم
        </Button>
        <Button onClick={handleNext} disabled={id >= allTableaux.length}>
          الدرس التالي
        </Button>
      </div>
    </div>
  )
}

