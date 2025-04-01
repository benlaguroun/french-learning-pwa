"use client"

import React from "react"
import LessonLayout from "@/components/lessons/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function TravelPhrasesLesson() {
  const [activeTab, setActiveTab] = React.useState("vocabulary")
  const [progress, setProgress] = React.useState(0)
  const [exerciseAnswers, setExerciseAnswers] = React.useState<{ [key: string]: boolean }>({})

  const vocabulary = [
    { french: "L'aéroport", arabic: "المطار", pronunciation: "لاييروبور" },
    { french: "La gare", arabic: "محطة القطار", pronunciation: "لا غار" },
    { french: "L'hôtel", arabic: "الفندق", pronunciation: "لوتيل" },
    { french: "Le passeport", arabic: "جواز السفر", pronunciation: "لو باسبور" },
    { french: "Le billet", arabic: "التذكرة", pronunciation: "لو بييه" },
    { french: "La valise", arabic: "الحقيبة", pronunciation: "لا فاليز" },
    { french: "Le taxi", arabic: "سيارة الأجرة", pronunciation: "لو تاكسي" },
    { french: "Le métro", arabic: "المترو", pronunciation: "لو ميترو" },
    { french: "La carte", arabic: "الخريطة", pronunciation: "لا كارت" },
    { french: "Le touriste", arabic: "السائح", pronunciation: "لو توريست" },
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
      title="عبارات السفر"
      description="تعلم العبارات الفرنسية المفيدة للسفر"
      currentLesson={5}
      totalLessons={6}
      progress={progress}
    >
      <Tabs defaultValue="vocabulary" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="vocabulary">المفردات</TabsTrigger>
          <TabsTrigger value="dialogue">الحوار</TabsTrigger>
          <TabsTrigger value="phrases">العبارات</TabsTrigger>
          <TabsTrigger value="exercises">تمارين</TabsTrigger>
        </TabsList>

        <TabsContent value="vocabulary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vocabulary.map((item, index) => (
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

        <TabsContent value="dialogue" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">في المطار</h3>
              <div className="space-y-2">
                <p>
                  <strong>المسافر:</strong> Excusez-moi, où est le comptoir d'enregistrement pour le vol AF123 ? <br />
                  <span className="text-muted-foreground">عذرًا، أين مكتب تسجيل الوصول للرحلة AF123؟</span>
                </p>
                <p>
                  <strong>الموظف:</strong> C'est au terminal 2, à votre droite. <br />
                  <span className="text-muted-foreground">إنه في المبنى 2، على يمينك.</span>
                </p>
                <p>
                  <strong>المسافر:</strong> Merci. À quelle heure est l'embarquement ? <br />
                  <span className="text-muted-foreground">شكرًا. في أي ساعة يبدأ الصعود إلى الطائرة؟</span>
                </p>
                <p>
                  <strong>الموظف:</strong> L'embarquement commence à 14h30 à la porte 15. <br />
                  <span className="text-muted-foreground">يبدأ الصعود في الساعة 14:30 عند البوابة 15.</span>
                </p>
                <p>
                  <strong>المسافر:</strong> Parfait, merci beaucoup. <br />
                  <span className="text-muted-foreground">ممتاز، شكرًا جزيلاً.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">عبارات مفيدة للسفر</h3>
              <div className="space-y-2">
                <p>
                  <strong>Je voudrais réserver une chambre</strong> - أود حجز غرفة
                </p>
                <p>
                  <strong>Où est la station de métro ?</strong> - أين محطة المترو؟
                </p>
                <p>
                  <strong>Combien coûte un billet pour... ?</strong> - كم تكلفة تذكرة إلى...؟
                </p>
                <p>
                  <strong>Je suis perdu(e)</strong> - أنا ضائع/ضائعة
                </p>
                <p>
                  <strong>Pouvez-vous m'aider ?</strong> - هل يمكنك مساعدتي؟
                </p>
                <p>
                  <strong>À quelle heure part le train ?</strong> - في أي ساعة يغادر القطار؟
                </p>
                <p>
                  <strong>Je ne comprends pas</strong> - أنا لا أفهم
                </p>
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
                  <p className="mb-2">1. L'aéroport</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["1-airport"] === true
                          ? "default"
                          : exerciseAnswers["1-airport"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-airport", true)}
                    >
                      المطار {exerciseAnswers["1-airport"] === true ? <CheckCircle className="ml-2 h-4 w-4" /> : null}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["1-hotel"] === true
                          ? "default"
                          : exerciseAnswers["1-hotel"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-hotel", false)}
                    >
                      الفندق {exerciseAnswers["1-hotel"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">2. La valise</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["2-map"] === true
                          ? "default"
                          : exerciseAnswers["2-map"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-map", false)}
                    >
                      الخريطة {exerciseAnswers["2-map"] === false ? <XCircle className="ml-2 h-4 w-4" /> : null}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["2-suitcase"] === true
                          ? "default"
                          : exerciseAnswers["2-suitcase"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-suitcase", true)}
                    >
                      الحقيبة {exerciseAnswers["2-suitcase"] === true ? <CheckCircle className="ml-2 h-4 w-4" /> : null}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">3. Le métro</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["3-metro"] === true
                          ? "default"
                          : exerciseAnswers["3-metro"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-metro", true)}
                    >
                      المترو {exerciseAnswers["3-metro"] === true ? <CheckCircle className="ml-2 h-4 w-4" /> : null}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["3-taxi"] === true
                          ? "default"
                          : exerciseAnswers["3-taxi"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-taxi", false)}
                    >
                      سيارة الأجرة {exerciseAnswers["3-taxi"] === false ? <XCircle className="ml-2 h-4 w-4" /> : null}
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

