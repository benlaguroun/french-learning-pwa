"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuestionFeedback } from "@/components/question-feedback"
import { cn } from "@/lib/utils"
import { Volume2 } from "lucide-react"
import type { AudioQuestion as AudioQuestionType } from "@/lib/types"

interface AudioQuestionProps {
  question: AudioQuestionType
  onAnswer: (id: string, isCorrect: boolean, points: number) => void
  showFeedbackImmediately?: boolean
  disabled?: boolean
}

export function AudioQuestion({
  question,
  onAnswer,
  showFeedbackImmediately = true,
  disabled = false,
}: AudioQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const isCorrect = selectedOption === question.correctAnswer

  const handleOptionClick = (option: string) => {
    if (disabled || (selectedOption && showFeedbackImmediately)) return

    setSelectedOption(option)
    const correct = option === question.correctAnswer

    if (showFeedbackImmediately) {
      setShowFeedback(true)
    }

    onAnswer(question.id, correct, correct ? question.points : 0)
  }

  const handleCheckAnswer = () => {
    if (!selectedOption) return
    setShowFeedback(true)
  }

  const playAudio = () => {
    setIsPlaying(true)
    const audio = new Audio(question.audioUrl)
    audio.onended = () => {
      setIsPlaying(false)
    }
    audio.play().catch((err) => {
      console.error("Failed to play audio:", err)
      setIsPlaying(false)
    })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={playAudio}
            disabled={isPlaying || disabled}
          >
            <Volume2 className="h-4 w-4" />
            {isPlaying ? "جارِ التشغيل..." : "استمع"}
          </Button>
        </div>
        <p className="font-medium mt-2">{question.question}</p>
      </div>

      {question.options && (
        <div className="space-y-2">
          {question.options.map((option) => (
            <Button
              key={option}
              variant="outline"
              className={cn(
                "w-full justify-start",
                selectedOption === option && "border-2 border-primary",
                showFeedback &&
                  selectedOption === option &&
                  isCorrect &&
                  "bg-green-50 border-green-500 dark:bg-green-900/20",
                showFeedback &&
                  selectedOption === option &&
                  !isCorrect &&
                  "bg-red-50 border-red-500 dark:bg-red-900/20",
                showFeedback &&
                  option === question.correctAnswer &&
                  selectedOption !== option &&
                  "bg-green-50 border-green-500 dark:bg-green-900/20",
              )}
              onClick={() => handleOptionClick(option)}
              disabled={disabled || (!!selectedOption && showFeedbackImmediately)}
            >
              {option}
            </Button>
          ))}
        </div>
      )}

      {!showFeedbackImmediately && selectedOption && !showFeedback && (
        <Button onClick={handleCheckAnswer}>تحقق من الإجابة</Button>
      )}

      {showFeedback && (
        <QuestionFeedback
          isCorrect={isCorrect}
          message={isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة"}
          explanation={question.explanation}
        />
      )}
    </div>
  )
}

