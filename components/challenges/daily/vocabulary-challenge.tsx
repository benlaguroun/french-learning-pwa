"use client"

import { useState } from "react"
import { Check, X, Volume2 } from "lucide-react"
import { ChallengeProgress } from "../layout/challenge-progress"
import { ChallengeNavigation } from "../layout/challenge-navigation"

interface VocabularyItem {
  french: string
  arabic: string
  example: string
  arabicExample: string
  category: string
}

interface VocabularyChallengeProps {
  vocabularyData: VocabularyItem[]
}

export function VocabularyChallenge({ vocabularyData }: VocabularyChallengeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [completed, setCompleted] = useState<number[]>([])
  const [incorrect, setIncorrect] = useState<number[]>([])

  const handleNext = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev + 1) % vocabularyData.length)
  }

  const handlePrevious = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev - 1 + vocabularyData.length) % vocabularyData.length)
  }

  const markAsCompleted = () => {
    if (!completed.includes(currentIndex)) {
      setCompleted([...completed, currentIndex])
    }
    if (incorrect.includes(currentIndex)) {
      setIncorrect(incorrect.filter((idx) => idx !== currentIndex))
    }
    handleNext()
  }

  const markAsIncorrect = () => {
    if (!incorrect.includes(currentIndex)) {
      setIncorrect([...incorrect, currentIndex])
    }
    handleNext()
  }

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "fr-FR"
    window.speechSynthesis.speak(utterance)
  }

  const currentWord = vocabularyData[currentIndex]
  const progress = Math.round((completed.length / vocabularyData.length) * 100)

  return (
    <>
      <ChallengeProgress progress={progress} />

      {/* Vocabulary card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-1">
            <span className="mr-2">{currentWord.category.split(" / ")[0]}</span>
            <span lang="ar" dir="rtl">
              {currentWord.category.split(" / ")[1]}
            </span>
          </div>

          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">{currentWord.french}</h2>
            <button
              onClick={() => playAudio(currentWord.french)}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
            >
              <Volume2 className="h-5 w-5" />
            </button>
          </div>

          <p className="text-xl text-right mb-4" lang="ar" dir="rtl">
            {showAnswer ? currentWord.arabic : "?????"}
          </p>

          {showAnswer && (
            <div className="mt-4 border-t pt-4">
              <p className="mb-2 text-gray-700">{currentWord.example}</p>
              <p className="text-right text-gray-700" lang="ar" dir="rtl">
                {currentWord.arabicExample}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <span className="mr-2">Afficher la traduction</span>
              <span lang="ar" dir="rtl">
                إظهار الترجمة
              </span>
            </button>
          ) : (
            <div className="flex w-full space-x-4">
              <button
                onClick={markAsIncorrect}
                className="flex-1 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 flex items-center justify-center"
              >
                <X className="h-5 w-5 mr-1" />
                <span className="mr-2">Je ne savais pas</span>
                <span lang="ar" dir="rtl">
                  لم أكن أعرف
                </span>
              </button>
              <button
                onClick={markAsCompleted}
                className="flex-1 py-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200 flex items-center justify-center"
              >
                <Check className="h-5 w-5 mr-1" />
                <span className="mr-2">Je savais</span>
                <span lang="ar" dir="rtl">
                  كنت أعرف
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <ChallengeNavigation onPrevious={handlePrevious} onNext={handleNext} />

      {/* Review section */}
      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">
          <span className="block mb-1 text-right" lang="ar" dir="rtl">
            مراجعة المفردات
          </span>
          <span className="block">Révision du Vocabulaire</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {vocabularyData.map((word, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setShowAnswer(false)
              }}
              className={`p-3 rounded-md text-left ${
                completed.includes(index)
                  ? "bg-green-100 border border-green-300"
                  : incorrect.includes(index)
                    ? "bg-red-100 border border-red-300"
                    : "bg-gray-100 border border-gray-300"
              }`}
            >
              <div className="text-sm font-medium">{word.french}</div>
              {(completed.includes(index) || incorrect.includes(index)) && (
                <div className="text-xs text-right mt-1" lang="ar" dir="rtl">
                  {word.arabic}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

