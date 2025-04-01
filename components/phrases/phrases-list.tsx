"use client"

import { useState } from "react"
import { Play, Bookmark, BookmarkCheck, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function PhrasesList() {
  // Mock data for phrases
  const phrasesData = [
    {
      id: 1,
      category: "greetings",
      french: "Bonjour",
      arabic: "صباح الخير",
      pronunciation: "bon-ZHOOR",
      difficulty: "beginner",
      hasAudio: true,
      examples: [{ french: "Bonjour, comment allez-vous?", arabic: "صباح الخير، كيف حالك؟" }],
      notes: "يستخدم للتحية في الصباح والنهار",
    },
    {
      id: 2,
      category: "greetings",
      french: "Bonsoir",
      arabic: "مساء الخير",
      pronunciation: "bon-SWAHR",
      difficulty: "beginner",
      hasAudio: true,
      examples: [{ french: "Bonsoir, tout le monde!", arabic: "مساء الخير للجميع!" }],
      notes: "يستخدم للتحية في المساء",
    },
    {
      id: 3,
      category: "greetings",
      french: "Au revoir",
      arabic: "إلى اللقاء",
      pronunciation: "oh ruh-VWAHR",
      difficulty: "beginner",
      hasAudio: true,
      examples: [{ french: "Au revoir et à bientôt!", arabic: "إلى اللقاء وإلى اللقاء القريب!" }],
      notes: "يستخدم عند المغادرة",
    },
    {
      id: 4,
      category: "dining",
      french: "L'addition, s'il vous plaît",
      arabic: "الحساب من فضلك",
      pronunciation: "lah-dee-see-ON, seel voo PLEH",
      difficulty: "intermediate",
      hasAudio: true,
      examples: [{ french: "Excusez-moi, l'addition s'il vous plaît.", arabic: "عذراً، الحساب من فضلك." }],
      notes: "يستخدم لطلب الحساب في المطعم",
    },
    {
      id: 5,
      category: "travel",
      french: "Où est la gare?",
      arabic: "أين محطة القطار؟",
      pronunciation: "oo eh la GAR",
      difficulty: "beginner",
      hasAudio: true,
      examples: [{ french: "Excusez-moi, où est la gare, s'il vous plaît?", arabic: "عذراً، أين محطة القطار من فضلك؟" }],
      notes: "سؤال مفيد عند البحث عن محطة القطار",
    },
    {
      id: 6,
      category: "emergency",
      french: "Au secours!",
      arabic: "النجدة!",
      pronunciation: "oh suh-KOOR",
      difficulty: "beginner",
      hasAudio: true,
      examples: [{ french: "Au secours! J'ai besoin d'aide!", arabic: "النجدة! أحتاج للمساعدة!" }],
      notes: "يستخدم في حالات الطوارئ لطلب المساعدة",
    },
    {
      id: 7,
      category: "smalltalk",
      french: "Quel temps fait-il?",
      arabic: "كيف الطقس؟",
      pronunciation: "kel tahm feh-TEEL",
      difficulty: "intermediate",
      hasAudio: true,
      examples: [{ french: "Quel temps fait-il aujourd'hui?", arabic: "كيف الطقس اليوم؟" }],
      notes: "سؤال شائع عن حالة الطقس",
    },
    {
      id: 8,
      category: "shopping",
      french: "C'est combien?",
      arabic: "كم سعر هذا؟",
      pronunciation: "seh kohm-BYEN",
      difficulty: "beginner",
      hasAudio: true,
      examples: [{ french: "Excusez-moi, c'est combien?", arabic: "عذراً، كم سعر هذا؟" }],
      notes: "سؤال عن السعر عند التسوق",
    },
  ]

  // State for expanded phrases and favorites
  const [expandedPhrases, setExpandedPhrases] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("all")

  // Toggle expanded state for a phrase
  const toggleExpand = (id: number) => {
    setExpandedPhrases((prev) => (prev.includes(id) ? prev.filter((phraseId) => phraseId !== id) : [...prev, id]))
  }

  // Toggle favorite state for a phrase
  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((phraseId) => phraseId !== id) : [...prev, id]))
  }

  // Filter phrases based on active tab
  const getFilteredPhrases = () => {
    if (activeTab === "all") return phrasesData
    return phrasesData.filter((phrase) => phrase.category === activeTab)
  }

  // Get difficulty badge variant
  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "success"
      case "intermediate":
        return "warning"
      case "advanced":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="all">الكل</TabsTrigger>
          <TabsTrigger value="greetings">التحيات</TabsTrigger>
          <TabsTrigger value="travel">السفر</TabsTrigger>
          <TabsTrigger value="dining">المطاعم</TabsTrigger>
          <TabsTrigger value="shopping">التسوق</TabsTrigger>
          <TabsTrigger value="emergency">الطوارئ</TabsTrigger>
          <TabsTrigger value="smalltalk">محادثات قصيرة</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-4">
            {getFilteredPhrases().map((phrase) => (
              <Card key={phrase.id} className="overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant={getDifficultyBadge(phrase.difficulty)} className="mb-2">
                        {phrase.difficulty === "beginner"
                          ? "مبتدئ"
                          : phrase.difficulty === "intermediate"
                            ? "متوسط"
                            : "متقدم"}
                      </Badge>
                      {phrase.hasAudio && (
                        <Badge variant="outline" className="mr-2 mb-2">
                          مع صوت
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => toggleFavorite(phrase.id)}>
                      {favorites.includes(phrase.id) ? (
                        <BookmarkCheck className="h-5 w-5 text-primary" />
                      ) : (
                        <Bookmark className="h-5 w-5" />
                      )}
                    </Button>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-primary">{phrase.french}</h3>
                    <p className="text-lg">{phrase.arabic}</p>
                    <p className="text-sm text-muted-foreground">النطق: {phrase.pronunciation}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="text-xs" onClick={() => toggleExpand(phrase.id)}>
                      {expandedPhrases.includes(phrase.id) ? (
                        <>
                          <ChevronUp className="h-4 w-4 ml-1" />
                          إخفاء التفاصيل
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 ml-1" />
                          عرض التفاصيل
                        </>
                      )}
                    </Button>

                    <Button variant="secondary" size="sm" className="text-xs">
                      <Play className="h-4 w-4 ml-1" />
                      استماع
                    </Button>
                  </div>

                  {expandedPhrases.includes(phrase.id) && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold mb-2">أمثلة:</h4>
                      {phrase.examples.map((example, index) => (
                        <div key={index} className="mb-2">
                          <p className="text-primary">{example.french}</p>
                          <p>{example.arabic}</p>
                        </div>
                      ))}

                      {phrase.notes && (
                        <>
                          <h4 className="font-semibold mb-2 mt-4">ملاحظات:</h4>
                          <p className="text-sm">{phrase.notes}</p>
                        </>
                      )}

                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">تقدمك:</h4>
                        <Progress value={33} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">استمعت 2 من 6 مرات</p>
                      </div>

                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">
                          تمرين النطق
                        </Button>
                        <Button variant="default" size="sm">
                          حفظ العبارة
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

