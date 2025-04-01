"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, Pause, Play } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function AudioPlayer({
  src,
  label = "استمع",
  onPlay,
  dataId,
}: {
  src?: string
  label?: string
  onPlay?: () => void
  dataId?: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    // Add event listeners
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", handleEnded)

    // Clean up event listeners
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error)
      })
      if (onPlay) onPlay()
    }

    setIsPlaying(!isPlaying)
  }

  const handleSliderChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // For demo purposes, use speech synthesis if no src provided
  const handleDemoPlay = () => {
    if (src) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    } else {
      const utterance = new SpeechSynthesisUtterance("Bonjour, comment ça va?")
      utterance.lang = "fr-FR"
      window.speechSynthesis.speak(utterance)
      setIsPlaying(true)
      if (onPlay) onPlay()

      // Set a timeout to update isPlaying when speech ends
      setTimeout(() => {
        setIsPlaying(false)
      }, 3000)
    }
  }

  return (
    <div className="w-full max-w-md">
      {src ? (
        <>
          <audio ref={audioRef} src={src} data-audio-id={dataId} />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" onClick={togglePlay} className="h-10 w-10 rounded-full">
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <div className="flex-1">
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleSliderChange}
                  className="w-full"
                />
              </div>
              <div className="w-16 text-xs text-right">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">{label}</p>
          </div>
        </>
      ) : (
        <Button variant="outline" className="flex items-center gap-2" onClick={handleDemoPlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          <span>{label}</span>
        </Button>
      )}
    </div>
  )
}

