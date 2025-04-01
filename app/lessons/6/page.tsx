"use client"

import React from "react"
import LessonLayout from "@/components/lessons/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function GrammarBasicsLesson() {
  const [activeTab, setActiveTab] = React.useState("vocabulary")
  const [progress, setProgress] = React.useState(0)
  const [exerciseAnswers, setExerciseAnswers] = React.useState<{ [key: string]: boolean }>({})

  const vocabulary = [
    { french: "Je", arabic: "أنا" },
    { french: "Tu", arabic: "أنت" },
    { french: "Il/Elle", arabic: "هو/هي" },
    { french: "Nous", arabic: "نحن" },
    { french: "Vous", arabic: "أنتم" },
    { french: "Ils/Elles", arabic: "هم/هن" },
    { french: "Être", arabic: "يكون" },
    { french: "Avoir", arabic: "يملك" },
    { french: "Aller", arabic: "يذهب" },
    { french: "Faire", arabic: "يفعل" },
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
      title="أساسيات القواعد"
      description="تعلم أساسيات قواعد اللغة الفرنسية"
      currentLesson={6}
      totalLessons={6}
      progress={progress}
    >
      <Tabs defaultValue="vocabulary" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="vocabulary">المفردات</TabsTrigger>
          <TabsTrigger value="grammar">القواعد</TabsTrigger>
          <TabsTrigger value="examples">أمثلة</TabsTrigger>
          <TabsTrigger value="exercises">تمارين</TabsTrigger>
        </TabsList>

        <TabsContent value="vocabulary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vocabulary.map((item, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">{item.french}</div>
                    <div className="text-lg text-right">{item.arabic}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="grammar" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">الضمائر الشخصية</h3>
              <p className="mb-4">
                الضمائر الشخصية في اللغة الفرنسية هي: Je (أنا)، Tu (أنت)، Il/Elle (هو/هي)، Nous (نحن)، Vous (أنتم)،
                Ils/Elles (هم/هن).
              </p>

              <h3 className="text-xl font-bold mb-2">تصريف الأفعال</h3>
              <p className="mb-4">
                في اللغة الفرنسية، تتغير نهاية الفعل حسب الضمير. هناك ثلاث مجموعات رئيسية من الأفعال:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>الأفعال التي تنتهي بـ -er (مثل parler - يتحدث)</li>
                <li>الأفعال التي تنتهي بـ -ir (مثل finir - ينهي)</li>
                <li>الأفعال التي تنتهي بـ -re (مثل vendre - يبيع)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">تصريف فعل Être (يكون)</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>Je suis</div>
                <div>أنا أكون</div>
                <div>Tu es</div>
                <div>أنت تكون</div>
                <div>Il/Elle est</div>
                <div>هو/هي يكون</div>
                <div>Nous sommes</div>
                <div>نحن نكون</div>
                <div>Vous êtes</div>
                <div>أنتم تكونون</div>
                <div>Ils/Elles sont</div>
                <div>هم/هن يكونون</div>
              </div>

              <h3 className="text-xl font-bold my-2">تصريف فعل Avoir (يملك)</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>J'ai</div>
                <div>أنا أملك</div>
                <div>Tu as</div>
                <div>أنت تملك</div>
                <div>Il/Elle a</div>
                <div>هو/هي يملك</div>
                <div>Nous avons</div>
                <div>نحن نملك</div>
                <div>Vous avez</div>
                <div>أنتم تملكون</div>
                <div>Ils/Elles ont</div>
                <div>هم/هن يملكون</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4">أكمل الجمل باستخدام الضمير المناسب:</h3>

              <div className="space-y-4">
                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">1. _____ suis étudiant. (أنا طالب)</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["1-je"] === true
                          ? "default"
                          : exerciseAnswers["1-je"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-je", true)}
                    >
                      Je {exerciseAnswers["1-je"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["1-tu"] === true
                          ? "default"
                          : exerciseAnswers["1-tu"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-tu", false)}
                    >
                      Tu {exerciseAnswers["1-tu"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">2. _____ avez un livre. (أنتم لديكم كتاب)</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["2-nous"] === true
                          ? "default"
                          : exerciseAnswers["2-nous"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-nous", false)}
                    >
                      Nous {exerciseAnswers["2-nous"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["2-vous"] === true
                          ? "default"
                          : exerciseAnswers["2-vous"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-vous", true)}
                    >
                      Vous {exerciseAnswers["2-vous"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">3. _____ est médecin. (هي طبيبة)</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["3-il"] === true
                          ? "default"
                          : exerciseAnswers["3-il"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-il", false)}
                    >
                      Il {exerciseAnswers["3-il"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["3-elle"] === true
                          ? "default"
                          : exerciseAnswers["3-elle"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-elle", true)}
                    >
                      Elle {exerciseAnswers["3-elle"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
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

