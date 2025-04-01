"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Award, RefreshCw, Pencil, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { writingExercisesData } from "@/lib/writing-exercises-data"

export default function WritingExerciseContent() {
  const [currentLevel, setCurrentLevel] = useState("beginner")
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [exerciseCompleted, setExerciseCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const { toast } = useToast()

  const currentExercise = writingExercisesData.find((level) => level.id === currentLevel)?.exercises[
    currentExerciseIndex
  ]

  const totalExercises = writingExercisesData.find((level) => level.id === currentLevel)?.exercises.length || 0

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) return

    setIsAnswerSubmitted(true)

    // Simple comparison - in a real app, you'd want more sophisticated matching
    const normalizedUserAnswer = userAnswer.toLowerCase().trim()
    const normalizedCorrectAnswer = currentExercise?.correctAnswer.toLowerCase().trim() || ""

    const isAnswerCorrect =
      normalizedUserAnswer === normalizedCorrectAnswer ||
      normalizedUserAnswer.includes(normalizedCorrectAnswer) ||
      normalizedCorrectAnswer.includes(normalizedUserAnswer)

    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setScore((prev) => prev + 1)
      toast({
        title: "إجابة صحيحة!",
        description: "أحسنت! كتابتك صحيحة.",
        variant: "default",
      })
    } else {
      toast({
        title: "إجابة خاطئة",
        description: `الإجابة الصحيحة هي: ${currentExercise?.correctAnswer}`,
        variant: "destructive",
      })
    }
  }

  const handleNextExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1)
      setUserAnswer("")
      setIsAnswerSubmitted(false)
      setIsCorrect(false)
      setShowHint(false)
    } else {
      setExerciseCompleted(true)
      toast({
        title: "أكملت التمرين!",
        description: `حصلت على ${score} من ${totalExercises} نقاط.`,
        variant: "default",
      })
    }
  }

  const resetExercise = () => {
    setCurrentExerciseIndex(0)
    setUserAnswer("")
    setIsAnswerSubmitted(false)
    setIsCorrect(false)
    setScore(0)
    setExerciseCompleted(false)
    setShowHint(false)
  }

  const changeLevel = (level: string) => {
    setCurrentLevel(level)
    resetExercise()
  }

  const toggleHint = () => {
    setShowHint(!showHint)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">تمارين الكتابة</h1>
        <p className="text-muted-foreground">تحسين مهارات الكتابة باللغة الفرنسية</p>
      </div>

      <Tabs defaultValue="beginner" className="mb-8" onValueChange={changeLevel}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="beginner">المستوى المبتدئ</TabsTrigger>
          <TabsTrigger value="intermediate">المستوى المتوسط</TabsTrigger>
          <TabsTrigger value="advanced">المستوى المتقدم</TabsTrigger>
        </TabsList>

        {writingExercisesData.map((level) => (
          <TabsContent key={level.id} value={level.id}>
            <Card>
              <CardHeader>
                <CardTitle>{level.title}</CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {!exerciseCompleted ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">
                        التمرين {currentExerciseIndex + 1} من {totalExercises}
                      </span>
                      <span className="text-sm font-medium">النقاط: {score}</span>
                    </div>

                    <Progress value={(currentExerciseIndex / totalExercises) * 100} className="h-2 mb-6" />

                    {currentExercise && (
                      <div className="space-y-6">
                        <div className="bg-muted p-6 rounded-lg">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">{currentExercise.category}</h3>
                            <Badge variant="outline">{currentExercise.difficulty}</Badge>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-medium mb-2">المطلوب:</h4>
                            <p className="mb-4">{currentExercise.instruction}</p>
                            <p className="text-muted-foreground">{currentExercise.translation}</p>
                          </div>

                          <Button variant="outline" className="flex items-center gap-2" onClick={toggleHint}>
                            {showHint ? (
                              <>
                                <EyeOff className="h-4 w-4" />
                                <span>إخفاء المساعدة</span>
                              </>
                            ) : (
                              <>
                                <Eye className="h-4 w-4" />
                                <span>إظهار المساعدة</span>
                              </>
                            )}
                          </Button>

                          {showHint && (
                            <div className="mt-4 p-4 bg-primary/5 rounded-md animate-fadeIn">
                              <h4 className="font-medium mb-2">مساعدة:</h4>
                              <p>{currentExercise.hint}</p>
                            </div>
                          )}
                        </div>

                        <Separator className="my-6" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">اكتب إجابتك بالفرنسية:</h3>

                          <div className="relative">
                            <Input
                              value={userAnswer}
                              onChange={(e) => setUserAnswer(e.target.value)}
                              placeholder="اكتب هنا..."
                              className={`text-lg p-4 h-auto ${
                                isAnswerSubmitted
                                  ? isCorrect
                                    ? "border-green-500 focus-visible:ring-green-500"
                                    : "border-red-500 focus-visible:ring-red-500"
                                  : ""
                              }`}
                              disabled={isAnswerSubmitted}
                              dir="ltr"
                            />
                            {isAnswerSubmitted && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                {isCorrect ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-500" />
                                )}
                              </div>
                            )}
                          </div>

                          {isAnswerSubmitted && !isCorrect && (
                            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-md mt-2 animate-fadeIn">
                              <p className="text-sm font-medium text-red-700 dark:text-red-300">
                                الإجابة الصحيحة: <span className="font-bold">{currentExercise.correctAnswer}</span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Award className="h-16 w-16 mx-auto text-primary mb-4" />
                    <h2 className="text-2xl font-bold mb-2">أكملت التمرين!</h2>
                    <p className="mb-6">
                      حصلت على <span className="font-bold">{score}</span> من{" "}
                      <span className="font-bold">{totalExercises}</span> نقاط
                    </p>
                    <Button onClick={resetExercise} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      <span>إعادة التمرين</span>
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {!isAnswerSubmitted ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={!userAnswer.trim()}
                    className="flex items-center gap-2"
                  >
                    <Pencil className="h-4 w-4" />
                    <span>تحقق من الإجابة</span>
                  </Button>
                ) : (
                  <Button onClick={handleNextExercise} className="flex items-center gap-2">
                    <span>{currentExerciseIndex < totalExercises - 1 ? "التمرين التالي" : "إنهاء التمرين"}</span>
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

