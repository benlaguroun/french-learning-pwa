"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VoiceRecorder } from "@/components/voice-recorder"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { updateExerciseProgress, updateSyllableProgress } from "@/lib/data-service"
import { CheckCircle, ArrowLeft, Volume2 } from "lucide-react"

// Mock syllable data
const syllableGroups = [
  {
    title: "المقاطع الأساسية",
    syllables: ["ba", "be", "bi", "bo", "bu", "da", "de", "di", "do", "du"],
  },
  {
    title: "المقاطع المتقدمة",
    syllables: ["cha", "che", "chi", "cho", "chu", "gna", "gne", "gni", "gno", "gnu"],
  },
  {
    title: "المقاطع المركبة",
    syllables: ["tra", "tre", "tri", "tro", "tru", "pla", "ple", "pli", "plo", "plu"],
  },
]

export default function PronunciationExercisePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("group-1")
  const [exerciseProgress, setExerciseProgress] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [successfulAttempts, setSuccessfulAttempts] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)

  // Mock user ID - in a real app, this would come from authentication
  const userId = "user123"

  // Handle exercise completion
  useEffect(() => {
    if (exerciseProgress >= 100 && !completed) {
      setCompleted(true)
      // Update progress in data service
      updateExerciseProgress(userId, "pronunciation", true, (successfulAttempts / Math.max(totalAttempts, 1)) * 100)
    }
  }, [exerciseProgress, completed, successfulAttempts, totalAttempts])

  const handlePronunciationResult = (syllable: string, success: boolean) => {
    // Update syllable progress
    updateSyllableProgress(userId, syllable, success)

    // Update exercise progress
    setTotalAttempts((prev) => prev + 1)
    if (success) {
      setSuccessfulAttempts((prev) => prev + 1)
    }

    // Increment overall progress
    const progressIncrement = 5 // Each successful attempt adds 5%
    setExerciseProgress((prev) => Math.min(prev + progressIncrement, 100))
  }

  return (
    <div className="container pb-20 pt-8 md:pb-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">تمارين النطق</h1>
          <p className="text-muted-foreground">تدرب على نطق المقاطع الصوتية الفرنسية</p>
        </div>
        <Button variant="outline" onClick={() => router.push("/exercises")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          العودة للتمارين
        </Button>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">تقدم التمرين</span>
          <span className="text-sm font-medium">{exerciseProgress}%</span>
        </div>
        <Progress value={exerciseProgress} className="mt-2" />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="group-1">المجموعة 1</TabsTrigger>
          <TabsTrigger value="group-2">المجموعة 2</TabsTrigger>
          <TabsTrigger value="group-3">المجموعة 3</TabsTrigger>
        </TabsList>

        {syllableGroups.map((group, groupIndex) => (
          <TabsContent key={groupIndex} value={`group-${groupIndex + 1}`} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>استمع إلى المقطع، ثم سجل نطقك وتحقق من صحته</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.syllables.map((syllable, index) => (
                    <VoiceRecorder
                      key={index}
                      syllable={syllable}
                      referenceAudioUrl={`/audio/${syllable}.mp3`}
                      onResult={(success) => handlePronunciationResult(syllable, success)}
                    />
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    اضغط على <Volume2 className="mx-1 inline h-4 w-4" /> للاستماع إلى النطق الصحيح
                  </div>
                  <Button variant="outline" onClick={() => setActiveTab(`group-${Math.min(groupIndex + 2, 3)}`)}>
                    المجموعة التالية
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {completed && (
        <Alert className="mt-6 border-green-500 bg-green-500/10">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>أحسنت!</AlertTitle>
          <AlertDescription>
            لقد أكملت تمارين النطق بنجاح. نسبة النجاح:{" "}
            {Math.round((successfulAttempts / Math.max(totalAttempts, 1)) * 100)}%
          </AlertDescription>
        </Alert>
      )}

      <div className="mt-6 flex justify-between">
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          العودة إلى لوحة التحكم
        </Button>
        <Button onClick={() => router.push("/exercises/listening")}>التمرين التالي</Button>
      </div>
    </div>
  )
}

