"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Volume2, CheckCircle, XCircle, Award, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { listeningExercisesData } from "@/lib/listening-exercises-data"

export default function ListeningExerciseContent() {
  const [currentLevel, setCurrentLevel] = useState("beginner")
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [exerciseCompleted, setExerciseCompleted] = useState(false)
  const { toast } = useToast()

  const currentExercise = listeningExercisesData.find((level) => level.id === currentLevel)?.exercises[
    currentExerciseIndex
  ]

  const totalExercises = listeningExercisesData.find((level) => level.id === currentLevel)?.exercises.length || 0

  const playAudio = () => {
    // In a real app, you'd play the audio file
    // For this example, we'll use speech synthesis
    if (currentExercise) {
      const utterance = new SpeechSynthesisUtterance(currentExercise.audioText)
      utterance.lang = "fr-FR"
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    setIsAnswerSubmitted(true)

    if (selectedAnswer === currentExercise?.correctAnswer) {
      setScore((prev) => prev + 1)
      toast({
        title: "إجابة صحيحة!",
        description: "أحسنت! استمر في العمل الجيد.",
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
        <h1 className="text-3xl font-bold mb-2">تمارين الاستماع</h1>
        <p className="text-muted-foreground">تحسين مهارات الاستماع والفهم باللغة الفرنسية</p>
      </div>

      <Tabs defaultValue="beginner" className="mb-8" onValueChange={changeLevel}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="beginner">المستوى المبتدئ</TabsTrigger>
          <TabsTrigger value="intermediate">المستوى المتوسط</TabsTrigger>
          <TabsTrigger value="advanced">المستوى المتقدم</TabsTrigger>
        </TabsList>

        {listeningExercisesData.map((level) => (
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
                            <h3 className="text-xl font-bold">{currentExercise.title}</h3>
                            <Badge variant="outline">{currentExercise.category}</Badge>
                          </div>

                          <p className="mb-6">{currentExercise.instruction}</p>

                          <Button variant="default" className="flex items-center gap-2 mx-auto" onClick={playAudio}>
                            <Volume2 className="h-4 w-4" />
                            <span>استمع للتسجيل</span>
                          </Button>

                          {isAnswerSubmitted && (
                            <div className="mt-4 p-3 bg-primary/10 rounded-md">
                              <h4 className="font-medium mb-2">النص:</h4>
                              <p className="text-sm italic">"{currentExercise.audioText}"</p>
                              <p className="text-sm text-muted-foreground mt-2">{currentExercise.translation}</p>
                            </div>
                          )}
                        </div>

                        <Separator className="my-6" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">{currentExercise.question}</h3>

                          <div className="grid gap-3 mt-4">
                            {currentExercise.options.map((option) => (
                              <Button
                                key={option}
                                variant={
                                  selectedAnswer === option
                                    ? isAnswerSubmitted
                                      ? option === currentExercise.correctAnswer
                                        ? "success"
                                        : "destructive"
                                      : "default"
                                    : "outline"
                                }
                                className={`justify-start h-auto py-4 px-4 ${
                                  isAnswerSubmitted && option === currentExercise.correctAnswer
                                    ? "ring-2 ring-green-500"
                                    : ""
                                }`}
                                onClick={() => handleAnswerSelect(option)}
                                disabled={isAnswerSubmitted}
                              >
                                <span>{option}</span>
                                {isAnswerSubmitted && option === currentExercise.correctAnswer && (
                                  <CheckCircle className="h-5 w-5 ml-auto" />
                                )}
                                {isAnswerSubmitted &&
                                  selectedAnswer === option &&
                                  option !== currentExercise.correctAnswer && <XCircle className="h-5 w-5 ml-auto" />}
                              </Button>
                            ))}
                          </div>
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
                <Button variant="outline" onClick={playAudio} className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span>استمع مرة أخرى</span>
                </Button>

                {!isAnswerSubmitted ? (
                  <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="flex items-center gap-2">
                    <span>تحقق من الإجابة</span>
                    <CheckCircle className="h-4 w-4" />
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

