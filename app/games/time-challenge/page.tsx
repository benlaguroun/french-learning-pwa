"use client"

import { useState, useEffect, useRef } from "react"
import GameLayout from "@/components/games/game-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RefreshCw, Clock, Trophy, XCircle, CheckCircle } from "lucide-react"

// Word sets for the time challenge
const WORD_SETS = {
  basic: [
    { french: "Bonjour", arabic: "صباح الخير" },
    { french: "Merci", arabic: "شكراً" },
    { french: "Au revoir", arabic: "إلى اللقاء" },
    { french: "S'il vous plaît", arabic: "من فضلك" },
    { french: "Oui", arabic: "نعم" },
    { french: "Non", arabic: "لا" },
    { french: "Excusez-moi", arabic: "عذراً" },
    { french: "Comment ça va?", arabic: "كيف حالك؟" },
    { french: "Bien", arabic: "جيد" },
    { french: "Mauvais", arabic: "سيء" },
    { french: "Je m'appelle", arabic: "اسمي" },
    { french: "Enchanté", arabic: "تشرفت بمعرفتك" },
    { french: "Pardon", arabic: "عفواً" },
    { french: "Bonsoir", arabic: "مساء الخير" },
    { french: "Bonne nuit", arabic: "ليلة سعيدة" },
  ],
  numbers: [
    { french: "Un", arabic: "واحد" },
    { french: "Deux", arabic: "اثنان" },
    { french: "Trois", arabic: "ثلاثة" },
    { french: "Quatre", arabic: "أربعة" },
    { french: "Cinq", arabic: "خمسة" },
    { french: "Six", arabic: "ستة" },
    { french: "Sept", arabic: "سبعة" },
    { french: "Huit", arabic: "ثمانية" },
    { french: "Neuf", arabic: "تسعة" },
    { french: "Dix", arabic: "عشرة" },
    { french: "Vingt", arabic: "عشرون" },
    { french: "Trente", arabic: "ثلاثون" },
    { french: "Quarante", arabic: "أربعون" },
    { french: "Cinquante", arabic: "خمسون" },
    { french: "Cent", arabic: "مائة" },
  ],
  colors: [
    { french: "Rouge", arabic: "أحمر" },
    { french: "Bleu", arabic: "أزرق" },
    { french: "Vert", arabic: "أخضر" },
    { french: "Jaune", arabic: "أصفر" },
    { french: "Noir", arabic: "أسود" },
    { french: "Blanc", arabic: "أبيض" },
    { french: "Gris", arabic: "رمادي" },
    { french: "Marron", arabic: "بني" },
    { french: "Orange", arabic: "برتقالي" },
    { french: "Violet", arabic: "بنفسجي" },
    { french: "Rose", arabic: "وردي" },
    { french: "Beige", arabic: "بيج" },
    { french: "Turquoise", arabic: "فيروزي" },
    { french: "Doré", arabic: "ذهبي" },
    { french: "Argenté", arabic: "فضي" },
  ],
}

export default function TimeChallengeGame() {
  const [category, setCategory] = useState("basic")
  const [gameMode, setGameMode] = useState<"french-to-arabic" | "arabic-to-french">("french-to-arabic")
  const [timeLimit, setTimeLimit] = useState(60) // in seconds
  const [timeRemaining, setTimeRemaining] = useState(timeLimit)
  const [currentWord, setCurrentWord] = useState<{ french: string; arabic: string } | null>(null)
  const [options, setOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [gameStatus, setGameStatus] = useState<"ready" | "playing" | "finished">("ready")
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const wordSetRef = useRef<(typeof WORD_SETS)["basic"]>([])

  // Initialize the game
  const initializeGame = () => {
    wordSetRef.current = [...WORD_SETS[category as keyof typeof WORD_SETS]]
    setTimeRemaining(timeLimit)
    setScore(0)
    setStreak(0)
    setGameStatus("ready")
    setFeedback(null)
    nextWord()
  }

  // Get the next word
  const nextWord = () => {
    if (wordSetRef.current.length === 0) {
      wordSetRef.current = [...WORD_SETS[category as keyof typeof WORD_SETS]]
    }

    // Select a random word from the set
    const randomIndex = Math.floor(Math.random() * wordSetRef.current.length)
    const selectedWord = wordSetRef.current[randomIndex]

    // Remove the selected word from the set to avoid repetition
    wordSetRef.current = wordSetRef.current.filter((_, index) => index !== randomIndex)

    setCurrentWord(selectedWord)

    // Generate options (including the correct answer)
    const allWords = WORD_SETS[category as keyof typeof WORD_SETS]
    const correctAnswer = gameMode === "french-to-arabic" ? selectedWord.arabic : selectedWord.french

    // Get 3 random incorrect options
    const incorrectOptions = allWords
      .filter((word) => {
        const wordValue = gameMode === "french-to-arabic" ? word.arabic : word.french
        return wordValue !== correctAnswer
      })
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((word) => (gameMode === "french-to-arabic" ? word.arabic : word.french))

    // Combine correct and incorrect options and shuffle
    const allOptions = [correctAnswer, ...incorrectOptions].sort(() => Math.random() - 0.5)
    setOptions(allOptions)
  }

  // Start the game
  const startGame = () => {
    setGameStatus("playing")

    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Time's up
          clearInterval(timerRef.current as NodeJS.Timeout)
          setGameStatus("finished")
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  // Reset the game
  const resetGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    initializeGame()
  }

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    const correctAnswer = gameMode === "french-to-arabic" ? currentWord?.arabic : currentWord?.french

    if (option === correctAnswer) {
      // Correct answer
      setScore((prev) => prev + 1)
      setStreak((prev) => prev + 1)
      setBestStreak((prev) => Math.max(prev, streak + 1))
      setFeedback({ correct: true, message: "صحيح!" })

      // Add time bonus for correct answer
      setTimeRemaining((prev) => Math.min(prev + 2, timeLimit))
    } else {
      // Incorrect answer
      setStreak(0)
      setFeedback({ correct: false, message: `خطأ! الإجابة الصحيحة هي: ${correctAnswer}` })
    }

    // Show feedback briefly then move to next word
    setTimeout(() => {
      setFeedback(null)
      nextWord()
    }, 1000)
  }

  // Initialize game on mount and category change
  useEffect(() => {
    resetGame()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [category, gameMode, timeLimit])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <GameLayout
      title="تحدي الوقت"
      description="أجب على أكبر عدد من الأسئلة في وقت محدد"
      instructions="اختر الترجمة الصحيحة للكلمة المعروضة قبل انتهاء الوقت. الإجابات الصحيحة تضيف ثانيتين إلى الوقت المتبقي."
    >
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <Button onClick={resetGame} variant="outline" className="flex items-center gap-2">
          <RefreshCw size={16} />
          <span>إعادة اللعبة</span>
        </Button>

        <div className="flex gap-2">
          <Badge
            variant={category === "basic" ? "default" : "outline"}
            onClick={() => setCategory("basic")}
            className="cursor-pointer"
          >
            أساسيات
          </Badge>
          <Badge
            variant={category === "numbers" ? "default" : "outline"}
            onClick={() => setCategory("numbers")}
            className="cursor-pointer"
          >
            أرقام
          </Badge>
          <Badge
            variant={category === "colors" ? "default" : "outline"}
            onClick={() => setCategory("colors")}
            className="cursor-pointer"
          >
            ألوان
          </Badge>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex gap-2">
          <Badge
            variant={gameMode === "french-to-arabic" ? "default" : "outline"}
            onClick={() => setGameMode("french-to-arabic")}
            className="cursor-pointer"
          >
            فرنسي → عربي
          </Badge>
          <Badge
            variant={gameMode === "arabic-to-french" ? "default" : "outline"}
            onClick={() => setGameMode("arabic-to-french")}
            className="cursor-pointer"
          >
            عربي → فرنسي
          </Badge>
        </div>

        <div className="flex gap-2">
          <Badge
            variant={timeLimit === 30 ? "default" : "outline"}
            onClick={() => setTimeLimit(30)}
            className="cursor-pointer"
          >
            30 ثانية
          </Badge>
          <Badge
            variant={timeLimit === 60 ? "default" : "outline"}
            onClick={() => setTimeLimit(60)}
            className="cursor-pointer"
          >
            60 ثانية
          </Badge>
          <Badge
            variant={timeLimit === 120 ? "default" : "outline"}
            onClick={() => setTimeLimit(120)}
            className="cursor-pointer"
          >
            120 ثانية
          </Badge>
        </div>
      </div>

      {gameStatus === "ready" ? (
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">استعد للتحدي!</h2>
          <p className="mb-6">اختر الترجمة الصحيحة بأسرع ما يمكن. كل إجابة صحيحة تضيف ثانيتين إلى الوقت المتبقي.</p>
          <Button onClick={startGame} size="lg">
            ابدأ اللعبة
          </Button>
        </Card>
      ) : gameStatus === "playing" ? (
        <>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {formatTime(timeRemaining)}
              </span>
              <span>النتيجة: {score}</span>
            </div>
            <Progress value={(timeRemaining / timeLimit) * 100} className="h-2" />
          </div>

          <Card className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {gameMode === "french-to-arabic" ? currentWord?.french : currentWord?.arabic}
              </h2>
              <div className="flex justify-center items-center gap-2">
                <Badge>{gameMode === "french-to-arabic" ? "فرنسي" : "عربي"}</Badge>
                <span className="text-muted-foreground">→</span>
                <Badge>{gameMode === "french-to-arabic" ? "عربي" : "فرنسي"}</Badge>
              </div>
            </div>

            {feedback && (
              <div
                className={`mb-4 p-3 rounded-md text-center ${
                  feedback.correct ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                <div className="flex justify-center items-center gap-2">
                  {feedback.correct ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  <span>{feedback.message}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-3 text-lg"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!feedback}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>

          <div className="mt-4 flex justify-between items-center">
            <div>سلسلة الإجابات الصحيحة: {streak}</div>
            <div>أفضل سلسلة: {bestStreak}</div>
          </div>
        </>
      ) : (
        <Card className="p-6 text-center">
          <div className="mb-4">
            <Trophy size={64} className="mx-auto text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">انتهى الوقت!</h2>
          <p className="text-xl mb-4">النتيجة النهائية: {score}</p>
          <p className="mb-2">أفضل سلسلة إجابات صحيحة: {bestStreak}</p>

          {score >= 15 ? (
            <p className="mb-6 text-green-600 font-semibold">ممتاز! أداء رائع!</p>
          ) : score >= 10 ? (
            <p className="mb-6 text-blue-600 font-semibold">جيد جداً! استمر في التحسن!</p>
          ) : (
            <p className="mb-6 text-orange-600 font-semibold">حاول مرة أخرى لتحسين نتيجتك!</p>
          )}

          <Button onClick={resetGame}>محاولة جديدة</Button>
        </Card>
      )}
    </GameLayout>
  )
}

