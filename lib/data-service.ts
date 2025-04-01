// Types
export interface UserProgress {
  userId: string
  lessons: {
    [lessonId: string]: {
      completed: boolean
      score: number
      lastAccessed: string
    }
  }
  exercises: {
    [exerciseId: string]: {
      completed: boolean
      score: number
      lastAccessed: string
    }
  }
  syllables: {
    [syllable: string]: {
      attempts: number
      successRate: number
      lastPracticed: string
    }
  }
  overallProgress: number
}

export interface AudioRecording {
  userId: string
  syllable: string
  recordingUrl: string
  timestamp: string
  success: boolean
}

// Local storage keys
const USER_PROGRESS_KEY = "user_progress"
const AUDIO_RECORDINGS_KEY = "audio_recordings"

// Initialize user progress
export const initUserProgress = (userId: string): UserProgress => {
  const existingProgress = getUserProgress(userId)

  if (existingProgress) {
    return existingProgress
  }

  const newProgress: UserProgress = {
    userId,
    lessons: {},
    exercises: {},
    syllables: {},
    overallProgress: 0,
  }

  saveUserProgress(newProgress)
  return newProgress
}

// Get user progress from local storage
export const getUserProgress = (userId: string): UserProgress | null => {
  if (typeof window === "undefined") return null

  const progressData = localStorage.getItem(`${USER_PROGRESS_KEY}_${userId}`)

  if (!progressData) return null

  try {
    return JSON.parse(progressData) as UserProgress
  } catch (error) {
    console.error("Error parsing user progress:", error)
    return null
  }
}

// Save user progress to local storage
export const saveUserProgress = (progress: UserProgress): void => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(`${USER_PROGRESS_KEY}_${progress.userId}`, JSON.stringify(progress))
  } catch (error) {
    console.error("Error saving user progress:", error)
  }
}

// Update lesson progress
export const updateLessonProgress = (
  userId: string,
  lessonId: string,
  completed: boolean,
  score: number,
): UserProgress | null => {
  const progress = getUserProgress(userId)

  if (!progress) return null

  progress.lessons[lessonId] = {
    completed,
    score,
    lastAccessed: new Date().toISOString(),
  }

  // Calculate overall progress
  const totalLessons = Object.keys(progress.lessons).length
  const completedLessons = Object.values(progress.lessons).filter((lesson) => lesson.completed).length

  const totalExercises = Object.keys(progress.exercises).length
  const completedExercises = Object.values(progress.exercises).filter((exercise) => exercise.completed).length

  const totalItems = totalLessons + totalExercises
  const completedItems = completedLessons + completedExercises

  progress.overallProgress = totalItems > 0 ? completedItems / totalItems : 0

  saveUserProgress(progress)
  return progress
}

// Update exercise progress
export const updateExerciseProgress = (
  userId: string,
  exerciseId: string,
  completed: boolean,
  score: number,
): UserProgress | null => {
  const progress = getUserProgress(userId)

  if (!progress) return null

  progress.exercises[exerciseId] = {
    completed,
    score,
    lastAccessed: new Date().toISOString(),
  }

  // Calculate overall progress
  const totalLessons = Object.keys(progress.lessons).length
  const completedLessons = Object.values(progress.lessons).filter((lesson) => lesson.completed).length

  const totalExercises = Object.keys(progress.exercises).length
  const completedExercises = Object.values(progress.exercises).filter((exercise) => exercise.completed).length

  const totalItems = totalLessons + totalExercises
  const completedItems = completedLessons + completedExercises

  progress.overallProgress = totalItems > 0 ? completedItems / totalItems : 0

  saveUserProgress(progress)
  return progress
}

// Update syllable practice progress
export const updateSyllableProgress = (userId: string, syllable: string, success: boolean): UserProgress | null => {
  const progress = getUserProgress(userId)

  if (!progress) return null

  const syllableData = progress.syllables[syllable] || {
    attempts: 0,
    successRate: 0,
    lastPracticed: new Date().toISOString(),
  }

  syllableData.attempts += 1

  // Calculate new success rate
  const previousSuccesses = syllableData.successRate * (syllableData.attempts - 1)
  const newSuccesses = previousSuccesses + (success ? 1 : 0)
  syllableData.successRate = newSuccesses / syllableData.attempts

  syllableData.lastPracticed = new Date().toISOString()

  progress.syllables[syllable] = syllableData

  saveUserProgress(progress)
  return progress
}

// Store audio recording
export const storeAudioRecording = (
  userId: string,
  syllable: string,
  audioBlob: Blob,
  success: boolean,
): Promise<AudioRecording> => {
  return new Promise((resolve, reject) => {
    try {
      // In a real app, you would upload to a server or cloud storage
      // For this demo, we'll store a reference in local storage

      // Create a URL for the blob (this is temporary and will be lost on page refresh)
      const recordingUrl = URL.createObjectURL(audioBlob)

      const recording: AudioRecording = {
        userId,
        syllable,
        recordingUrl,
        timestamp: new Date().toISOString(),
        success,
      }

      // Get existing recordings
      const recordingsJson = localStorage.getItem(`${AUDIO_RECORDINGS_KEY}_${userId}`) || "[]"
      const recordings: AudioRecording[] = JSON.parse(recordingsJson)

      // Add new recording
      recordings.push(recording)

      // Save back to local storage
      localStorage.setItem(`${AUDIO_RECORDINGS_KEY}_${userId}`, JSON.stringify(recordings))

      // Update syllable progress
      updateSyllableProgress(userId, syllable, success)

      resolve(recording)
    } catch (error) {
      console.error("Error storing audio recording:", error)
      reject(error)
    }
  })
}

// Get user recordings
export const getUserRecordings = (userId: string): AudioRecording[] => {
  if (typeof window === "undefined") return []

  try {
    const recordingsJson = localStorage.getItem(`${AUDIO_RECORDINGS_KEY}_${userId}`) || "[]"
    return JSON.parse(recordingsJson) as AudioRecording[]
  } catch (error) {
    console.error("Error getting user recordings:", error)
    return []
  }
}

/**
 * Store audio recording with evaluation result
 * @param userId User identifier
 * @param text The text that was pronounced
 * @param audioBlob The recorded audio blob
 * @param isCorrect Whether the pronunciation was correct
 */
export async function storePronunciationRecording(
  userId: string,
  text: string,
  audioBlob: Blob,
  isCorrect: boolean,
): Promise<void> {
  try {
    // In a real app, this would upload to a server or database
    console.log(`Storing audio recording for user ${userId}:`, {
      text,
      size: `${Math.round(audioBlob.size / 1024)} KB`,
      isCorrect,
    })

    // Store in localStorage for demo purposes
    const recordings = JSON.parse(localStorage.getItem("pronunciationRecordings") || "[]")
    recordings.push({
      id: `rec_${Date.now()}`,
      userId,
      text,
      timestamp: new Date().toISOString(),
      isCorrect,
      // We don't store the actual blob in localStorage as it would be too large
      // In a real app, you'd upload this to cloud storage
    })

    localStorage.setItem("pronunciationRecordings", JSON.stringify(recordings))

    // Track statistics
    const stats = JSON.parse(localStorage.getItem("pronunciationStats") || "{}")
    if (!stats[userId]) {
      stats[userId] = { total: 0, correct: 0 }
    }

    stats[userId].total += 1
    if (isCorrect) {
      stats[userId].correct += 1
    }

    localStorage.setItem("pronunciationStats", JSON.stringify(stats))

    return Promise.resolve()
  } catch (error) {
    console.error("Error storing audio recording:", error)
    return Promise.reject(error)
  }
}

