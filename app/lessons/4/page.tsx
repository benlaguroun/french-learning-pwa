"use client"

import React from "react"
import LessonLayout from "@/components/lessons/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function FoodVocabularyLesson() {
  const [activeTab, setActiveTab] = React.useState("vocabulary")
  const [progress, setProgress] = React.useState(0)
  const [exerciseAnswers, setExerciseAnswers] = React.useState<{ [key: string]: boolean }>({})

  const vocabulary = [
    { french: "Le pain", arabic: "الخبز", pronunciation: "لو بان" },
    { french: "Le fromage", arabic: "الجبن", pronunciation: "لو فروماج" },
    { french: "La viande", arabic: "اللحم", pronunciation: "لا فياند" },
    { french: "Le poisson", arabic: "السمك", pronunciation: "لو بواسون" },
    { french: "Les légumes", arabic: "الخضروات", pronunciation: "لي ليغوم" },
    { french: "Les fruits", arabic: "الفواكه", pronunciation: "لي فروي" },
    { french: "L'eau", arabic: "الماء", pronunciation: "لو" },
    { french: "Le vin", arabic: "النبيذ", pronunciation: "لو فان" },
    { french: "Le café", arabic: "القهوة", pronunciation: "لو كافيه" },
    { french: "Le thé", arabic: "الشاي", pronunciation: "لو تيه" },
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
      title="مفردات الطعام"
      description="تعلم المفردات الفرنسية المتعلقة بالطعام والشراب"
      currentLesson={4}
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
              <h3 className="text-xl font-bold mb-2">في المطعم</h3>
              <div className="space-y-2">
                <p>
                  <strong>الخادم:</strong> Bonjour, vous avez choisi ? <br />
                  <span className="text-muted-foreground">مرحبًا، هل اخترت؟</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Je voudrais un steak avec des légumes, s'il vous plaît. <br />
                  <span className="text-muted-foreground">أود شريحة لحم مع خضروات، من فضلك.</span>
                </p>
                <p>
                  <strong>الخادم:</strong> Et comme boisson ? <br />
                  <span className="text-muted-foreground">وماذا تشرب؟</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Une bouteille d'eau, s'il vous plaît. <br />
                  <span className="text-muted-foreground">زجاجة ماء، من فضلك.</span>
                </p>
                <p>
                  <strong>الخادم:</strong> Très bien. Et comme dessert ? <br />
                  <span className="text-muted-foreground">حسنًا. وماذا عن الحلوى؟</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Je prendrai une tarte aux pommes. <br />
                  <span className="text-muted-foreground">سآخذ فطيرة تفاح.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">عبارات مفيدة</h3>
              <div className="space-y-2">
                <p>
                  <strong>J'ai faim</strong> - أنا جائع
                </p>
                <p>
                  <strong>J'ai soif</strong> - أنا عطشان
                </p>
                <p>
                  <strong>C'est délicieux</strong> - هذا لذيذ
                </p>
                <p>
                  <strong>L'addition, s'il vous plaît</strong> - الفاتورة، من فضلك
                </p>
                <p>
                  <strong>Je suis végétarien/végétarienne</strong> - أنا نباتي/نباتية
                </p>
                <p>
                  <strong>Je voudrais réserver une table</strong> - أود حجز طاولة
                </p>
                <p>
                  <strong>Qu'est-ce que vous recommandez ?</strong> - ماذا توصي؟
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
                  <p className="mb-2">1. Le pain</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["1-bread"] === true
                          ? "default"
                          : exerciseAnswers["1-bread"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-bread", true)}
                    >
                      الخبز {exerciseAnswers["1-bread"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["1-cheese"] === true
                          ? "default"
                          : exerciseAnswers["1-cheese"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-cheese", false)}
                    >
                      الجبن {exerciseAnswers["1-cheese"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">2. Le café</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["2-tea"] === true
                          ? "default"
                          : exerciseAnswers["2-tea"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-tea", false)}
                    >
                      الشاي {exerciseAnswers["2-tea"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["2-coffee"] === true
                          ? "default"
                          : exerciseAnswers["2-coffee"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-coffee", true)}
                    >
                      القهوة {exerciseAnswers["2-coffee"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">3. Les fruits</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["3-fruits"] === true
                          ? "default"
                          : exerciseAnswers["3-fruits"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-fruits", true)}
                    >
                      الفواكه {exerciseAnswers["3-fruits"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["3-vegetables"] === true
                          ? "default"
                          : exerciseAnswers["3-vegetables"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-vegetables", false)}
                    >
                      الخضروات {exerciseAnswers["3-vegetables"] === false && <XCircle className="ml-2 h-4 w-4" />}
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

