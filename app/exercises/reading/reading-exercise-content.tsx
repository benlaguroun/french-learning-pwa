"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "@/components/ui/separator"
import { readingExercisesData } from "@/lib/reading-exercises-data"

export default function ReadingExerciseContent() {
  const [currentLevel, setCurrentLevel] = useState("beginner")
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [exerciseCompleted, setExerciseCompleted] = useState(false)
  const { toast } = useToast()

  const currentExercise = readingExercisesData.find((level) => level.id === currentLevel)?.exercises[
    currentExerciseIndex
  ]

  const totalExercises = readingExercisesData.find((level) => level.id === currentLevel)?.exercises.length || 0

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    setIsAnswerSubmitted(true)

    if (selectedAnswer === currentExercise?.questions[0].correctAnswer) {
      setScore((prevScore) => prevScore + 1)
      toast({
        title: "إجابة صحيحة!",
        description: "أحسنت! استمر في العمل الجيد.",
        variant: "default",
      })
    } else {
      toast({
        title: "إجابة خاطئة",
        description: `الإجابة الصحيحة هي: ${currentExercise?.questions[0].correctAnswer}`,
        variant: "destructive",
      })
    }
  }

  const handleNextExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
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
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setScore(0)
    setExerciseCompleted(false)
  }

  const changeLevel = (level: string) => {
    setCurrentLevel(level)
    resetExercise()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">تمارين القراءة</h1>
        <p className="text-muted-foreground">تحسين مهارات القراءة والفهم باللغة الفرنسية</p>
      </div>

      <Tabs defaultValue="beginner" className="mb-8" onValueChange={changeLevel}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="beginner">المستوى المبتدئ</TabsTrigger>
          <TabsTrigger value="intermediate">المستوى المتوسط</TabsTrigger>
          <TabsTrigger value="advanced">المستوى المتقدم</TabsTrigger>
        </TabsList>

        {readingExercisesData.map((level) => (
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
                          <h3 className="text-xl font-bold mb-4">{currentExercise.title}</h3>
                          <p className="mb-4">{currentExercise.text}</p>
                          <h4 className="font-medium mb-2">الترجمة:</h4>
                          <p className="text-muted-foreground">{currentExercise.translation}</p>
                        </div>

                        <Separator className="my-6" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">اختر الإجابة الصحيحة:</h3>
                          {currentExercise.questions.map((question) => (
                            <div key={question.id} className="space-y-2">
                              <p className="font-medium">{question.question}</p>
                              {question.options.map((option) => (
                                <Button
                                  key={option}
                                  variant={selectedAnswer === option ? "default" : "outline"}
                                  className={`justify-start ${
                                    isAnswerSubmitted && option === question.correctAnswer ? "bg-green-500/20" : ""
                                  }`}
                                  onClick={() => handleAnswerSelect(option)}
                                  disabled={isAnswerSubmitted}
                                >
                                  {option}
                                </Button>
                              ))}
                            </div>
                          ))}
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
                    <Button onClick={resetExercise}>إعادة التمرين</Button>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleSubmitAnswer} disabled={isAnswerSubmitted || !selectedAnswer}>
                  تحقق من الإجابة
                </Button>
                <Button
                  onClick={handleNextExercise}
                  disabled={!isAnswerSubmitted && currentExerciseIndex < totalExercises - 1}
                >
                  {currentExerciseIndex < totalExercises - 1 ? "التمرين التالي" : "إنهاء التمرين"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

