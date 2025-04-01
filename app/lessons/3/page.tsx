"use client"

import React from "react"
import LessonLayout from "@/components/lessons/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function CommonPhrasesLesson() {
  const [activeTab, setActiveTab] = React.useState("vocabulary")
  const [progress, setProgress] = React.useState(0)
  const [exerciseAnswers, setExerciseAnswers] = React.useState<{ [key: string]: boolean }>({})

  const phrases = [
    { french: "Excusez-moi", arabic: "عذرًا", pronunciation: "إكسكوزيه-موا" },
    { french: "Je ne comprends pas", arabic: "أنا لا أفهم", pronunciation: "جو نو كومبرون با" },
    { french: "Pouvez-vous répéter ?", arabic: "هل يمكنك التكرار؟", pronunciation: "بوفيه-فو ريبيتيه" },
    { french: "Parlez-vous anglais ?", arabic: "هل تتحدث الإنجليزية؟", pronunciation: "بارليه-فو أونغليه" },
    { french: "Je voudrais...", arabic: "أود...", pronunciation: "جو فودريه" },
    { french: "Combien ça coûte ?", arabic: "كم يكلف هذا؟", pronunciation: "كومبيان سا كوت" },
    { french: "Où est...?", arabic: "أين...؟", pronunciation: "أو إيه" },
    { french: "À quelle heure ?", arabic: "في أي ساعة؟", pronunciation: "آ كيل أور" },
    { french: "Je suis désolé(e)", arabic: "أنا آسف/آسفة", pronunciation: "جو سوي ديزوليه" },
    { french: "Bonne journée", arabic: "يوم سعيد", pronunciation: "بون جورنيه" },
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
      title="العبارات الشائعة"
      description="تعلم العبارات الفرنسية الشائعة للمحادثات اليومية"
      currentLesson={3}
      totalLessons={6}
      progress={progress}
    >
      <Tabs defaultValue="vocabulary" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="vocabulary">العبارات</TabsTrigger>
          <TabsTrigger value="dialogue">الحوار</TabsTrigger>
          <TabsTrigger value="situations">المواقف</TabsTrigger>
          <TabsTrigger value="exercises">تمارين</TabsTrigger>
        </TabsList>

        <TabsContent value="vocabulary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phrases.map((item, index) => (
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
              <h3 className="text-xl font-bold mb-2">حوار: في المتجر</h3>
              <div className="space-y-2">
                <p>
                  <strong>الزبون:</strong> Bonjour, excusez-moi. <br />
                  <span className="text-muted-foreground">مرحبًا، عذرًا.</span>
                </p>
                <p>
                  <strong>البائع:</strong> Bonjour, je peux vous aider ? <br />
                  <span className="text-muted-foreground">مرحبًا، هل يمكنني مساعدتك؟</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Je voudrais ce t-shirt, s'il vous plaît. Combien ça coûte ? <br />
                  <span className="text-muted-foreground">أود هذا القميص، من فضلك. كم يكلف؟</span>
                </p>
                <p>
                  <strong>البائع:</strong> Il coûte 25 euros. <br />
                  <span className="text-muted-foreground">إنه يكلف 25 يورو.</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Je le prends. <br />
                  <span className="text-muted-foreground">سآخذه.</span>
                </p>
                <p>
                  <strong>البائع:</strong> Très bien. Vous payez par carte ou en espèces ? <br />
                  <span className="text-muted-foreground">حسنًا. هل تدفع بالبطاقة أم نقدًا؟</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Par carte, s'il vous plaît. <br />
                  <span className="text-muted-foreground">بالبطاقة، من فضلك.</span>
                </p>
                <p>
                  <strong>البائع:</strong> Merci. Bonne journée ! <br />
                  <span className="text-muted-foreground">شكرًا. يوم سعيد!</span>
                </p>
                <p>
                  <strong>الزبون:</strong> Merci, au revoir ! <br />
                  <span className="text-muted-foreground">شكرًا، إلى اللقاء!</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="situations" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">مواقف شائعة</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">طلب الاتجاهات</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Excusez-moi, où est la gare ? <br />
                      <span className="text-muted-foreground">عذرًا، أين محطة القطار؟</span>
                    </li>
                    <li>
                      Comment aller à l'hôtel ? <br />
                      <span className="text-muted-foreground">كيف أذهب إلى الفندق؟</span>
                    </li>
                    <li>
                      C'est loin d'ici ? <br />
                      <span className="text-muted-foreground">هل هو بعيد من هنا؟</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">في المطعم</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Une table pour deux, s'il vous plaît. <br />
                      <span className="text-muted-foreground">طاولة لشخصين، من فضلك.</span>
                    </li>
                    <li>
                      Je voudrais commander. <br />
                      <span className="text-muted-foreground">أود أن أطلب.</span>
                    </li>
                    <li>
                      L'addition, s'il vous plaît. <br />
                      <span className="text-muted-foreground">الفاتورة، من فضلك.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">في الفندق</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      J'ai une réservation. <br />
                      <span className="text-muted-foreground">لدي حجز.</span>
                    </li>
                    <li>
                      À quelle heure est le petit-déjeuner ? <br />
                      <span className="text-muted-foreground">في أي ساعة يكون الإفطار؟</span>
                    </li>
                    <li>
                      Où est l'ascenseur ? <br />
                      <span className="text-muted-foreground">أين المصعد؟</span>
                    </li>
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
                  <p className="mb-2">1. Excusez-moi</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["1-sorry"] === true
                          ? "default"
                          : exerciseAnswers["1-sorry"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-sorry", true)}
                    >
                      عذرًا {exerciseAnswers["1-sorry"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["1-thanks"] === true
                          ? "default"
                          : exerciseAnswers["1-thanks"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-thanks", false)}
                    >
                      شكرًا {exerciseAnswers["1-thanks"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">2. Combien ça coûte ?</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["2-howmuch"] === true
                          ? "default"
                          : exerciseAnswers["2-howmuch"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-howmuch", true)}
                    >
                      كم يكلف هذا؟ {exerciseAnswers["2-howmuch"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["2-whatisthis"] === true
                          ? "default"
                          : exerciseAnswers["2-whatisthis"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-whatisthis", false)}
                    >
                      ما هذا؟ {exerciseAnswers["2-whatisthis"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">3. Je voudrais...</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["3-ineed"] === true
                          ? "default"
                          : exerciseAnswers["3-ineed"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-ineed", false)}
                    >
                      أنا بحاجة إلى... {exerciseAnswers["3-ineed"] === false && <XCircle className="ml-2 h-4 w-4" />}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["3-iwould"] === true
                          ? "default"
                          : exerciseAnswers["3-iwould"] === false
                            ? "destructive"
                            : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-iwould", true)}
                    >
                      أود... {exerciseAnswers["3-iwould"] === true && <CheckCircle className="ml-2 h-4 w-4" />}
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

