"use client"

import { useState } from "react"
import GameLayout from "@/components/games/game-layout"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Clock, Zap, Brain, Award, Calendar, Puzzle, BookOpen } from "lucide-react"

// Mock achievement data (in a real app, this would come from a database)
const ACHIEVEMENTS = {
  wordMatch: [
    {
      id: "wm1",
      title: "مبتدئ المطابقة",
      description: "أكمل 5 ألعاب مطابقة الكلمات",
      icon: <Puzzle className="h-6 w-6" />,
      progress: 3,
      target: 5,
      completed: false,
      reward: "50 نقطة",
    },
    {
      id: "wm2",
      title: "خبير المطابقة",
      description: "أكمل لعبة مطابقة الكلمات بدون أخطاء",
      icon: <Star className="h-6 w-6" />,
      progress: 0,
      target: 1,
      completed: false,
      reward: "100 نقطة",
    },
    {
      id: "wm3",
      title: "سريع المطابقة",
      description: "أكمل لعبة مطابقة الكلمات في أقل من 30 ثانية",
      icon: <Clock className="h-6 w-6" />,
      progress: 0,
      target: 1,
      completed: false,
      reward: "75 نقطة",
    },
  ],
  memory: [
    {
      id: "mem1",
      title: "ذاكرة قوية",
      description: "أكمل 3 ألعاب ذاكرة",
      icon: <Brain className="h-6 w-6" />,
      progress: 2,
      target: 3,
      completed: false,
      reward: "50 نقطة",
    },
    {
      id: "mem2",
      title: "ذاكرة فوتوغرافية",
      description: "أكمل لعبة ذاكرة في أقل من 20 حركة",
      icon: <Zap className="h-6 w-6" />,
      progress: 0,
      target: 1,
      completed: false,
      reward: "100 نقطة",
    },
  ],
  hangman: [
    {
      id: "hm1",
      title: "مخمن الكلمات",
      description: "اربح 5 ألعاب شنق",
      icon: <Award className="h-6 w-6" />,
      progress: 3,
      target: 5,
      completed: false,
      reward: "75 نقطة",
    },
    {
      id: "hm2",
      title: "مخمن محترف",
      description: "اربح لعبة شنق بدون أخطاء",
      icon: <Star className="h-6 w-6" />,
      progress: 1,
      target: 1,
      completed: true,
      reward: "100 نقطة",
    },
  ],
  quiz: [
    {
      id: "qz1",
      title: "طالب مجتهد",
      description: "أكمل 3 اختبارات",
      icon: <BookOpen className="h-6 w-6" />,
      progress: 3,
      target: 3,
      completed: true,
      reward: "50 نقطة",
    },
    {
      id: "qz2",
      title: "عبقري اللغة",
      description: "احصل على علامة كاملة في اختبار",
      icon: <Brain className="h-6 w-6" />,
      progress: 0,
      target: 1,
      completed: false,
      reward: "150 نقطة",
    },
  ],
  timeChallenge: [
    {
      id: "tc1",
      title: "متحدي الوقت",
      description: "سجل 10 نقاط في تحدي الوقت",
      icon: <Clock className="h-6 w-6" />,
      progress: 8,
      target: 10,
      completed: false,
      reward: "75 نقطة",
    },
    {
      id: "tc2",
      title: "سريع الاستجابة",
      description: "سجل 20 نقطة في تحدي الوقت",
      icon: <Zap className="h-6 w-6" />,
      progress: 0,
      target: 1,
      completed: false,
      reward: "150 نقطة",
    },
  ],
  overall: [
    {
      id: "ov1",
      title: "متعلم مثابر",
      description: "العب كل الألعاب مرة واحدة على الأقل",
      icon: <Trophy className="h-6 w-6" />,
      progress: 4,
      target: 5,
      completed: false,
      reward: "100 نقطة",
    },
    {
      id: "ov2",
      title: "متعلم يومي",
      description: "العب 5 أيام متتالية",
      icon: <Calendar className="h-6 w-6" />,
      progress: 3,
      target: 5,
      completed: false,
      reward: "200 نقطة",
    },
    {
      id: "ov3",
      title: "متقن اللغة",
      description: "أكمل 10 إنجازات",
      icon: <Award className="h-6 w-6" />,
      progress: 2,
      target: 10,
      completed: false,
      reward: "500 نقطة",
    },
  ],
}

// Mock user stats
const USER_STATS = {
  totalPoints: 325,
  gamesPlayed: 15,
  wordsLearned: 48,
  achievementsCompleted: 2,
  streakDays: 3,
  level: 3,
  levelProgress: 65,
}

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState("overall")
  const [achievements, setAchievements] = useState(ACHIEVEMENTS)
  const [userStats, setUserStats] = useState(USER_STATS)

  // Calculate total achievements and completed achievements
  const totalAchievements = Object.values(achievements).flat().length
  const completedAchievements = Object.values(achievements)
    .flat()
    .filter((achievement) => achievement.completed).length

  // Calculate overall progress percentage
  const overallProgress = Math.round((completedAchievements / totalAchievements) * 100)

  return (
    <GameLayout title="الإنجازات" description="تتبع تقدمك وإنجازاتك في تعلم اللغة الفرنسية">
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {userStats.level}
              </div>
              <Badge className="absolute -top-2 -right-2">المستوى</Badge>
            </div>
            <div>
              <h2 className="text-xl font-bold">المتعلم النشط</h2>
              <p className="text-muted-foreground">استمر في التعلم للوصول إلى المستوى التالي!</p>
              <div className="mt-2">
                <Progress value={userStats.levelProgress} className="h-2" />
                <p className="text-sm text-right mt-1">
                  {userStats.levelProgress}% إلى المستوى {userStats.level + 1}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
            <div className="text-center">
              <p className="text-2xl font-bold">{userStats.totalPoints}</p>
              <p className="text-sm text-muted-foreground">النقاط</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{userStats.gamesPlayed}</p>
              <p className="text-sm text-muted-foreground">الألعاب</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{userStats.wordsLearned}</p>
              <p className="text-sm text-muted-foreground">الكلمات</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-right">التقدم العام</h2>
        <Card className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">الإنجازات المكتملة</span>
            <span className="font-medium">
              {completedAchievements} / {totalAchievements}
            </span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
          <TabsTrigger value="overall">عام</TabsTrigger>
          <TabsTrigger value="wordMatch">مطابقة الكلمات</TabsTrigger>
          <TabsTrigger value="memory">الذاكرة</TabsTrigger>
          <TabsTrigger value="hangman">الشنق</TabsTrigger>
          <TabsTrigger value="quiz">الاختبار</TabsTrigger>
          <TabsTrigger value="timeChallenge">تحدي الوقت</TabsTrigger>
        </TabsList>

        {Object.entries(achievements).map(([key, achievementList]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <div className="space-y-4">
              {achievementList.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`p-4 ${achievement.completed ? "bg-green-50 border-green-200" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        achievement.completed ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-right">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground text-right">{achievement.description}</p>
                        </div>
                        {achievement.completed && (
                          <Badge variant="outline" className="ml-2 bg-green-100 text-green-800 border-green-300">
                            مكتمل
                          </Badge>
                        )}
                      </div>

                      {!achievement.completed && (
                        <div className="mt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">التقدم</span>
                            <span>
                              {achievement.progress} / {achievement.target}
                            </span>
                          </div>
                          <Progress value={(achievement.progress / achievement.target) * 100} className="h-2" />
                        </div>
                      )}

                      <div className="mt-2 text-sm flex justify-between items-center">
                        <Badge variant="outline" className="text-blue-600">
                          {achievement.reward}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </GameLayout>
  )
}

