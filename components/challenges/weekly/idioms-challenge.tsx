"use client"

import { useState } from "react"
import { Volume2, Check, X, HelpCircle } from "lucide-react"
import { ChallengeProgress } from "../layout/challenge-progress"
import { ChallengeNavigation } from "../layout/challenge-navigation"

interface IdiomItem {
  french: string
  literal: string
  literalArabic: string
  meaning: string
  meaningArabic: string
  example: string
  exampleArabic: string
}

interface IdiomsChallengeProps {
  idiomsData: IdiomItem[]
}

export function IdiomsChallenge({ idiomsData }: IdiomsChallengeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)
  const [showExample, setShowExample] = useState(false)
  const [completed, setCompleted] = useState<number[]>([])
  const [incorrect, setIncorrect] = useState<number[]>([])

  const handleNext = () => {
    setShowMeaning(false)
    setShowExample(false)
    setCurrentIndex((prev) => (prev + 1) % idiomsData.length)
  }

  const handlePrevious = () => {
    setShowMeaning(false)
    setShowExample(false)
    setCurrentIndex((prev) => (prev - 1 + idiomsData.length) % idiomsData.length)
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

  const currentIdiom = idiomsData[currentIndex]
  const progress = Math.round((completed.length / idiomsData.length) * 100)

  return (
    <>
      <ChallengeProgress progress={progress} colorClass="bg-purple-600" />

      {/* Idiom card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{currentIdiom.french}</h2>
            <button
              onClick={() => playAudio(currentIdiom.french)}
              className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
            >
              <Volume2 className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500 mr-2">Sens littéral:</span>
              <span className="text-sm">{currentIdiom.literal}</span>
            </div>
            <div className="flex items-center text-right">
              <span className="text-sm text-gray-500 ml-2" lang="ar" dir="rtl">
                المعنى الحرفي:
              </span>
              <span className="text-sm" lang="ar" dir="rtl">
                {currentIdiom.literalArabic}
              </span>
            </div>
          </div>

          {showMeaning && (
            <div className="mb-4 p-4 bg-purple-50 rounded-md">
              <div className="mb-2">
                <span className="text-sm font-medium text-purple-700 mr-2">Sens réel:</span>
                <span>{currentIdiom.meaning}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-purple-700 ml-2" lang="ar" dir="rtl">
                  المعنى الحقيقي:
                </span>
                <span lang="ar" dir="rtl">
                  {currentIdiom.meaningArabic}
                </span>
              </div>
            </div>
          )}

          {showExample && (
            <div className="mb-4 p-4 bg-blue-50 rounded-md">
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-700 mr-2">Exemple:</span>
                <span>{currentIdiom.example}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-blue-700 ml-2" lang="ar" dir="rtl">
                  مثال:
                </span>
                <span lang="ar" dir="rtl">
                  {currentIdiom.exampleArabic}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setShowMeaning(!showMeaning)}
            className={`py-2 px-4 rounded-md flex items-center justify-center ${
              showMeaning ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600 hover:bg-purple-200"
            }`}
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            <span className="mr-2">Afficher le sens</span>
            <span lang="ar" dir="rtl">
              إظهار المعنى
            </span>
          </button>

          <button
            onClick={() => setShowExample(!showExample)}
            className={`py-2 px-4 rounded-md flex items-center justify-center ${
              showExample ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            <span className="mr-2">Afficher l'exemple</span>
            <span lang="ar" dir="rtl">
              إظهار المثال
            </span>
          </button>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={markAsIncorrect}
            className="flex-1 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 flex items-center justify-center"
          >
            <X className="h-5 w-5 mr-1" />
            <span className="mr-2">Difficile</span>
            <span lang="ar" dir="rtl">
              صعب
            </span>
          </button>
          <button
            onClick={markAsCompleted}
            className="flex-1 py-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200 flex items-center justify-center"
          >
            <Check className="h-5 w-5 mr-1" />
            <span className="mr-2">Compris</span>
            <span lang="ar" dir="rtl">
              فهمت
            </span>
          </button>
        </div>
      </div>

      <ChallengeNavigation onPrevious={handlePrevious} onNext={handleNext} />

      {/* Review section */}
      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">
          <span className="block mb-1 text-right" lang="ar" dir="rtl">
            مراجعة التعبيرات
          </span>
          <span className="block">Révision des Expressions</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {idiomsData.map((idiom, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setShowMeaning(false)
                setShowExample(false)
              }}
              className={`p-3 rounded-md text-left ${
                completed.includes(index)
                  ? "bg-green-100 border border-green-300"
                  : incorrect.includes(index)
                    ? "bg-red-100 border border-red-300"
                    : "bg-gray-100 border border-gray-300"
              }`}
            >
              <div className="text-sm font-medium">{idiom.french}</div>
              {(completed.includes(index) || incorrect.includes(index)) && (
                <div className="text-xs mt-1">{idiom.meaning}</div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

