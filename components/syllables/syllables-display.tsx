"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { VolumeIcon as VolumeUp, Search, Info, BookOpen, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

// Define syllable categories and their content
const syllableCategories = [
  {
    id: "basic",
    name: "المقاطع الأساسية",
    description: "المقاطع الفرنسية الأساسية للمبتدئين",
    syllables: [
      { id: "ba", text: "ba", pronunciation: "/ba/", examples: ["ba|teau (قارب)", "ba|nane (موز)"] },
      { id: "be", text: "be", pronunciation: "/bə/", examples: ["be|soin (حاجة)", "be|lette (ابن عرس)"] },
      { id: "bi", text: "bi", pronunciation: "/bi/", examples: ["bi|jou (مجوهرات)", "bi|cycle (دراجة)"] },
      { id: "bo", text: "bo", pronunciation: "/bo/", examples: ["bo|nheur (سعادة)", "bo|tanique (نباتي)"] },
      { id: "bu", text: "bu", pronunciation: "/by/", examples: ["bu|reau (مكتب)", "bu|vette (مقصف)"] },
      { id: "ca", text: "ca", pronunciation: "/ka/", examples: ["ca|fé (قهوة)", "ca|deau (هدية)"] },
      { id: "ce", text: "ce", pronunciation: "/sə/", examples: ["ce|rise (كرز)", "ce|lui (هذا)"] },
      { id: "ci", text: "ci", pronunciation: "/si/", examples: ["ci|tron (ليمون)", "ci|néma (سينما)"] },
      { id: "co", text: "co", pronunciation: "/ko/", examples: ["co|quille (صدفة)", "co|llège (مدرسة متوسطة)"] },
      { id: "cu", text: "cu", pronunciation: "/ky/", examples: ["cu|isine (مطبخ)", "cu|rieux (فضولي)"] },
    ],
  },
  {
    id: "compound",
    name: "المقاطع المركبة",
    description: "مجموعات مقاطع أكثر تعقيدًا",
    syllables: [
      { id: "ble", text: "ble", pronunciation: "/blə/", examples: ["ta|ble (طاولة)", "trem|ble (يرتجف)"] },
      { id: "che", text: "che", pronunciation: "/ʃə/", examples: ["va|che (بقرة)", "bou|che (فم)"] },
      { id: "cle", text: "cle", pronunciation: "/klə/", examples: ["bou|cle (حلقة)", "cy|cle (دورة)"] },
      { id: "dre", text: "dre", pronunciation: "/dʁə/", examples: ["pren|dre (يأخذ)", "ven|dre (يبيع)"] },
      { id: "fle", text: "fle", pronunciation: "/flə/", examples: ["souf|fle (نفس)", "gon|fle (منتفخ)"] },
      { id: "gne", text: "gne", pronunciation: "/ɲə/", examples: ["vi|gne (كرمة)", "mon|ta|gne (جبل)"] },
      { id: "ple", text: "ple", pronunciation: "/plə/", examples: ["sim|ple (بسيط)", "tem|ple (معبد)"] },
      { id: "pre", text: "pre", pronunciation: "/pʁə/", examples: ["a|près (بعد)", "com|pren|dre (يفهم)"] },
      { id: "que", text: "que", pronunciation: "/kə/", examples: ["cha|que (كل)", "ban|que (بنك)"] },
      { id: "tre", text: "tre", pronunciation: "/tʁə/", examples: ["no|tre (لنا)", "fen|ê|tre (نافذة)"] },
    ],
  },
  {
    id: "nasal",
    name: "المقاطع الأنفية",
    description: "المقاطع ذات الأصوات الأنفية الفريدة في الفرنسية",
    syllables: [
      { id: "an", text: "an", pronunciation: "/ɑ̃/", examples: ["en|fant (طفل)", "chan|ter (يغني)"] },
      { id: "ain", text: "ain", pronunciation: "/ɛ̃/", examples: ["pain (خبز)", "main (يد)"] },
      { id: "ein", text: "ein", pronunciation: "/ɛ̃/", examples: ["plein (ممتلئ)", "pein|ture (رسم)"] },
      { id: "en", text: "en", pronunciation: "/ɑ̃/", examples: ["en|tre (بين)", "ven|dre (يبيع)"] },
      { id: "in", text: "in", pronunciation: "/ɛ̃/", examples: ["vin (نبيذ)", "jar|din (حديقة)"] },
      { id: "on", text: "on", pronunciation: "/ɔ̃/", examples: ["bon (جيد)", "mon|de (عالم)"] },
      { id: "om", text: "om", pronunciation: "/ɔ̃/", examples: ["nom (اسم)", "com|bien (كم)"] },
      { id: "un", text: "un", pronunciation: "/œ̃/", examples: ["un (واحد)", "brun (بني)"] },
      { id: "oin", text: "oin", pronunciation: "/wɛ̃/", examples: ["loin (بعيد)", "coin (زاوية)"] },
      { id: "ien", text: "ien", pronunciation: "/jɛ̃/", examples: ["bien (جيد)", "chien (كلب)"] },
    ],
  },
  {
    id: "vowel",
    name: "مجموعات الحروف المتحركة",
    description: "مجموعات الحروف المتحركة الشائعة في الفرنسية",
    syllables: [
      { id: "ai", text: "ai", pronunciation: "/ɛ/", examples: ["mai|son (منزل)", "lai|t (حليب)"] },
      { id: "au", text: "au", pronunciation: "/o/", examples: ["au|tre (آخر)", "sau|ter (يقفز)"] },
      { id: "eau", text: "eau", pronunciation: "/o/", examples: ["beau (جميل)", "cha|teau (قلعة)"] },
      { id: "ei", text: "ei", pronunciation: "/ɛ/", examples: ["nei|ge (ثلج)", "sei|ze (ستة عشر)"] },
      { id: "eu", text: "eu", pronunciation: "/ø/ أو /œ/", examples: ["bleu (أزرق)", "peu (قليل)"] },
      { id: "oe", text: "oe", pronunciation: "/œ/", examples: ["coeur (قلب)", "soeur (أخت)"] },
      { id: "oi", text: "oi", pronunciation: "/wa/", examples: ["voi|ture (سيارة)", "boi|re (يشرب)"] },
      { id: "ou", text: "ou", pronunciation: "/u/", examples: ["cou (رقبة)", "bou|che (فم)"] },
      { id: "ui", text: "ui", pronunciation: "/ɥi/", examples: ["nuit (ليل)", "fruit (فاكهة)"] },
      { id: "ie", text: "ie", pronunciation: "/i/", examples: ["a|mie (صديقة)", "sor|tie (خروج)"] },
    ],
  },
]

export function SyllablesDisplay() {
  const [selectedCategory, setSelectedCategory] = useState(syllableCategories[0].id)
  const [selectedSyllable, setSelectedSyllable] = useState(syllableCategories[0].syllables[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [playbackSpeed, setPlaybackSpeed] = useState([1.0])
  const [practiceProgress, setPracticeProgress] = useState(0)

  // Filter syllables based on search query
  const filteredSyllables =
    syllableCategories
      .find((cat) => cat.id === selectedCategory)
      ?.syllables.filter(
        (syllable) =>
          syllable.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          syllable.examples.some((ex) => ex.toLowerCase().includes(searchQuery.toLowerCase())),
      ) || []

  // Handle syllable selection
  const handleSyllableSelect = (syllable: any) => {
    setSelectedSyllable(syllable)
    // Simulate progress update
    setPracticeProgress(Math.min(100, practiceProgress + 5))
  }

  // Simulate audio playback
  const playAudio = () => {
    console.log(`Playing audio for syllable: ${selectedSyllable.text}`)
    // In a real implementation, this would play an audio file
  }

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Right sidebar - Categories and syllable list */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>المقاطع الصوتية الفرنسية</CardTitle>
              <CardDescription>تعلم نطق المقاطع الصوتية الفرنسية بشكل صحيح</CardDescription>
              <div className="relative mt-2">
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="ابحث عن المقاطع..."
                  className="pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid grid-cols-2 mb-4 w-full">
                  <TabsTrigger value="basic">أساسية</TabsTrigger>
                  <TabsTrigger value="compound">مركبة</TabsTrigger>
                </TabsList>
                <TabsList className="grid grid-cols-2 mb-4 w-full">
                  <TabsTrigger value="nasal">أنفية</TabsTrigger>
                  <TabsTrigger value="vowel">حروف متحركة</TabsTrigger>
                </TabsList>

                {syllableCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <div className="text-sm text-muted-foreground mb-4">{category.description}</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {filteredSyllables.map((syllable) => (
                        <Button
                          key={syllable.id}
                          variant={selectedSyllable.id === syllable.id ? "default" : "outline"}
                          className="h-12 text-lg font-medium"
                          onClick={() => handleSyllableSelect(syllable)}
                        >
                          {syllable.text}
                        </Button>
                      ))}
                    </div>
                    {filteredSyllables.length === 0 && (
                      <div className="text-center py-4 text-muted-foreground">لا توجد مقاطع تطابق "{searchQuery}"</div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Main content - Syllable details */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-3xl font-bold">{selectedSyllable.text}</CardTitle>
                <Button variant="outline" size="icon" onClick={playAudio}>
                  <VolumeUp className="h-5 w-5" />
                </Button>
              </div>
              <CardDescription>
                النطق: <span className="font-mono">{selectedSyllable.pronunciation}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <BookOpen className="ml-2 h-5 w-5" />
                  أمثلة على الكلمات
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSyllable.examples.map((example, index) => (
                    <div key={index} className="p-3 bg-secondary rounded-md">
                      <div className="text-lg">{example}</div>
                      <Button variant="ghost" size="sm" className="mt-1" onClick={playAudio}>
                        <Play className="h-3 w-3 ml-1" /> استمع
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Info className="ml-2 h-5 w-5" />
                  نصائح النطق
                </h3>
                <div className="p-4 bg-secondary/50 rounded-md">
                  <p className="mb-2">
                    عند نطق <strong>{selectedSyllable.text}</strong>، تذكر:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mr-4">
                    <li>ركز على الصوت الدقيق، وليس على الهجاء</li>
                    <li>انتبه إلى وضعية الفم</li>
                    <li>تدرب باستخدام الكلمات المثال</li>
                    {selectedSyllable.text.includes("n") && <li>هذا صوت أنفي - يتدفق الهواء عبر أنفك</li>}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">سرعة التشغيل</h3>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Slider
                    value={playbackSpeed}
                    min={0.5}
                    max={2}
                    step={0.1}
                    onValueChange={setPlaybackSpeed}
                    className="w-full"
                  />
                  <span className="w-12 text-center">{playbackSpeed[0]}x</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>تقدم التدريب</CardTitle>
              <CardDescription>تتبع تقدمك في تعلم المقاطع الصوتية الفرنسية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">التقدم الإجمالي</span>
                  <span className="text-sm font-medium">{practiceProgress}%</span>
                </div>
                <Progress value={practiceProgress} className="h-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">الفئات المتقنة</h4>
                  <div className="flex flex-wrap gap-2">
                    {syllableCategories.map((category, index) => (
                      <Badge key={index} variant={index % 3 === 0 ? "default" : "secondary"}>
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">سلسلة التدريب</h4>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">7</div>
                    <div className="mr-2 text-sm text-muted-foreground">أيام متتالية</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="w-full sm:w-auto">ابدأ جلسة التدريب</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

