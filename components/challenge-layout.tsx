import type React from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ChallengeBreadcrumbProps {
  type: "daily" | "weekly" | "community" | "achievement";
  number: number;
}

const ChallengeBreadcrumb = ({ type, number }: ChallengeBreadcrumbProps) => {
  const getIcon = () => {
    switch (type) {
      case "daily":
        return <Calendar className="h-5 w-5 text-amber-500" />;
      case "weekly":
        return <Calendar className="h-5 w-5 text-emerald-500" />;
      case "community":
        return <Users className="h-5 w-5 text-blue-500" />;
      case "achievement":
        return <Trophy className="h-5 w-5 text-purple-500" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "daily":
        return "التحدي اليومي";
      case "weekly":
        return "التحدي الأسبوعي";
      case "community":
        return "تحدي المجتمع";
      case "achievement":
        return "الإنجاز";
    }
  };

  const getFrenchTitle = () => {
    switch (type) {
      case "daily":
        return "Défi Quotidien";
      case "weekly":
        return "Défi Hebdomadaire";
      case "community":
        return "Défi Communautaire";
      case "achievement":
        return "Réalisation";
    }
  };

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {getIcon()}
      <span dir="rtl">
        {getTitle()} {number}
      </span>
      <span className="text-gray-500">
        ({getFrenchTitle()} {number})
      </span>
    </div>
  );
};

interface ChallengeLayoutProps {
  children: React.ReactNode;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  type: "daily" | "weekly" | "community" | "achievement";
  number: number;
  progress?: number;
  xpReward: number;
  difficulty: "easy" | "medium" | "hard";
}

export default function ChallengeLayout({
  children,
  title,
  arabicTitle,
  description,
  arabicDescription,
  type,
  number,
  progress = 0,
  xpReward,
  difficulty,
}: ChallengeLayoutProps) {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "text-green-500";
      case "medium":
        return "text-amber-500";
      case "hard":
        return "text-red-500";
    }
  };

  const getDifficultyArabic = () => {
    switch (difficulty) {
      case "easy":
        return "سهل";
      case "medium":
        return "متوسط";
      case "hard":
        return "صعب";
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "daily":
        return "bg-amber-50 border-amber-200";
      case "weekly":
        return "bg-emerald-50 border-emerald-200";
      case "community":
        return "bg-blue-50 border-blue-200";
      case "achievement":
        return "bg-purple-50 border-purple-200";
    }
  };

  return (
    <div className="container max-w-4xl py-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/challenges">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>العودة إلى التحديات</span>
          </Button>
        </Link>
        <ChallengeBreadcrumb type={type} number={number} />
      </div>

      <Card className={`p-6 border-2 ${getTypeColor()}`}>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <span className="text-xl font-bold" dir="rtl">
                  {arabicTitle}
                </span>
              </div>
              <div className="flex flex-col mt-1">
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-600" dir="rtl">
                  {arabicDescription}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border shadow-sm">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{xpReward} XP</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">الصعوبة:</span>
              <span className={`font-medium ${getDifficultyColor()}`}>
                {getDifficultyArabic()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">التقدم:</span>
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-6">{children}</div>
    </div>
  );
}
