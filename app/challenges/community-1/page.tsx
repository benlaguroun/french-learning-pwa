import ChallengeLayout from "@/components/challenge-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Users, MessageSquare, ThumbsUp, Send } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function CommunityChallenge1() {
  return (
    <ChallengeLayout
      title="French Film Discussion"
      arabicTitle="مناقشة فيلم فرنسي"
      description="Watch a French film and discuss it with the community"
      arabicDescription="شاهد فيلمًا فرنسيًا وناقشه مع المجتمع"
      type="community"
      number={1}
      progress={50}
      xpReward={150}
      difficulty="medium"
    >
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Challenge Details</h2>
          <h2 className="text-lg font-semibold mb-4" dir="rtl">
            تفاصيل التحدي
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3">
              <div className="aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=450&width=300"
                  alt="Amélie Movie Poster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 space-y-4">
              <div>
                <h3 className="text-lg font-medium">Le Fabuleux Destin d'Amélie Poulain (2001)</h3>
                <p className="text-sm text-gray-500">Directed by Jean-Pierre Jeunet</p>
                <p className="text-sm text-gray-500" dir="rtl">
                  إخراج جان-بيير جونيه
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Synopsis</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Amélie is a shy waitress in a Montmartre café who decides to change the lives of those around her for
                  the better, while struggling with her own isolation. The film is a whimsical depiction of contemporary
                  Parisian life, set in Montmartre.
                </p>
                <p className="text-sm text-gray-700" dir="rtl">
                  أميلي هي نادلة خجولة في مقهى مونمارتر تقرر تغيير حياة من حولها للأفضل، بينما تكافح مع عزلتها الخاصة.
                  الفيلم هو تصوير خيالي للحياة الباريسية المعاصرة، يقع في مونمارتر.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Challenge Instructions</h4>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside mb-2">
                  <li>Watch the film with French audio (English subtitles allowed)</li>
                  <li>Note down 10 new French words or expressions you learned</li>
                  <li>Participate in the community discussion below</li>
                  <li>Share your favorite scene and why you liked it</li>
                </ol>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside" dir="rtl">
                  <li>شاهد الفيلم بالصوت الفرنسي (يسمح بالترجمة العربية)</li>
                  <li>دوّن 10 كلمات أو تعبيرات فرنسية جديدة تعلمتها</li>
                  <li>شارك في مناقشة المجتمع أدناه</li>
                  <li>شارك مشهدك المفضل وسبب إعجابك به</li>
                </ol>
              </div>

              <div className="flex items-center gap-3">
                <Button className="gap-2">
                  <Check className="h-4 w-4" />
                  تمت المشاهدة
                </Button>
                <Button variant="outline">خيارات البث</Button>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <span>مناقشة المجتمع</span>
              </h3>
              <div className="text-sm text-gray-500">
                <span className="font-medium">42</span> مشارك
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {[
                {
                  user: "Sophie",
                  avatar: "S",
                  time: "2 days ago",
                  content:
                    "J'adore ce film ! Mon expression préférée était « avoir le béguin pour quelqu'un » (to have a crush on someone). Quelle est votre scène préférée ?",
                  likes: 15,
                },
                {
                  user: "Marc",
                  avatar: "M",
                  time: "1 day ago",
                  content:
                    "Ma scène préférée est quand Amélie fait la chasse au trésor pour Nino. C'est très créatif et romantique !",
                  likes: 8,
                },
              ].map((comment, index) => (
                <div key={index} className="flex gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-800">{comment.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{comment.user}</span>
                      <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-8 gap-1 text-gray-500">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{comment.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-gray-500">
                        الرد
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback className="bg-blue-100 text-blue-800">Y</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea placeholder="شارك أفكارك بالفرنسية أو العربية..." className="mb-2 resize-none" dir="auto" />
                <div className="flex justify-end">
                  <Button className="gap-2">
                    <Send className="h-4 w-4" />
                    نشر تعليق
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-blue-50 border-blue-200">
          <div className="flex gap-3">
            <div className="mt-1">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community Tip</h3>
              <p className="text-sm text-gray-700 mb-2">
                Try to write at least part of your comment in French, even if it's just a simple sentence. Other
                community members are here to help and will appreciate your effort to practice the language!
              </p>
              <p className="text-sm text-gray-700" dir="rtl">
                حاول كتابة جزء من تعليقك على الأقل بالفرنسية، حتى لو كانت مجرد جملة بسيطة. أعضاء المجتمع الآخرون هنا
                للمساعدة وسيقدرون جهدك في ممارسة اللغة!
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

