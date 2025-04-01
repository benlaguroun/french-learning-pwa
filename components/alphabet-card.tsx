"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"

interface AlphabetCardProps {
  letter: string
  pronunciation: string
  example: string
  translation: string
  audioUrl: string
}

export function AlphabetCard({ letter, pronunciation, example, translation, audioUrl }: AlphabetCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayAudio = () => {
    if (audioRef.current) {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <span className="text-3xl font-bold">{letter}</span>
          </div>

          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">النطق: {pronunciation}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900"
                onClick={handlePlayAudio}
                disabled={isPlaying}
              >
                <Volume2 className="h-4 w-4" />
                <span className="sr-only">تشغيل الصوت</span>
              </Button>
            </div>

            <div className="space-y-1">
              <p className="font-medium">{example}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{translation}</p>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={audioUrl} onEnded={handleAudioEnded} className="hidden" />
      </CardContent>
    </Card>
  )
}

