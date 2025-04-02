"use client";

import React from "react";
import LessonLayout from "@/components/lessons/lesson-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle } from "lucide-react";

export default function BasicGreetingsLesson() {
  const [activeTab, setActiveTab] = React.useState("vocabulary");
  const [progress, setProgress] = React.useState(0);
  const [exerciseAnswers, setExerciseAnswers] = React.useState<{
    [key: string]: boolean;
  }>({});

  const vocabulary = [
    {
      french: "Bonjour",
      arabic: "مرحبًا (صباحًا/نهارًا)",
      pronunciation: "بونجور",
    },
    { french: "Bonsoir", arabic: "مساء الخير", pronunciation: "بونسوار" },
    { french: "Au revoir", arabic: "إلى اللقاء", pronunciation: "أو روفوار" },
    {
      french: "Salut",
      arabic: "مرحبًا/وداعًا (غير رسمي)",
      pronunciation: "سالو",
    },
    {
      french: "Comment allez-vous ?",
      arabic: "كيف حالك؟ (رسمي)",
      pronunciation: "كومون تاليه فو",
    },
    {
      french: "Comment vas-tu ?",
      arabic: "كيف حالك؟ (غير رسمي)",
      pronunciation: "كومون فا تو",
    },
    { french: "Je m'appelle...", arabic: "اسمي...", pronunciation: "جو مابيل" },
    {
      french: "Enchanté(e)",
      arabic: "تشرفت بمعرفتك",
      pronunciation: "أونشانتيه",
    },
    {
      french: "S'il vous plaît",
      arabic: "من فضلك",
      pronunciation: "سيل فو بليه",
    },
    { french: "Merci", arabic: "شكرًا", pronunciation: "ميرسي" },
    {
      french: "Bonjour",
      arabic: "مرحبًا (صباحًا/نهارًا)",
      pronunciation: "بونجور",
    },
    { french: "Bonsoir", arabic: "مساء الخير", pronunciation: "بونسوار" },
    { french: "Au revoir", arabic: "إلى اللقاء", pronunciation: "أو روفوار" },
    {
      french: "Salut",
      arabic: "مرحبًا/وداعًا (غير رسمي)",
      pronunciation: "سالو",
    },
    {
      french: "Comment allez-vous ?",
      arabic: "كيف حالك؟ (رسمي)",
      pronunciation: "كومون تاليه فو",
    },
    {
      french: "Comment vas-tu ?",
      arabic: "كيف حالك؟ (غير رسمي)",
      pronunciation: "كومون فا تو",
    },
    { french: "Je m'appelle...", arabic: "اسمي...", pronunciation: "جو مابيل" },
    {
      french: "Enchanté(e)",
      arabic: "تشرفت بمعرفتك",
      pronunciation: "أونشانتيه",
    },
    {
      french: "S'il vous plaît",
      arabic: "من فضلك",
      pronunciation: "سيل فو بليه",
    },
    { french: "Merci", arabic: "شكرًا", pronunciation: "ميرسي" },
  ];

  const handleExerciseAnswer = (id: string, isCorrect: boolean) => {
    setExerciseAnswers((prev) => ({ ...prev, [id]: isCorrect }));

    // Calculate progress based on completed exercises
    const totalExercises = 5;
    const completedExercises = Object.keys(exerciseAnswers).length + 1;
    setProgress(Math.min((completedExercises / totalExercises) * 100, 100));
  };

  return (
    <LessonLayout
      title="التحيات الأساسية"
      description="تعلم كيفية تحية الناس وتقديم نفسك باللغة الفرنسية"
      currentLesson={1}
      totalLessons={6}
      progress={progress}
    >
      <Tabs
        defaultValue="vocabulary"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="vocabulary">المفردات</TabsTrigger>
          <TabsTrigger value="dialogue">الحوار</TabsTrigger>
          <TabsTrigger value="pronunciation">النطق</TabsTrigger>
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
                    <div className="text-sm text-muted-foreground">
                      النطق: {item.pronunciation}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dialogue" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">حوار: التعارف</h3>
              <div className="space-y-2">
                <p>
                  <strong>أحمد:</strong> Bonjour ! <br />
                  <span className="text-muted-foreground">مرحبًا!</span>
                </p>
                <p>
                  <strong>صوفي:</strong> Bonjour ! Comment allez-vous ? <br />
                  <span className="text-muted-foreground">
                    مرحبًا! كيف حالك؟
                  </span>
                </p>
                <p>
                  <strong>أحمد:</strong> Je vais bien, merci. Et vous ? <br />
                  <span className="text-muted-foreground">
                    أنا بخير، شكرًا. وأنت؟
                  </span>
                </p>
                <p>
                  <strong>صوفي:</strong> Très bien, merci. Je m'appelle Sophie.
                  Et vous ? <br />
                  <span className="text-muted-foreground">
                    جيد جدًا، شكرًا. اسمي صوفي. وأنت؟
                  </span>
                </p>
                <p>
                  <strong>أحمد:</strong> Je m'appelle Ahmed. Enchanté ! <br />
                  <span className="text-muted-foreground">
                    اسمي أحمد. تشرفت بمعرفتك!
                  </span>
                </p>
                <p>
                  <strong>صوفي:</strong> Enchanté, Ahmed ! <br />
                  <span className="text-muted-foreground">
                    تشرفت بمعرفتك، أحمد!
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pronunciation" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">نصائح النطق</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Bonjour</strong> - انطق الـ "j" مثل حرف "ج" الناعم،
                  والـ "r" من الحلق
                </li>
                <li>
                  <strong>Comment</strong> - لا تنطق الحرف الأخير "t"
                </li>
                <li>
                  <strong>Vous</strong> - تُنطق "فو" وليس "فوس"
                </li>
                <li>
                  <strong>Je</strong> - تُنطق مثل "جو" ولكن بصوت "ج" ناعم
                </li>
                <li>
                  <strong>Merci</strong> - انطق الـ "r" من الحلق، والـ "ci"
                  تُنطق "سي"
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4">اختر الترجمة الصحيحة:</h3>

              <div className="space-y-4">
                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">1. Bonjour</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["1-hello"] === true
                          ? "default"
                          : exerciseAnswers["1-hello"] === false
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-hello", true)}
                    >
                      مرحبًا{" "}
                      {exerciseAnswers["1-hello"] === true && (
                        <CheckCircle className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["1-goodbye"] === true
                          ? "default"
                          : exerciseAnswers["1-goodbye"] === false
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() => handleExerciseAnswer("1-goodbye", false)}
                    >
                      وداعًا{" "}
                      {exerciseAnswers["1-goodbye"] === false && (
                        <XCircle className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">2. Comment vas-tu ?</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["2-whatisyourname"] === true
                          ? "default"
                          : exerciseAnswers["2-whatisyourname"] === false
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() =>
                        handleExerciseAnswer("2-whatisyourname", false)
                      }
                    >
                      ما اسمك؟{" "}
                      {exerciseAnswers["2-whatisyourname"] === false && (
                        <XCircle className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["2-howareyou"] === true
                          ? "default"
                          : exerciseAnswers["2-howareyou"] === false
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() => handleExerciseAnswer("2-howareyou", true)}
                    >
                      كيف حالك؟{" "}
                      {exerciseAnswers["2-howareyou"] === true && (
                        <CheckCircle className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-muted">
                  <p className="mb-2">3. Je m'appelle...</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant={
                        exerciseAnswers["3-myname"] === true
                          ? "default"
                          : exerciseAnswers["3-myname"] === false
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-myname", true)}
                    >
                      اسمي...{" "}
                      {exerciseAnswers["3-myname"] === true && (
                        <CheckCircle className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant={
                        exerciseAnswers["3-ilike"] === true
                          ? "default"
                          : exerciseAnswers["3-ilike"] === false
                          ? "destructive"
                          : "outline"
                      }
                      onClick={() => handleExerciseAnswer("3-ilike", false)}
                    >
                      أنا أحب...{" "}
                      {exerciseAnswers["3-ilike"] === false && (
                        <XCircle className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </LessonLayout>
  );
}
