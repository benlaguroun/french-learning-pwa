"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SyllableCardProps {
  syllable: string
  examples: string[]
  audioSrc: string
}

export function SyllableCard({ syllable, examples, audioSrc }: SyllableCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc)

      audioRef.current.onended = () => {
        setIsPlaying(false)
      }

      audioRef.current.onerror = () => {
        setIsPlaying(false)
        console.error("Error playing audio")
      }
    }

    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error)
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6 text-center">
          <div className="text-4xl font-bold text-primary mb-2">{syllable}</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">أمثلة:</h3>
          <ul className="space-y-1">
            {examples.map((example, index) => (
              <li key={index} className="text-center text-lg">
                {example}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center p-4 pt-0">
        <Button
          variant="outline"
          size="sm"
          className={cn("gap-2 transition-all", isPlaying && "bg-primary/10")}
          onClick={handlePlayAudio}
        >
          <Volume2 className="h-4 w-4" />
          <span>{isPlaying ? "إيقاف" : "استماع"}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

