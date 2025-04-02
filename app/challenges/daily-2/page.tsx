import ChallengeLayout from "@/components/challenge-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DailyChallenge2() {
  return (
    <ChallengeLayout
      title="Verb Conjugation Sprint"
      arabicTitle="سباق تصريف الأفعال"
      description="Master the present tense of 5 common French verbs"
      arabicDescription="إتقان صيغة المضارع لـ 5 أفعال فرنسية شائعة"
      type="daily"
      number={2}
      progress={0}
      xpReward={60}
      difficulty="medium"
    >
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Today's Challenge</h2>
          <h2 className="text-lg font-semibold mb-4" dir="rtl">
            تحدي اليوم
          </h2>
          <p className="mb-2">
            Fill in the correct conjugation for each pronoun. Complete all 5 verbs to finish the challenge.
          </p>
          <p className="mb-4" dir="rtl">
            املأ التصريف الصحيح لكل ضمير. أكمل جميع الأفعال الخمسة لإنهاء التحدي.
          </p>

          <div className="space-y-6">
            {[
              {
                verb: "Aller (to go)",
                arabicVerb: "ذهب",
                conjugations: ["je vais", "tu vas", "il/elle va", "nous allons", "vous allez", "ils/elles vont"],
              },
              {
                verb: "Faire (to do/make)",
                arabicVerb: "فعل/صنع",
                conjugations: ["je fais", "tu fais", "il/elle fait", "nous faisons", "vous faites", "ils/elles font"],
              },
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white">
                <h3 className="text-lg font-medium mb-1">{item.verb}</h3>
                <h3 className="text-md font-medium mb-3" dir="rtl">
                  {item.arabicVerb}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["je", "tu", "il/elle", "nous", "vous", "ils/elles"].map((pronoun, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-16 text-gray-600">{pronoun}</span>
                      <Input placeholder="Type conjugation..." className="flex-1" />
                      <Button variant="ghost" size="icon" className="text-amber-500">
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Button variant="outline" className="gap-2">
              <ArrowRight className="h-4 w-4" />
              عرض المزيد من الأفعال
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-amber-50 border-amber-200">
          <div className="flex gap-3">
            <div className="mt-1">
              <BookOpen className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Conjugation Tip</h3>
              <p className="text-sm text-gray-700 mb-2">
                French verbs ending in <span className="font-medium">-er</span> follow a regular pattern, but many
                common verbs like <span className="font-medium">aller</span> and{" "}
                <span className="font-medium">faire</span> are irregular. These must be memorized individually.
              </p>
              <p className="text-sm text-gray-700" dir="rtl">
                الأفعال الفرنسية التي تنتهي بـ <span className="font-medium">-er</span> تتبع نمطًا منتظمًا، لكن العديد من
                الأفعال الشائعة مثل <span className="font-medium">aller</span> و{" "}
                <span className="font-medium">faire</span> غير منتظمة. يجب حفظ هذه الأفعال بشكل فردي.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline">حفظ التقدم</Button>
          <Button className="gap-2">
            إكمال التحدي
            <Check className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ChallengeLayout>
  )
}

