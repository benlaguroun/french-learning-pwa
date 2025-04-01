"use client"

import { useState, useEffect } from "react"
import GameLayout from "@/components/games/game-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Clock } from "lucide-react"
import confetti from "canvas-confetti"

// Card data for the memory game
const CARD_SETS = {
  basic: [
    { id: 1, type: "french", content: "Bonjour", match: 2 },
    { id: 2, type: "arabic", content: "صباح الخير", match: 1 },
    { id: 3, type: "french", content: "Merci", match: 4 },
    { id: 4, type: "arabic", content: "شكراً", match: 3 },
    { id: 5, type: "french", content: "Au revoir", match: 6 },
    { id: 6, type: "arabic", content: "إلى اللقاء", match: 5 },
    { id: 7, type: "french", content: "S'il vous plaît", match: 8 },
    { id: 8, type: "arabic", content: "من فضلك", match: 7 },
    { id: 9, type: "french", content: "Oui", match: 10 },
    { id: 10, type: "arabic", content: "نعم", match: 9 },
    { id: 11, type: "french", content: "Non", match: 12 },
    { id: 12, type: "arabic", content: "لا", match: 11 },
  ],
  food: [
    { id: 1, type: "french", content: "Pain", match: 2 },
    { id: 2, type: "arabic", content: "خبز", match: 1 },
    { id: 3, type: "french", content: "Eau", match: 4 },
    { id: 4, type: "arabic", content: "ماء", match: 3 },
    { id: 5, type: "french", content: "Café", match: 6 },
    { id: 6, type: "arabic", content: "قهوة", match: 5 },
    { id: 7, type: "french", content: "Fromage", match: 8 },
    { id: 8, type: "arabic", content: "جبن", match: 7 },
    { id: 9, type: "french", content: "Pomme", match: 10 },
    { id: 10, type: "arabic", content: "تفاحة", match: 9 },
    { id: 11, type: "french", content: "Poulet", match: 12 },
    { id: 12, type: "arabic", content: "دجاج", match: 11 },
  ],
  travel: [
    { id: 1, type: "french", content: "Hôtel", match: 2 },
    { id: 2, type: "arabic", content: "فندق", match: 1 },
    { id: 3, type: "french", content: "Aéroport", match: 4 },
    { id: 4, type: "arabic", content: "مطار", match: 3 },
    { id: 5, type: "french", content: "Billet", match: 6 },
    { id: 6, type: "arabic", content: "تذكرة", match: 5 },
    { id: 7, type: "french", content: "Passeport", match: 8 },
    { id: 8, type: "arabic", content: "جواز سفر", match: 7 },
    { id: 9, type: "french", content: "Gare", match: 10 },
    { id: 10, type: "arabic", content: "محطة قطار", match: 9 },
    { id: 11, type: "french", content: "Taxi", match: 12 },
    { id: 12, type: "arabic", content: "سيارة أجرة", match: 11 },
  ],
}

interface MemoryCard {
  id: number
  type: string
  content: string
  match: number
  flipped: boolean
  matched: boolean
}

export default function MemoryGame() {
  const [category, setCategory] = useState("basic")
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialize or reset the game
  const initializeGame = () => {
    const cardSet = [...CARD_SETS[category as keyof typeof CARD_SETS]]
    const initializedCards = cardSet
      .map((card) => ({
        ...card,
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5)

    setCards(initializedCards)
    setFlippedCards([])
    setMatchedPairs([])
    setMoves(0)
    setGameComplete(false)
    setTimer(0)
    setIsPlaying(true)
  }

  // Initialize game on mount and category change
  useEffect(() => {
    initializeGame()
  }, [category])

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && !gameComplete) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, gameComplete])

  // Check for matches when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardId, secondCardId] = flippedCards
      const firstCard = cards.find((card) => card.id === firstCardId)
      const secondCard = cards.find((card) => card.id === secondCardId)

      if (firstCard && secondCard && firstCard.match === secondCard.id) {
        // Match found
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCardId || card.id === secondCardId ? { ...card, matched: true } : card,
          ),
        )
        setMatchedPairs((prev) => [...prev, firstCardId, secondCardId])
        setFlippedCards([])
      } else {
        // No match, flip cards back after delay
        setTimeout(() => {
          setFlippedCards([])
        }, 1000)
      }

      setMoves((prevMoves) => prevMoves + 1)
    }
  }, [flippedCards, cards])

  // Check if game is complete
  useEffect(() => {
    if (matchedPairs.length === cards.length && cards.length > 0) {
      setGameComplete(true)
      setIsPlaying(false)

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }, [matchedPairs, cards])

  const handleCardClick = (id: number) => {
    // Prevent clicking if already two cards are flipped or card is already matched/flipped
    const clickedCard = cards.find((card) => card.id === id)
    if (flippedCards.length === 2 || flippedCards.includes(id) || clickedCard?.matched) {
      return
    }

    // Flip the card
    setFlippedCards((prev) => [...prev, id])
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Function to render card content with proper direction
  const renderCardContent = (card: MemoryCard) => {
    if (card.type === "french") {
      // Use LRM (Left-to-Right Mark) for French text
      return <span className="french-text">{"\u200E" + card.content}</span>
    } else {
      // Use RLM (Right-to-Left Mark) for Arabic text
      return <span className="arabic-text">{"\u200F" + card.content}</span>
    }
  }

  return (
    <GameLayout
      title="لعبة الذاكرة"
      description="تذكر وطابق أزواج الكلمات الفرنسية والعربية"
      instructions="انقر على البطاقات لقلبها وحاول مطابقة الكلمات الفرنسية مع ترجماتها العربية. اجمع كل الأزواج لإكمال اللعبة."
    >
      <div className="flex flex-row-reverse justify-between items-center mb-4">
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

      <div className="flex flex-row-reverse justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{formatTime(timer)}</span>
        </div>
        <div>الحركات: {moves}</div>
      </div>

      {gameComplete ? (
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">أحسنت!</h2>
          <p className="mb-2">لقد أكملت اللعبة في {moves} حركة</p>
          <p className="mb-4">الوقت المستغرق: {formatTime(timer)}</p>
          <Button onClick={initializeGame}>العب مرة أخرى</Button>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cards.map((card) => (
            <div key={card.id} className="aspect-[3/4] cursor-pointer" onClick={() => handleCardClick(card.id)}>
              <div
                className={`h-full w-full relative ${flippedCards.includes(card.id) || card.matched ? "flipped" : ""}`}
              >
                {/* Card Back */}
                <Card className="card-face card-back absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground font-bold text-xl">
                  ?
                </Card>

                {/* Card Front */}
                <Card
                  className={`card-face card-front absolute inset-0 flex items-center justify-center p-2 ${
                    card.type === "french" ? "bg-blue-50" : "bg-green-50"
                  } ${card.matched ? "bg-opacity-50" : ""}`}
                >
                  {renderCardContent(card)}
                </Card>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx global>{`
        .card-face {
          backface-visibility: hidden;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .card-back {
          transform: rotateY(0deg);
        }
        
        .card-front {
          transform: rotateY(180deg);
        }
        
        .flipped .card-back {
          transform: rotateY(180deg);
        }
        
        .flipped .card-front {
          transform: rotateY(0deg);
        }
        
        .french-text {
          direction: ltr;
          unicode-bidi: isolate;
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        
        .arabic-text {
          direction: rtl;
          unicode-bidi: isolate;
          display: inline-block;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </GameLayout>
  )
}

