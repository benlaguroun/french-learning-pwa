"use client"

import { useState, useEffect } from "react"
import GameLayout from "@/components/games/game-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, AlertCircle, CheckCircle } from "lucide-react"
import confetti from "canvas-confetti"

// Word sets for the hangman game
const WORD_SETS = {
  basic: [
    { word: "BONJOUR", hint: "تحية صباحية" },
    { word: "MERCI", hint: "كلمة شكر" },
    { word: "SALUT", hint: "تحية غير رسمية" },
    { word: "FAMILLE", hint: "الأب والأم والأطفال" },
    { word: "MAISON", hint: "مكان للعيش" },
    { word: "ÉCOLE", hint: "مكان للتعلم" },
    { word: "AMOUR", hint: "شعور قوي بالمودة" },
    { word: "CHAT", hint: "حيوان أليف يموء" },
  ],
  food: [
    { word: "PAIN", hint: "يؤكل مع وجبات الطعام" },
    { word: "FROMAGE", hint: "منتج ألبان فرنسي شهير" },
    { word: "CROISSANT", hint: "معجنات فرنسية على شكل هلال" },
    { word: "BAGUETTE", hint: "خبز فرنسي طويل" },
    { word: "CAFÉ", hint: "مشروب ساخن منبه" },
    { word: "CHOCOLAT", hint: "حلوى بنية اللون" },
    { word: "SOUPE", hint: "طبق سائل دافئ" },
    { word: "POULET", hint: "لحم طائر منزلي" },
  ],
  travel: [
    { word: "PARIS", hint: "عاصمة فرنسا" },
    { word: "HÔTEL", hint: "مكان للإقامة أثناء السفر" },
    { word: "PLAGE", hint: "مكان رملي بجانب البحر" },
    { word: "MUSÉE", hint: "مكان لعرض الفن والتاريخ" },
    { word: "AVION", hint: "وسيلة نقل جوية" },
    { word: "TRAIN", hint: "وسيلة نقل على القضبان" },
    { word: "PASSEPORT", hint: "وثيقة مطلوبة للسفر الدولي" },
    { word: "VALISE", hint: "حقيبة للسفر" },
  ],
}

export default function HangmanGame() {
  const [category, setCategory] = useState("basic")
  const [word, setWord] = useState("")
  const [hint, setHint] = useState("")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing")

  const maxWrongGuesses = 6

  // French alphabet without accents
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  // Initialize or reset the game
  const initializeGame = () => {
    const wordSet = WORD_SETS[category as keyof typeof WORD_SETS]
    const randomIndex = Math.floor(Math.random() * wordSet.length)
    const selectedWord = wordSet[randomIndex]

    setWord(selectedWord.word)
    setHint(selectedWord.hint)
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus("playing")
  }

  // Initialize game on mount and category change
  useEffect(() => {
    initializeGame()
  }, [category])

  // Check if player has won
  useEffect(() => {
    if (word && gameStatus === "playing") {
      const hasWon = [...word].every((letter) => guessedLetters.includes(letter))
      if (hasWon) {
        setGameStatus("won")
        // Trigger confetti effect
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }
  }, [word, guessedLetters, gameStatus])

  // Handle letter guess
  const handleLetterGuess = (letter: string) => {
    if (gameStatus !== "playing" || guessedLetters.includes(letter)) {
      return
    }

    const newGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newGuessedLetters)

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1
      setWrongGuesses(newWrongGuesses)

      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus("lost")
      }
    }
  }

  // Render the word with blanks for unguessed letters
  const renderWord = () => {
    return [...word].map((letter, index) => (
      <span key={index} className="inline-block mx-1 text-2xl font-bold">
        {guessedLetters.includes(letter) || gameStatus === "lost" ? letter : "_"}
      </span>
    ))
  }

  // Render the hangman figure
  const renderHangman = () => {
    return (
      <div className="w-40 h-40 mx-auto relative border-b-2 border-gray-800">
        {/* Gallows */}
        <div className="absolute top-0 left-0 w-1 h-40 bg-gray-800"></div>
        <div className="absolute top-0 left-0 w-20 h-1 bg-gray-800"></div>
        <div className="absolute top-0 left-20 w-1 h-8 bg-gray-800"></div>

        {/* Head */}
        {wrongGuesses >= 1 && (
          <div className="absolute top-8 left-16 w-8 h-8 rounded-full border-2 border-gray-800"></div>
        )}

        {/* Body */}
        {wrongGuesses >= 2 && <div className="absolute top-16 left-20 w-1 h-12 bg-gray-800"></div>}

        {/* Left arm */}
        {wrongGuesses >= 3 && (
          <div className="absolute top-18 left-14 w-6 h-1 bg-gray-800 rotate-[-45deg] origin-right"></div>
        )}

        {/* Right arm */}
        {wrongGuesses >= 4 && (
          <div className="absolute top-18 left-20 w-6 h-1 bg-gray-800 rotate-[45deg] origin-left"></div>
        )}

        {/* Left leg */}
        {wrongGuesses >= 5 && (
          <div className="absolute top-28 left-16 w-6 h-1 bg-gray-800 rotate-[45deg] origin-right"></div>
        )}

        {/* Right leg */}
        {wrongGuesses >= 6 && (
          <div className="absolute top-28 left-20 w-6 h-1 bg-gray-800 rotate-[-45deg] origin-left"></div>
        )}
      </div>
    )
  }

  return (
    <GameLayout
      title="لعبة الشنق"
      description="خمن الكلمة الفرنسية قبل اكتمال الرسم"
      instructions="انقر على الحروف لتخمين الكلمة. كل حرف خاطئ يضيف جزءًا إلى رسم الشنق. اكتشف الكلمة قبل اكتمال الرسم."
    >
      <div className="flex flex-row-reverse justify-between items-center mb-4">
        <Button onClick={initializeGame} variant="outline" className="flex items-center gap-2">
          <RefreshCw size={16} />
          <span>كلمة جديدة</span>
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
            variant={category === "food" ? "default" : "outline"}
            onClick={() => setCategory("food")}
            className="cursor-pointer"
          >
            طعام
          </Badge>
          <Badge
            variant={category === "travel" ? "default" : "outline"}
            onClick={() => setCategory("travel")}
            className="cursor-pointer"
          >
            سفر
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 flex flex-col items-center justify-center">
          {renderHangman()}
          <div className="mt-4 text-center">
            <p style={{ direction: "rtl" }}>
              التخمينات الخاطئة: {wrongGuesses} / {maxWrongGuesses}
            </p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold mb-2" style={{ direction: "rtl" }}>
              التلميح:
            </h3>
            <p className="text-muted-foreground" style={{ direction: "rtl" }}>
              {hint}
            </p>
          </div>

          <div className="text-center mb-6 min-h-16 flex items-center justify-center">
            {gameStatus === "won" ? (
              <div className="flex items-center text-green-600 gap-2" style={{ direction: "rtl" }}>
                <CheckCircle size={24} />
                <span className="text-xl font-bold">أحسنت! لقد فزت!</span>
              </div>
            ) : gameStatus === "lost" ? (
              <div className="flex items-center text-red-600 gap-2" style={{ direction: "rtl" }}>
                <AlertCircle size={24} />
                <span className="text-xl font-bold">للأسف خسرت. الكلمة كانت:</span>
                <span className="text-xl font-bold" style={{ direction: "ltr" }}>
                  {word}
                </span>
              </div>
            ) : (
              <div className="text-2xl" style={{ direction: "ltr" }}>
                {renderWord()}
              </div>
            )}
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-9 gap-2">
            {alphabet.map((letter) => (
              <Button
                key={letter}
                variant={
                  !guessedLetters.includes(letter) ? "outline" : word.includes(letter) ? "default" : "destructive"
                }
                className="w-full h-10"
                disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                onClick={() => handleLetterGuess(letter)}
              >
                {letter}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </GameLayout>
  )
}

