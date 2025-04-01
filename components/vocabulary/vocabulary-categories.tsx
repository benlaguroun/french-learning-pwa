import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

// Define vocabulary categories with Arabic text
const categories = [
  {
    id: 1,
    title: "الطعام والمطبخ",
    description: "تعلم المفردات المتعلقة بالطعام والمطبخ والمطاعم",
    icon: "🍽️",
    count: 120,
    progress: 65,
    level: "متوسط",
    popular: true,
  },
  {
    id: 2,
    title: "السفر والسياحة",
    description: "مفردات أساسية للسفر والتنقل والإقامة",
    icon: "✈️",
    count: 95,
    progress: 30,
    level: "متوسط",
    popular: true,
  },
  {
    id: 3,
    title: "العائلة والعلاقات",
    description: "مفردات عن العائلة والأصدقاء والعلاقات الاجتماعية",
    icon: "👪",
    count: 75,
    progress: 80,
    level: "مبتدئ",
    popular: false,
  },
  {
    id: 4,
    title: "الأرقام والوقت",
    description: "تعلم الأرقام والساعة والتاريخ بالفرنسية",
    icon: "🔢",
    count: 60,
    progress: 90,
    level: "مبتدئ",
    popular: true,
  },
  {
    id: 5,
    title: "الألوان والأشكال",
    description: "مفردات الألوان والأشكال والأحجام",
    icon: "🎨",
    count: 45,
    progress: 20,
    level: "مبتدئ",
    popular: false,
  },
  {
    id: 6,
    title: "المهن والعمل",
    description: "مفردات متعلقة بالمهن وبيئة العمل",
    icon: "💼",
    count: 85,
    progress: 10,
    level: "متقدم",
    popular: false,
  },
  {
    id: 7,
    title: "الصحة والجسم",
    description: "مفردات عن أجزاء الجسم والصحة والطب",
    icon: "🏥",
    count: 110,
    progress: 45,
    level: "متوسط",
    popular: true,
  },
  {
    id: 8,
    title: "المنزل والأثاث",
    description: "مفردات عن المنزل والغرف والأثاث",
    icon: "🏠",
    count: 70,
    progress: 60,
    level: "مبتدئ",
    popular: false,
  },
  {
    id: 9,
    title: "الطبيعة والبيئة",
    description: "مفردات عن الطبيعة والحيوانات والطقس",
    icon: "🌳",
    count: 90,
    progress: 25,
    level: "متوسط",
    popular: false,
  },
  {
    id: 10,
    title: "التكنولوجيا والإنترنت",
    description: "مفردات حديثة عن التكنولوجيا والإنترنت",
    icon: "💻",
    count: 65,
    progress: 15,
    level: "متقدم",
    popular: true,
  },
  {
    id: 11,
    title: "الرياضة والهوايات",
    description: "مفردات عن الرياضات المختلفة والهوايات",
    icon: "⚽",
    count: 80,
    progress: 40,
    level: "متوسط",
    popular: true,
  },
  {
    id: 12,
    title: "الملابس والموضة",
    description: "مفردات عن الملابس والإكسسوارات والموضة",
    icon: "👕",
    count: 55,
    progress: 70,
    level: "مبتدئ",
    popular: false,
  },
]

export function VocabularyCategories() {
  return (
    <div className="space-y-6 rtl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="ابحث عن مجموعة مفردات..." className="pl-3 pr-10 w-full md:w-[300px]" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            المستوى
          </Button>
          <Button variant="outline" size="sm">
            التقدم
          </Button>
          <Button variant="outline" size="sm">
            الترتيب
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">جميع المفردات</TabsTrigger>
          <TabsTrigger value="popular">الأكثر شيوعاً</TabsTrigger>
          <TabsTrigger value="beginner">للمبتدئين</TabsTrigger>
          <TabsTrigger value="intermediate">للمتوسطين</TabsTrigger>
          <TabsTrigger value="advanced">للمتقدمين</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <Badge
                      variant={
                        category.level === "مبتدئ" ? "success" : category.level === "متوسط" ? "warning" : "destructive"
                      }
                    >
                      {category.level}
                    </Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{category.count} كلمة</span>
                    <span>{category.progress}% مكتمل</span>
                  </div>
                  <Progress value={category.progress} className="h-2" />
                </CardContent>
                <CardFooter className="pt-2">
                  <Button className="w-full">استعرض المفردات</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .filter((c) => c.popular)
              .map((category) => (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <Badge
                        variant={
                          category.level === "مبتدئ"
                            ? "success"
                            : category.level === "متوسط"
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {category.level}
                      </Badge>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{category.count} كلمة</span>
                      <span>{category.progress}% مكتمل</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">استعرض المفردات</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="beginner" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .filter((c) => c.level === "مبتدئ")
              .map((category) => (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <Badge variant="success">{category.level}</Badge>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{category.count} كلمة</span>
                      <span>{category.progress}% مكتمل</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">استعرض المفردات</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="intermediate" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .filter((c) => c.level === "متوسط")
              .map((category) => (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <Badge variant="warning">{category.level}</Badge>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{category.count} كلمة</span>
                      <span>{category.progress}% مكتمل</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">استعرض المفردات</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .filter((c) => c.level === "متقدم")
              .map((category) => (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <Badge variant="destructive">{category.level}</Badge>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{category.count} كلمة</span>
                      <span>{category.progress}% مكتمل</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">استعرض المفردات</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

