import type { LessonScore } from "@/lib/types"

// Local storage keys
const LS_PREFIX = "french_learning_app"
const GRAMMAR_LESSONS_KEY = `${LS_PREFIX}_grammar_lessons`
const TEXT_LESSONS_KEY = `${LS_PREFIX}_text_lessons`
const USER_SETTINGS_KEY = `${LS_PREFIX}_user_settings`

// Minimum passing score
export const PASSING_SCORE = 70

// Grammar lesson service
export const grammarLessonService = {
  // Get lesson score
  getScore(lessonId: string | number): LessonScore | null {
    try {
      if (typeof window === "undefined") return null

      const storedLessons = localStorage.getItem(GRAMMAR_LESSONS_KEY)
      if (!storedLessons) return null

      const lessons = JSON.parse(storedLessons) as Record<string, LessonScore>
      return lessons[String(lessonId)] || null
    } catch (error) {
      console.error("Error getting grammar lesson score:", error)
      return null
    }
  },

  // Save lesson score
  saveScore(lessonId: string | number, score: LessonScore): void {
    try {
      if (typeof window === "undefined") return

      const storedLessons = localStorage.getItem(GRAMMAR_LESSONS_KEY)
      const lessons = storedLessons ? JSON.parse(storedLessons) : {}

      lessons[String(lessonId)] = score
      localStorage.setItem(GRAMMAR_LESSONS_KEY, JSON.stringify(lessons))
    } catch (error) {
      console.error("Error saving grammar lesson score:", error)
    }
  },

  // Check if lesson is unlocked
  isLessonUnlocked(lessonId: string | number): boolean {
    try {
      if (typeof window === "undefined") return false

      // First lesson is always unlocked
      if (Number(lessonId) === 1) return true

      // Previous lesson must be passed to unlock the current one
      const previousLessonId = Number(lessonId) - 1
      const previousScore = this.getScore(previousLessonId)

      return previousScore?.passed || false
    } catch (error) {
      console.error("Error checking if grammar lesson is unlocked:", error)
      return false
    }
  },

  // Get all lessons progress
  getAllLessonsProgress(): Record<string, LessonScore> {
    try {
      if (typeof window === "undefined") return {}

      const storedLessons = localStorage.getItem(GRAMMAR_LESSONS_KEY)
      return storedLessons ? JSON.parse(storedLessons) : {}
    } catch (error) {
      console.error("Error getting all grammar lessons progress:", error)
      return {}
    }
  },
}

// Text lesson service
export const textLessonService = {
  // Get lesson score
  getScore(lessonId: string | number): LessonScore | null {
    try {
      if (typeof window === "undefined") return null

      const storedLessons = localStorage.getItem(TEXT_LESSONS_KEY)
      if (!storedLessons) return null

      const lessons = JSON.parse(storedLessons) as Record<string, LessonScore>
      return lessons[String(lessonId)] || null
    } catch (error) {
      console.error("Error getting text lesson score:", error)
      return null
    }
  },

  // Save lesson score
  saveScore(lessonId: string | number, score: LessonScore): void {
    try {
      if (typeof window === "undefined") return

      const storedLessons = localStorage.getItem(TEXT_LESSONS_KEY)
      const lessons = storedLessons ? JSON.parse(storedLessons) : {}

      lessons[String(lessonId)] = score
      localStorage.setItem(TEXT_LESSONS_KEY, JSON.stringify(lessons))
    } catch (error) {
      console.error("Error saving text lesson score:", error)
    }
  },

  // Check if lesson is unlocked
  isLessonUnlocked(lessonId: string | number): boolean {
    try {
      if (typeof window === "undefined") return false

      // First lesson is always unlocked
      if (Number(lessonId) === 1) return true

      // Previous lesson must be passed to unlock the current one
      const previousLessonId = Number(lessonId) - 1
      const previousScore = this.getScore(previousLessonId)

      return previousScore?.passed || false
    } catch (error) {
      console.error("Error checking if text lesson is unlocked:", error)
      return false
    }
  },

  // Get all lessons progress
  getAllLessonsProgress(): Record<string, LessonScore> {
    try {
      if (typeof window === "undefined") return {}

      const storedLessons = localStorage.getItem(TEXT_LESSONS_KEY)
      return storedLessons ? JSON.parse(storedLessons) : {}
    } catch (error) {
      console.error("Error getting all text lessons progress:", error)
      return {}
    }
  },
}

// User settings service
export const userSettingsService = {
  // Get settings
  getSettings<T>(key: string, defaultValue: T): T {
    try {
      if (typeof window === "undefined") return defaultValue

      const storedSettings = localStorage.getItem(USER_SETTINGS_KEY)
      if (!storedSettings) return defaultValue

      const settings = JSON.parse(storedSettings)
      return settings[key] !== undefined ? settings[key] : defaultValue
    } catch (error) {
      console.error(`Error getting user settings for "${key}":`, error)
      return defaultValue
    }
  },

  // Save settings
  saveSettings<T>(key: string, value: T): void {
    try {
      if (typeof window === "undefined") return

      const storedSettings = localStorage.getItem(USER_SETTINGS_KEY)
      const settings = storedSettings ? JSON.parse(storedSettings) : {}

      settings[key] = value
      localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(settings))
    } catch (error) {
      console.error(`Error saving user settings for "${key}":`, error)
    }
  },
}

