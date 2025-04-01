// Common types for the application
export interface LessonScore {
  correct: number
  total: number
  percentage: number
  passed: boolean
  completed: boolean
  attempts: number
  lastAttempt: string
}

export interface UserProgress {
  grammarLessons: Record<string, LessonScore>
  textLessons: Record<string, LessonScore>
  vocabularyProgress: Record<string, number>
  pronunciationAccuracy: Record<string, number>
  overallProgress: number
}

// Question types for exercises
export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: string
  hint?: string
  explanation?: string
  points: number
}

export interface CompletionQuestion {
  id: string
  text: string
  blanks: {
    id: string
    correctAnswer: string
    points: number
  }[]
}

export interface AudioQuestion {
  id: string
  audioUrl: string
  question: string
  options?: string[]
  correctAnswer: string
  points: number
}

export interface MatchingQuestion {
  id: string
  pairs: Array<{
    left: string
    right: string
  }>
  points: number
}

