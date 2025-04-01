"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Confetti } from "@/components/confetti"
import { Trophy, RotateCcw, Clock } from "lucide-react"

type MemoryCard = {
  id: number
  type: "image" | "word"
  content: string
  french: string
  flipped: boolean
  matched: boolean
}

export default function MemoryMatchPage() {
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [gameCompleted, setGameCompleted] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [showConfetti, setShowConfetti] = useState<boolean>(false)

  // Initialize game
  useEffect(() => {
    initializeGame()
  }, [difficulty])

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    } else {
      if (interval) clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [gameStarted, gameCompleted])

  // Check for game completion
  useEffect(() => {
    if (matchedPairs === getCardPairsCount() && gameStarted) {
      setGameCompleted(true)
      setShowConfetti(true)

      // Hide confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
    }
  }, [matchedPairs, gameStarted])

  function getCardPairsCount() {
    switch (difficulty) {
      case "easy":
        return 6
      case "medium":
        return 8
      case "hard":
        return 12
      default:
        return 6
    }
  }

  function initializeGame() {
    const pairsCount = getCardPairsCount()
    const selectedPairs = [...memoryCardPairs].sort(() => Math.random() - 0.5).slice(0, pairsCount)

    const gameCards: MemoryCard[] = []

    selectedPairs.forEach((pair, index) => {
      // Image card
      gameCards.push({
        id: index * 2,
        type: "image",
        content: pair.image,
        french: pair.french,
        flipped: false,
        matched: false,
      })

      // Word card
      gameCards.push({
        id: index * 2 + 1,
        type: "word",
        content: pair.french,
        french: pair.french,
        flipped: false,
        matched: false,
      })
    })

    // Shuffle cards
    setCards(gameCards.sort(() => Math.random() - 0.5))
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setTimer(0)
    setGameCompleted(false)
  }

  function handleCardClick(id: number) {
    // Ignore if already flipped or if two cards are already flipped
    if (cards.find((card) => card.id === id)?.flipped || flippedCards.length >= 2 || gameCompleted) {
      return
    }

    // Flip the card
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? { ...card, flipped: true } : card)))

    // Add to flipped cards
    setFlippedCards((prev) => [...prev, id])

    // If this is the second card, check for a match
    if (flippedCards.length === 1) {
      setMoves((prevMoves) => prevMoves + 1)

      const firstCardId = flippedCards[0]
      const firstCard = cards.find((card) => card.id === firstCardId)
      const secondCard = cards.find((card) => card.id === id)

      if (firstCard && secondCard && firstCard.french === secondCard.french) {
        // Match found
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => (card.id === firstCardId || card.id === id ? { ...card, matched: true } : card)),
          )
          setMatchedPairs((prev) => prev + 1)
          setFlippedCards([])
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => (card.id === firstCardId || card.id === id ? { ...card, flipped: false } : card)),
          )
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  function handleRestart() {
    setGameStarted(false)
    setGameCompleted(false)
    setCards([])
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setTimer(0)
  }

  function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container px-4 py-6 md:py-10">
      <PageHeader title="لعبة الذاكرة" description="اختبر ذاكرتك بمطابقة الكلمات الفرنسية مع صورها" icon="🎮" />

      {!gameStarted ? (
        <div className="mx-auto max-w-md rounded-xl border p-6 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">اختر مستوى الصعوبة</h2>
          <div className="mb-6 space-y-3">
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={() => {
                setDifficulty("easy")
                setGameStarted(true)
              }}
            >
              سهل (6 أزواج)
            </Button>
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600"
              onClick={() => {
                setDifficulty("medium")
                setGameStarted(true)
              }}
            >
              متوسط (8 أزواج)
            </Button>
            <Button
              className="w-full bg-red-500 hover:bg-red-600"
              onClick={() => {
                setDifficulty("hard")
                setGameStarted(true)
              }}
            >
              صعب (12 زوج)
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">اختر المستوى المناسب لك وابدأ اللعب!</p>
        </div>
      ) : (
        <>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-muted/50 p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">{formatTime(timer)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">الحركات: {moves}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                الأزواج: {matchedPairs}/{getCardPairsCount()}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={handleRestart}>
              <RotateCcw className="mr-2 h-4 w-4" />
              إعادة اللعبة
            </Button>
          </div>

          <div
            className={`grid gap-4 ${
              difficulty === "easy"
                ? "grid-cols-3 sm:grid-cols-4"
                : difficulty === "medium"
                  ? "grid-cols-3 sm:grid-cols-4"
                  : "grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
            }`}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`aspect-square cursor-pointer rounded-xl transition-all duration-300 ${
                  card.flipped ? "rotate-y-180" : ""
                } ${card.matched ? "opacity-70" : ""}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="relative h-full w-full transform-style-3d">
                  {/* Card Back */}
                  <div
                    className={`absolute h-full w-full rounded-xl border-2 border-blue-300 bg-blue-100 p-4 text-center backface-hidden ${
                      card.flipped ? "hidden" : "flex"
                    } items-center justify-center dark:border-blue-800 dark:bg-blue-950`}
                  >
                    <span className="text-3xl">?</span>
                  </div>

                  {/* Card Front */}
                  <div
                    className={`absolute h-full w-full rounded-xl border-2 border-blue-300 bg-white p-2 backface-hidden rotate-y-180 ${
                      card.flipped ? "flex" : "hidden"
                    } items-center justify-center dark:border-blue-800 dark:bg-gray-900`}
                  >
                    {card.type === "image" ? (
                      <div className="text-4xl">{card.content}</div>
                    ) : (
                      <div className="text-center text-lg font-medium">{card.content}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {gameCompleted && (
            <div className="mt-8 rounded-xl border bg-green-50 p-6 text-center shadow-md dark:bg-green-950">
              <Trophy className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
              <h2 className="mb-2 text-2xl font-bold">تهانينا!</h2>
              <p className="mb-4 text-lg">لقد أكملت اللعبة بنجاح!</p>
              <div className="mb-6 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800">
                  <p className="text-sm text-muted-foreground">الوقت</p>
                  <p className="text-xl font-bold">{formatTime(timer)}</p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800">
                  <p className="text-sm text-muted-foreground">الحركات</p>
                  <p className="text-xl font-bold">{moves}</p>
                </div>
              </div>
              <Button onClick={handleRestart}>العب مرة أخرى</Button>
            </div>
          )}
        </>
      )}

      {showConfetti && <Confetti />}
    </div>
  )
}

const memoryCardPairs = [
  { french: "Chat", image: "🐱", arabic: "قط" },
  { french: "Chien", image: "🐶", arabic: "كلب" },
  { french: "Pomme", image: "🍎", arabic: "تفاحة" },
  { french: "Banane", image: "🍌", arabic: "موزة" },
  { french: "Maison", image: "🏠", arabic: "منزل" },
  { french: "Voiture", image: "🚗", arabic: "سيارة" },
  { french: "Soleil", image: "☀️", arabic: "شمس" },
  { french: "Lune", image: "🌙", arabic: "قمر" },
  { french: "Fleur", image: "🌸", arabic: "زهرة" },
  { french: "Arbre", image: "🌳", arabic: "شجرة" },
  { french: "Poisson", image: "🐟", arabic: "سمكة" },
  { french: "Oiseau", image: "🐦", arabic: "طائر" },
  { french: "Livre", image: "📚", arabic: "كتاب" },
  { french: "École", image: "🏫", arabic: "مدرسة" },
  { french: "Ballon", image: "⚽", arabic: "كرة" },
  { french: "Étoile", image: "⭐", arabic: "نجمة" },
]

