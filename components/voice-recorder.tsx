"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Mic, Square, Play, Check, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { AudioPlayer } from "@/components/audio-player"
import { storeAudioRecording } from "@/lib/data-service"

interface VoiceRecorderProps {
  referenceAudioUrl: string
  onResult?: (success: boolean) => void
  syllable: string
}

export function VoiceRecorder({ referenceAudioUrl, onResult, syllable }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null)
  const [recordingTime, setRecordingTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [comparisonResult, setComparisonResult] = useState<"success" | "error" | null>(null)
  const [showPermissionError, setShowPermissionError] = useState(false)
  const [processingAudio, setProcessingAudio] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio()

    return () => {
      if (recordedAudio) {
        URL.revokeObjectURL(recordedAudio)
      }
    }
  }, [referenceAudioUrl, recordedAudio])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      })
      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        const audioUrl = URL.createObjectURL(audioBlob)
        setRecordedAudio(audioUrl)

        if (audioRef.current) {
          audioRef.current.src = audioUrl
        }

        // Store the recording
        storeRecording(audioBlob)
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
      setRecordingTime(0)
      setComparisonResult(null)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= 5) {
            stopRecording()
            return prev
          }
          return prev + 1
        })
      }, 1000)

      setShowPermissionError(false)
    } catch (error) {
      console.error("Error accessing microphone:", error)
      setShowPermissionError(true)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      // Stop all tracks in the stream
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop())

      // Clear timer
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const playRecording = () => {
    if (audioRef.current && recordedAudio) {
      setIsPlaying(true)
      audioRef.current.play()
      audioRef.current.onended = () => setIsPlaying(false)
    }
  }

  const compareAudio = async () => {
    setProcessingAudio(true)

    try {
      // In a real app, this would use a speech recognition API or ML model
      // For this demo, we'll simulate an API call with advanced audio processing

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Get audio features for comparison
      // This would be a real API call in a production app
      const referenceFeatures = await simulateGetAudioFeatures(referenceAudioUrl)
      const recordedFeatures = await simulateGetAudioFeatures(recordedAudio || "")

      // Compare audio features
      const similarityScore = calculateSimilarity(referenceFeatures, recordedFeatures)

      // Determine if pronunciation is correct based on similarity score
      const success = similarityScore > 0.7 // 70% threshold for success

      setComparisonResult(success ? "success" : "error")

      if (onResult) {
        onResult(success)
      }

      // Store the result
      if (recordedAudio) {
        const audioBlob = await fetch(recordedAudio).then((r) => r.blob())
        storeAudioRecording("user123", syllable, audioBlob, success)
      }
    } catch (error) {
      console.error("Error comparing audio:", error)
      setComparisonResult("error")
      if (onResult) {
        onResult(false)
      }
    } finally {
      setProcessingAudio(false)
    }
  }

  // Simulate getting audio features from an API
  const simulateGetAudioFeatures = async (audioUrl: string): Promise<number[]> => {
    // This would be a real API call in a production app
    // For demo purposes, we'll generate random features
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Generate 10 random features between 0 and 1
    return Array.from({ length: 10 }, () => Math.random())
  }

  // Calculate similarity between two audio feature vectors
  const calculateSimilarity = (features1: number[], features2: number[]): number => {
    // This would be a real similarity calculation in a production app
    // For demo purposes, we'll use a simple method

    // Calculate cosine similarity
    let dotProduct = 0
    let magnitude1 = 0
    let magnitude2 = 0

    for (let i = 0; i < features1.length; i++) {
      dotProduct += features1[i] * features2[i]
      magnitude1 += features1[i] * features1[i]
      magnitude2 += features2[i] * features2[i]
    }

    magnitude1 = Math.sqrt(magnitude1)
    magnitude2 = Math.sqrt(magnitude2)

    // Add some randomness for demo purposes
    const randomFactor = Math.random() * 0.3 + 0.7 // Between 0.7 and 1.0

    return (dotProduct / (magnitude1 * magnitude2)) * randomFactor
  }

  const storeRecording = async (audioBlob: Blob) => {
    try {
      // In a real app, you would upload this to your server or cloud storage
      console.log(`Storing recording for syllable: ${syllable}`)

      // Example of how you might upload to a server:
      /*
      const formData = new FormData()
      formData.append('audio', audioBlob)
      formData.append('syllable', syllable)
      formData.append('userId', 'user123') // You'd get this from auth
      
      const response = await fetch('/api/store-recording', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      console.log('Recording stored:', data)
      */
    } catch (error) {
      console.error("Error storing recording:", error)
    }
  }

  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      {showPermissionError && (
        <Alert variant="destructive">
          <AlertDescription>يرجى السماح بالوصول إلى الميكروفون للتمكن من تسجيل صوتك</AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">{syllable}</span>
        </div>

        <div className="flex items-center gap-2">
          <AudioPlayer src={referenceAudioUrl} compact label="استمع" />

          {recordedAudio && !isRecording && (
            <Button variant="outline" size="icon" onClick={playRecording} disabled={isPlaying}>
              <Play className="h-4 w-4" />
            </Button>
          )}

          {isRecording ? (
            <Button variant="destructive" size="icon" onClick={stopRecording}>
              <Square className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="default"
              size="icon"
              onClick={startRecording}
              className={cn("bg-red-500 hover:bg-red-600", recordingTime > 0 && "bg-primary hover:bg-primary/90")}
            >
              <Mic className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {isRecording && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>جارٍ التسجيل...</span>
            <span>{recordingTime}s / 5s</span>
          </div>
          <Progress value={recordingTime * 20} className="h-2" />
        </div>
      )}

      {recordedAudio && !isRecording && (
        <div className="flex justify-center">
          <Button
            onClick={compareAudio}
            disabled={comparisonResult !== null || processingAudio}
            className={processingAudio ? "opacity-80" : ""}
          >
            {processingAudio ? "جارٍ تحليل النطق..." : "تحقق من النطق"}
          </Button>
        </div>
      )}

      {comparisonResult && (
        <div
          className={cn(
            "mt-2 flex items-center gap-2 rounded-md p-2",
            comparisonResult === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500",
          )}
        >
          {comparisonResult === "success" ? (
            <>
              <Check className="h-5 w-5" />
              <span>أحسنت! النطق صحيح</span>
            </>
          ) : (
            <>
              <X className="h-5 w-5" />
              <span>حاول مرة أخرى، النطق غير صحيح</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

