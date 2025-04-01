"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AudioPlayer } from "@/components/audio-player"
import { VoiceRecorder } from "@/components/voice-recorder"
import { useState } from "react"
import type { WordData } from "@/lib/syllables-data"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface WordCardProps {
  wordData: WordData
  onPractice?: (word: string) => void
}

export function WordCard({ wordData, onPractice }: WordCardProps) {
  const [isPracticing, setIsPracticing] = useState(false)

  const handlePractice = () => {
    setIsPracticing(true)
    if (onPractice) {
      onPractice(wordData.word)
    }
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-xl">{wordData.word}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pb-2">
        {wordData.image && (
          <div className="flex justify-center">
            <Image
              src={wordData.image || "/placeholder.svg"}
              alt={wordData.word}
              width={120}
              height={120}
              className="h-[100px] w-[100px] rounded-md object-contain"
            />
          </div>
        )}
        <AudioPlayer src={wordData.audio} compact label="استمع" />
      </CardContent>
      <CardFooter>
        <Button onClick={handlePractice} size="sm" variant="outline" className="w-full">
          تدرب على النطق
        </Button>
      </CardFooter>

      {isPracticing && (
        <div className="p-4 pt-0">
          <VoiceRecorder
            syllable={wordData.word}
            referenceAudioUrl={wordData.audio}
            onResult={(success) => {
              // Handle practice result
            }}
          />
        </div>
      )}
    </Card>
  )
}

