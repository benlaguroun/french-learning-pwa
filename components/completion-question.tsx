"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { QuestionFeedback } from "@/components/question-feedback"
import type { CompletionQuestion as CompletionQuestionType } from "@/lib/types"
import type { JSX } from "react/jsx-runtime"

interface CompletionQuestionProps {
  question: CompletionQuestionType
  onAnswer: (id: string, isCorrect: boolean, earnedPoints: number, totalPoints: number) => void
  showFeedbackImmediately?: boolean
  disabled?: boolean
}

export function CompletionQuestion({
  question,
  onAnswer,
  showFeedbackImmediately = true,
  disabled = false,
}: CompletionQuestionProps) {
  // Initialize answers as empty strings for each blank
  const [answers, setAnswers] = useState<Record<string, string>>(
    Object.fromEntries(question.blanks.map((blank) => [blank.id, ""])),
  )
  const [evaluated, setEvaluated] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})

  // Calculate total available points
  const totalPoints = question.blanks.reduce((sum, blank) => sum + blank.points, 0)

  const handleInputChange = (blankId: string, value: string) => {
    if (disabled || evaluated) return

    setAnswers((prev) => ({
      ...prev,
      [blankId]: value,
    }))
  }

  const evaluateAnswers = () => {
    // For each blank, check if the answer is correct
    const newResults: Record<string, boolean> = {}
    let earnedPoints = 0

    question.blanks.forEach((blank) => {
      // Case insensitive comparison
      const isCorrect = answers[blank.id].trim().toLowerCase() === blank.correctAnswer.toLowerCase()
      newResults[blank.id] = isCorrect

      if (isCorrect) {
        earnedPoints += blank.points
      }
    })

    setResults(newResults)
    setEvaluated(true)

    // Calculate the overall correctness (all answers must be correct)
    const isAllCorrect = Object.values(newResults).every((result) => result)
    onAnswer(question.id, isAllCorrect, earnedPoints, totalPoints)
  }

  // If showFeedbackImmediately is true, evaluate answers as they change
  useEffect(() => {
    if (showFeedbackImmediately && Object.values(answers).every((answer) => answer.trim() !== "")) {
      evaluateAnswers()
    }
  }, [answers, showFeedbackImmediately])

  // Split the text and render inputs for blanks
  const renderText = () => {
    const parts = question.text.split(/\{\{\s*(\d+)\s*\}\}/g)
    const elements: JSX.Element[] = []

    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // Text part
        elements.push(<span key={i}>{parts[i]}</span>)
      } else {
        // Blank part
        const blankIndex = Number.parseInt(parts[i], 10) - 1
        const blank = question.blanks[blankIndex]
        if (!blank) continue

        elements.push(
          <Input
            key={i}
            className="inline-block w-24 md:w-32 mx-1"
            value={answers[blank.id]}
            onChange={(e) => handleInputChange(blank.id, e.target.value)}
            disabled={disabled || evaluated}
            status={evaluated ? (results[blank.id] ? "success" : "error") : undefined}
          />,
        )
      }
    }

    return elements
  }

  return (
    <div className="space-y-4">
      <div className="leading-relaxed text-lg mb-4">{renderText()}</div>

      {!showFeedbackImmediately && !evaluated && (
        <Button onClick={evaluateAnswers} disabled={disabled}>
          تحقق من الإجابة
        </Button>
      )}

      {evaluated && (
        <QuestionFeedback
          isCorrect={Object.values(results).every((result) => result)}
          message={Object.values(results).every((result) => result) ? "جميع الإجابات صحيحة!" : "بعض الإجابات غير صحيحة"}
        />
      )}
    </div>
  )
}

