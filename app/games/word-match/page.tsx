"use client"

import { useState, useEffect } from "react"
import GameLayout from "@/components/games/game-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw } from "lucide-react"
import confetti from "canvas-confetti"

// Word pairs for the game (French - Arabic)
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
  ],
  food: [
    { french: "Pain", arabic: "خبز" },
    { french: "Eau", arabic: "ماء" },
    { french: "Café", arabic: "قهوة" },
    { french: "Fromage", arabic: "جبن" },
    { french: "Pomme", arabic: "تفاحة" },
    { french: "Poulet", arabic: "دجاج" },
    { french: "Poisson", arabic: "سمك" },
    { french: "Légumes", arabic: "خضروات" },
  ],
  travel: [
    { french: "Hôtel", arabic: "فندق" },
    { french: "Aéroport", arabic: "مطار" },
    { french: "Billet", arabic: "تذكرة" },
    { french: "Passeport", arabic: "جواز سفر" },
    { french: "Gare", arabic: "محطة قطار" },
    { french: "Taxi", arabic: "سيارة أجرة" },
    { french: "Plage", arabic: "شاطئ" },
    { french: "Musée", arabic: "متحف" },
  ],
}

export default function WordMatchGame() {
  const [category, setCategory] = useState("basic")
  const [frenchWords, setFrenchWords] = useState<string[]>([])
  const [arabicWords, setArabicWords] = useState<string[]>([])
  const [selectedFrench, setSelectedFrench] = useState<string | null>(null)
  const [selectedArabic, setSelectedArabic] = useState<string | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<string[]>([])
  const [attempts, setAttempts] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  // Initialize or reset the game
  const initializeGame = () => {
    const wordPairs = [...WORD_SETS[category as keyof typeof WORD_SETS]]
    const shuffledFrench = wordPairs.map((pair) => pair.french).sort(() => Math.random() - 0.5)
    const shuffledArabic = wordPairs.map((pair) => pair.arabic).sort(() => Math.random() - 0.5)

    setFrenchWords(shuffledFrench)
    setArabicWords(shuffledArabic)
    setSelectedFrench(null)
    setSelectedArabic(null)
    setMatchedPairs([])
    setAttempts(0)
    setGameComplete(false)
  }

  // Initialize game on mount and category change
  useEffect(() => {
    initializeGame()
  }, [category])

  // Check if selected words match
  useEffect(() => {
    if (selectedFrench && selectedArabic) {
      const matchingPair = WORD_SETS[category as keyof typeof WORD_SETS].find(
        (pair) => pair.french === selectedFrench && pair.arabic === selectedArabic,
      )

      setAttempts((prev) => prev + 1)

      if (matchingPair) {
        // Correct match
        setMatchedPairs((prev) => [...prev, selectedFrench])

        // Check if game is complete
        if (matchedPairs.length + 1 === WORD_SETS[category as keyof typeof WORD_SETS].length) {
          setGameComplete(true)
          // Trigger confetti effect
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })
        }
      }

      // Reset selections after a short delay
      setTimeout(() => {
        setSelectedFrench(null)
        setSelectedArabic(null)
      }, 1000)
    }
  }, [selectedFrench, selectedArabic])

  const handleFrenchWordClick = (word: string) => {
    if (!selectedFrench && !matchedPairs.includes(word)) {
      setSelectedFrench(word)
    }
  }

  const handleArabicWordClick = (word: string) => {
    if (!selectedArabic) {
      setSelectedArabic(word)
    }
  }

  return (
    <GameLayout
      title="مطابقة الكلمات"
      description="اربط الكلمات الفرنسية بترجماتها العربية الصحيحة"
      instructions="انقر على كلمة فرنسية ثم انقر على ترجمتها العربية المناسبة. اجمع كل الأزواج لإكمال اللعبة."
    >
      <div className="flex justify-between items-center mb-4">
        <Button onClick={initializeGame} variant="outline" className="flex items-center gap-2">
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

      {gameComplete ? (
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">أحسنت!</h2>
          <p className="mb-4">لقد أكملت اللعبة في {attempts} محاولة</p>
          <Button onClick={initializeGame}>العب مرة أخرى</Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-3 text-right">الكلمات الفرنسية</h2>
            <div className="space-y-2">
              {frenchWords.map((word) => (
                <Card
                  key={word}
                  className={`p-3 cursor-pointer transition-all ${
                    matchedPairs.includes(word)
                      ? "bg-green-100 border-green-300"
                      : selectedFrench === word
                        ? "bg-blue-100 border-blue-300"
                        : "hover:bg-muted"
                  }`}
                  onClick={() => handleFrenchWordClick(word)}
                >
                  <p className="text-center font-medium">{word}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-3 text-right">الكلمات العربية</h2>
            <div className="space-y-2">
              {arabicWords.map((word) => {
                const matchedFrench = WORD_SETS[category as keyof typeof WORD_SETS].find(
                  (pair) => pair.arabic === word && matchedPairs.includes(pair.french),
                )

                return (
                  <Card
                    key={word}
                    className={`p-3 cursor-pointer transition-all ${
                      matchedFrench
                        ? "bg-green-100 border-green-300"
                        : selectedArabic === word
                          ? "bg-blue-100 border-blue-300"
                          : "hover:bg-muted"
                    }`}
                    onClick={() => handleArabicWordClick(word)}
                  >
                    <p className="text-center font-medium text-right">{word}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <p>المحاولات: {attempts}</p>
        <p>
          الأزواج المطابقة: {matchedPairs.length} / {WORD_SETS[category as keyof typeof WORD_SETS].length}
        </p>
      </div>
    </GameLayout>
  )
}

