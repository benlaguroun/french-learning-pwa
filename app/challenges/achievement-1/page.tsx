import ChallengeLayout from "@/components/challenge-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Trophy, Star, ArrowRight, BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Achievement1() {
  return (
    <ChallengeLayout
      title="Vocabulary Master"
      arabicTitle="إتقان المفردات"
      description="Learn 100 essential French words across different categories"
      arabicDescription="تعلم 100 كلمة فرنسية أساسية عبر فئات مختلفة"
      type="achievement"
      number={1}
      progress={35}
      xpReward={300}
      difficulty="medium"
    >
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Achievement Progress</h2>
          <h2 className="text-lg font-semibold mb-4" dir="rtl">
            تقدم الإنجاز
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-1">
              <span>35/100 words mastered</span>
              <span className="font-medium">35%</span>
            </div>
            <Progress value={35} className="h-2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { category: "Food & Drink", arabicCategory: "الطعام والشراب", progress: 60, total: 20 },
                { category: "Travel", arabicCategory: "السفر", progress: 40, total: 20 },
                { category: "Home", arabicCategory: "المنزل", progress: 30, total: 20 },
                { category: "Work", arabicCategory: "العمل", progress: 20, total: 20 },
                { category: "Leisure", arabicCategory: "الترفيه", progress: 10, total: 20 },
              ].map((category, index) => (
                <Card key={index} className="p-4 border">
                  <h3 className="font-medium text-sm mb-1">{category.category}</h3>
                  <h3 className="font-medium text-sm mb-2" dir="rtl">
                    {category.arabicCategory}
                  </h3>
                  <Progress value={category.progress} className="h-1.5 mb-2" />
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">
                      {Math.round((category.progress / 100) * category.total)}/{category.total}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>{Math.round((category.progress / 100) * category.total * 3)}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Today's Word Set: Food & Drink</h2>
          <h2 className="text-lg font-semibold mb-4" dir="rtl">
            مجموعة كلمات اليوم: الطعام والشراب
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { french: "le pain", english: "bread", arabic: "الخبز", mastered: true },
              { french: "le fromage", english: "cheese", arabic: "الجبن", mastered: true },
              { french: "le vin", english: "wine", arabic: "النبيذ", mastered: true },
              { french: "la viande", english: "meat", arabic: "اللحم", mastered: false },
              { french: "les légumes", english: "vegetables", arabic: "الخضروات", mastered: false },
              { french: "le dessert", english: "dessert", arabic: "الحلوى", mastered: false },
              { french: "le petit-déjeuner", english: "breakfast", arabic: "الإفطار", mastered: false },
              { french: "le déjeuner", english: "lunch", arabic: "الغداء", mastered: false },
            ].map((word, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 ${word.mastered ? "bg-purple-50 border-purple-200" : "bg-white"}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{word.french}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <p>{word.english}</p>
                      <p dir="rtl">{word.arabic}</p>
                    </div>
                  </div>
                  <Button
                    variant={word.mastered ? "default" : "outline"}
                    size="sm"
                    className={word.mastered ? "bg-purple-500 hover:bg-purple-600" : ""}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    {word.mastered ? "تم الإتقان" : "تحديد كمتقن"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button className="gap-2">
              تدرب على هذه الكلمات
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-purple-50 border-purple-200">
          <div className="flex gap-3">
            <div className="mt-1">
              <BookOpen className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Vocabulary Learning Tip</h3>
              <p className="text-sm text-gray-700 mb-2">
                Group words by category and learn them in context rather than as isolated words. Try to use new
                vocabulary in sentences right away to help with retention. Reviewing words regularly is key to moving
                them into your long-term memory.
              </p>
              <p className="text-sm text-gray-700" dir="rtl">
                قم بتجميع الكلمات حسب الفئة وتعلمها في سياقها بدلاً من تعلمها ككلمات منعزلة. حاول استخدام المفردات
                الجديدة في جمل على الفور للمساعدة في الاحتفاظ بها. مراجعة الكلمات بانتظام هي المفتاح لنقلها إلى ذاكرتك
                طويلة المدى.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Achievement Rewards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                milestone: 25,
                reward: "Food & Drink Badge",
                description: "Complete 25% of vocabulary words",
                unlocked: true,
              },
              {
                milestone: 50,
                reward: "Vocabulary Enthusiast Badge",
                description: "Complete 50% of vocabulary words",
                unlocked: false,
              },
              {
                milestone: 100,
                reward: "Vocabulary Master Badge + 300 XP",
                description: "Complete all 100 vocabulary words",
                unlocked: false,
              },
            ].map((reward, index) => (
              <Card
                key={index}
                className={`p-4 border ${reward.unlocked ? "bg-purple-50 border-purple-200" : "bg-gray-50 border-gray-200"}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                      reward.unlocked ? "bg-purple-100" : "bg-gray-200"
                    }`}
                  >
                    <Trophy className={`h-6 w-6 ${reward.unlocked ? "text-purple-500" : "text-gray-400"}`} />
                  </div>
                  <h3 className="font-medium">{reward.reward}</h3>
                  <p className="text-xs text-gray-500 mt-1">{reward.description}</p>
                  <div className="mt-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        reward.unlocked ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {reward.unlocked ? "Unlocked" : `${reward.milestone}% Required`}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline">حفظ التقدم</Button>
          <Button className="gap-2">
            متابعة التعلم
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ChallengeLayout>
  )
}

