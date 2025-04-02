import ChallengeLayout from "@/components/challenge-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Volume2, Lightbulb } from "lucide-react";

export default function DailyChallenge1() {
  return (
    <ChallengeLayout
      title="Perfect Pronunciation"
      arabicTitle="النطق المثالي"
      description="Master the pronunciation of 5 tricky French words"
      arabicDescription="إتقان نطق 5 كلمات فرنسية صعبة"
      type="daily"
      number={1}
      progress={0}
      xpReward={50}
      difficulty="easy"
    >
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Today's Challenge</h2>
          <h2 className="text-lg font-semibold mb-4" dir="rtl">
            تحدي اليوم
          </h2>
          {/* <p className="mb-2">
            Listen to each word and practice your pronunciation. Record yourself and compare with the native speaker.
            Try to match the accent and intonation as closely as possible.
          </p> */}
          <p className="mb-4" dir="rtl">
            استمع إلى كل كلمة وتدرب على نطقك. سجل نفسك وقارن مع المتحدث الأصلي.
            حاول مطابقة اللهجة والنغمة قدر الإمكان.
          </p>

          <div className="space-y-4">
            {[
              {
                word: "serrurerie",
                translation: "locksmithing",
                phonetic: "/sɛʁyʁəʁi/",
                arabic: "صناعة الأقفال",
              },
              {
                word: "écureuil",
                translation: "squirrel",
                phonetic: "/ekyʁœj/",
                arabic: "سنجاب",
              },
              {
                word: "bouilloire",
                translation: "kettle",
                phonetic: "/bujwaʁ/",
                arabic: "غلاية",
              },
              {
                word: "grenouille",
                translation: "frog",
                phonetic: "/ɡʁənuj/",
                arabic: "ضفدع",
              },
              {
                word: "feuille",
                translation: "leaf",
                phonetic: "/fœj/",
                arabic: "ورقة",
              },
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-lg font-medium">{item.word}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      {item.phonetic}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-amber-500"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-gray-600 text-sm">"{item.translation}"</p>
                  <p className="text-gray-600 text-sm" dir="rtl">
                    "{item.arabic}"
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    تسجيل
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    استماع
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    مقارنة
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-amber-50 border-amber-200">
          <div className="flex gap-3">
            <div className="mt-1">
              <Lightbulb className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Pronunciation Tip</h3>
              <p className="text-sm text-gray-700 mb-2">
                French "R" sounds are produced in the back of the throat, unlike
                English. Try making a gentle gargling sound to practice the
                correct position.
              </p>
              <p className="text-sm text-gray-700" dir="rtl">
                يتم إنتاج أصوات "R" الفرنسية في مؤخرة الحلق، على عكس اللغة
                الإنجليزية. حاول إصدار صوت غرغرة لطيف للتدرب على الوضع الصحيح.
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
  );
}
