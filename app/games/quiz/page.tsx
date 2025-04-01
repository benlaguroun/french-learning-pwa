"use client"

import { useState, useEffect } from "react"
import GameLayout from "@/components/games/game-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RefreshCw, ChevronRight, Trophy } from "lucide-react"
import confetti from "canvas-confetti"

// Quiz questions
const QUIZ_SETS = {
  vocabulary: [
    {
      question: "ما معنى كلمة 'Maison' بالعربية؟",
      options: ["مدرسة", "منزل", "سيارة", "متجر"],
      correctAnswer: "منزل",
      explanation: "'Maison' تعني 'منزل' باللغة الفرنسية.",
    },
    {
      question: "ما معنى كلمة 'Chat' بالعربية؟",
      options: ["كلب", "قط", "طائر", "سمكة"],
      correctAnswer: "قط",
      explanation: "'Chat' تعني 'قط' باللغة الفرنسية.",
    },
    {
      question: "ما معنى كلمة 'Livre' بالعربية؟",
      options: ["كتاب", "قلم", "طاولة", "نافذة"],
      correctAnswer: "كتاب",
      explanation: "'Livre' تعني 'كتاب' باللغة الفرنسية.",
    },
    {
      question: "ما معنى كلمة 'Voiture' بالعربية؟",
      options: ["دراجة", "قطار", "سيارة", "طائرة"],
      correctAnswer: "سيارة",
      explanation: "'Voiture' تعني 'سيارة' باللغة الفرنسية.",
    },
    {
      question: "ما معنى كلمة 'Pomme' بالعربية؟",
      options: ["برتقال", "موز", "تفاح", "عنب"],
      correctAnswer: "تفاح",
      explanation: "'Pomme' تعني 'تفاح' باللغة الفرنسية.",
    },
  ],
  grammar: [
    {
      question: "ما هو الضمير الصحيح للمخاطب المفرد المذكر في اللغة الفرنسية؟",
      options: ["Je", "Tu", "Il", "Nous"],
      correctAnswer: "Tu",
      explanation: "'Tu' هو الضمير المستخدم للمخاطب المفرد (أنت) في اللغة الفرنسية.",
    },
    {
      question: "ما هي الصيغة الصحيحة للفعل 'Parler' (يتحدث) مع ضمير 'Je'؟",
      options: ["Je parle", "Je parles", "Je parlons", "Je parlez"],
      correctAnswer: "Je parle",
      explanation: "مع ضمير 'Je'، تنتهي معظم الأفعال بحرف 'e'.",
    },
    {
      question: "ما هي أداة التعريف المؤنثة في اللغة الفرنسية؟",
      options: ["Le", "La", "Les", "Un"],
      correctAnswer: "La",
      explanation: "'La' هي أداة التعريف للمؤنث المفرد في اللغة الفرنسية.",
    },
    {
      question: "كيف نقول 'لا' باللغة الفرنسية؟",
      options: ["Oui", "Non", "Peut-être", "Bien"],
      correctAnswer: "Non",
      explanation: "'Non' تعني 'لا' باللغة الفرنسية.",
    },
    {
      question: "ما هو الترتيب الصحيح للكلمات في الجملة الفرنسية؟",
      options: ["فعل - فاعل - مفعول به", "فاعل - فعل - مفعول به", "مفعول به - فاعل - فعل", "فعل - مفعول به - فاعل"],
      correctAnswer: "فاعل - فعل - مفعول به",
      explanation: "الترتيب الأساسي للجملة الفرنسية هو: فاعل - فعل - مفعول به، مثل 'Je mange une pomme'.",
    },
  ],
  culture: [
    {
      question: "ما هي عاصمة فرنسا؟",
      options: ["ليون", "مرسيليا", "باريس", "نيس"],
      correctAnswer: "باريس",
      explanation: "باريس هي عاصمة فرنسا ومن أشهر المدن السياحية في العالم.",
    },
    {
      question: "ما هو الطبق الفرنسي الشهير المصنوع من العجين على شكل هلال؟",
      options: ["بوييابيس", "كروسان", "راتاتوي", "كاسولي"],
      correctAnswer: "كروسان",
      explanation: "الكروسان هو معجنات فرنسية شهيرة على شكل هلال.",
    },
    {
      question: "ما هو اللون الأوسط في العلم الفرنسي؟",
      options: ["أحمر", "أبيض", "أزرق", "أخضر"],
      correctAnswer: "أبيض",
      explanation: "العلم الفرنسي يتكون من ثلاثة ألوان: أزرق، أبيض، أحمر.",
    },
    {
      question: "ما هو النصب التذكاري الشهير في باريس؟",
      options: ["قوس النصر", "برج إيفل", "متحف اللوفر", "كاتدرائية نوتردام"],
      correctAnswer: "برج إيفل",
      explanation: "برج إيفل هو أحد أشهر المعالم في باريس وفرنسا.",
    },
    {
      question: "ما هي اللغة الرسمية في فرنسا؟",
      options: ["الإنجليزية", "الألمانية", "الفرنسية", "الإسبانية"],
      correctAnswer: "الفرنسية",
      explanation: "اللغة الفرنسية هي اللغة الرسمية في فرنسا.",
    },
  ],
}

export default function QuizGame() {
  const [category, setCategory] = useState("vocabulary")
  const [questions, setQuestions] = useState<any[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  // Initialize or reset the quiz
  const initializeQuiz = () => {
    const quizSet = [...QUIZ_SETS[category as keyof typeof QUIZ_SETS]]
    setQuestions(quizSet)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizComplete(false)
  }

  // Initialize quiz on mount and category change
  useEffect(() => {
    initializeQuiz()
  }, [category])

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return

    setSelectedOption(option)
    setIsAnswered(true)

    const currentQuestion = questions[currentQuestionIndex]
    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setQuizComplete(true)

      // Trigger confetti if score is good
      if (score / questions.length >= 0.7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + (isAnswered ? 1 : 0)) / questions.length) * 100

  return (
    <GameLayout
      title="اختبار معلومات"
      description="اختبر معرفتك باللغة الفرنسية"
      instructions="اختر الإجابة الصحيحة لكل سؤال. ستحصل على تفسير بعد كل إجابة."
    >
      <div className="flex justify-between items-center mb-4">
        <Button onClick={initializeQuiz} variant="outline" className="flex items-center gap-2">
          <RefreshCw size={16} />
          <span>اختبار جديد</span>
        </Button>

        <div className="flex gap-2">
          <Badge
            variant={category === "vocabulary" ? "default" : "outline"}
            onClick={() => setCategory("vocabulary")}
            className="cursor-pointer"
          >
            مفردات
          </Badge>
          <Badge
            variant={category === "grammar" ? "default" : "outline"}
            onClick={() => setCategory("grammar")}
            className="cursor-pointer"
          >
            قواعد
          </Badge>
          <Badge
            variant={category === "culture" ? "default" : "outline"}
            onClick={() => setCategory("culture")}
            className="cursor-pointer"
          >
            ثقافة
          </Badge>
        </div>
      </div>

      {!quizComplete && questions.length > 0 ? (
        <>
          <div className="mb-4">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-1 text-sm text-muted-foreground">
              <span>
                السؤال {currentQuestionIndex + 1} من {questions.length}
              </span>
              <span>النتيجة: {score}</span>
            </div>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-right">{currentQuestion.question}</h2>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option: string, index: number) => (
                <Button
                  key={index}
                  variant={
                    !isAnswered
                      ? "outline"
                      : option === currentQuestion.correctAnswer
                        ? "default"
                        : selectedOption === option
                          ? "destructive"
                          : "outline"
                  }
                  className={`w-full justify-start text-right h-auto py-3 px-4 ${
                    isAnswered && option === currentQuestion.correctAnswer
                      ? "bg-green-100 hover:bg-green-200 text-green-800 border-green-300"
                      : isAnswered && selectedOption === option && option !== currentQuestion.correctAnswer
                        ? "bg-red-100 hover:bg-red-200 text-red-800 border-red-300"
                        : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isAnswered}
                >
                  {option}
                </Button>
              ))}
            </div>

            {isAnswered && (
              <div className="mb-4 p-3 bg-muted rounded-md text-right">
                <p className="font-medium">التفسير:</p>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {isAnswered && (
              <div className="flex justify-end">
                <Button onClick={handleNextQuestion} className="flex items-center gap-2">
                  <span>{currentQuestionIndex < questions.length - 1 ? "السؤال التالي" : "إنهاء الاختبار"}</span>
                  <ChevronRight size={16} />
                </Button>
              </div>
            )}
          </Card>
        </>
      ) : (
        <Card className="p-6 text-center">
          <div className="mb-4">
            <Trophy size={64} className="mx-auto text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">انتهى الاختبار!</h2>
          <p className="text-xl mb-4">
            النتيجة النهائية: {score} من {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </p>

          {score / questions.length >= 0.8 ? (
            <p className="mb-6 text-green-600 font-semibold">ممتاز! أداء رائع!</p>
          ) : score / questions.length >= 0.6 ? (
            <p className="mb-6 text-blue-600 font-semibold">جيد جداً! استمر في التعلم!</p>
          ) : (
            <p className="mb-6 text-orange-600 font-semibold">حاول مرة أخرى لتحسين نتيجتك!</p>
          )}

          <Button onClick={initializeQuiz}>اختبار جديد</Button>
        </Card>
      )}
    </GameLayout>
  )
}

