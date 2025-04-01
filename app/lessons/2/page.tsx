"use client"

import React from "react"
import LessonLayout from "@/components/lessons/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function NumbersLesson() {
  const [activeTab, setActiveTab] = React.useState("vocabulary")
  const [progress, setProgress] = React.useState(0)
  const [exerciseAnswers, setExerciseAnswers] = React.useState<{ [key: string]: boolean }>({})

  const numbers = [
    { french: "Un", arabic: "واحد", pronunciation: "أون" },
    { french: "Deux", arabic: "اثنان", pronunciation: "دو" },
    { french: "Trois", arabic: "ثلاثة", pronunciation: "تروا" },
    { french: "Quatre", arabic: "أربعة", pronunciation: "كاتر" },
    { french: "Cinq", arabic: "خمسة", pronunciation: "سانك" },
    { french: "Six", arabic: "ستة", pronunciation: "سيس" },
    { french: "Sept", arabic: "سبعة", pronunciation: "سيت" },
    { french: "Huit", arabic: "ثمانية", pronunciation: "ويت" },
    { french: "Neuf", arabic: "تسعة", pronunciation: "نوف" },
    { french: "Dix", arabic: "عشرة", pronunciation: "ديس" },
  ]

  const tens = [
    { french: "Dix", arabic: "عشرة", pronunciation: "ديس" },
    { french: "Vingt", arabic: "عشرون", pronunciation: "فان" },
    { french: "Trente", arabic: "ثلاثون", pronunciation: "ترونت" },
    { french: "Quarante", arabic: "أربعون", pronunciation: "كارونت" },
    { french: "Cinquante", arabic: "خمسون", pronunciation: "سانكونت" },
    { french: "Soixante", arabic: "ستون", pronunciation: "سواسونت" },
    { french: "Soixante-dix", arabic: "سبعون", pronunciation: "سواسونت-ديس" },
    { french: "Quatre-vingts", arabic: "ثمانون", pronunciation: "كاتر-فان" },
    { french: "Quatre-vingt-dix", arabic: "تسعون", pronunciation: "كاتر-فان-ديس" },
    { french: "Cent", arabic: "مائة", pronunciation: "سون" },
  ]

  const handleExerciseAnswer = (id: string, isCorrect: boolean) => {
    setExerciseAnswers((prev) => ({ ...prev, [id]: isCorrect }))

    // Calculate progress based on completed exercises
    const totalExercises = 5
    const completedExercises = Object.keys(exerciseAnswers).length + 1
    setProgress(Math.min((completedExercises / totalExercises) * 100, 100))
  }

  return (
    <LessonLayout
      title="الأرقام"
      description="تعلم الأرقام من 1 إلى 100 باللغة الفرنسية"
      currentLesson={2}
      totalLessons={6}
      progress={progress}
    >
      <Tabs defaultValue="vocabulary" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="vocabulary">الأرقام 1-10</TabsTrigger>
          <TabsTrigger value="tens">العشرات</TabsTrigger>
          <TabsTrigger value="patterns">الأنماط</TabsTrigger>
          <TabsTrigger value="exercises">تمارين</TabsTrigger>
        </TabsList>

        <TabsContent value="vocabulary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {numbers.map((item, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <div className="text-xl font-bold">{item.french}</div>
                    <div className="text-lg">{item.arabic}</div>
                    <div className="text-sm text-muted-foreground">النطق: {item.pronunciation}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tens" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tens.map((item, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <div className="text-xl font-bold">{item.french}</div>
                    <div className="text-lg">{item.arabic}</div>
                    <div className="text-sm text-muted-foreground">النطق: {item.pronunciation}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">أنماط الأرقام الفرنسية</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">الأرقام من 11 إلى 16</h4>
                  <p>تتكون من "dix" (عشرة) + الرقم:</p>
                  <ul className="list-disc list-inside">
                    <li>11: Onze (أونز)</li>
                    <li>12: Douze (دوز)</li>
                    <li>13: Treize (تريز)</li>
                    <li>14: Quatorze (كاتورز)</li>
                    <li>15: Quinze (كانز)</li>
                    <li>16: Seize (سيز)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">الأرقام من 17 إلى 19</h4>
                  <p>تتكون من "dix" (عشرة) + "sept" (سبعة):</p>
                  <ul className="list-disc list-inside">
                    <li>17: Dix-sept (ديس-سيت)</li>
                    <li>18: Dix-huit (ديس-ويت)</li>
                    <li>19: Dix-neuf (ديس-نوف)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">الأرقام من 21 إلى 69</h4>
                  <p>تتكون من العشرات + الرقم:</p>
                  <ul className="list-disc list-inside">
                    <li>21: Vingt-et-un (فان-إيه-أون)</li>
                    <li>22: Vingt-deux (فان-دو)</li>
                    <li>35: Trente-cinq (ترونت-سانك)</li>
                    <li>48: Quarante-huit (كارونت-ويت)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4">اختر الترجمة الصحيحة:</h3>

              <div className="space-y-4">
                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">1. Cinq</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["1-four"] === true
                          ? "default"
                          : exerciseAnswers["1-four"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-four", false)}
                    >
                      أربعة {exerciseAnswers["1-four"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["1-five"] === true
                          ? "default"
                          : exerciseAnswers["1-five"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-five", true)}
                    >
                      خمسة {exerciseAnswers["1-five"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">2. Vingt</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["2-twenty"] === true
                          ? "default"
                          : exerciseAnswers["2-twenty"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-twenty", true)}
                    >
                      عشرون {exerciseAnswers["2-twenty"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["2-thirty"] === true
                          ? "default"
                          : exerciseAnswers["2-thirty"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-thirty", false)}
                    >
                      ثلاثون {exerciseAnswers["2-thirty"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">3. Soixante-dix</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["3-sixty"] === true
                          ? "default"
                          : exerciseAnswers["3-sixty"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-sixty", false)}
                    >
                      ستون {exerciseAnswers["3-sixty"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["3-seventy"] === true
                          ? "default"
                          : exerciseAnswers["3-seventy"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-seventy", true)}
                    >
                      سبعون {exerciseAnswers["3-seventy"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </LessonLayout>
  )
}

