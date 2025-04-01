"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuestionFeedback } from "@/components/question-feedback"
import { cn } from "@/lib/utils"
import type { QuizQuestion as QuizQuestionType } from "@/lib/types"

interface QuizQuestionProps {
  question: QuizQuestionType
  onAnswer: (id: string, isCorrect: boolean, points: number) => void
  showFeedbackImmediately?: boolean
  disabled?: boolean
}

export function QuizQuestion({
  question,
  onAnswer,
  showFeedbackImmediately = true,
  disabled = false,
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
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

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="font-medium">{question.question}</p>
        {question.hint && <p className="text-sm text-muted-foreground">{question.hint}</p>}
      </div>

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
              showFeedback && selectedOption === option && !isCorrect && "bg-red-50 border-red-500 dark:bg-red-900/20",
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

